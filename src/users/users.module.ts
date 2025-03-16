import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { InMemoryUsersRepository } from './inmemory.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, InMemoryUsersRepository],
})
export class UsersModule {}
