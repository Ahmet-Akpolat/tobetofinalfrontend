import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    student: {
        id: null,
        cityName: null,
        districtName: null,
        nationalIdentity: null,
        phone: null,
        birthDate: null,
        addressDetail: null,
        description: null,
        country: null,
        socialMedias: null,
        certificates: null,
        languageLevels: null,
        skills: null,
        studentEducations: null,
        studentExperiences: null,
        studentClasses: null,
        firstName: null, 
        lastName: null, 
        email: null,
      }
   
};

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    setStudent: (state, action) => {
      state.student = action.payload;
    },
    clearStudent : (state) => {
      state.student = initialState.student
    },
  },
});

export const { setStudent, clearStudent } = studentSlice.actions;
export default studentSlice.reducer;
export const selectStudent = (state:any) => state.student.student;
export const selectIsStudentSet = (state:any) => !!state.student.student.id;