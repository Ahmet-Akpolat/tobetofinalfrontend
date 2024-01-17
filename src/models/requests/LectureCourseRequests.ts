import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";


export interface  CreateLectureCourseRequest extends CreateRequestModel{
    courseId:GUID|string;
    lectureId:GUID|string;
  }

  export interface  UpdateLectureCourseRequest extends UpdateRequestModel{
    courseId:GUID|string;
    lectureId:GUID|string;
  }