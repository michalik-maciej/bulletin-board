import { App } from './App'
import React from 'react'
import { shallow } from 'enzyme'

describe('App', () => {
  it('should render without crashing', () => {
    const component = shallow(<App />)
    expect(component).toBeTruthy()
  })
})
