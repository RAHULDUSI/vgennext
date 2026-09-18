import type { ChatMessage as Message } from '../../lib/api'

export default function ChatMessage({ message }: { message: Message }) {
  const user = message.role === 'user'
  return (
    <div className={`flex ${user ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${user ? 'bg-blue-600 text-white' : 'border border-white/10 bg-white/[0.06] text-slate-200'}`}>
        {message.content}
      </div>
    </div>
  )
}
