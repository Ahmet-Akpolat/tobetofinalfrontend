import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateLectureSpentTimeRequest  extends CreateRequestModel{
    studentId: GUID | string;
    lectureId: GUID | string;
    spentedTime: number;
}

export interface UpdateLectureSpentTimeRequest  extends UpdateRequestModel{  
    studentId: GUID | string;
    lectureId: GUID | string;
    spentedTime: number;
}