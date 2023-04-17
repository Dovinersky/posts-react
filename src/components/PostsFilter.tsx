import React, { FC } from "react";
import { useAppDispatch } from "../hooks/storeHooks";
import TextInput from "./ui/TextInput/TextInput";
import { changeSort, changeText, sortTypes } from "../store/slices/postsFilterSlice";
import Select from "./ui/Select/Select";


const PostsFilter: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="PostsFilter">
            <TextInput
                placeholder="Filter"
                useDebounce
                onChangeCallback={(event: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch(changeText(event.target.value));
                }}
            />
            <Select
                defaultOption="Sort by"
                options={["Title", "Content"]}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    dispatch(changeSort(event.target.value as sortTypes));
                }}
            />
        </div>
    );
};

export default PostsFilter;
