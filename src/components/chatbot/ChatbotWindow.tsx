import { useState } from 'react'
import {
  Bot,
  Loader2,
  Send,
  Sparkles,
  X,
} from 'lucide-react'

import {
  sendChatMessage,
} from '../../lib/api'

import type {
  ChatMessage,
} from '../../lib/api'

import ChatMessageComponent from './ChatMessage'

interface Props {
  onClose: () => void
}

const initialMessage: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi! I'm VGenNext AI. I can help you explore our technology, staffing, application development, AI development, and Agentic AI services. How can I help you today?",
  timestamp: 'Now',
}

export default function ChatbotWindow({
  onClose,
}: Props) {
  const [messages, setMessages] = useState<
    ChatMessage[]
  >([initialMessage])

  const [input, setInput] = useState('')

  const [loading, setLoading] = useState(false)

  const quickActions = [
    'Find Technology Talent',
    'Build an Application',
    'Explore AI Solutions',
    'Build an AI Agent',
    'Talk to a Human',
  ]

  async function handleSend(
    customMessage?: string
  ) {
    const messageText =
      customMessage ?? input

    const trimmedMessage =
      messageText.trim()

    if (!trimmedMessage || loading) {
      return
    }

    const userMessage: ChatMessage = {
      id: `${Date.now()}-user`,
      role: 'user',
      content: trimmedMessage,
      timestamp: 'Now',
    }

    const updatedMessages = [
      ...messages,
      userMessage,
    ]

    setMessages(updatedMessages)
    setInput('')
    setLoading(true)

    try {
      const reply = await sendChatMessage(
        trimmedMessage,
        updatedMessages
      )

      const assistantMessage: ChatMessage = {
        id: `${Date.now()}-assistant`,
        role: 'assistant',
        content: reply,
        timestamp: 'Now',
      }

      setMessages((current) => [
        ...current,
        assistantMessage,
      ])
    } catch (error) {
      console.error(
        'Chatbot error:',
        error
      )

      const errorMessage: ChatMessage = {
        id: `${Date.now()}-error`,
        role: 'assistant',
        content:
          'Something went wrong while connecting to VGenNext AI. Please try again.',
        timestamp: 'Now',
      }

      setMessages((current) => [
        ...current,
        errorMessage,
      ])
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()
    void handleSend()
  }

  return (
    <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-[390px] overflow-hidden rounded-3xl border border-blue-400/20 bg-[#06101d] shadow-2xl shadow-black/50">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-blue-600/20 via-indigo-600/10 to-purple-600/20 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10">
            <Bot
              size={20}
              className="text-blue-400"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white">
                VGenNext AI
              </h3>

              <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Online
              </span>
            </div>

            <p className="text-xs text-slate-500">
              Technology. Talent. Intelligence.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Close chatbot"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="h-[390px] space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessageComponent
            key={message.id}
            message={message}
          />
        ))}

        {loading && (
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10">
              <Bot
                size={16}
                className="text-blue-400"
              />
            </div>

            <div className="rounded-2xl rounded-bl-md border border-white/10 bg-slate-900/80 px-4 py-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Loader2
                  size={14}
                  className="animate-spin"
                />
                VGenNext AI is thinking...
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="border-t border-white/10 px-4 py-3">
        <div className="mb-3 flex items-center gap-2">
          <Sparkles
            size={13}
            className="text-blue-400"
          />

          <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
            Quick actions
          </span>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {quickActions.map((action) => (
            <button
              key={action}
              type="button"
              disabled={loading}
              onClick={() =>
                void handleSend(action)
              }
              className="shrink-0 rounded-full border border-blue-400/20 bg-blue-500/5 px-3 py-2 text-[11px] text-slate-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-white/10 p-4"
      >
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-2 focus-within:border-blue-400/30">
          <input
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            disabled={loading}
            placeholder="Type your message..."
            className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-600 disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={
              loading ||
              !input.trim()
            }
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Send message"
          >
            {loading ? (
              <Loader2
                size={16}
                className="animate-spin"
              />
            ) : (
              <Send size={16} />
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
