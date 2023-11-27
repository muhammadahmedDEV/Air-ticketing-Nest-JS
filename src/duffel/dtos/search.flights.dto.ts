import { Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsString,
  MinLength,
} from 'class-validator';

class SearchFlightSlicesDto {
  @Expose()
  @IsString()
  @IsDefined()
  origin: string;
  @Expose()
  @IsString()
  @IsDefined()
  destination: string;
  @Expose()
  @IsString()
  @IsDefined()
  departure_date: string;
}

// class Passengers {
//   @Expose()
//   @IsString()
//   @IsDefined()
//   type: string;
// }

export class SearchFlightsDto {
  @Expose()
  @Type(() => SearchFlightSlicesDto)
  slices: SearchFlightSlicesDto[];
  @MinLength(1)
  @IsArray()
  @IsDefined()
  passengers: any[];
  @Expose()
  @IsString()
  @IsDefined()
  cabin_class: string;
  @Expose()
  @IsDefined()
  @IsBoolean()
  return_offers: boolean;
}
