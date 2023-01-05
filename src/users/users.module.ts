import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "../roles/roles.model";
import { Users } from "./users.model";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UserRoles } from "../roles/user-roles.model";
import { RolesModule } from "../roles/roles.module";


@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([Users, Role, UserRoles]),
    RolesModule
  ],
  exports: [UsersService]
})
export class UsersModule {}
