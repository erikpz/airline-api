import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateDestinationDto } from 'src/dto/create-destination.dto';
import { Destination } from 'src/interfaces/destination.interface';
import { DestinationRepository } from 'src/repositories/destination.repository';

@Injectable()
export class DestinationService {
  constructor(private destinationRepository: DestinationRepository) {}

  async getAllDestination(): Promise<Destination[]> {
    const destinations = await this.destinationRepository.getAllDestinations();
    if (!destinations) throw new NotFoundException();
    return destinations;
  }

  async createDestination(
    createDestinationDto: CreateDestinationDto,
  ): Promise<Destination> {
    const destinationCreated =
      await this.destinationRepository.createDestination(createDestinationDto);
    if (!destinationCreated) throw new InternalServerErrorException();
    return destinationCreated;
  }
}
