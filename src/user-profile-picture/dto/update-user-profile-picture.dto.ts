import { PartialType } from '@nestjs/mapped-types';
import { CreateUserProfilePictureDto } from './create-user-profile-picture.dto';

export class UpdateUserProfilePictureDto extends PartialType(
  CreateUserProfilePictureDto,
) {}
