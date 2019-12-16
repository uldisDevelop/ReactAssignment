
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils'

import Button from './Button';


describe('Button component', () => {

  it('Button renders without errors', () => {
    const component = shallow(<Button />)
    const buttonCount = findByTestAttr(component, 'buttonComponent').length;
    expect(buttonCount).toBe(1);
  });

  it('Should click', () => {
    const mockFunc = jest.fn();
    const button = shallow(<Button onClick={mockFunc}/>)        
    button.simulate('click');
    const clickedCount = mockFunc.mock.calls.length;
    expect(clickedCount).toBe(1);
  });

  it('Should have disabled state', () => {    
    const component = shallow(<Button enabled={false}/>)
    expect(component.find('[disabled="disabled"]').length).toBe(1);
  });
  

  it('Should have enabled state', () => {
    const component = shallow(<Button enabled={true}/>)
    expect(component.find('[disabled="disabled"]').length).toBe(0);
  });

  

});