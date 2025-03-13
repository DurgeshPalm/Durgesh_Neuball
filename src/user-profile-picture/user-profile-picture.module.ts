import { Module } from '@nestjs/common';
import { UserProfilePictureService } from './user-profile-picture.service';
import { UserProfilePictureController } from './user-profile-picture.controller';

@Module({
  controllers: [UserProfilePictureController],
  providers: [UserProfilePictureService],
})
export class UserProfilePictureModule {}
