import { Building2, Cpu, Factory, HeartPulse, Landmark, ShoppingCart, Truck, UsersRound } from 'lucide-react'
import type { Industry } from '../types'

export const industries: Industry[] = [
  { name: 'Healthcare', icon: HeartPulse, path: '/industries/healthcare', description: 'Digital experiences, data platforms and intelligent workflows for healthcare organizations.' },
  { name: 'Financial Services', icon: Landmark, path: '/industries/financial-services', description: 'Secure applications, analytics and automation for financial operations.' },
  { name: 'Retail & E-Commerce', icon: ShoppingCart, path: '/industries/retail-ecommerce', description: 'Connected commerce experiences that help retailers operate and grow.' },
  { name: 'Manufacturing', icon: Factory, path: '/industries/manufacturing', description: 'Modern systems and intelligent automation for industrial operations.' },
  { name: 'Logistics', icon: Truck, path: '/industries/logistics', description: 'Technology solutions that improve visibility, efficiency and coordination.' },
  { name: 'Technology', icon: Cpu, path: '/industries/technology', description: 'Engineering talent and product development for technology companies.' },
  { name: 'Professional Services', icon: UsersRound, path: '/industries/professional-services', description: 'Digital tools and automation that make knowledge work more efficient.' },
  { name: 'Government', icon: Building2, path: '/industries/government', description: 'Modern, secure and accessible digital solutions for public organizations.' },
]
