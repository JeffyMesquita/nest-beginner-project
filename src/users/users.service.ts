import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { IUserDTO, IUserRequestDTO } from 'src/dto/user.dto';
import { InMemoryUsersRepository } from './inmemory.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: InMemoryUsersRepository) {}

  createUser(request: IUserRequestDTO) {
    const id = randomUUID();
    const user: IUserDTO = {
      id,
      name: request.name,
      email: request.email,
    };

    this.usersRepository.create(user);

    return this.usersRepository.findUserById(id);
  }

  getAllUsers() {
    return this.usersRepository.findAllUsers();
  }

  getUserById(id: string) {
    return this.usersRepository.findUserById(id);
  }

  deleteUser(id: string) {
    return this.usersRepository.delete(id);
  }
}
