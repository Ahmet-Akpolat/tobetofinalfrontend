import { CreateRequestModel, UpdateRequestModel } from '../abstracts/ResponseAbstracts';

export interface CreateLectureFavouriteRequest extends CreateRequestModel{
    isFavourited: boolean;
    studentId: string;
    lectureId: string;
}

export interface UpdateLectureFavouriteRequest extends UpdateRequestModel{
    isFavourited: boolean;
    studentId: string;
    lectureId: string;
}