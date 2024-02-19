import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isEducationModal: false,
        isPortfolioModal: false,
        isContactModal: false,
        isSuccsess: true,
        aboutPictureData: {},
        portfolioModalData: null, 
    },

    reducers: {
        openModalEducation: (state) => {
            state.isEducationModal = true;
        },
        closeModalEducation: (state) => {
            state.isEducationModal = false;
        },
        openModalPortfolio: (state) => {
            state.isPortfolioModal = true;
        },
        closeModalPortfolio: (state) => {
            state.isPortfolioModal = false;
        },
        openModalContact: (state) => {
            state.isContactModal = true;
        },
        closeModalContact: (state) => {
            state.isContactModal = false;
        },
        updateAboutPictureData: (state, action) => {
            const { id, img_url, url } = action.payload;
            state.aboutPictureData = {id, img_url, url};
        },
        updatePortfolioModalData: (state, action) => {
            state.portfolioModalData = action.payload;
        },
        setSuccsessTrue: (state) => {
            state.isSuccsess = true;
        },
        setSuccsessFalse: (state) => {
            state.isSuccsess = false;
        },
    }
});


export const modalReducer = modalSlice.reducer;


export const {
    openModalEducation,
    closeModalEducation,
    openModalPortfolio,
    closeModalPortfolio,
    updateAboutPictureData,
    updatePortfolioModalData,
    openModalContact,
    closeModalContact,
    setSuccsessTrue,
    setSuccsessFalse,
} = modalSlice.actions;
