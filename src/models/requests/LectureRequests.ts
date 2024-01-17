import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface  CreateLectureRequest extends CreateRequestModel{
    name: string;
    categoryId: GUID|string;
    imageUrl: string;
    estimatedDuration: number;
    manufacturerId: GUID|string;
    startDate: Date;
    endDate: Date;
  }

  export interface  UpdateLectureRequest extends UpdateRequestModel{
    name: string;
    categoryId: GUID|string;
    imageUrl: string;
    estimatedDuration: number;
    manufacturerId: GUID|string;
    startDate: Date;
    endDate: Date;
  }
  
  
  
  