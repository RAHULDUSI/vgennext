import ServiceDetail from './ServiceDetail'
import { services } from '../data/services'

export default function ApplicationDevelopment() {
  return <ServiceDetail service={services[1]} />
}
