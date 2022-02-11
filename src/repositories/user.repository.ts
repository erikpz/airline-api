import * as mongo from 'mongodb';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectDb } from 'nest-mongodb';
import { ObjectId } from 'mongodb';
import { User } from 'src/interfaces/user.interface';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UserRepository {
  private readonly collection: mongo.Collection;

  constructor(@InjectDb() private readonly db: mongo.Db) {
    this.collection = this.db.collection('users');
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const result = await this.collection.find({}).toArray();
      return result as User[];
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async createUser(user: CreateUserDto): Promise<User> {
    try {
      const result = await this.collection.insertOne(user);
      if (!result.acknowledged) {
        return null;
      }
      const newUser = { _id: result.insertedId, ...user };
      return newUser;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
