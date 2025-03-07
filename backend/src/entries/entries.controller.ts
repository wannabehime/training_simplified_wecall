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
  UnauthorizedException,
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
    const response = await this.lineService.getProfile(idToken, clientId);
    if ('sub' in response) {
      await this.lineService.sendMessage({
        userId: response.sub,
        entry,
        messageType: 'add',
      });
    } else {
      throw new UnauthorizedException('Failed in getting userID');
    }

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

    const response = await this.lineService.getProfile(idToken, clientId);
    if ('sub' in response) {
      const updatedEntry = {
        ...returnedData,
        ...entry,
        birthday: format(returnedData.birthday, 'yyyy-MM-dd'),
      };
      await this.lineService.sendMessage({
        userId: response.sub,
        entry: updatedEntry,
        messageType: 'change',
      });
    } else {
      throw new UnauthorizedException('Failed in getting userID');
    }
    return await this.entriesService.updateEntry(id, entry);
  }

  @Delete(':id')
  async deleteEntry(
    @Param('id', ParseIntPipe) id: number,
    @Body('idToken') idToken: string,
    @Body('clientId') clientId: string,
  ): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    const returnedData = await this.entriesService.getEntry(id);
    if (returnedData === null) {
      throw new NotFoundException(`Entry with ID ${id} not found`);
    }

    const response = await this.lineService.getProfile(idToken, clientId);
    if ('sub' in response) {
      await this.lineService.sendMessage({
        userId: response.sub,
        messageType: 'cancel',
      });
    } else {
      throw new UnauthorizedException('Failed in getting userID');
    }
    return await this.entriesService.deleteEntry(id);
  }
}
