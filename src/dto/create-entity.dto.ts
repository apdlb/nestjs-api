import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

import { CreateEntityInput } from '../graphql';

export class CreateEntityDto extends CreateEntityInput {
  @IsNotEmpty()
  field1: string;

  @IsNumber()
  @IsOptional()
  field2: number;

  @IsBoolean()
  @IsOptional()
  field3: boolean;
}
