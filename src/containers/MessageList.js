import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

export const MessagesList = connect(state => ({
  messages: state.messages
}), {})(MessagesList)
