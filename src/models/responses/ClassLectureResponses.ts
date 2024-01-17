import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";

export interface ClassLectureResponse extends SingleResponseModel{
    id: GUID | string;
    lectureId: string;
    studentClassId: string;
    studentClassName: string;
    lectureName: string;
    lectureCategoryName: string;
    lectureImageUrl: string;
    estimatedVideoDuration: number;
    lectureManufacturerName: string;
    startDate: string;
    endDate: string;
}

export interface GetListClassLectureResponse extends GetAllModel<ClassLectureResponse>{}

export interface CreatedClassLectureResponse extends CreatedResponseModel{
    id: GUID | string;
    lectureId: string;
    studentClassId: string;
}

export interface UpdatedClassLectureResponse extends UpdatedResponseModel{
    id: GUID | string;
    lectureId: string;
    studentClassId: string;
}
