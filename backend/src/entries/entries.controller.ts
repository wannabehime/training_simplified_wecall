import { EntriesService } from './entries.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { EntryDto } from './dto/entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';
import { Entry } from '@prisma/client';
import { LineService } from '../line/line.service';
import { format } from 'date-fns';

@Controller('entries')
export class EntriesController {
  constructor(
    private entriesService: EntriesService,
    private lineService: LineService,
  ) {}

  @Get(':id')
  async getEntry(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    const returnedData = await this.entriesService.getEntry(id);
    if (returnedData === null) {
      throw new NotFoundException(`Entry with ID ${id} not found`);
    }
    return returnedData;
  }

  @Post()
  async addEntry(
    @Body('entry') entry: EntryDto,
    @Body('idToken') idToken: string,
    @Body('clientId') clientId: string,
  ): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    const userId = await this.lineService.getUserId(idToken, clientId);
    await this.lineService.sendEntryCompletionMessage(userId, entry);
    return await this.entriesService.addEntry(entry);
  }

  @Patch(':id')
  async updateEntry(
    @Param('id', ParseIntPipe) id: number,
    @Body('entry') entry: UpdateEntryDto,
    @Body('idToken') idToken: string,
    @Body('clientId') clientId: string,
  ): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    const returnedData = await this.entriesService.getEntry(id);
    if (returnedData === null) {
      throw new NotFoundException(`Entry with ID ${id} not found`);
    }
    const updateEntry = {
      ...returnedData,
      ...entry,
      birthday: format(returnedData.birthday, 'yyyy-MM-dd'),
      // isAccompanied: returnedData.isAccompanied === true ? 'あり' : 'なし',
      // visitDay: format(returnedData.visitDay, 'yyyy-MM-dd'),
    };
    const userId = await this.lineService.getUserId(idToken, clientId);
    await this.lineService.sendEntryChangeCompletionMessage(
      userId,
      updateEntry,
    );
    return await this.entriesService.updateEntry(id, entry);
  }

  @Delete(':id')
  async deleteEntry(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    const returnedData = await this.entriesService.getEntry(id);
    if (returnedData === null) {
      throw new NotFoundException(`Entry with ID ${id} not found`);
    }
    return await this.entriesService.deleteEntry(id);
  }
}
