const API_URL =
  import.meta.env.VITE_CHATBOT_API_URL || '/api/chat'

export async function sendChatMessage(message: string) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
      }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()

    return data.reply || data.message || 'I could not generate a response.'
  } catch (error) {
    console.error('Chatbot API error:', error)

    return 'I am currently unable to connect to the VGenNext AI service. Please try again shortly.'
  }
}
