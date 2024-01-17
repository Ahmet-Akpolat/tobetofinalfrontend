import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";
import { CourseResponse } from "./CourseResponses";

 export interface LectureResponse extends SingleResponseModel{
    id: GUID | string;
    name: string;
    categoryName: string;
    imageUrl: string;
    estimatedVideoDuration: number;
    manufacturerName: string;
    startDate: Date;
    endDate: Date;
    courses?: CourseResponse[];
}

 export interface GetListLectureResponse extends GetAllModel<LectureResponse>{
}

 export interface CreatedLectureResponse extends CreatedResponseModel{
    id: GUID | string;
    name: string;
    categoryId: GUID|string;
    imageUrl: string;
    estimatedDuration: number;
    manufacturerId: GUID|string;
    startDate: Date;
    endDate: Date;
}

 export interface UpdatedLectureResponse extends UpdatedResponseModel{
    id: GUID | string;
    name: string;
    categoryId: GUID|string;
    imageUrl: string;
    estimatedDuration: number;
    manufacturerId: GUID|string;
    startDate: Date;
    endDate: Date;
}
