import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DuffelRequestService } from './duffel.request.service';
import { CreateOfferRequest, ListOffersParams } from '@duffel/api';

@Controller('duffel')
export class DuffelRequestController {
  constructor(private readonly duffelRequestsService: DuffelRequestService) {}

  @Post('requests/create')
  async createRequest(@Body() createOfferRequest: CreateOfferRequest) {
    return this.duffelRequestsService.createRequest(createOfferRequest);
  }

  @Post('offer/list/:offerId')
  async listRequest(
    @Param('offerId') offer_request_id: string,
    @Body() listOffersParams: ListOffersParams,
  ) {
    return this.duffelRequestsService.listRequest({
      offer_request_id,
      ...listOffersParams,
    });
  }

  @Get('offer/:offerId')
  getOffer(
    @Param('offerId') offerId: string,
    @Query('returnAvailableServices') returnAvailableServices: boolean,
  ) {
    return this.duffelRequestsService.getOffer(
      offerId,
      returnAvailableServices,
    );
  }
}
