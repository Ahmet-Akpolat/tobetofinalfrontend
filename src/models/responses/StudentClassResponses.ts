import { ExamResponse } from './ExamResponses';
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";
import { GUID } from '../abstracts/GuidModel';
import { StudentResponse } from './StudentResponses';
import { AnnouncementResponse } from './AnnouncementResponses';
import { SurveyResponse } from './SurveyResponses';
import { LectureResponse } from './LectureResponses';


export interface StudentClassResponse extends SingleResponseModel{
    id: GUID | string;
    name: string;
    exams?: ExamResponse[];
    students?: StudentResponse[];
    announcements?: AnnouncementResponse[];
    surveys?: SurveyResponse[];
    lectures?: LectureResponse[];
} 
export interface GetListStudentClassResponse extends GetAllModel<StudentClassResponse>{}
export interface CreatedStudentClassResponse extends CreatedResponseModel{
    id: GUID | string;
    name: string;
}
export interface UpdatedStudentClassResponse extends UpdatedResponseModel{
    id: GUID | string;
    name: string;
}