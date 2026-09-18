import Hero from '../components/sections/Hero'
import ServicesPreview from '../components/sections/ServicesPreview'
import Approach from '../components/sections/Approach'
import AgenticAI from '../components/sections/AgenticAI'
import IndustriesPreview from '../components/sections/IndustriesPreview'
import AboutPreview from '../components/sections/AboutPreview'
import CTA from '../components/sections/CTA'

export default function Home() {
  return <main><Hero /><ServicesPreview /><Approach /><AgenticAI /><IndustriesPreview /><AboutPreview /><CTA /></main>
}
