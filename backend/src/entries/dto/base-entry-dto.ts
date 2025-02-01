import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class BaseEntryDto {
  @IsNotEmpty()
  @IsString()
  familyName: string;

  @IsNotEmpty()
  @IsString()
  personalName: string;

  @IsNotEmpty()
  @IsString()
  familyNameKana: string;

  @IsNotEmpty()
  @IsString()
  personalNameKana: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  prefecture: string;

  @IsNotEmpty()
  @IsString()
  tel: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsBoolean()
  isAccompanied: boolean;
}
