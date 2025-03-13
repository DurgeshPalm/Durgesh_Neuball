import { Test, TestingModule } from '@nestjs/testing';
import { UserProfilePictureController } from './user-profile-picture.controller';
import { UserProfilePictureService } from './user-profile-picture.service';

describe('UserProfilePictureController', () => {
  let controller: UserProfilePictureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserProfilePictureController],
      providers: [UserProfilePictureService],
    }).compile();

    controller = module.get<UserProfilePictureController>(
      UserProfilePictureController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
