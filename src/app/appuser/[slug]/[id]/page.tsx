import { fetchAppUsers } from '@/services/appusers';
import AppUserMainForm from '@/app/pages/appuser/AppUserMainForm';
import Layout from '@/app/layout';

const EditAppUserPage = async ({ params }: { params: { id: string, type: string } }) => {
    const { id, type } = params;
    let appUserData;

    if (id) {
        const data = await fetchAppUsers();
        appUserData = data.filter((val: any) => val.id == id);
    }

    return (
        <Layout criteria={false}>
            <div className='  bg-[#F6F6F6]'>
                <AppUserMainForm appUserData={appUserData[0]} role={type} />
            </div>
        </Layout>
    );
};

export default EditAppUserPage;