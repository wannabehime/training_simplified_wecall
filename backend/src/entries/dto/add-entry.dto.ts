import { IsString, IsNotEmpty } from 'class-validator';
import { BaseEntryDto } from './base-entry-dto';

export class AddEntryDto extends BaseEntryDto {
  @IsNotEmpty()
  @IsString()
  birthDay: string;

  @IsNotEmpty()
  @IsString()
  visitDate: string;
}
