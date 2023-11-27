import { Module } from '@nestjs/common';
import { DuffelController } from './duffel.controller';
import { DuffelRequestService } from './request/duffel.request.service';
import { DuffelRequestController } from './request/duffel.request.controller';
import { DuffelPaymentController } from './payment/duffel.payment.controller';
import { DuffelPaymentService } from './payment/duffel.payment.service';
import { DuffelOrderController } from './order/duffel.order.controller';
import { DuffelOrderService } from './order/duffel.order.service';
import { DuffelAirportController } from './airport/duffel.airport.controller';
import { DuffelAirportService } from './airport/duffel.airport.service';

@Module({
  imports: [],
  controllers: [
    DuffelController,
    DuffelRequestController,
    DuffelPaymentController,
    DuffelOrderController,
    DuffelAirportController,
  ],
  providers: [
    DuffelRequestService,
    DuffelPaymentService,
    DuffelOrderService,
    DuffelAirportService,
  ],
})
export class DuffelModule {}
