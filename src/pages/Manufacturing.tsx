import IndustryDetail from './IndustryDetail'
import { industries } from '../data/industries'

export default function Manufacturing() {
  return <IndustryDetail industry={industries[3]} />
}
