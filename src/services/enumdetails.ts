import axios from "axios";


const fetchEnumDetailsData = async (): Promise<any> => {
    const payload = {
        "form": null,
        "condition": null
    }

    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/EnumDetail/Get`, payload,
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

export {
    fetchEnumDetailsData
}