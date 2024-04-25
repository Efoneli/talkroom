import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

//   @Post()
//   async create(@Body() createUserDto: CreateUserDto) {
//     try {
//       const user = await this.usersService.create(createUserDto);
      
//       return { message: 'User created successfully', user };
//     } catch (error) {
//       return { error: 'Failed to create user: ' + error.message, statusCode: 500 };
//     }
//   }
// }

//   @Post('login') // Add a new route for handling login requests
//   async login(@Body() loginData: LoginDto) {
//     return this.usersService.findByName(loginData.name);
// }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
