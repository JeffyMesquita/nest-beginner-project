import { Injectable } from '@nestjs/common';
import { IUserDTO } from 'src/dto/user.dto';

@Injectable()
export class InMemoryUsersRepository {
  private users: IUserDTO[] = [];

  create(user: IUserDTO): void {
    this.users.push(user);
  }

  findAllUsers(): IUserDTO[] {
    return this.users;
  }

  findUserById(id: string) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  delete(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users.splice(userIndex, 1);
  }
}
