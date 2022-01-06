import { FooterComponent } from './Footer'
import React from 'react'
import { shallow } from 'enzyme'

describe('Component Footer', () => {
  it('should render without crashing', () => {
    const component = shallow(<FooterComponent />)
    expect(component).toBeTruthy()
  })
})
