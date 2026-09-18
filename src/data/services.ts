import { Bot, BrainCircuit, Code2, Users } from 'lucide-react'
import type { Service } from '../types'

export const services: Service[] = [
  {
    title: 'Staffing & Talent Solutions',
    shortTitle: 'Staffing & Talent',
    description: 'Skilled technology professionals and flexible teams aligned to your business goals.',
    icon: Users,
    path: '/services/staffing',
    eyebrow: 'TALENT SOLUTIONS',
    headline: 'The talent behind your technology.',
    capabilities: ['Technology Staffing', 'Contract & Contract-to-Hire', 'Direct Placement', 'Dedicated Teams', 'Technical Recruiting', 'Workforce Scaling'],
  },
  {
    title: 'Application Development',
    shortTitle: 'Application Development',
    description: 'Modern web, mobile and enterprise applications designed to scale with your business.',
    icon: Code2,
    path: '/services/application-development',
    eyebrow: 'DIGITAL ENGINEERING',
    headline: 'Build products that move business forward.',
    capabilities: ['Web Applications', 'Mobile Applications', 'Enterprise Platforms', 'API & Backend Engineering', 'Cloud-Native Development', 'Application Modernization'],
  },
  {
    title: 'AI Development',
    shortTitle: 'AI Development',
    description: 'Practical AI systems that turn business data and workflows into intelligent experiences.',
    icon: BrainCircuit,
    path: '/services/ai-development',
    eyebrow: 'ARTIFICIAL INTELLIGENCE',
    headline: 'Turn data into intelligence.',
    capabilities: ['Generative AI', 'LLM Applications', 'RAG Systems', 'AI Assistants', 'Machine Learning', 'Document Intelligence'],
  },
  {
    title: 'Agentic AI',
    shortTitle: 'Agentic AI',
    description: 'AI agents that reason, use tools, execute workflows and automate complex business operations.',
    icon: Bot,
    path: '/services/agentic-ai',
    eyebrow: 'AUTONOMOUS INTELLIGENCE',
    headline: 'AI that does more than answer. It acts.',
    capabilities: ['AI Agents', 'Multi-Agent Systems', 'Tool Calling', 'Workflow Automation', 'Enterprise Knowledge Agents', 'Human-in-the-Loop Systems'],
  },
]
