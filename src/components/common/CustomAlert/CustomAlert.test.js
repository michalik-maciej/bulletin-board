import { CustomAlertComponent } from './CustomAlert'
import React from 'react'
import { shallow } from 'enzyme'

describe('Component CustomAlert', () => {
  it('should render without crashing', () => {
    const component = shallow(<CustomAlertComponent />)
    expect(component).toBeTruthy()
  })
})
