import { Metadata } from 'next';
import { getAllProjects } from '@/lib/db';
import ProjectsSection from '@/components/ProjectsSection';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Layihələr & Uğurlar | Atəş Balıyev',
  description: 'SAF 2025 VEX V5 Robotexnika Qızıl Medalı, Bondify Telegram Mini App, Electrolify e-ticarət vitrini və Fermerim.az TransportTech qələbəsi.',
  openGraph: {
    title: 'Layihələr & Uğurlar | Atəş Balıyev',
    description: 'SAF 2025 Qızıl Medal, Bondify, Electrolify, Fermerim.az və TransportTech.',
    url: `${SITE_CONFIG.url}/projects`,
  },
};

export default async function ProjectsArchivePage() {
  const projects = await getAllProjects();

  return (
    <div className="pt-6">
      <ProjectsSection projects={projects} isStandalonePage={true} />
    </div>
  );
}
