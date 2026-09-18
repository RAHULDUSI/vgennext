import type { ChatMessage as ChatMessageType } from '../../lib/api'
import { Bot, User } from 'lucide-react'

interface Props {
  message: ChatMessageType
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === 'user'

  return (
    <div
      className={`flex gap-3 ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10">
          <Bot
            size={16}
            className="text-blue-400"
          />
        </div>
      )}

      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
          isUser
            ? 'rounded-br-md bg-blue-600 text-white'
            : 'rounded-bl-md border border-white/10 bg-slate-900/80 text-slate-200'
        }`}
      >
        <p className="whitespace-pre-wrap">
          {message.content}
        </p>

        {message.timestamp && (
          <p
            className={`mt-1 text-[10px] ${
              isUser
                ? 'text-blue-100'
                : 'text-slate-500'
            }`}
          >
            {message.timestamp}
          </p>
        )}
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <User
            size={16}
            className="text-slate-300"
          />
        </div>
      )}
    </div>
  )
}
