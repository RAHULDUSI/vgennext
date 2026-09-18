import { Bot, X } from 'lucide-react'

export default function ChatbotButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label="Open VGenNext AI" className="fixed bottom-5 right-5 z-[70] flex items-center gap-3 rounded-full border border-blue-400/30 bg-[#0a1220]/95 px-4 py-3 shadow-xl shadow-blue-900/20 backdrop-blur-xl hover:border-blue-300/50">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
        {open ? <X size={18} /> : <Bot size={18} />}
        {!open && <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-[#0a1220] bg-emerald-400" />}
      </span>
      <span className="hidden pr-1 text-left sm:block"><span className="block text-[10px] uppercase tracking-[.2em] text-blue-300">VGenNext AI</span><span className="text-xs text-slate-300">{open ? 'Close assistant' : 'How can we help?'}</span></span>
    </button>
  )
}
