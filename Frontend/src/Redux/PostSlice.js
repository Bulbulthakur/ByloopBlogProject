import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: undefined
}
const PSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        postReducer: (state, action) => {
            state.value = action.payload
            }
    }
})

export const { postReducer } = PSlice.actions
export default PSlice.reducer