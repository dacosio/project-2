export const getCurrentDate = (): string => {
    const date = new Date();
    return date.toLocaleDateString();
};

export default getCurrentDate;