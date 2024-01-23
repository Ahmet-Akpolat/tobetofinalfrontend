import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateClassLectureRequest extends CreateRequestModel{
    classId:GUID|string;
    lectureId:GUID|string;
}
export interface UpdateClassLectureRequest extends UpdateRequestModel{
    classId:GUID|string;
    lectureId:GUID|string;
}