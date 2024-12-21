import Layout from '@/app/layout';
import AppUsersViewPage from '@/app/pages/appuser/AppUsersViewPage'
import { fetchAppUsersById } from '@/services/appusers';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await  params;

  const appUserData = await fetchAppUsersById(id);

  return (
    <Layout>
      <AppUsersViewPage appUserData={appUserData} />
    </Layout>
  )
}
