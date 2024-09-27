import { createSlice} from '@reduxjs/toolkit';

export interface Profile {
    name:string,
    isHired:boolean,
    items: string[]
}

const initialState : Profile = {
    name : "",
    isHired : false,
    items:[]
}

const ProfileSlice = createSlice({
    name : "profile",
    initialState,
    reducers : {
        toggleHire : state => {
            state.isHired = !state.isHired;
        },
        setItems : (state, action) => {
            state.items = action.payload;
        },
        setName : (state, action) => {
            state.name = action.payload;
        }
    }
});

export const {
    toggleHire,
    setItems,
    setName
} = ProfileSlice.actions;

export default ProfileSlice.reducer;