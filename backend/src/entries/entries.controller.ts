import { EntriesService } from './entries.service';
import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { EntryDto } from './dto/entry.dto';

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
}
