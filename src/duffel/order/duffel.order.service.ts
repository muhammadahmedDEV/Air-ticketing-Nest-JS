import { BadRequestException, Injectable } from '@nestjs/common';
import { DuffelService } from '../duffel.service';
import { CreateOrder } from '@duffel/api';

@Injectable()
export class DuffelOrderService extends DuffelService {
  async getOrderById(orderId: string) {
    return this.duffelApi.orders.get(orderId).catch((e) => {
      throw new BadRequestException(e.errors);
    });
  }

  async createOrder(payload: CreateOrder) {
    return this.duffelApi.orders.create(payload).catch((e) => {
      throw new BadRequestException(e.errors);
    });
  }
}
