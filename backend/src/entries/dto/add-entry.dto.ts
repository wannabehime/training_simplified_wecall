import { IsString, IsNotEmpty, IsIn } from 'class-validator';

export class AddEntryDto {
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
  birthday: string;

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
  @IsString()
  @IsIn(['あり', 'なし'])
  isAccompanied: string;

  @IsNotEmpty()
  @IsString()
  visitDay: string;

  @IsNotEmpty()
  @IsString()
  visitTime: string;
}
