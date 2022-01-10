import { PostComponent } from './Post'
import React from 'react'
import { shallow } from 'enzyme'

const mockPost = {
  id: 'abc',
  title: '',
  content: '',
  publicationDate: '',
  lastUpdate: '',
  author: '',
  status: '',
  price: 0,
  location: '',
}

describe('Component Post', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostComponent post={mockPost} />)
    expect(component).toBeTruthy()
  })
})
