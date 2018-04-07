import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import MessageList from './MessageList'

const setup = () => {
  const props = {
    messages: []
  }
  Enzyme.configure({ adapter: new Adapter() })
  const enzymeWrapper = mount(<MessagesList {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('MessagesList', () => {
  it('should render self', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('section#messages-list').length).toBe(1)
  })
})
