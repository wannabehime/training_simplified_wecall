import { Injectable } from '@nestjs/common';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';
import { EntryDto } from 'src/entries/dto/entry.dto';


@Injectable()
export class LineService {

  create(createLineDto: CreateLineDto) {
    return 'This action adds a new line';
  }

  findAll() {
    return `This action returns all line`;
  }

  findOne(id: number) {
    return `This action returns a #${id} line`;
  }

  update(id: number, updateLineDto: UpdateLineDto) {
    return `This action updates a #${id} line`;
  }

  remove(id: number) {
    return `This action removes a #${id} line`;
  }
}
