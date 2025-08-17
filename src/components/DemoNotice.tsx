import React from 'react'
import { Info } from 'lucide-react'

export default function DemoNotice() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-start space-x-3">
        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm">
          <h3 className="font-semibold text-blue-900 mb-1">Demo Mode</h3>
          <p className="text-blue-700 mb-2">
            This is a frontend-only demo with realistic dummy data. In production, this would connect to:
          </p>
          <ul className="text-blue-600 space-y-1 text-xs">
            <li>• <strong>Nhost Auth</strong> for authentication</li>
            <li>• <strong>Hasura GraphQL</strong> for database operations</li>
            <li>• <strong>n8n Workflows</strong> for chatbot processing</li>
            <li>• <strong>OpenRouter API</strong> for AI responses</li>
          </ul>
          <p className="text-blue-700 mt-2 text-xs">
            <strong>Demo credentials:</strong> Any email/password combination works for testing.
          </p>
        </div>
      </div>
    </div>
  )
}