import { fetchAppUsers } from "@/services/appusers";
import TeamBanner from "@/app/pages/homes/TeamBanner";
import AppUserList from "@/app/pages/appuser/AppUserList";
import Layout from "@/app/layout";


export default async function page() {
  const appUserData = await fetchAppUsers();

  return (
    <Layout>
      <TeamBanner />
      <AppUserList appUserData={appUserData} />
    </Layout >
  )
}
