import type { Metadata } from 'next'
import ProjectPage from '@/components/ProjectPage'
import Tibnoma from '@/components/Tibnoma'

export const metadata: Metadata = {
  title: 'TIBNOMA — iMed Team MCHJ',
  description: 'TIBNOMA — tibbiy adabiyotlarni targ‘ib qilish, kitob sharhlari va buyurtma asosida xarid qilish loyihasi.',
}

export default function Page() {
  return (
    <ProjectPage current="tibnoma">
      <Tibnoma />
    </ProjectPage>
  )
}
