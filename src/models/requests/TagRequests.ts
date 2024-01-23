import { CreateRequestModel, UpdateRequestModel} from '../abstracts/ResponseAbstracts';

 export interface UpdateTagRequest extends UpdateRequestModel{
   name:string;
}

export interface CreateTagRequest extends CreateRequestModel{
    name:string; 
}