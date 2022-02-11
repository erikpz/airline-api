import * as mongo from 'mongodb';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectDb } from 'nest-mongodb';
import { Destination } from 'src/interfaces/destination.interface';
import { CreateDestinationDto } from 'src/dto/create-destination.dto';

@Injectable()
export class DestinationRepository {
  private readonly collection: mongo.Collection;

  constructor(@InjectDb() private readonly db: mongo.Db) {
    this.collection = this.db.collection('destination');
  }

  async getAllDestinations(): Promise<Destination[]> {
    try {
      const result = await this.collection.find({}).toArray();
      return result as any;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async createDestination(user: CreateDestinationDto): Promise<Destination> {
    try {
      const result = await this.collection.insertOne(user);
      if (!result.acknowledged) {
        return null;
      }
      const newDestination = { _id: result.insertedId, ...user };
      return newDestination;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }
}
