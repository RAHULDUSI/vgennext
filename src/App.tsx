import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Chatbot from './components/chatbot/Chatbot'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Staffing from './pages/Staffing'
import ApplicationDevelopment from './pages/ApplicationDevelopment'
import AIDevelopment from './pages/AIDevelopment'
import AgenticAI from './pages/AgenticAI'
import Industries from './pages/Industries'
import Healthcare from './pages/Healthcare'
import FinancialServices from './pages/FinancialServices'
import RetailEcommerce from './pages/RetailEcommerce'
import Manufacturing from './pages/Manufacturing'
import Logistics from './pages/Logistics'
import Technology from './pages/Technology'
import ProfessionalServices from './pages/ProfessionalServices'
import Government from './pages/Government'
import Careers from './pages/Careers'
import Insights from './pages/Insights'
import Contact from './pages/Contact'
import Legal from './pages/Legal'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/staffing" element={<Staffing />} />
        <Route path="/services/application-development" element={<ApplicationDevelopment />} />
        <Route path="/services/ai-development" element={<AIDevelopment />} />
        <Route path="/services/agentic-ai" element={<AgenticAI />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/financial-services" element={<FinancialServices />} />
        <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/industries/logistics" element={<Logistics />} />
        <Route path="/industries/technology" element={<Technology />} />
        <Route path="/industries/professional-services" element={<ProfessionalServices />} />
        <Route path="/industries/government" element={<Government />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Legal type="privacy" />} />
        <Route path="/terms" element={<Legal type="terms" />} />
      </Routes>
      <Footer />
      <Chatbot />
    </>
  )
}
