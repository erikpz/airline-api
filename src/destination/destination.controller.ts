import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDestinationDto } from 'src/dto/create-destination.dto';
import { DestinationService } from './destination.service';

@Controller('destination')
export class DestinationController {
  constructor(private destinationService: DestinationService) {}
  @Get()
  getUsers() {
    return this.destinationService.getAllDestination();
  }
  @Post()
  createUser(@Body() createDestinationDto: CreateDestinationDto) {
    return this.destinationService.createDestination(createDestinationDto);
  }
}
