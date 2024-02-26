import { GUID } from "../abstracts/GuidModel";
import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

 export interface CreateCommentSubCommentRequest extends CreateRequestModel{
    studentLectureCommentId: GUID | string;
    studentId: GUID | string;
    subComment: string;

}

 export interface UpdateContentCategoryRequest extends UpdateRequestModel{
    useLectureCommentId: GUID | string;
    studentLectureCommentId: GUID | string;
    studentId: GUID | string;
    subComment: string;
}