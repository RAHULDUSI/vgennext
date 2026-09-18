import IndustryDetail from './IndustryDetail'
import { industries } from '../data/industries'

export default function Healthcare() {
  return <IndustryDetail industry={industries[0]} />
}
