import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from "./roles.model";
import { Users } from "../users/users.model";
import { UserRoles } from "./user-roles.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role, Users, UserRoles])
  ],
  exports: [RolesService]
})
export class RolesModule {}
