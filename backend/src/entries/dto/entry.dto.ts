import { IsNotEmpty, IsDate } from 'class-validator';
import { BaseEntryDto } from './base-entry-dto';

export class EntryDto extends BaseEntryDto {
  @IsNotEmpty()
  @IsDate()
  birthDay: Date;

  @IsNotEmpty()
  @IsDate()
  visitDate: Date;
}
