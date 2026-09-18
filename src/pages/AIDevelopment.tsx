import ServiceDetail from './ServiceDetail'
import { services } from '../data/services'

export default function AIDevelopment() {
  return <ServiceDetail service={services[2]} />
}
