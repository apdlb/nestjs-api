import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  readonly nick: string;

  @IsNotEmpty()
  readonly message: string;
}
