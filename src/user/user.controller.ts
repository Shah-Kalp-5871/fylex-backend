import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

@Post()
create(@Body() body: CreateUserDto) {
  return this.userService.createUser(body);
}

  @Get()
  findAll() {
    return this.userService.getUsers();
  }
}