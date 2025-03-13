import { Test, TestingModule } from '@nestjs/testing';
import { NeuballUsersController } from './neuball_users.controller';
import { NeuballUsersService } from './neuball_users.service';

describe('NeuballUsersController', () => {
  let controller: NeuballUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeuballUsersController],
      providers: [NeuballUsersService],
    }).compile();

    controller = module.get<NeuballUsersController>(NeuballUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
