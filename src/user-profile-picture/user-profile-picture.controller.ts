import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { UserProfilePictureService } from './user-profile-picture.service';
import { CreateUserProfilePictureDto } from './dto/create-user-profile-picture.dto';
import { UpdateUserProfilePictureDto } from './dto/update-user-profile-picture.dto';
import { FileUploadService } from '../file_upload/file_upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user-profile-picture')
export class UserProfilePictureController {
  constructor(
    private readonly userProfilePictureService: UserProfilePictureService,
  ) {}

  // eslint-disable-next-line prettier/prettier
  @Post()
  create(@Body() createUserProfilePictureDto: CreateUserProfilePictureDto) {
    return this.userProfilePictureService.create(createUserProfilePictureDto);
  }

  @Get()
  findAll() {
    return this.userProfilePictureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProfilePictureService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserProfilePictureDto: UpdateUserProfilePictureDto,
  ) {
    return this.userProfilePictureService.update(
      +id,
      updateUserProfilePictureDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProfilePictureService.remove(+id);
  }

  @Post('uploadPicture')
  @UseInterceptors(
    FileInterceptor('Picture', {
      storage: new FileUploadService().getMulterOptions('./UserProfilePicture').storage,
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is required!');
    }

    return {
      message: 'Picture uploaded successfully!',
      filePath: `/UserProfilePicture/${file.filename}`,
    };
  }
}
