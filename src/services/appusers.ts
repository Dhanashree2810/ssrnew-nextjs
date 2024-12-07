import axios from "axios";

interface CustomFile {
    fileName: string;
    filePath: string;
    type: string;
}

const fetchAppUsers = async (): Promise<any> => {
    const payload = {
        form: null,
        condition: null
    };

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/Get`, payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

const fetchAppUsersById = async (appuserID: any): Promise<any> => {
    const payload = {
        "id": appuserID
    }

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/GetById`, payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};


const DraftAppUsersById = async (appuserID: any): Promise<any> => {
    const payload = {
        "id": appuserID
    }

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/Draft`, payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};


const addAppUser = async (payload: any): Promise<any> => {

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/Add`, payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to add AppUser. Please try again later.');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

const updateAppUser = async (payload: any): Promise<any> => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/Update`, payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to update AppUser. Please try again later.');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

const deleteAppUser = async (userId: string): Promise<any> => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/Delete`,
            { Id: userId },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        );

        if (response.status === 200) {
            return true;
        } else {
            throw new Error('Failed to delete AppUser. Please try again later.');
        }
    } catch (error) {
        console.error('Error deleting AppUser:', error);
        throw error;
    }
};

const fileUploadAppUser = async (image: File): Promise<any> => {
    try {
        const formDataImage = new FormData();
        formDataImage.append('file', image);

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/FileUpload`,
            formDataImage,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to upload image. Please try again later.');
        }
    } catch (error) {
        console.error('Image upload error:', error);
        throw error;
    }
};


const uploadAppUser = async (formData: FormData): Promise<any> => {
    try {

        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/FileUpload`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to upload image. Please try again later.');
        }
    } catch (error) {
        console.error('Image upload error:', error);
        throw error;
    }
};


const downloadFileAppUser = async (file: CustomFile): Promise<Blob> => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/Download`,
            file,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                responseType: 'blob',
            }
        );

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to download file. Please try again later.');
        }
    } catch (error) {
        console.error('Download file error:', error);
        throw error;
    }
};

const getHomeCommonData = async (): Promise<any> => {
    const payload = {
        "type": "default",
        "pageType": "admin",
        "condition": null
    }

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/GetHomeCommonData`, payload,
            {
                headers: { 'Content-Type': 'application/json' },
            });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};


const getHtmlData = async (): Promise<any> => {
    const payload = {
        "type": "default",
        "pageType": "admin",
        "language": "en",
        "condition": null
    }

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/GetHtmlData`, payload,
            {
                headers: { 'Content-Type': 'application/json' },
            });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};


const getHomeUserData = async (): Promise<any> => {
    const payload = {
        "type": "default",
        "pageType": "admin",
        "condition": null
    }

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/GetHomeUserData`, payload,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};

export {
    fetchAppUsers, updateAppUser, fetchAppUsersById, uploadAppUser, deleteAppUser,
    DraftAppUsersById, addAppUser, fileUploadAppUser, downloadFileAppUser,
    getHomeCommonData, getHtmlData, getHomeUserData
}