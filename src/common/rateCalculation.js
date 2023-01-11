export const rateCalculation = (currency1, currency2, inputValue, rateInfo, operationType) => {
    let result;

    if (currency1 === currency2) return inputValue;

    if (currency1 === 'UAH') {
        const convertibleCurrencyTo = rateInfo.filter(el => el.ccy === currency2);
        const valueOfRateCurrencyTo = operationType === 'sale' ? +convertibleCurrencyTo[0].sale : +convertibleCurrencyTo[0].buy;
        result = inputValue / valueOfRateCurrencyTo;
        return result;
    }

    if (currency2 === 'UAH') {
        const convertibleCurrencyFrom = rateInfo.filter(el => el.ccy === currency1);
        const valueOfRateCurrencyFrom = operationType === 'sale' ? +convertibleCurrencyFrom[0].sale : +convertibleCurrencyFrom[0].buy;
        result = inputValue * valueOfRateCurrencyFrom;
        return result;
    }

    const convertibleCurrencyFrom = rateInfo.filter(el => el.ccy === currency1);
    const valueOfRateCurrencyFrom = operationType === 'sale' ? +convertibleCurrencyFrom[0].sale : +convertibleCurrencyFrom[0].buy;

    const convertibleCurrencyTo = rateInfo.filter(el => el.ccy === currency2);
    const valueOfRateCurrencyTo = operationType === 'sale' ? +convertibleCurrencyTo[0].sale : +convertibleCurrencyTo[0].buy;

    const price = inputValue / valueOfRateCurrencyFrom;
    result = price * valueOfRateCurrencyTo;

    return result;
}