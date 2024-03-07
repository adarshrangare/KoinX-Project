import axios from "axios";


export const fetchBitCoinConversion = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
            params: {
                ids: 'bitcoin',
                vs_currencies: 'usd,inr',
                include_24hr_change: true
            }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error({message:'Failed to retrieve data. Status code:', status : response.status});
        }
    } catch (error) {
        throw new Error(error);
    }
};


export const fetchBitCoinData = async () => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin');

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error({message:'Failed to retrieve data. Status code:', status : response.status});
        }
    } catch (error) {
        throw new Error(error);
    }
};