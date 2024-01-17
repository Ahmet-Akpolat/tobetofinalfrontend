import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentExamResponse extends SingleResponseModel {
    id : GUID | string;
    examId : GUID | string;
    studentId: GUID | string;
}

export interface GetListStudentExamResponse extends GetAllModel<StudentExamResponse> {}

export interface CreatedStudentExamResponse extends CreatedResponseModel {
    id : GUID | string;
    examId : GUID | string;
    studentId: GUID | string;
}

export interface UpdatedStudentExamResponse extends UpdatedResponseModel {
    id : GUID | string;
    examId : GUID | string;
    studentId: GUID | string;
}