import React, { FC } from "react";
import wordsMerge from "utils/wordsMerge";
import debounce from "utils/debounce";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onChangeCallback?(event: React.ChangeEvent<HTMLInputElement>): void;
    useDebounce?: boolean;
    debounceDelay?: number;
}

const TextInput: FC<TextInputProps> = ({ onChangeCallback, useDebounce, debounceDelay = 800, ...props }) => {
    if (useDebounce && onChangeCallback) onChangeCallback = debounce(onChangeCallback, debounceDelay);
    return <input {...props} className={wordsMerge("uikit-text-input", props.className)} type="text" onChange={onChangeCallback} />;
};

export default TextInput;
