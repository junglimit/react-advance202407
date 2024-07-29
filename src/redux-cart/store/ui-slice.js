import {createSlice} from "@reduxjs/toolkit";

// 상태관리할 값들의 초기값
const initialState = {
    cartIsVisible: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState, // 키,밸류 이름이 같으면 한번만 쓰면 됨
    reducers: {
        // 상태변경 행위 ( 액션함수 )
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
});

export const uiActions =  uiSlice.actions;
export default uiSlice.reducer;