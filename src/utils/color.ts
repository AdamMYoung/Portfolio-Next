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

let colorIndex = 0;
const baseColors = ['red', 'blue', 'green', 'yellow', 'orange', 'cyan', 'indigo', 'purple'];
const colorSelection = baseColors.map((c) => `text-${c}-500`);

const repeatableColors: Record<string, string> = {};

export const getRepeatableColor = (key: string) => {
    const color = repeatableColors[key];

    if (color) {
        return color;
    }

    if (colorIndex + 1 > colorSelection.length - 1) {
        colorIndex = 0;
    } else {
        colorIndex++;
    }

    repeatableColors[key] = colorSelection[colorIndex];

    return repeatableColors[key];
};
