import axios from "axios";

export const issueCertificate = async (certificateName, receiver, address) =>
{
    try
    {
        return await axios.post('https://3.39.120.32:9200/back-office/certificate/issue', {
            certificate_name: certificateName,
            name: receiver,
            wallet_address: address
        })
    }
    catch (error)
    {
        throw error;
    }
}