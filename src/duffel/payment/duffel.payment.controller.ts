import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DuffelPaymentService } from './duffel.payment.service';
import { CreatePaymentIntent } from '@duffel/api';

@Controller('duffel/payment')
export class DuffelPaymentController {
  constructor(private readonly duffelPaymentService: DuffelPaymentService) {}

  @Post('create-intent')
  createPaymentIntent(@Body() createPaymentIntent: CreatePaymentIntent) {
    return this.duffelPaymentService.createPaymentIntent(createPaymentIntent);
  }

  @Get(':paymentIntentId')
  getPaymentIntentById(@Param('paymentIntentId') paymentIntentId: string) {
    return this.duffelPaymentService.getPaymentIntentById(paymentIntentId);
  }

  @Post('confirm/:paymentIntentId')
  confirmPaymentIntentById(@Param('paymentIntentId') paymentIntentId: string) {
    return this.duffelPaymentService.confirmPaymentIntentById(paymentIntentId);
  }
}
