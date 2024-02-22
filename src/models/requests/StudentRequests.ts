import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentRequest extends CreateRequestModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UpdateStudentRequest extends UpdateRequestModel {
    userId: number;
    cityId: GUID | string | null;
    districtId: GUID | string | null;
    nationalIdentity: string | null;
    phone: string | null;
    birthDate: string | null;
    addressDetail: string | null;
    description: string | null;
    country: string | null;
    profilePhotoPathTemp: null,

}
