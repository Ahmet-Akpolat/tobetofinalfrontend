import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface CommentSubCommentResponse {
    id: number;
    profilePhotoPath: string;
    studentId: GUID | string;
    firstName: string;
    lastName: string;
    subComment: string;
    studentLectureCommentId: number;
    isDeletable: boolean;
    createdDate: string;
}