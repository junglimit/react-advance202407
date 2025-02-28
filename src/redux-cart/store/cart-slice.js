import {createSlice} from "@reduxjs/toolkit";
import cartItem from "../components/Cart/CartItem";

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
            const existingItem = state.cartItems.find(item => item.id === newCartItem.id);

            if (!existingItem) { // 처음 장바구니에 추가된 상품인 경우
                state.cartItems.push(newCartItem);
            } else {
                existingItem.quantity++;
                existingItem.total += newCartItem.price;
            }
                state.totalQuantity++;

        },
        removeCartItem(state, action) {
            const id = action.payload;
            // 장바구니에서 해당 아이템 찾기
            const existingItem = state.cartItems.find(item => item.id === id);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter(item => item.id !== id);
                } else {
                    existingItem.quantity--;
                    existingItem.total -= existingItem.price;
                }
                state.totalQuantity--;
            }
        }
    }
});

export const cartActions = cartSlice.actions; // 액션함수는 변수에 담아 보내기
export default cartSlice.reducer;