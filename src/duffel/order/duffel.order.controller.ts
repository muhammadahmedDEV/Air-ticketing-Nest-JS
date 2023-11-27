import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DuffelOrderService } from './duffel.order.service';
import { CreateOrder } from '@duffel/api';

@Controller('duffel/order')
export class DuffelOrderController {
  constructor(private readonly duffelOrderService: DuffelOrderService) {}

  @Post('create')
  createOrder(@Body() payload: CreateOrder) {
    return this.duffelOrderService.createOrder(payload);
  }

  @Get('get/:orderId')
  getOrderById(@Param('orderId') orderId: string) {
    return this.duffelOrderService.getOrderById(orderId);
  }
}
