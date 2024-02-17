import { CreateRequestModel } from "../abstracts/ResponseAbstracts";

export interface CreateStudentQuizOptionRequest extends CreateRequestModel {
    questionId:number;
    quizId:number;
    optionId?:number;
}