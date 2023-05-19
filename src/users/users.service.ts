import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { IsEmail, IsInt, Length, Min } from 'class-validator';

export class CreateUserInputModelType {
  @IsEmail()
  email: string;
  @Length(5, 10)
  name: string;
  @IsInt()
  @Min(0)
  childrenCount: number;
}

@Injectable()
export class UsersService {
  constructor(protected usersRepository: UsersRepository) {}
  findUsers(term: string) {
    return this.usersRepository.findUsers(term);
  }
}
