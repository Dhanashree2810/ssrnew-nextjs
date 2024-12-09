import Layout from "@/app/layout";
import AppUserMainForm from "@/app/pages/appuser/AppUserMainForm";

const AddAppUserPage = () => {
    return (
        <Layout criteria={false}>
            < AppUserMainForm />
        </Layout>
    );
};

export default AddAppUserPage;
