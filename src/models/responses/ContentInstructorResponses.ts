import { GUID } from "../abstracts/GuidModel";
import {
    SingleResponseModel,
    GetAllModel,
    CreatedResponseModel,
    UpdatedResponseModel,
} from "../abstracts/ResponseAbstracts";

export interface ContentInstructorResponse extends SingleResponseModel {
    id: GUID | string;
    contentId: GUID | string;
    instructorId: GUID | string;
}

export interface GetListContentInstructorResponse
    extends GetAllModel<ContentInstructorResponse> { }

export interface CreatedContentInstructorResponse extends CreatedResponseModel {
    id: GUID | string;
    contentId: GUID | string;
    instructorId: GUID | string;
}

export interface UpdatedContentInstructorResponse extends UpdatedResponseModel {
    id: GUID | string;
    contentId: GUID | string;
    instructorId: GUID | string;
}
