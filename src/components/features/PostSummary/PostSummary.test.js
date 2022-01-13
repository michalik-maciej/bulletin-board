import { PostSummaryComponent } from './PostSummary'
import React from 'react'
import { shallow } from 'enzyme'

describe('Component PostSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostSummaryComponent />)
    expect(component).toBeTruthy()
  })
})
