export const isValidNumber = (value: string) => {
    const regex = /^[0-9]*\.?[0-9]*$/;
    return regex.test(value);
};
