import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './slices/authSlice';
import studentSlice from './slices/studentSlice';
import appealSlice from './slices/appealSlice';
import announcementSlice from './slices/announcementSlice';
import lectureSlice from './slices/lectureSlice';
import lectureDetailSlice from './slices/lectureDetailSlice';
import contentSlice from './slices/contentSlice';
import examSlice from './slices/examSlice';
import loadingSlice from './slices/loadingSlice';
import surveySlice from './slices/surveySlice';

const rootReducer = combineReducers({
    lecture: lectureSlice,
    appeal: appealSlice,
    auth: authSlice,
    student: studentSlice,
    announcement: announcementSlice,
    lectureDetail: lectureDetailSlice,
    content: contentSlice,
    exams: examSlice,
    loading: loadingSlice,
    survey: surveySlice
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;