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
import { AddEntryDto } from './dto/add-entry.dto';
import { UpdateEntryDto } from './dto/update-entry.dto';

@Controller('entries')
export class EntriesController {
  constructor(private entriesService: EntriesService) {}

  @Get(':id')
  async getEntry(@Param('id', ParseIntPipe) id: number): Promise<EntryDto> {
    const returnedData = await this.entriesService.getEntry(id);
    if (returnedData === null) {
      throw new NotFoundException(`Entry with ID ${id} not found`);
    }
    return returnedData;
  }

  @Post()
  async addEntry(@Body() entry: AddEntryDto): Promise<EntryDto> {
    console.log('届いてる');
    return await this.entriesService.addEntry(entry);
  }

  @Patch(':id')
  async updateEntry(
    @Param('id', ParseIntPipe) id: number,
    @Body() entry: UpdateEntryDto,
  ): Promise<EntryDto> {
    return await this.entriesService.updateEntry(id, entry);
  }

  @Delete(':id')
  async deleteEntry(@Param('id', ParseIntPipe) id: number): Promise<EntryDto> {
    return await this.entriesService.deleteEntry(id);
  }
}
