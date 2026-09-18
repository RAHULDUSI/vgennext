import { useEffect, useState } from 'react'
import ChatbotButton from './ChatbotButton'
import ChatbotWindow from './ChatbotWindow'

export default function Chatbot() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (event: Event) => {
      const target = event.target as HTMLElement
      if (target.closest('[data-chat-open]')) setOpen(true)
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <>
      {open && <ChatbotWindow onClose={() => setOpen(false)} />}
      <ChatbotButton open={open} onClick={() => setOpen(v => !v)} />
    </>
  )
}
