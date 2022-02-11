import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

class Schedule {
  @IsNotEmpty()
  @IsString()
  hour: string;
  @IsNotEmpty()
  @IsNumber()
  price: number;
}

class Flight {
  @IsNotEmpty()
  @IsIn([
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo',
  ])
  day: string;
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => Schedule)
  schedule: Schedule[];
}

export class CreateDestinationDto {
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  @ValidateNested({ each: true })
  @Type(() => Flight)
  flights: Flight[];
}
