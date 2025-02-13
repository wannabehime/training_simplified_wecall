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
    console.log(returnedData);
    return returnedData;
  }

  @Post()
  async addEntry(
    @Body() entry: EntryDto,
  ): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    console.log(entry);
    console.log(typeof entry.visitDay);
    // entry.visitDay.getDate();
    lineService.sendEntryCompletionMessage(userID, entry);
    return await this.entriesService.addEntry(entry);
  }

  @Patch(':id')
  async updateEntry(
    @Param('id', ParseIntPipe) id: number,
    @Body() entry: UpdateEntryDto,
  ): Promise<Omit<Entry, 'id' | 'checkInTime'>> {
    const returnedData = await this.entriesService.getEntry(id);
    if (returnedData === null) {
      throw new NotFoundException(`Entry with ID ${id} not found`);
    }
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
