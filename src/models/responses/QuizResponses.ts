import { GetAllModel } from "../abstracts/ResponseAbstracts";

export interface GetListQuizListItemDto extends GetAllModel<GetByIdQuizResponse>{
    
}
export interface GetByIdQuizResponse {
    id:number;
    name: string;
    description: string;
    duration: number;
    quizQuestionCount: number;
}