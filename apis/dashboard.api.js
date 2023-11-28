import axios from "axios";

export const getStatistics = async () =>
{
    try
    {
        return await axios.get('https://3.39.120.32:9200/back-office/stat', {});
    }
    catch (error)
    {
        console.log('error : ', error);
    }
}