import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'email' })
  readonly email: string;
  @ApiProperty({ example: '12345678', description: 'password' })
  readonly password: string;
}