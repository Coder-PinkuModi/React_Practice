import {createSlice , PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
    value:number;
}

const initialState:CounterState={
    value:0,
};

const counterSlice=createSlice({
    name: 'counter',
    initialState,
    reducers:{
        //increment
        incremented(state){
            // it is okay to write like this(though immutable)- written below, as react reudex toolkit uses immer under the hood
            state.value++;
        },

        // if any random to be added to the state
        amountAdded(state, action: PayloadAction<number>){
            state.value+=action.payload;
        }

    },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;