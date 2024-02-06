import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    refactoredData: [],
    individualAndTeamData: [],
    isRefactoring: false,
    isRefactoredData: false,
};


const dataSlice = createSlice({
    name: "data",
    initialState,

    reducers: {
        stateRefactoredData: (state, action) => {
           state.refactoredData = action.payload;
           state.isRefactoring = true;  
        },

        stateRefactoredProjects: (state, action) => {
            state.individualAndTeamData = action.payload;
            state.isRefactoredData = true;  
        }
    },


    extraReducers: builder => {

    }
});


export const dataReducer = dataSlice.reducer;



export const { 
    stateRefactoredData,
    stateRefactoredProjects,

} = dataSlice.actions;