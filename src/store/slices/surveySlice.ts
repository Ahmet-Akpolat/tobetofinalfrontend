import { createSlice } from '@reduxjs/toolkit';

    const  initialState = {
    survey: {
        id: null,
        studentClassId: null,
        surveyId: null,
        surveyStartDate: null,
        surveyEndDate: null,
        surveyName: null,
        surveyUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdUg7nsA0u2OsI1CMm8UB77N5_ho_Zm1H3Bd9RJOfs1JpZSzA/viewform?usp=sf_link",
        surveyDescription: null
      }
  }


export const surveySlice = createSlice({
  name: 'lecture',
  initialState,
  reducers: {
    setSurvey: (state, action) => {
      state.survey = action.payload;
    },
    clearSurvey: (state) => {
        state.survey = initialState.survey;
    },
  },
});


export const { setSurvey, clearSurvey} = surveySlice.actions;
export default surveySlice.reducer;
export const selectSurvey = (state:any) => state.survey.survey;
