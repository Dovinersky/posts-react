import { useState } from "react";

export const useFetching = (fetchCallback: Function): [Function, boolean, string] => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const fetchFunction = async (...args: any) => {
        try {
            setIsLoading(true);
            await fetchCallback(...args);
        } catch (error: any) {
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    return [fetchFunction, isLoading, errorMessage];
};
