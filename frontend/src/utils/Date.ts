export const getCurrentDate = (): string => {
  const date = new Date();
  return date.toLocaleDateString();
};

export const calculateDaysPassed = (targetDate: Date): number => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - targetDate.getTime();
  const daysPassed = timeDifference / (1000 * 60 * 60 * 24);
  return Math.floor(daysPassed);
};

export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return date.toLocaleDateString(undefined, options);
};
