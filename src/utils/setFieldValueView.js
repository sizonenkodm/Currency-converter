export const setFieldValueView = (value) => {
    const fractionalPart = value.toFixed(2) - Math.trunc(value);
    return (fractionalPart === 0 || fractionalPart === 1) ? value.toFixed(0).toString() : value.toFixed(2).toString()
}