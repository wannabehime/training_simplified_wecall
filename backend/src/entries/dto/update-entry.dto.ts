import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsDateString,
  Matches,
} from 'class-validator';

export class UpdateEntryDto {
  @IsNotEmpty()
  @IsBoolean()
  isAccompanied: boolean;

  @IsNotEmpty()
  @IsDateString()
  @Matches(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.?\d*Z?$/, {
    message: 'Date must be in ISO 8601 format (e.g., 2025-02-04T10:00:00Z)',
  })
  visitDay: string;

  @IsNotEmpty()
  @IsString()
  visitTime: string;
}
