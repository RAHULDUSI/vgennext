import ServiceDetail from './ServiceDetail'
import { services } from '../data/services'

export default function Staffing() {
  return <ServiceDetail service={services[0]} />
}
