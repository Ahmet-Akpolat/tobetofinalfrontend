import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface ManufacturerResponse extends SingleResponseModel {
    id : GUID | string;
    name : string;
}

export interface GetListManufacturerResponse extends GetAllModel<ManufacturerResponse> {}

export interface CreatedManufacturerResponse extends CreatedResponseModel {
    id : GUID | string;
    name : string;
}

export interface UpdatedManufacturerResponse extends UpdatedResponseModel {
    id : GUID | string;
    name : string;
}