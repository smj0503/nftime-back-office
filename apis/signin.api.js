import axios from "axios";

const baseUrl = "http://13.125.30.25:9200";

export default function useAuthModule()
{
    const apis = {};
    apis.signIn = async (id, password) =>
    {
        const res = await axios.post(`${baseUrl}/back-office/login`, { id: id, password: password });

        if(res.data)
        {
            return res.data;
        }
    };

    return apis;
}
