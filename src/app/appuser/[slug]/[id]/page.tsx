import { fetchAppUsersById } from '@/services/appusers';
import AppUserMainForm from '@/app/pages/appuser/AppUserMainForm';
import Layout from '@/app/layout';

const EditAppUserPage = async ({
    params,
  }: {
    params: Promise<{ id: string }>
  }) => {
    const { id } = await  params;
    let appUserData;

    if (id) {
        appUserData = await  fetchAppUsersById(id);
    }

    return (
        <Layout criteria={false}>
            <div className='bg-[#F6F6F6]'>
                <AppUserMainForm appUserData={appUserData} />
            </div>
        </Layout>
    );
};

export default EditAppUserPage;