import React from 'react'
import { Plus, MessageCircle, LogOut } from 'lucide-react'
import { useDummyAuth } from '../hooks/useDummyAuth'
import { Chat } from '../types'

interface SidebarProps {
  chats: Chat[]
  selectedChatId: string | null
  onSelectChat: (chatId: string) => void
  onCreateChat: () => void
  loading: boolean
}

export default function Sidebar({ chats, selectedChatId, onSelectChat, onCreateChat, loading }: SidebarProps) {
  const { signOut } = useDummyAuth()

  return (
    <div className="w-80 bg-gray-900 text-white flex flex-col h-full">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">AI Chatbot</h1>
          <button
            onClick={signOut}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            title="Sign Out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={onCreateChat}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="p-4">
            <div className="animate-pulse space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="bg-gray-700 rounded-lg p-3 h-16"></div>
              ))}
            </div>
          </div>
        ) : chats.length === 0 ? (
          <div className="p-4 text-center text-gray-400">
            <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
            <p>No chats yet</p>
            <p className="text-sm">Create your first chat to get started</p>
          </div>
        ) : (
          <div className="p-2">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                className={`w-full text-left p-3 rounded-lg mb-2 transition-colors hover:bg-gray-700 ${
                  selectedChatId === chat.id ? 'bg-gray-700' : ''
                }`}
              >
                <div className="font-medium truncate">{chat.title}</div>
                <div className="text-sm text-gray-400 mt-1">
                  {chat.messages_aggregate?.aggregate.count || 0} messages
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}