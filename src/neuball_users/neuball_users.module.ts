import { Module } from '@nestjs/common';
import { NeuballUsersService } from './neuball_users.service';
import { NeuballUsersController } from './neuball_users.controller';
import { QueryService } from './users.query';

@Module({
  controllers: [NeuballUsersController],
  providers: [NeuballUsersService,QueryService],
})
export class NeuballUsersModule {}
