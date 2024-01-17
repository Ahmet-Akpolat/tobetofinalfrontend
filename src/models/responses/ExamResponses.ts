import { GUID } from "../abstracts/GuidModel";
import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";

export interface ExamResponse extends SingleResponseModel{
   id: GUID | string;
   name:string; 
    isActive:boolean;
    examUrl:string;
}

export interface GetListExamResponse extends GetAllModel<ExamResponse>{
  
}

export interface CreatedExamResponse extends CreatedResponseModel{
    id: GUID | string;
    name:string; 
    isActive:boolean;
    examUrl:string;
}

export interface UpdatedExamResponse extends UpdatedResponseModel{
   id: GUID | string;
   name:string; 
   isActive:boolean;
   examUrl:string;

}