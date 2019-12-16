
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils'

import Loader from './Loader';

describe('Loader component', () => {


  it('Loader renders without errors', () => {
    const component = shallow(<Loader />)
    const loaderCount = findByTestAttr(component, 'loader').length;
    expect(loaderCount).toBe(1);
  });

  
});