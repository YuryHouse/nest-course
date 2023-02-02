import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.com", description: "email" })
  @IsString({ message: "Have to be string" })
  @IsEmail({}, { message: "Incorrect email" })
  readonly email: string;
  @ApiProperty({ example: "12345678", description: "password" })
  @IsString({ message: "Have to be string" })
  @Length(4, 16, { message: "Your password length must be greater than 4 and less than 16" })
  readonly password: string;
}