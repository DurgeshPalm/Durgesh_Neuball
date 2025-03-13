import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NeuballUsersService } from './neuball_users.service';
import { CreateNeuballUserDto } from './dto/create-neuball_user.dto';
import { UpdateNeuballUserDto } from './dto/update-neuball_user.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Neuball Users')
@Controller('neuball-users')
export class NeuballUsersController {
  constructor(private readonly neuballUsersService: NeuballUsersService) {}


  @Post('addUser')
  @ApiOperation({ summary: 'Add a new user' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'John Doe' },
        email: { type: 'string', example: 'john.doe@example.com' },
      },
      required: ['name', 'email'],
    },
  })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @ApiResponse({ status: 500, description: 'Failed to create user' })
  create(@Body() body: { name: string; email: string }) {
    return this.neuballUsersService.createUser(body.name, body.email);
  }

  @Get('getAllUser')
  findAll() {
    return this.neuballUsersService.getAllUsers();
  }

  @Get('/getUserById:id')
  findOne(@Param('id') id: string) {
    return this.neuballUsersService.getUserById(Number(id));
  }

  @Patch('/updateUserById:id')
  update(@Param('id') id: string, @Body() body: { name: string; email: string }) {
    return this.neuballUsersService.updateUser(Number(id), body.name, body.email);
  }

  @Delete('/deleteUserById:id')
  remove(@Param('id') id: string) {
    return this.neuballUsersService.deleteUser(Number(id));
  }

}



