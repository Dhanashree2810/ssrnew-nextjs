import { fetchAppUsers } from "@/services/appusers";
import AppUserList from "./pages/homes/AppUserList";
import TeamBanner from "./pages/homes/TeamBanner";

export default async function Home() {

  const appUserData = await fetchAppUsers();

  return (
    <>
     <TeamBanner/>
     <AppUserList appUserData={appUserData}/>
    </>
  );
}