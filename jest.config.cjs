module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jestSetup.ts"],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
        "^assets(.*)$": "<rootDir>/src/assets/$1",
        "^components(.*)$": "<rootDir>/src/components/$1",
        "^hooks(.*)$": "<rootDir>/src/hooks/$1",
        "^models(.*)$": "<rootDir>/src/models/$1",
        "^pages(.*)$": "<rootDir>/src/pages/$1",
        "^routes(.*)$": "<rootDir>/src/routes/$1",
        "^store(.*)$": "<rootDir>/src/store/$1",
        "^styles(.*)$": "<rootDir>/src/styles/$1",
        "^utils(.*)$": "<rootDir>/src/utils/$1",
    },
};
