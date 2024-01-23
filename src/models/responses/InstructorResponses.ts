import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";


 export interface InstructorResponse extends SingleResponseModel{
   id: GUID | string;
   firstName:string;
   lastName:string;
}

 export interface GetListInstructorResponse extends GetAllModel<InstructorResponse>{
}

 export interface CreatedInstructorResponse extends CreatedResponseModel{
   id: GUID | string;
    firstName:string;
   lastName:string;
}

 export interface UpdatedInstructorResponse extends UpdatedResponseModel{
   id: GUID | string;
   firstName:string;
   lastName:string;
}
