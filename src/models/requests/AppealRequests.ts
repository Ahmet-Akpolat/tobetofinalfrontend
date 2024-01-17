import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateAppealRequest extends CreateRequestModel{
    name: string;
    startTime: string;
    endTime: string;
}

export interface UpdateAppealRequest extends UpdateRequestModel{
    name: string;
    startTime: string;
    endTime: string;
}
