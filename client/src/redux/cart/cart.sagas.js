import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { getUserCartRef } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../user/user.selectors';
import UserActionTypes from './../user/user.types';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { selectCartItems } from './cart.selectors';
import { CartActionTypes } from './cart.types';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* updateCartAfterCheckoutSuccess() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
        const purchasedAt = new Date();
        try {
            const cartRef = yield getUserCartRef(currentUser.id);
            yield cartRef.update({ status: 1, purchasedAt });
            yield put(clearCart());
        } catch (error) {
            console.log(error);
        }
    }
}

export function* updateCartInFirebase() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
        try {
            const cartRef = yield (currentUser.id);
            const cartItems = yield select(selectCartItems);
            yield cartRef.update({ cartItems });
        } catch (error) {
            console.log(error);
        }
    }
}

export function* checkCartFromFirebase({ payload: { id } }) {
    const cartRef = yield getUserCartRef(id);
    const cartSnapshot = yield cartRef.get();
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onUserSignInSuccess() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCheckoutSuccess() {
    yield takeLatest(
        CartActionTypes.UPDATE_CART_AFTER_CHECKOUT_SUCCESS,
        updateCartAfterCheckoutSuccess
    );
}

export function* onCartChange() {
    yield takeLatest(
        [
            CartActionTypes.ADD_ITEM,
            CartActionTypes.REMOVE_ITEM,
            CartActionTypes.CLEAR_ITEM_FROM_CART,
        ],
        updateCartInFirebase
    );
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
        call(onUserSignInSuccess),
        call(onCartChange),
        call(onCheckoutSuccess),
    ]);
}
