import { AxiosResponse } from "axios";
import axiosInstance from "../utils/axiosInterceptors";

export class BaseService<
  GetAllType,
  GetByIdType,
  AddRequestType,
  AddResponseType,
  UpdateRequestType,
  UpdateResponseType,
> {
  public apiUrl: string;

  constructor() {
    this.apiUrl = "";
  }

  async getAll(PageIndex:number, PageSize:number) {
    const response = await axiosInstance.get<any>(`${this.apiUrl}?PageIndex=${PageIndex}&PageSize=${PageSize}`);
    return response.data.items;
}

  async getById(id: string) {
    const response = await axiosInstance.get<AxiosResponse<GetByIdType>>(`${this.apiUrl}/${id}`);
    return response.data; // Directly returning the data part of the response
  }

  add(request: AddRequestType): Promise<AxiosResponse<AddResponseType, any>> {
    return axiosInstance.post<AddResponseType>(this.apiUrl, request);
  }

  update(
    request: UpdateRequestType,
  ): Promise<AxiosResponse<UpdateResponseType, any>> {
    return axiosInstance.put<UpdateResponseType>(this.apiUrl, request);
  }

  delete(id: number) {
    return axiosInstance.delete(`${this.apiUrl}/${id}`);
  }

  async getByToken() {
    const response = await axiosInstance.get(`${this.apiUrl}/getByToken`);
    return response.data;
}
}