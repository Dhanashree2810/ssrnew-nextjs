import AppUserHomePage from '@/app/pages/appuser/AppUserHomePage';
import { getHomeCommonData, getHomeUserData, getHtmlData } from '@/services/appusers';


export default async function page() {
  const listHomeCommonData = await getHomeCommonData();
  const htmlData = await getHtmlData();
  const listHomeUserData = await getHomeUserData();

  return (
    <div className=' bg-[#F6F6F6]'>
      <AppUserHomePage listHomeCommonData={listHomeCommonData} htmlData={htmlData} listHomeUserData={listHomeUserData}/>
    </div>
  )
}
