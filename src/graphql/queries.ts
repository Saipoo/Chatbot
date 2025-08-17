import { gql } from '@apollo/client'

export const GET_CHATS = gql`
  query GetChats {
    chats(order_by: { updated_at: desc }) {
      id
      title
      created_at
      updated_at
      messages_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`

export const GET_CHAT_MESSAGES = gql`
  query GetChatMessages($chatId: uuid!) {
    chats_by_pk(id: $chatId) {
      id
      title
      messages(order_by: { created_at: asc }) {
        id
        content
        role
        created_at
      }
    }
  }
`

export const SUBSCRIBE_TO_MESSAGES = gql`
  subscription SubscribeToMessages($chatId: uuid!) {
    messages(
      where: { chat_id: { _eq: $chatId } }
      order_by: { created_at: asc }
    ) {
      id
      content
      role
      created_at
    }
  }
`

export const CREATE_CHAT = gql`
  mutation CreateChat($title: String!) {
    insert_chats_one(object: { title: $title }) {
      id
      title
      created_at
    }
  }
`

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($chatId: uuid!, $content: String!, $role: String!) {
    insert_messages_one(
      object: { chat_id: $chatId, content: $content, role: $role }
    ) {
      id
      content
      role
      created_at
    }
  }
`

export const SEND_MESSAGE_ACTION = gql`
  mutation SendMessageAction($chatId: uuid!, $message: String!) {
    sendMessage(chatId: $chatId, message: $message) {
      success
      message
      response
    }
  }
`