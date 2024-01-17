import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";
import { ContentResponse } from "./ContentResponses";


 export interface CourseResponse extends SingleResponseModel{
   id:GUID|string;
   name:string;
   contents?:ContentResponse[];
}

 export interface GetListCourseResponse extends GetAllModel<CourseResponse>{
}

 export interface CreatedCourseResponse extends CreatedResponseModel{
    id:GUID|string;
    name:string;
}

 export interface UpdatedCourseResponse extends UpdatedResponseModel{
   id:string|string;
   name:string;
}
 