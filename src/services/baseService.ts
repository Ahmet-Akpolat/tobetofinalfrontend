import axios, { AxiosResponse } from "axios";

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

  async getAll(token:any) {
    const response = await axios.get<any>(`${this.apiUrl}?PageIndex=0&PageSize=999`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.items;
}

  async getById(id: string) {
    const response = await axios.get<AxiosResponse<GetByIdType>>(`${this.apiUrl}/${id}`);
    return response.data; // Directly returning the data part of the response
  }

  add(request: AddRequestType): Promise<AxiosResponse<AddResponseType, any>> {
    return axios.post<AddResponseType>(this.apiUrl, request);
  }

  update(
    request: UpdateRequestType,
  ): Promise<AxiosResponse<UpdateResponseType, any>> {
    return axios.put<UpdateResponseType>(this.apiUrl, request);
  }

  delete(id: number) {
    return axios.delete(`${this.apiUrl}/${id}`);
  }

  async getByToken(token:any) {
    const response = await axios.get(`${this.apiUrl}/getByToken`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
}
}