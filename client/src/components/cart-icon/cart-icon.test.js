import React from 'react';
import { shallow } from 'enzyme';

import { CartIcon } from './cart-icon.component';

describe('CartIcon component', () => {
    let wrapper;
    let mockToggleCartHidden;

    beforeEach(() => {
        mockToggleCartHidden = jest.fn();

        const mockProps = {
            itemCount: 0,
            toggleCartHidden: mockToggleCartHidden,
        };

        wrapper = shallow(<CartIcon {...mockProps} />);
    });

    it('should render component', () => {
        expect.assertions(1);
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should call toggleCartHidden when icon is clicked', () => {
        expect.assertions(1);
        wrapper.find('CartContainer').simulate('click');
        expect(mockToggleCartHidden).toHaveBeenCalled();
    });
    
    it('should render the itemCount as the text', () => {
        expect.assertions(1);
        const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
        expect(itemCount).toBe(0);
    });
});
