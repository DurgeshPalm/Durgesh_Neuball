import { Test, TestingModule } from '@nestjs/testing';
import { UserProfilePictureService } from './user-profile-picture.service';

describe('UserProfilePictureService', () => {
  let service: UserProfilePictureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProfilePictureService],
    }).compile();

    service = module.get<UserProfilePictureService>(UserProfilePictureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
