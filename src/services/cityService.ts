import {
  CreateCityRequest,
  UpdateCityRequest,
} from "../models/requests/CityRequests";
import {
  CityResponse,
  CreatedCityResponse,
  GetListCityResponse,
  UpdatedCityResponse,
} from "../models/responses/CityResponses";
import { BaseService } from "./baseService";

class CityService extends BaseService<
  GetListCityResponse,
  CityResponse,
  CreatedCityResponse,
  CreateCityRequest,
  UpdatedCityResponse,
  UpdateCityRequest
> {
  constructor() {
    super();
    this.apiUrl = "Cities";
  }
}

export default new CityService();
