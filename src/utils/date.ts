import dayjs from "dayjs";

/**
 * Parses a date into a date formatted as "MMMM DD, YYYY" e.g. "September 14, 2021"
 * @param date Date to parse.
 */
export const dateToLongDate = (date: string | Date) => {
    return dayjs(date).format("MMMM DD, YYYY");
};

/**
 * Parses a date into a date formatted as "MMMM YYYY" e.g. "March 2019"
 * @param date Date to parse.
 */
export const dateToMonthYear = (date: string | Date) => {
    return dayjs(date).format("MMMM YYYY");
};

export const isDateWithinRange = (date: string | Date, rangeNumber: number, rangeType: "day" | "month" | "year") => {
    const dateToCompare = dayjs(date);
    const today = dayjs();
    const range = dayjs().subtract(rangeNumber, rangeType);

    return dateToCompare.isAfter(range);
};
