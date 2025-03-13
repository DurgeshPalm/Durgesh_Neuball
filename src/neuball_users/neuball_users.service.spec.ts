import { Test, TestingModule } from '@nestjs/testing';
import { NeuballUsersService } from './neuball_users.service';

describe('NeuballUsersService', () => {
  let service: NeuballUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeuballUsersService],
    }).compile();

    service = module.get<NeuballUsersService>(NeuballUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
