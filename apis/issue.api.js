import axios from "axios";

const baseUrl = "http://13.125.30.25:9200";

export default function useIssueModule()
{
    const apis = {};
    apis.issueCertificate = async (certificate, address, receiver) =>
    {
        const res = await axios.post(`${baseUrl}/back-office/certificate/issue`, { certificate_id: certificate, wallet_address: address, user_name: receiver });

        if(res.data)
        {
            return res.data;
        }
    };

    return apis;
}
