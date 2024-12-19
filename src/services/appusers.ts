

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/Get`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            cache: "no-cache"
        });

        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/GetById`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                cache: "no-cache"
            });

        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/Draft`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                cache: "no-cache"
            });

        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
};


const addAppUser = async (payload: any): Promise<any> => {

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/Add`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                cache: "no-cache"
            }
        );


        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

const updateAppUser = async (payload: any): Promise<any> => {

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/Update`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                cache: "no-cache"
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

const deleteAppUser = async (userId: string): Promise<any> => {
    const payload = {
        Id: userId
    }

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/Delete`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload),
                cache: "no-cache"
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error deleting AppUser:', error);
        throw error;
    }
};

const fileUploadAppUser = async (image: File): Promise<any> => {
    try {
        const formDataImage = new FormData();
        formDataImage.append('file', image);

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/FileUpload`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: JSON.stringify(formDataImage),
                cache: "no-cache"
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Image upload error:', error);
        throw error;
    }
};


const uploadAppUser = async (formData: FormData): Promise<any> => {
    try {

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/FileUpload`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: JSON.stringify(formData),
                cache: "no-cache"
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Image upload error:', error);
        throw error;
    }
};


const downloadFileAppUser = async (file: CustomFile): Promise<Blob> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/AppUser/Download`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(file),
                cache: "no-cache"
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
        return data;

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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/GetHomeCommonData`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                cache: "no-cache"
            });
        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/GetHtmlData`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                cache: "no-cache"
            });
        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/AppUser/GetHomeUserData`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
                cache: "no-cache"
            });
        if (!response.ok) {
            throw new Error(`HTTP error ! status",${response.status}`);
        }

        const data = await response.json();
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