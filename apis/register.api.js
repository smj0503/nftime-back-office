import axios from 'axios';

export const registerCompany = async (formData) =>
{
    const res = await axios.post('http://13.125.30.25:9200/back-office/company/register', formData);
    if(res.data)
    {
        return res.data;
    }
}

export const registerCertificate = async (formData) =>
{
    const res = await axios.post('http://13.125.30.25:9200/back-office/certificate/register', formData);
}
