import { Duffel } from '@duffel/api';

export class DuffelService {
  protected readonly duffelApi: Duffel = null;
  constructor() {
    this.duffelApi = new Duffel({
      token: process.env.DUFFEL_ACCESS_TOKEN,
    });
  }
}
