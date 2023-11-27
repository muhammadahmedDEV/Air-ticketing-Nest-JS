import { DuffelService } from '../duffel.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DuffelAirportService extends DuffelService {
  getPaginatedAirports(limit: number, next: string) {
    return this.duffelApi.airports.list({
      limit: limit ? limit : 50,
      after: next ? next : '',
    });
  }
}
