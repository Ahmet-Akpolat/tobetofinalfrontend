import { SingleResponseModel, GetAllModel, CreatedResponseModel, UpdatedResponseModel } from '../abstracts/ResponseAbstracts';
import { GUID } from '../abstracts/GuidModel';

export interface StudentSkillResponse extends SingleResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    skillId: GUID | string;
    skillName: string;
}

export interface GetListStudentSkillResponse extends GetAllModel<StudentSkillResponse> {}

export interface CreatedStudentSkillResponse extends CreatedResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    skillId: GUID | string;
}

export interface UpdatedStudentSkillResponse extends UpdatedResponseModel {
    id: GUID | string;
    studentId: GUID | string;
    skillId: GUID | string;
}
