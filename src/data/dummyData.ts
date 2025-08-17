import { Chat, Message } from '../types'

// Dummy user data
export const dummyUser = {
  id: 'user-123',
  email: 'demo@example.com',
  name: 'Demo User'
}

// Dummy chats with realistic titles
export const dummyChats: Chat[] = [
  {
    id: 'chat-1',
    title: 'Getting Started with React',
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T14:45:00Z',
    messages_aggregate: {
      aggregate: {
        count: 8
      }
    }
  },
  {
    id: 'chat-2', 
    title: 'JavaScript Best Practices',
    created_at: '2024-01-14T09:15:00Z',
    updated_at: '2024-01-14T16:20:00Z',
    messages_aggregate: {
      aggregate: {
        count: 12
      }
    }
  },
  {
    id: 'chat-3',
    title: 'Database Design Questions',
    created_at: '2024-01-13T11:00:00Z', 
    updated_at: '2024-01-13T15:30:00Z',
    messages_aggregate: {
      aggregate: {
        count: 6
      }
    }
  },
  {
    id: 'chat-4',
    title: 'Career Advice Discussion',
    created_at: '2024-01-12T14:20:00Z',
    updated_at: '2024-01-12T17:45:00Z',
    messages_aggregate: {
      aggregate: {
        count: 15
      }
    }
  },
  {
    id: 'chat-5',
    title: 'API Integration Help',
    created_at: '2024-01-11T08:45:00Z',
    updated_at: '2024-01-11T12:30:00Z',
    messages_aggregate: {
      aggregate: {
        count: 9
      }
    }
  }
]

