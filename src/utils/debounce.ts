const debounce = (callback: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout | number;
    return function (...args: unknown[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
};

export default debounce;
