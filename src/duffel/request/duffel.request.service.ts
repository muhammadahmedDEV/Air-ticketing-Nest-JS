import { DuffelService } from '../duffel.service';
import { CreateOfferRequest, ListOffersParams } from '@duffel/api';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class DuffelRequestService extends DuffelService {
  async createRequest(payload: CreateOfferRequest) {
    return await this.duffelApi.offerRequests
      .create({ ...payload, return_offers: false })
      .catch((e) => {
        throw new BadRequestException(e.errors);
      });
  }

  async listRequest({ offer_request_id, ...params }: ListOffersParams) {
    return this.duffelApi.offers
      .list({ offer_request_id, ...params })
      .catch((e) => {
        throw new BadRequestException(e.errors);
      });
  }

  async getOffer(offerId, returnAvailableServices = false) {
    return this.duffelApi.offers
      .get(offerId, {
        return_available_services: returnAvailableServices,
      })
      .catch((e) => {
        throw new BadRequestException(e.errors);
      });
  }
}
