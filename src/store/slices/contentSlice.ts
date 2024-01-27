import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    content: {
        id: null,
        name: null,
        description: null,
        videUrl: null,
        duration: null,
        subTypeName: null,
        languageName: null,
        manufacturerName: null,
        instructors: null,
        contentCategoryName: null,
    }
}


export const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload
        },
        clearContent: (state) => {
            state.content = initialState.content
        }
    }
})

export const { setContent, clearContent } = contentSlice.actions
export default contentSlice.reducer
export const selectContent = (state:any) => state.content.content
