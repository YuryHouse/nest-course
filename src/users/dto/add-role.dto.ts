import { IsNumber, IsString } from "class-validator";


export class AddRoleDto {
  @IsString({message: "Have to be a string"})
  readonly value: string;
  @IsNumber({}, {message: "Have to be a number"})
  readonly userId: number;
}