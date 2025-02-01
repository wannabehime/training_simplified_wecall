import { IsNotEmpty, IsBoolean, IsString } from 'class-validator';

export class UpdateEntryDto {
  @IsNotEmpty()
  @IsBoolean()
  isAccompanied: boolean;

  @IsNotEmpty()
  @IsString()
  birthDay: string;

  @IsNotEmpty()
  @IsString()
  visitDate: string;
}
