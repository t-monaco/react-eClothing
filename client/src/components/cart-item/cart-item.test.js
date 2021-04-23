import React from 'react';
import { shallow } from 'enzyme';

import CartItem from './cart-item.component';

describe('CartItem component', () => {
    it('should render CartItem Component', () => {
        const mockItem = {
            imageUrl: 'foo',
            price: 123,
            name: 'bar',
            quantity: 1,
        };

        expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
    });
});
