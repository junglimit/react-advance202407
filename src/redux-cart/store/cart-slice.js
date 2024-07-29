import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems: [], // 장바구니에 담긴 상품 객체들
    totalQuantity: 0, // 장바구니 총 수량
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem(state, action) {
            // 추가될 상품 객체
            const newCartItem = action.payload;
            // 이 상품이 기존 장바구니 배열에 포함 되어있는 상품인지 탐색
            console.log('new: ', newCartItem);


        }
    }
});

export const cartActions = cartSlice.actions; // 액션함수는 변수에 담아 보내기
export default cartSlice.reducer;