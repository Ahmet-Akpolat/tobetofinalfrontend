import { BaseService } from './baseService';
import { CreatedExamResponse, ExamResponse, GetListExamResponse, UpdatedExamResponse } from '../models/responses/ExamResponses';
import { CreateExamRequest, UpdateExamRequest } from '../models/requests/ExamRequests';

class ExamService extends BaseService<
  GetListExamResponse,
	ExamResponse,
	CreateExamRequest,
	CreatedExamResponse,
	UpdateExamRequest,
	UpdatedExamResponse
> {
  constructor() {
    super()
    this.apiUrl =  "ClassExams"
  }
}

export default new ExamService();
