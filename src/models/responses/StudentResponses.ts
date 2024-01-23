import { SkillResponse } from './SkillResponses';
import { LanguageLevelResponse } from './LanguageLevelResponses';
import { SocialMediaResponse } from './SocialMediaResponses';

import { GUID } from "../abstracts/GuidModel";
import { CreatedResponseModel, GetAllModel, SingleResponseModel, UpdatedResponseModel } from "../abstracts/ResponseAbstracts";
import { StudentClassResponse } from './StudentClassResponses';



 export interface StudentResponse extends SingleResponseModel{
    id: GUID| string;
    cityName: string;
    districtName: string;
    nationalIdentity: string;
    phone: string;
    birthDate: string;
    addressDetail: string;
    description: string;
    country: string;
    socialMedias: SocialMediaResponse[] | null;
    certificates:  null;//GetListCertificateListItemDto[] |
    languageLevels: LanguageLevelResponse[] | null;
    skills: SkillResponse[] | null;
    appeals:  null;//GetListAppealListItemDto[] |
    studentEducations: null;//GetListStudentEducationListItemDto[] | 
    studentExperiences:  null;//GetListStudentExperienceListItemDto[] |
    studentClasses: StudentClassResponse[] | null;
    firstName:string; 
    lastName:string; 
    email:string;
}

 export interface GetListStudentResponse extends GetAllModel<StudentResponse>{
}

 export interface CreatedStudentResponse extends CreatedResponseModel{
    id: GUID| string;
    userId: number;
    cityId: GUID| string | null;
    districtId: GUID| string | null;
    nationalIdentity: string | null;
    phone: string | null;
    birthDate: string | null;
    addressDetail: string | null;
    description: string | null;
    profilePhotoPath: string | null;
    country: string | null;
}

 export interface UpdatedStudentResponse extends UpdatedResponseModel{
    id: GUID| string;
    userId: number;
    cityId: GUID| string | null;
    districtId: GUID| string | null;
    nationalIdentity: string | null;
    phone: string | null;
    birthDate: string | null;
    addressDetail: string | null;
    description: string | null;
    profilePhotoPath: string | null;
    country: string | null;
}
