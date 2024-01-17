import { GUID } from "../abstracts/GuidModel";
import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateCourseContentRequest extends CreateRequestModel{
    courseId:GUID|string;
    contentId:GUID|string;
}

 export interface UpdateCourseContentRequest extends UpdateRequestModel{
    courseId:GUID|string;
    contentId:GUID|string;
}
