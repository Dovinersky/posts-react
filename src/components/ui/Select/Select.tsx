import React, { FC, SelectHTMLAttributes } from "react";
import wordsMerge from "../../../utils/wordsMerge";

interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    options?: string[];
    prefix?: string;
    defaultOption?: string;
}

const Select: FC<SelectProps> = ({ options, defaultOption = "", prefix, ...props }) => {
    if (props.className) props.className = wordsMerge("uikit-select", props.className);
    else props.className = "uikit-select";
    return (
        <select {...props}>
            {/* <option>{defaultOption}</option> */}
            {options &&
                options.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                        {`${prefix}${option}`}
                    </option>
                ))}
        </select>
    );
};

export default Select;
