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

const rootReducer = combineReducers({
    lecture: lectureSlice,
    appeal: appealSlice,
    auth: authSlice,
    student: studentSlice,
    announcement: announcementSlice,
    lectureDetail: lectureDetailSlice,
    content: contentSlice,
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