
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils'

import Alert from './Alert';


describe('Alert component', () => {

  const defaultProps = {
    message: '',
    title: '',
    onClose: () => { }
  }


  it('Alert renders without errors', () => {
    const props = { ...defaultProps, message: 'This is the message' };
    const component = shallow(<Alert {...props} />);

    expect(findByTestAttr(component, 'message').text()).toBe(props.message);
  });


  it('Alert renders without errors', () => {
    const props = { ...defaultProps, title: 'This is the title' };
    const component = shallow(<Alert {...props} />);

    expect(findByTestAttr(component, 'title').text()).toBe(props.title);
  });

});