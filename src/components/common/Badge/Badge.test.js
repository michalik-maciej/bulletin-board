import { BadgeComponent } from './Badge'
import React from 'react'
import { shallow } from 'enzyme'

describe('Component Badge', () => {
  it('should render without crashing', () => {
    const component = shallow(<BadgeComponent />)
    expect(component).toBeTruthy()
  })
})
