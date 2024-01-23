import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel"

export interface CreateContentInstructorRequest extends CreateRequestModel{
    contentId:GUID|string;
    instructorId:GUID|string;
}   
export interface UpdateContentInstructorRequest extends UpdateRequestModel{
    contentId:GUID|string;
    instructorId:GUID|string;
}   