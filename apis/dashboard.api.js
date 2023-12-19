import axios from "axios";

const baseUrl = "http://13.125.30.25:9200";

export default function useDashboardModule()
{
    const apis= {};
    apis.getStatistics = async () =>
    {
        const { data } = await axios.get(`${baseUrl}/back-office/stat`);
        return data;
    };

    apis.getCompanyList = async () =>
    {
        const { data } = await axios.get(`${baseUrl}/company/list`);
        return data;
    };

    apis.getCertificateList = async () =>
    {
        const { data } = await axios.get(`${baseUrl}/certificate/list`);
        return data;
    };

    return apis;
}
