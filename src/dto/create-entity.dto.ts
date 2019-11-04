import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateEntityDto {
  @IsNotEmpty()
  readonly field1: string;

  @IsNumber()
  @IsOptional()
  readonly field2: number;

  @IsBoolean()
  @IsOptional()
  readonly field3: boolean;
}
