import { Exclude, Expose } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@Exclude()
export class CreateEntityDto {
  @Expose()
  @IsNotEmpty()
  readonly field1: string;

  @Expose()
  @IsNumber()
  @IsOptional()
  readonly field2?: number;

  @Expose()
  @IsBoolean()
  @IsOptional()
  readonly field3?: boolean;
}
