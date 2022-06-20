export const getHoverColorFromNumber = (number: number) => {
    if (number === 0) {
        return 'group-hover:text-red-500';
    }

    if (number % 3 === 0) {
        return 'group-hover:text-yellow-500';
    }

    if (number % 2 === 0) {
        return 'group-hover:text-blue-500';
    }

    if (number % 1 === 0) {
        return 'group-hover:text-green-500';
    }

    return 'group-hover:text-red-500';
};
