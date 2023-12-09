import axios from "axios";

export const signin = async (id, password) =>
{
    try
    {
        return await axios.post('http://13.125.30.25:9200/back-office/login', { id: id, password: password });
    }
    catch (error)
    {
        console.log('error : ', error);

        return error;
    }
};