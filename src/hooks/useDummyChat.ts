import { useState, useEffect } from 'react'
import { Chat, Message } from '../types'
import { dummyChats, dummyMessages, generateChatbotResponse } from '../data/dummyData'

interface ChatState {
  chats: Chat[]
  selectedChatId: string | null
  messages: Message[]
  loading: boolean
  sendingMessage: boolean
}

interface ChatActions {
  selectChat: (chatId: string) => void
  createChat: () => void
  sendMessage: (message: string) => Promise<void>
}

export function useDummyChat(): ChatState & ChatActions {
  const [chatState, setChatState] = useState<ChatState>({
    chats: [],
    selectedChatId: null,
    messages: [],
    loading: true,
    sendingMessage: false
  })

  // Load initial data
  useEffect(() => {
    const timer = setTimeout(() => {
      setChatState(prev => ({
        ...prev,
        chats: dummyChats,
        loading: false
      }))
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  // Load messages when chat is selected
  useEffect(() => {
    if (chatState.selectedChatId) {
      const chatMessages = dummyMessages[chatState.selectedChatId] || []
      setChatState(prev => ({
        ...prev,
        messages: chatMessages
      }))
    }
  }, [chatState.selectedChatId])

  const selectChat = (chatId: string): void => {
    setChatState(prev => ({
      ...prev,
      selectedChatId: chatId
    }))
  }

  const createChat = (): void => {
    const newChatId = `chat-${Date.now()}`
    const newChat: Chat = {
      id: newChatId,
      title: `New Chat ${chatState.chats.length + 1}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      messages_aggregate: {
        aggregate: {
          count: 0
        }
      }
    }

    setChatState(prev => ({
      ...prev,
      chats: [newChat, ...prev.chats],
      selectedChatId: newChatId,
      messages: []
    }))

    // Initialize empty messages for new chat
    dummyMessages[newChatId] = []
  }

  const sendMessage = async (messageContent: string): Promise<void> => {
    if (!chatState.selectedChatId) return

    setChatState(prev => ({ ...prev, sendingMessage: true }))

    // Create user message
    const userMessage: Message = {
      id: `msg-${Date.now()}-user`,
      content: messageContent,
      role: 'user',
      created_at: new Date().toISOString()
    }

    // Add user message immediately
    const updatedMessages = [...chatState.messages, userMessage]
    dummyMessages[chatState.selectedChatId] = updatedMessages

    setChatState(prev => ({
      ...prev,
      messages: updatedMessages
    }))

    // Simulate chatbot thinking time
    await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 2000))

    // Generate chatbot response
    const botResponse = generateChatbotResponse(messageContent)
    const botMessage: Message = {
      id: `msg-${Date.now()}-bot`,
      content: botResponse,
      role: 'assistant',
      created_at: new Date().toISOString()
    }

    // Add bot message
    const finalMessages = [...updatedMessages, botMessage]
    dummyMessages[chatState.selectedChatId] = finalMessages

    // Update chat's message count and last updated time
    const updatedChats = chatState.chats.map(chat => 
      chat.id === chatState.selectedChatId
        ? {
            ...chat,
            updated_at: new Date().toISOString(),
            messages_aggregate: {
              aggregate: {
                count: finalMessages.length
              }
            }
          }
        : chat
    )

    setChatState(prev => ({
      ...prev,
      chats: updatedChats,
      messages: finalMessages,
      sendingMessage: false
    }))
  }

  return {
    ...chatState,
    selectChat,
    createChat,
    sendMessage
  }
}