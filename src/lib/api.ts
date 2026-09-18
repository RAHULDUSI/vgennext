export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp?: string
}

const API_URL =
  import.meta.env.VITE_CHATBOT_API_URL || '/api/chat'

export async function sendChatMessage(
  message: string,
  history: ChatMessage[] = []
): Promise<string> {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history,
      }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()

    return (
      data.reply ||
      data.message ||
      data.response ||
      'I could not generate a response.'
    )
  } catch (error) {
    console.error('VGenNext AI API error:', error)

    return `I'm currently unable to connect to the VGenNext AI service.

You can still explore our services or contact the VGenNext team for assistance.`
  }
}

// ======================================================
// VGenNext Enquiry API
// ======================================================

export const VGENNEXT_ENQUIRY_API =
  "https://script.google.com/macros/s/AKfycby4NnEjqORZ0UjTdYEttc7IrId9uf1_Nk17yUaQPk09KhGlNpDRNd06eqJtKOGaeaRKIw/exec";

export interface EnquiryData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export async function submitEnquiry(
  data: EnquiryData
): Promise<void> {
  const formData = new URLSearchParams();

  formData.append("fullName", data.fullName);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("company", data.company);
  formData.append("service", data.service);
  formData.append("message", data.message);

  await fetch(VGENNEXT_ENQUIRY_API, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  });
}

