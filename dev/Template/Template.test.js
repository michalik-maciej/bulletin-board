import React from 'react';
import { TemplateComponent } from './Template';
import { shallow } from 'enzyme';

describe('Component Template', () => {
  it('should render without crashing', () => {
    const component = shallow(<TemplateComponent />);
    expect(component).toBeTruthy();
  });
});
