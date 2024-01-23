import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentClassStudentResponse extends SingleResponseModel {
    id:  GUID | string;
    studentId:  GUID | string;
    studentClassId:  GUID | string;
}

export interface GetListStudentClassStudentResponse extends GetAllModel<StudentClassStudentResponse> {}

export interface CreatedStudentClassStudentResponse extends CreatedResponseModel {
    id:  GUID | string;
    studentId:  GUID | string;
    studentClassId:  GUID | string;
}

export interface UpdatedStudentClassStudentResponse extends UpdatedResponseModel {
    id:  GUID | string;
    studentId:  GUID | string;
    studentClassId:  GUID | string;
}