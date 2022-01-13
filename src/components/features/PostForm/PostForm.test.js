import { PostFormComponent } from './PostForm'
import React from 'react'
import { shallow } from 'enzyme'

describe('Component PostForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostFormComponent />)
    expect(component).toBeTruthy()
  })
})
