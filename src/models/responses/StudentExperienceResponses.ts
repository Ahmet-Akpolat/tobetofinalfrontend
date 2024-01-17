import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentExperienceResponse extends SingleResponseModel {
    id:  GUID | string;
    studentId:  GUID | string;
    companyName: string;
    sector: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    cityName: string;
}

export interface GetListStudentExperienceResponse extends GetAllModel<StudentExperienceResponse> {}

export interface CreatedStudentExperienceResponse extends CreatedResponseModel {
    id : GUID | string;
    studentId:  GUID | string;
    companyName: string;
    sector: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    cityId: string;
}

export interface UpdatedStudentExperienceResponse extends UpdatedResponseModel {
    id : GUID | string;
    studentId:  GUID | string;
    companyName: string;
    sector: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    cityId: string;
}