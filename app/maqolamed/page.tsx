import type { Metadata } from 'next'
import ProjectPage from '@/components/ProjectPage'
import MaqolaMed from '@/components/MaqolaMed'

export const metadata: Metadata = {
  title: 'MaqolaMed — iMed Team MCHJ',
  description: 'MaqolaMed — tibbiyotdagi eng muhim ilmiy maqolalar, tadqiqotlar va klinik qo‘llanmalar o‘zbek tilida.',
}

export default function Page() {
  return (
    <ProjectPage current="maqolamed">
      <MaqolaMed />
    </ProjectPage>
  )
}