// Dummy messages for each chat
export const dummyMessages: Record<string, Message[]> = {
  'chat-1': [
    {
      id: 'msg-1-1',
      content: 'Hi! I\'m new to React and want to learn the basics. Where should I start?',
      role: 'user',
      created_at: '2024-01-15T10:30:00Z'
    },
    {
      id: 'msg-1-2', 
      content: 'Great question! React is a fantastic library to learn. I\'d recommend starting with these fundamentals:\n\n1. **Components** - Learn about functional components and JSX\n2. **Props** - How to pass data between components\n3. **State** - Managing component state with useState hook\n4. **Effects** - Side effects with useEffect hook\n\nWould you like me to explain any of these concepts in detail?',
      role: 'assistant',
      created_at: '2024-01-15T10:31:00Z'
    },
    {
      id: 'msg-1-3',
      content: 'Yes, could you explain useState with a simple example?',
      role: 'user', 
      created_at: '2024-01-15T10:32:00Z'
    },
    {
      id: 'msg-1-4',
      content: 'Absolutely! Here\'s a simple counter example:\n\n```jsx\nimport React, { useState } from \'react\';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}\n```\n\nThe `useState(0)` creates a state variable `count` with initial value 0, and `setCount` is the function to update it.',
      role: 'assistant',
      created_at: '2024-01-15T10:33:00Z'
    },
    {
      id: 'msg-1-5',
      content: 'That makes sense! What about useEffect?',
      role: 'user',
      created_at: '2024-01-15T10:35:00Z'
    },
    {
      id: 'msg-1-6',
      content: 'useEffect is for handling side effects like API calls, subscriptions, or DOM manipulation. Here\'s an example:\n\n```jsx\nimport React, { useState, useEffect } from \'react\';\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n\n  useEffect(() => {\n    // This runs after component mounts\n    fetchUser(userId).then(setUser);\n  }, [userId]); // Re-run when userId changes\n\n  return user ? <div>{user.name}</div> : <div>Loading...</div>;\n}\n```\n\nThe dependency array `[userId]` tells React when to re-run the effect.',
      role: 'assistant',
      created_at: '2024-01-15T10:36:00Z'
    },
    {
      id: 'msg-1-7',
      content: 'Perfect! This is really helpful. Any resources you\'d recommend for practice?',
      role: 'user',
      created_at: '2024-01-15T14:40:00Z'
    },
    {
      id: 'msg-1-8',
      content: 'Definitely! Here are some excellent resources:\n\n📚 **Documentation & Tutorials:**\n- Official React docs (react.dev)\n- React Tutorial on the official site\n\n🛠️ **Practice Platforms:**\n- CodeSandbox for online coding\n- Create React App for local development\n\n📺 **Video Content:**\n- React course on freeCodeCamp\n- Traversy Media React tutorials\n\n🏗️ **Project Ideas:**\n- Todo app\n- Weather app\n- Simple blog\n\nStart with small projects and gradually build complexity!',
      role: 'assistant',
      created_at: '2024-01-15T14:45:00Z'
    }
  ],
  'chat-2': [
    {
      id: 'msg-2-1',
      content: 'What are some JavaScript best practices I should follow as a developer?',
      role: 'user',
      created_at: '2024-01-14T09:15:00Z'
    },
    {
      id: 'msg-2-2',
      content: 'Excellent question! Here are key JavaScript best practices:\n\n🔧 **Code Quality:**\n- Use `const` and `let` instead of `var`\n- Write descriptive variable and function names\n- Keep functions small and focused\n- Use strict mode (`"use strict"`)\n\n🛡️ **Error Handling:**\n- Always handle promises with try/catch or .catch()\n- Validate inputs and handle edge cases\n- Use meaningful error messages\n\n📦 **Modern Features:**\n- Use arrow functions appropriately\n- Leverage destructuring for cleaner code\n- Use template literals for string interpolation\n\nWould you like me to elaborate on any of these?',
      role: 'assistant',
      created_at: '2024-01-14T09:16:00Z'
    },
    {
      id: 'msg-2-3',
      content: 'Can you show me examples of good vs bad variable naming?',
      role: 'user',
      created_at: '2024-01-14T09:18:00Z'
    },
    {
      id: 'msg-2-4',
      content: 'Absolutely! Here are some examples:\n\n❌ **Bad naming:**\n```javascript\nconst d = new Date();\nconst u = users.filter(x => x.a > 18);\nconst calc = (a, b) => a * b * 0.1;\n```\n\n✅ **Good naming:**\n```javascript\nconst currentDate = new Date();\nconst adultUsers = users.filter(user => user.age > 18);\nconst calculateTax = (price, quantity) => price * quantity * TAX_RATE;\n```\n\n**Key principles:**\n- Be descriptive and specific\n- Use full words, avoid abbreviations\n- Use camelCase for variables and functions\n- Use UPPER_CASE for constants\n- Boolean variables should start with `is`, `has`, `can`, etc.',
      role: 'assistant',
      created_at: '2024-01-14T09:20:00Z'
    }
  ],
  'chat-3': [
    {
      id: 'msg-3-1',
      content: 'I\'m designing a database for an e-commerce app. What tables should I consider?',
      role: 'user',
      created_at: '2024-01-13T11:00:00Z'
    },
    {
      id: 'msg-3-2',
      content: 'Great project! Here\'s a basic e-commerce database structure:\n\n🏪 **Core Tables:**\n- `users` - Customer information\n- `products` - Product catalog\n- `categories` - Product categories\n- `orders` - Order information\n- `order_items` - Products in each order\n- `cart` - Shopping cart items\n\n💳 **Additional Tables:**\n- `addresses` - Shipping/billing addresses\n- `payments` - Payment information\n- `reviews` - Product reviews\n- `inventory` - Stock management\n\nWould you like me to detail the schema for any specific table?',
      role: 'assistant',
      created_at: '2024-01-13T11:02:00Z'
    },
    {
      id: 'msg-3-3',
      content: 'Yes, could you show me the users and orders table structure?',
      role: 'user',
      created_at: '2024-01-13T11:05:00Z'
    },
    {
      id: 'msg-3-4',
      content: 'Sure! Here are the table structures:\n\n👤 **Users Table:**\n```sql\nCREATE TABLE users (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  email VARCHAR(255) UNIQUE NOT NULL,\n  password_hash VARCHAR(255) NOT NULL,\n  first_name VARCHAR(100),\n  last_name VARCHAR(100),\n  phone VARCHAR(20),\n  created_at TIMESTAMP DEFAULT NOW(),\n  updated_at TIMESTAMP DEFAULT NOW()\n);\n```\n\n📦 **Orders Table:**\n```sql\nCREATE TABLE orders (\n  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n  user_id UUID REFERENCES users(id),\n  status VARCHAR(50) DEFAULT \'pending\',\n  total_amount DECIMAL(10,2) NOT NULL,\n  shipping_address_id UUID,\n  billing_address_id UUID,\n  created_at TIMESTAMP DEFAULT NOW(),\n  updated_at TIMESTAMP DEFAULT NOW()\n);\n```\n\nThis provides a solid foundation with proper relationships and constraints.',
      role: 'assistant',
      created_at: '2024-01-13T11:08:00Z'
    }
  ]
}

