import Layout from '@/app/layout';
import AppUsersViewPage from '@/app/pages/appuser/AppUsersViewPage'
import { fetchAppUsersById } from '@/services/appusers';

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const appUserData = await fetchAppUsersById(id);

  return (
    <Layout criteria={false}>
      <AppUsersViewPage appUserData={appUserData} />
    </Layout>
  )
}
