import { Metadata } from 'next';
import { getAllProjects } from '@/lib/db';
import ProjectsSection from '@/components/ProjectsSection';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Layihələr & Hakaton Qalibiyyətləri',
  description: 'Atəş Balıyev tərəfindən hazırlanmış rəqəmsal layihələr: Bondify, Fermerim.az, AiXəbər, Baliyews Studio mobil oyunları, TransportTech və SAF 2025 hakaton qələbələri.',
  openGraph: {
    title: 'Layihələr & Hakaton Qalibiyyətləri | Atəş Balıyev',
    description: 'Bondify, Fermerim.az, AiXəbər, Baliyews Studio mobil oyunları və qələbələr.',
    url: `${SITE_CONFIG.url}/layiheler`,
  },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="pt-6">
      <ProjectsSection projects={projects} isStandalonePage={true} />
    </div>
  );
}
