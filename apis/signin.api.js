import axios from "axios";

export default function useAuthModule()
{
    const apis = {};
    apis.signIn = async (id, password) =>
    {
        const result = await axios.post('http://13.125.30.25:9200/back-office/login', { id: id, password: password });

        if(result.data)
        {
            return result.data;
        }
    };

    return apis;
}
