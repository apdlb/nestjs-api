import { IsNotEmpty } from 'class-validator';

export class CreateEntityDto {
  @IsNotEmpty()
  readonly nick: string;

  @IsNotEmpty()
  readonly entity: string;
}
