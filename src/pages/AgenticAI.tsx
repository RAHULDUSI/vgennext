import ServiceDetail from './ServiceDetail'
import { services } from '../data/services'

export default function AgenticAI() {
  return <ServiceDetail service={services[3]} />
}
