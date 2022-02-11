import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/interfaces/user.interface';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    const users = await this.userRepository.getAllUsers();
    if (!users) throw new NotFoundException();
    return users;
  }
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const userCreated = await this.userRepository.createUser(createUserDto);
    if (!userCreated) throw new InternalServerErrorException();
    return userCreated;
  }
}
