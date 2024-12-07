import AppUsersViewPage from '@/app/pages/appuser/AppUsersViewPage'
import { fetchAppUsers } from '@/services/appusers';

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;

  const appUserData = await fetchAppUsers();
  const idFltr = appUserData.filter((val: any) => val.id == id);

  return (
    <div>
    <AppUsersViewPage appUserData={idFltr[0]} />
    </div>
  )
}
