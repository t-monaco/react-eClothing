import React from 'react';
import { shallow } from 'enzyme';

import { CartDropdown } from './cart-dropdown.component';
import CartItem from '../cart-item/cart-item.component';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

describe('CartDropdown component', () => {
    let wrapper;
    let mockHistoory;
    let mockDispatch;
    const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

    beforeEach(() => {
        mockHistoory = {
            push: jest.fn(),
        };

        mockDispatch = jest.fn();

        const mockProps = {
            cartItems: mockCartItems,
            history: mockHistoory,
            dispatch: mockDispatch,
        };

        wrapper = shallow(<CartDropdown {...mockProps} />);
    });

    it('should render CartDropdown component', () => {
        expect.assertions(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('sholud call history.push when button is clicked', () => {
        expect.assertions(2);
        wrapper.find('CartDropdownButton').simulate('click');
        expect(mockHistoory.push).toHaveBeenCalled();
        expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
    });

    it('sholud render an equal number of CartItem components as the cartItems prop', () => {
        expect.assertions(2);
        expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
        expect(wrapper.exists('EmptyMessageContainer')).toBe(false);
    });

    it('should render EmptyMessageContainer if cartItems is empty', () => {
        expect.assertions(2);
        const mockProps = {
            cartItems: [],
            history: mockHistoory,
            dispatch: mockDispatch,
        };

        const newWrapper = shallow(<CartDropdown {...mockProps} />);
        expect(newWrapper.exists('CartItem')).toBe(false);
        expect(newWrapper.exists('EmptyMessageContainer')).toBe(true);
    });
});
