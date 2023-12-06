import axios from "axios";

export const getStatistics = async () =>
{
    try
    {
        const { data } = await axios.get('http://13.125.30.25:9200/back-office/stat');

        return data;
    }
    catch (error)
    {
        console.log(error);
        return error;
    }
};

export const getCompanyList = async () =>
{
    try
    {
        const { data } = await axios.get('http://13.125.30.25:9200/company/list');

        return data;
    }
    catch (error)
    {
        return error;
    }
};

export const getCertificateList = async () =>
{
    try
    {
        const { data } = await axios.get('http://13.125.30.25:9200/certificate/list');

        return data;
    }
    catch (error)
    {
        return error;
    }
};