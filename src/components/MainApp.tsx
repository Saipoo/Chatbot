import React, { useState } from 'react'
import { useDummyChat } from '../hooks/useDummyChat'
import Sidebar from './Sidebar'
import ChatInterface from './ChatInterface'
import { Chat, Message } from '../types'

export default function MainApp() {
  const {
    chats,
    selectedChatId,
    messages,
    loading,
    sendingMessage,
    selectChat,
    createChat,
    sendMessage
  } = useDummyChat()

  const selectedChat = chats.find(chat => chat.id === selectedChatId)

  return (
    <div className="h-screen flex bg-gray-50">
      <Sidebar
        chats={chats}
        selectedChatId={selectedChatId}
        onSelectChat={selectChat}
        onCreateChat={createChat}
        loading={loading}
      />
      
      <div className="flex-1 flex flex-col">
        {selectedChatId ? (
          <ChatInterface
            messages={messages}
            onSendMessage={sendMessage}
            loading={sendingMessage}
            chatTitle={selectedChat?.title}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Welcome to AI Chatbot Demo
              </h2>
              <p className="text-gray-600 mb-6">
                Select a chat from the sidebar or create a new one to start chatting with the AI assistant
              </p>
              <p className="text-sm text-gray-500 mb-6">
                Try asking about React, JavaScript, databases, APIs, or career advice!
              </p>
              <button
                onClick={createChat}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Start New Chat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}