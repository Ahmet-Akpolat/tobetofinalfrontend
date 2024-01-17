import { GUID } from './../abstracts/GuidModel';
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";

export interface ClassExamResponse extends SingleResponseModel {
    id: GUID | string;
    examId: GUID | string;
    studentClassId: GUID | string;
    examName: string;
    examIsActive: boolean;
    examExamUrl: string;
    studentClassName: string;
}

export interface GetListClassExamResponse extends GetAllModel<ClassExamResponse>{}

export interface CreatedClassExamResponse extends CreatedResponseModel{
    id: GUID | string;
    examId: GUID | string;
    studentClassId: GUID | string;
}

export interface UpdatedClassExamResponse extends UpdatedResponseModel{
    id: GUID | string;
    examId: GUID | string;
    studentClassId: GUID | string;
}