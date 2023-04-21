import wordsMerge from "utils/wordsMerge";

describe("Validate different arguments", () => {
    test("One word per arg", () => {
        expect(wordsMerge("green", "fixed")).toBe("green fixed");
    });
    test("First arg is many words string, second one is only word", () => {
        expect(wordsMerge("green sticky dimmed", "quit")).toBe("green sticky dimmed quit");
    });
    test("First arg is falsy string, second one is words filled", () => {
        expect(wordsMerge("", "green fixed")).toBe("green fixed");
    });
});

describe("Validate the same arguments", () => {
    test("Same word", () => {
        expect(wordsMerge("sticky", "sticky")).toBe("sticky sticky");
    });
    test("Many equal words", () => {
        expect(wordsMerge("sticky dimmed yellow", "sticky dimmed yellow")).toBe(
            "sticky dimmed yellow sticky dimmed yellow"
        );
    });
    test("Two falsy strings", () => {
        expect(wordsMerge("", "")).toBe("");
    });
});

describe("Floating spaces", () => {
    test("Falsy strings with many spaces for one arg", () => {
        expect(wordsMerge("   ", "greenish dimmed")).toBe("greenish dimmed");
    });
    test("Falsy string with many spaces for both args", () => {
        expect(wordsMerge("   ", "   ")).toBe("");
    });
});
