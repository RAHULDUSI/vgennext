export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const API_URL = import.meta.env.VITE_CHATBOT_API_URL as string | undefined

export async function sendChatMessage(message: string, history: ChatMessage[]) {
  if (API_URL) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history }),
    })

    if (!response.ok) throw new Error('Chat service unavailable')

    const data = await response.json()
    return data.reply ?? data.message ?? 'I could not generate a response.'
  }

  const text = message.toLowerCase()

  if (text.includes('staff') || text.includes('developer') || text.includes('talent')) {
    return 'VGenNext provides technology staffing and talent solutions across software engineering, cloud, data, AI/ML, QA and project delivery. I can help you describe the team you need.'
  }

  if (text.includes('agent') || text.includes('automation')) {
    return 'Our Agentic AI practice builds AI agents that can reason about goals, use tools, interact with enterprise systems and execute workflows. Tell me what process you want to automate.'
  }

  if (text.includes('ai') || text.includes('artificial intelligence')) {
    return 'VGenNext develops practical AI solutions including LLM applications, RAG, AI assistants, document intelligence and machine learning. Tell me what you want AI to accomplish.'
  }

  if (text.includes('application') || text.includes('software') || text.includes('app')) {
    return 'We design and build modern web, mobile and enterprise applications, including APIs, backend systems, cloud-native platforms and application modernization.'
  }

  return 'I can help you explore VGenNext services, understand which capability fits your requirement, or prepare a project conversation for our team. What are you looking to build or improve?'
}
