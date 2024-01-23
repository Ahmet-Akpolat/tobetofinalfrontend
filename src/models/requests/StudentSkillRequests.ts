import { CreateRequestModel, UpdateRequestModel } from "../abstracts/ResponseAbstracts";
import { GUID } from "../abstracts/GuidModel";

export interface CreateStudentSkillRequest extends CreateRequestModel {
    studentId: GUID | string;
    skillId: GUID | string;
}

export interface UpdateStudentSkillRequest extends UpdateRequestModel {
    studentId: GUID | string;
    skillId: GUID | string;
}