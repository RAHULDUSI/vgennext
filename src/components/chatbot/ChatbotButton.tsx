import {
  Bot,
  X,
} from 'lucide-react'

interface Props {
  open: boolean
  onClick: () => void
}

export default function ChatbotButton({
  open,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-chat-open
      aria-label={
        open
          ? 'Close VGenNext AI'
          : 'Open VGenNext AI'
      }
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/30 bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-blue-900/30 transition duration-300 hover:scale-105"
    >
      {open ? (
        <X size={22} />
      ) : (
        <Bot size={23} />
      )}
    </button>
  )
}
