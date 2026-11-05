import type { Metadata } from 'next'
import ProjectPage from '@/components/ProjectPage'
import TibMentor from '@/components/TibMentor'

export const metadata: Metadata = {
  title: 'TibMentor — iMed Team MCHJ',
  description: 'TibMentor — tibbiyot talabalari va shifokorlar uchun onlayn ta’lim platformasi: video va audio darslar, ilova ichidagi testlar, fan bo‘yicha Premium.',
}

export default function Page() {
  return (
    <ProjectPage current="tibmentor">
      <TibMentor />
    </ProjectPage>
  )
}
