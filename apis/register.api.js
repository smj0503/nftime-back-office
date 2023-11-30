import axios from 'axios';

export const registerCompany = async (formData) =>
{
    try
    {
        const { data } = await axios.post('https://3.39.120.32:9200/back-office/company/register', formData);

        return data;
    }
    catch (error)
    {
        throw error;
    }
}

export const registerCertificate = async (formData) =>
{
    try
    {
        const { data } = await axios.post('https://3.39.120.32:9200/back-office/certificate/register', formData);

        return data;
    }
    catch (error)
    {
        throw error;
    }
}