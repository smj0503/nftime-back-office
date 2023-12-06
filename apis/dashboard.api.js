import axios from "axios";

export const getStatistics = async () =>
{
    try
    {
        return await axios.get('http://13.125.30.25:9200/back-office/stat');
    }
    catch (error)
    {
        return error;
    }
};

export const getCompanyList = async () =>
{
    try
    {
        return await axios.get('http://13.125.30.25:9200/company/list');
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
        return await axios.get('http://13.125.30.25:9200/certificate/list');
    }
    catch (error)
    {
        return error;
    }
};