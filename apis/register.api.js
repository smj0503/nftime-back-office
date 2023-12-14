import axios from 'axios';

export const registerCompany = async (formData) =>
{
    try
    {
        await axios.post('http://13.125.30.25:9200/back-office/company/register', formData);
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
        const { data } = await axios.post('http://13.125.30.25:9200/back-office/certificate/register', formData);

        return data;
    }
    catch (error)
    {
        throw error;
    }
}
