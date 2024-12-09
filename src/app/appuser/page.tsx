import { fetchAppUsers } from "@/services/appusers";
import TeamBanner from "@/app/pages/homes/TeamBanner";
import AppUserList from "@/app/pages/homes/AppUserList";
import Layout from "@/app/layout";


export default async function page() {
  const appUserData = await fetchAppUsers();

  return (
    <Layout criteria={true}>
      <TeamBanner />
      <AppUserList appUserData={appUserData} />
    </Layout >
  )
}
