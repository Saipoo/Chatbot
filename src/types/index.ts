export interface Chat {
  id: string
  title: string
  created_at: string
  updated_at: string
  messages_aggregate?: {
    aggregate: {
      count: number
    }
  }
}

export interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  created_at: string
}

export interface ChatWithMessages extends Chat {
  messages: Message[]
}

export interface SendMessageActionResponse {
  sendMessage: {
    success: boolean
    message: string
    response?: string
  }
}