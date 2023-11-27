import { BadRequestException, Injectable } from '@nestjs/common';
import { DuffelService } from '../duffel.service';
import { CreatePaymentIntent } from '@duffel/api';

@Injectable()
export class DuffelPaymentService extends DuffelService {
  async createPaymentIntent(createPaymentIntent: CreatePaymentIntent) {
    return this.duffelApi.paymentIntents
      .create(createPaymentIntent)
      .catch((e) => {
        throw new BadRequestException(e.errors);
      });
  }

  async getPaymentIntentById(paymentIntentId: string) {
    return this.duffelApi.paymentIntents.get(paymentIntentId).catch((e) => {
      throw new BadRequestException(e.errors);
    });
  }

  async confirmPaymentIntentById(paymentIntentId: string) {
    return this.duffelApi.paymentIntents.confirm(paymentIntentId).catch((e) => {
      throw new BadRequestException(e.errors);
    });
  }
}
