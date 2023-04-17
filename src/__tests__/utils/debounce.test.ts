import debounce from "utils/debounce";

describe("debounce function", () => {
    const functionToDebounce = () => {
        return 11;
    };
    test("debounce with delay", () => {
        const debounced = debounce(functionToDebounce, 1000);
        const result = debounced();
        const id = setTimeout(() => {
            expect(functionToDebounce).toHaveBeenCalled();
            expect(result).toBe(11);
        }, 1000);
        clearTimeout(id);
    }, );
});
