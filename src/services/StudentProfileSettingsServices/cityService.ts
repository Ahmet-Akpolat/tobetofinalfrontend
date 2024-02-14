import {
  CreateCityRequest,
  UpdateCityRequest,
} from "../../models/requests/CityRequests";
import {
  CityResponse,
  CreatedCityResponse,
  GetListCityResponse,
  UpdatedCityResponse,
} from "../../models/responses/CityResponses";
import axiosInstance from "../../utils/axiosInterceptors";
import { BaseService } from "../baseService";

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

  async getAllDistricts() {
    const response = await axiosInstance.get<any>(
      "Districts/?PageIndex=0&PageSize=999"
    );
    return response.data.items;
  }
}

export default new CityService();
