import { Injectable } from '@nestjs/common';
import { CreateUserProfilePictureDto } from './dto/create-user-profile-picture.dto';
import { UpdateUserProfilePictureDto } from './dto/update-user-profile-picture.dto';

@Injectable()
export class UserProfilePictureService {
  create(createUserProfilePictureDto: CreateUserProfilePictureDto) {
    return 'This action adds a new userProfilePicture';
  }

  findAll() {
    return `This action returns all userProfilePicture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userProfilePicture`;
  }

  update(id: number, updateUserProfilePictureDto: UpdateUserProfilePictureDto) {
    return `This action updates a #${id} userProfilePicture`;
  }

  remove(id: number) {
    return `This action removes a #${id} userProfilePicture`;
  }
}
