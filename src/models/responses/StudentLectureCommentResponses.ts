import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';
import { CommentSubCommentResponse } from './CommentSubCommentResponses';

export interface GetListByLectureIdStudentLectureCommentResponse {
    id: number;
    profilePhotoPath: string;
    studentId: string;
    firstName: string;
    lastName: string;
    comment: string;
    commentSubComments: CommentSubCommentResponse[] | null;
    isDeletable: boolean;
    createdDate: string;
}
