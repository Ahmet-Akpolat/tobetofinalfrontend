import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentEducationResponse extends SingleResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    educationStatus: string;
    schoolName: string;
    branch: string;
    isContinued: boolean;
    startDate: string;
    graduationDate: string;
}

export interface GetListStudentEducationResponse extends GetAllModel<StudentEducationResponse> {}

export interface CreatedStudentEducationResponse extends CreatedResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    educationStatus: string;
    schoolName: string;
    branch: string;
    isContinued: boolean;
    startDate: string;
    graduationDate: string;
}

export interface UpdatedStudentEducationResponse extends UpdatedResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    educationStatus: string;
    schoolName: string;
    branch: string;
    isContinued: boolean;
    startDate: string;
    graduationDate: string;
}