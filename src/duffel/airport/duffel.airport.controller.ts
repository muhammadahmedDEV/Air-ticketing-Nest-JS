import { Controller, Get, Query } from '@nestjs/common';
import { DuffelAirportService } from './duffel.airport.service';

@Controller('duffel/airport')
export class DuffelAirportController {
  constructor(private readonly airportService: DuffelAirportService) {}

  @Get('list')
  public getPaginatedAirports(
    @Query('limit') limit: number,
    @Query('next') next: string,
  ) {
    return this.airportService.getPaginatedAirports(limit, next);
  }
}
