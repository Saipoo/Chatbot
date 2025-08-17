# Chatbot Internship Assessment Application

A full-stack chatbot application built with React, Nhost Authentication, Hasura GraphQL, and n8n workflows.

## 🚀 Features

- **Authentication**: Email-based sign-up/sign-in with Nhost Auth
- **Real-time Chat**: GraphQL subscriptions for live message updates  
- **Secure Database**: Row-Level Security ensuring users only access their data
- **AI Integration**: Chatbot powered by OpenRouter API via n8n workflows
- **Modern UI**: Clean, responsive design with Tailwind CSS

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Apollo Client** for GraphQL
- **Nhost React SDK** for authentication
- **Lucide React** for icons

### Backend & Services
- **Nhost** - Backend-as-a-Service (Auth + PostgreSQL)
- **Hasura** - GraphQL API with real-time subscriptions
- **n8n** - Workflow automation for AI integration
- **OpenRouter** - AI API gateway for chatbot responses

## 📋 Prerequisites

Before running this application, you'll need accounts and API keys for:

1. **Nhost** - For authentication and database
2. **Hasura Cloud** - For GraphQL API (if not using Nhost's Hasura)
3. **n8n** - For workflow automation
4. **OpenRouter** - For AI API access

## 🎯 Setup Instructions

### 1. Clone and Install
```bash
git clone <repository-url>
cd chatbot-internship-app
npm install
```

### 2. Nhost Setup
1. Create a new project at [nhost.io](https://nhost.io)
2. Note your `subdomain` and `region`
3. Update `src/config/nhost.ts` with your project details

### 3. Database Setup
1. In your Nhost dashboard, go to the SQL Editor
2. Run the SQL from `src/database/schema.sql` to create tables and RLS policies

### 4. Hasura Actions Setup
1. In Hasura Console, go to Actions
2. Create a new action called `sendMessage`
3. Use the configuration from `src/hasura/actions.yaml`
4. Set the webhook URL to your n8n webhook endpoint

### 5. n8n Workflow Setup
1. Import the workflow from `src/n8n/workflow.json`
2. Update the webhook URL in Hasura Actions
3. Configure your OpenRouter API key in the workflow
4. Set your Hasura endpoint URL
5. Test the workflow

### 6. Environment Configuration
Update `src/config/nhost.ts` with your actual Nhost project details:

```typescript
export const nhost = new NhostClient({
  subdomain: 'your-actual-subdomain',
  region: 'your-actual-region',
})
```

## 🏗 Architecture

### Database Schema
- **chats**: Stores chat conversations with user ownership
- **messages**: Stores individual messages linked to chats
- **RLS Policies**: Ensure users only access their own data

### GraphQL Operations
- **Queries**: Fetch chats and messages
- **Mutations**: Create chats and messages
- **Subscriptions**: Real-time message updates
- **Actions**: Trigger chatbot responses via n8n

### n8n Workflow Flow
1. Receives webhook from Hasura Action
2. Validates user authentication and chat ownership
3. Calls OpenRouter API for AI response
4. Saves chatbot response to database
5. Returns response to frontend

## 🔐 Security

- **Authentication**: All features require user authentication
- **Row-Level Security**: Database-level access control
- **API Validation**: n8n validates user owns chat before processing
- **Role-Based Permissions**: Only 'user' role can access application data

## 🚀 Running the Application

```bash
npm run dev
```

The application will start on `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AuthWrapper.tsx  # Authentication guard
│   ├── AuthPage.tsx     # Login/signup page
│   ├── Sidebar.tsx      # Chat list sidebar
│   ├── ChatInterface.tsx# Chat messages and input
│   └── MainApp.tsx      # Main application layout
├── config/             # Configuration files
│   └── nhost.ts        # Nhost client configuration
├── graphql/            # GraphQL queries and mutations
│   └── queries.ts      # All GraphQL operations
├── types/              # TypeScript type definitions
│   └── index.ts        # Application types
├── database/           # Database schema and setup
│   └── schema.sql      # Complete database schema
├── hasura/             # Hasura configuration
│   └── actions.yaml    # Actions configuration
└── n8n/                # n8n workflow
    └── workflow.json   # Complete workflow definition
```

## 🎨 UI Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Real-time Updates**: Messages appear instantly using subscriptions
- **Loading States**: Smooth loading indicators
- **Error Handling**: User-friendly error messages
- **Typing Indicators**: Shows when chatbot is responding

## 🔧 Customization

### Changing AI Model
Update the model in the n8n workflow:
```json
{
  "name": "model",
  "value": "anthropic/claude-3-sonnet" // or any OpenRouter model
}
```

### Styling
The application uses Tailwind CSS. Modify styles in component files or extend the theme in `tailwind.config.js`.

## 📝 Assessment Requirements Checklist

- ✅ Email Sign In/Sign Up with Nhost Auth
- ✅ Authentication restrictions for all features  
- ✅ chats and messages tables with RLS
- ✅ Proper database permissions
- ✅ GraphQL-only frontend communication
- ✅ Hasura Action for sendMessage
- ✅ n8n workflow with validation and OpenRouter integration
- ✅ Real-time chat interface with subscriptions
- ✅ Message creation and chatbot response flow

## 🤝 Contributing

This is an assessment project. Please follow the requirements exactly as specified.

## 📄 License

This project is for internship assessment purposes only.