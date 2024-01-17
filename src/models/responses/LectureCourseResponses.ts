import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";
import { LectureResponse } from "./LectureResponses";

export interface LectureCourseResponse extends SingleResponseModel{
    id: GUID;
    courseId:GUID|string;
    lectureId:GUID|string;
   
}

 export interface GetListLectureCourseResponse extends GetAllModel<LectureResponse>{
}

 export interface CreatedLectureCourseResponse extends CreatedResponseModel{
    id: GUID;
    courseId:GUID|string;
    lectureId:GUID|string;
}

 export interface UpdatedLectureCourseResponse extends UpdatedResponseModel{
    id: GUID;
    courseId:GUID|string;
    lectureId:GUID|string;
}