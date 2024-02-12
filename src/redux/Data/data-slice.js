import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    refactoredData: [],
    individualAndTeamData: [],
    portfolioRefactoredData: [],
    portfolioData:[],
    isRefactoring: false,
    isRefactoredData: false,
    isPortfolioRefactoredData: false,
    isPortfolioData: false,
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
        },

        statePortfolioRefactoredData: (state, action) => {
            state.portfolioRefactoredData = action.payload;
            state.isPortfolioRefactoredData = true;  
        },

        statePortfolioDataProjects: (state, action) => {
            state.portfolioData = action.payload;
            state.isPortfolioData = true;  
        }
    },


    // extraReducers: builder => {

    // }
});


export const dataReducer = dataSlice.reducer;



export const { 
    stateRefactoredData,
    stateRefactoredProjects,
    statePortfolioRefactoredData,
    statePortfolioDataProjects,

} = dataSlice.actions;