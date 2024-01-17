import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentEducationRequest extends CreateRequestModel{
    studentId: GUID | string;
    educationStatus: string;
    schoolName: string;
    branch: string;
    isContinued: boolean;
    startDate: string;
    graduationDate: string;
}

export interface UpdateStudentEducationRequest extends UpdateRequestModel{
    studentId: GUID | string;
    educationStatus: string;
    schoolName: string;
    branch: string;
    isContinued: boolean;
    startDate: string;
    graduationDate: string;
}