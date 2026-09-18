import IndustryDetail from './IndustryDetail'
import { industries } from '../data/industries'

export default function Government() {
  return <IndustryDetail industry={industries[7]} />
}
