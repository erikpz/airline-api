import { Module } from '@nestjs/common';
import { DestinationRepository } from 'src/repositories/destination.repository';
import { DestinationController } from './destination.controller';
import { DestinationService } from './destination.service';

@Module({
  controllers: [DestinationController],
  providers: [DestinationService, DestinationRepository],
})
export class DestinationModule {}
