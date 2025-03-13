import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from '../file_upload/file_upload.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('addUser')
  create(@Body() createUserDto: CreateUserDto) {
    return {
      message: 'User data received successfully!',
      data: createUserDto,
    };
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      message: 'User data Updated successfully!',
      data: updateUserDto,
    };
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  // @Post('upload')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     storage: diskStorage({
  //       destination: './usersdetail', // Folder where files will be saved
  //       filename: (req, file, callback) => {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const fileExt = extname(file.originalname);
  //         const filename = `${file.fieldname}-${uniqueSuffix}${fileExt}`;
  //         callback(null, filename);
  //       },
  //     }),
  //   }),
  // )
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   return {
  //     message: 'File uploaded successfully!',
  //     filePath: `/usersdetail/${file.filename}`,
  //   };
  // }
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: new FileUploadService().getMulterOptions('./usersdetail').storage,
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is required!');
    }

    return {
      message: 'File uploaded successfully!',
      filePath: `/usersdetail/${file.filename}`,
    };
  }
}



