import Layout from '@/app/layout';
import AppUserHomePage from '@/app/pages/appuser/AppUserHomePage';
import { getHomeCommonData, getHomeUserData, getHtmlData } from '@/services/appusers';


export default async function page() {
  const listHomeCommonData = await getHomeCommonData();
  const htmlData = await getHtmlData();
  const listHomeUserData = await getHomeUserData();

  return (
    <Layout criteria={true}>
      <div className=' bg-[#F6F6F6] lg:mt-28'>
        <AppUserHomePage listHomeCommonData={listHomeCommonData} htmlData={htmlData} listHomeUserData={listHomeUserData} />
      </div>
    </Layout>
  )
}
