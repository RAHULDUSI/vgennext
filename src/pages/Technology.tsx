import IndustryDetail from './IndustryDetail'
import { industries } from '../data/industries'

export default function Technology() {
  return <IndustryDetail industry={industries[5]} />
}
