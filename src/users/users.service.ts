import {Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "../roles/roles.service";

@Injectable()
export class UsersService {

  constructor(@InjectModel(Users) private userRepository: typeof Users,
              private roleService: RolesService) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue("USER");
    await user.$set('roles', [role.id]);
    return user;
  }

  async getAllUsers() {
    return await this.userRepository.findAll({include: {all: true}});
  }
}