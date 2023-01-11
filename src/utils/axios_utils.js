import axios from 'axios';

const request = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://api.privatbank.ua/p24api/pubinfo',
    headers: {
        'Content-type': 'application/json',
    }
});

export const getRate = async (rateType) => {
    return await request.get(`?exchange&coursid=${rateType}`);
}