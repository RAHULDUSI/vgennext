import { useEffect, useRef, useState } from 'react'
import { Bot, Send, X, Sparkles } from 'lucide-react'
import { sendChatMessage, type ChatMessage } from '../../lib/api'
import ChatMessageView from './ChatMessage'

const starters = ['Find technology talent', 'Build an application', 'Explore AI solutions', 'Build an AI agent', 'Talk to a human']

export default function ChatbotWindow({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'welcome', role: 'assistant', content: "Hi! I'm VGenNext AI. I can help you explore our services, understand your requirement, or connect you with our team. What are you looking to build?" },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => endRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, loading])

  async function submit(value = input) {
    const message = value.trim()
    if (!message || loading) return
    const userMessage: ChatMessage = { id: crypto.randomUUID(), role: 'user', content: message }
    const next = [...messages, userMessage]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const reply = await sendChatMessage(message, next)
      setMessages([...next, { id: crypto.randomUUID(), role: 'assistant', content: reply }])
    } catch {
      setMessages([...next, { id: crypto.randomUUID(), role: 'assistant', content: 'I’m having trouble connecting right now. Please use the Contact page and our team can help you directly.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="glass fixed bottom-5 right-5 z-[80] flex h-[min(680px,calc(100vh-110px))] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
            <Bot size={20} />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#09101d] bg-emerald-400" />
          </div>
          <div><p className="text-sm font-semibold">VGenNext AI</p><p className="text-[11px] text-emerald-400">Online · AI Assistant</p></div>
        </div>
        <button onClick={onClose} className="rounded-full p-2 text-slate-500 hover:bg-white/5 hover:text-white"><X size={18} /></button>
      </div>

      <div className="chat-scroll flex-1 space-y-3 overflow-y-auto p-4">
        <div className="flex items-center gap-2 rounded-xl border border-blue-400/10 bg-blue-500/[0.05] p-3 text-xs text-slate-400"><Sparkles size={15} className="text-blue-400" />Tell me what you need and I’ll guide you.</div>
        {messages.map(message => <ChatMessageView key={message.id} message={message} />)}
        {loading && <div className="w-fit rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs text-slate-500">Thinking…</div>}
        <div ref={endRef} />
      </div>

      <div className="border-t border-white/10 p-3">
        <div className="mb-3 flex gap-2 overflow-x-auto no-scrollbar">
          {starters.map(item => <button key={item} onClick={() => submit(item)} className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-slate-300 hover:border-blue-400/30 hover:text-white">{item}</button>)}
        </div>
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-2">
          <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()} placeholder="Type your message..." className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-slate-600" />
          <button onClick={() => submit()} disabled={!input.trim() || loading} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 disabled:cursor-not-allowed disabled:opacity-40"><Send size={16} /></button>
        </div>
      </div>
    </div>
  )
}
