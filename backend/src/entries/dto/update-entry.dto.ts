import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class UpdateEntryDto {
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
