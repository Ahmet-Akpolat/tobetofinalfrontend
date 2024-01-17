
import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentExperienceRequest extends CreateRequestModel {
    studentId: GUID | string;
    companyName: string;
    sector: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    cityId: GUID | string;
}

export interface UpdateStudentExperienceRequest extends UpdateRequestModel {
    studentId: GUID | string;
    companyName: string;
    sector: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    cityId: GUID | string;
}