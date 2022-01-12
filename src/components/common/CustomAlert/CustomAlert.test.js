import { CustomAlertComponent } from './CustomAlert'
import React from 'react'
import { shallow } from 'enzyme'

describe('Component CustomAlert', () => {
  /*   const mockedUsedLocation = jest.fn()
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => mockedUsedLocation,
  })) */

  it('should render without crashing', () => {
    const component = shallow(<CustomAlertComponent />)
    expect(component).toBeTruthy()
  })
})