// Predefined chatbot responses for different message patterns
export const chatbotResponses = [
  "That's a great question! Let me help you with that.",
  "I understand what you're looking for. Here's my take on it:",
  "Interesting point! Based on my knowledge, I'd suggest:",
  "Let me break this down for you step by step:",
  "That's a common challenge many developers face. Here's how to approach it:",
  "Great question! This is actually a fundamental concept in programming:",
  "I can definitely help you with that. Let me explain:",
  "That's an excellent observation! Here's what I think:",
  "This is a topic I'm passionate about. Let me share some insights:",
  "Perfect timing for this question! Here's what you need to know:"
]

// Generate a realistic chatbot response based on the user message
export const generateChatbotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase()
  
  // Pattern-based responses
  if (message.includes('react') || message.includes('component')) {
    return "React is a powerful library for building user interfaces! Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces. Would you like me to explain functional vs class components, or dive into hooks like useState and useEffect?"
  }
  
  if (message.includes('javascript') || message.includes('js')) {
    return "JavaScript is the backbone of modern web development! It's a versatile language that runs in browsers and servers. Some key concepts to master include: closures, promises, async/await, destructuring, and ES6+ features. What specific aspect of JavaScript would you like to explore?"
  }
  
  if (message.includes('database') || message.includes('sql')) {
    return "Database design is crucial for scalable applications! Key principles include normalization, proper indexing, and defining clear relationships between tables. For SQL, focus on JOINs, subqueries, and understanding ACID properties. Are you working with a specific database system like PostgreSQL, MySQL, or MongoDB?"
  }
  
  if (message.includes('api') || message.includes('rest') || message.includes('graphql')) {
    return "APIs are essential for modern applications! REST APIs use HTTP methods (GET, POST, PUT, DELETE) and follow stateless principles. GraphQL offers more flexibility with a single endpoint and precise data fetching. Key considerations include authentication, rate limiting, error handling, and proper status codes. What type of API are you building?"
  }
  
  if (message.includes('career') || message.includes('job') || message.includes('interview')) {
    return "Career development in tech is exciting! Focus on building a strong portfolio, contributing to open source, and staying updated with industry trends. For interviews, practice coding problems, system design, and be ready to discuss your projects in detail. Networking and continuous learning are key to long-term success. What stage of your career are you at?"
  }
  
  if (message.includes('help') || message.includes('stuck') || message.includes('problem')) {
    return "I'm here to help! When facing coding problems, try these approaches: 1) Break the problem into smaller parts, 2) Read error messages carefully, 3) Use console.log for debugging, 4) Check documentation, 5) Search Stack Overflow. Don't hesitate to ask specific questions - I'm here to guide you through any challenges!"
  }
  
  // Default responses for general messages
  const randomResponse = chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)]
  
  const responses = [
    `${randomResponse}\n\nRegarding "${userMessage}" - this touches on some important concepts in software development. Could you provide more context about what specific aspect you'd like to explore?`,
    `${randomResponse}\n\nYour question about "${userMessage}" is quite interesting. In my experience, the best approach depends on your specific use case and requirements. What's the context you're working in?`,
    `${randomResponse}\n\nThe topic of "${userMessage}" has several dimensions to consider. Are you looking for theoretical understanding, practical implementation, or best practices?`,
    `${randomResponse}\n\nI notice you mentioned "${userMessage}" - this is a topic that many developers find challenging at first. What's your current level of experience with this concept?`
  ]
  
  return responses[Math.floor(Math.random() * responses.length)]
}