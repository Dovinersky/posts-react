import { PersonSVG } from "assets/SVGHub";
import { useAppDispatch, useAppSelector } from "hooks/storeHooks";
import React, { useState } from "react";
import { unauthorize } from "store/slices/authSlice";
import Modal from "./ui/Modal/Modal";

interface UserCardProps {
    userName: string;
    usermail: string;
}

const UserCard = () => {
    const [isModalShown, setIsmodalShown] = useState(false);
    const userBaseInfo = useAppSelector((state) => state.auth.userBaseInfo);
    const dispatch = useAppDispatch();

    return (
        <>
            <div
                className="user-card"
                onClick={() => {
                    setIsmodalShown(true);
                }}
            >
                <div className="name">
                    <p>{userBaseInfo.username}</p>
                    <p>{userBaseInfo.email}</p>
                </div>
                <PersonSVG />
            </div>
            <Modal
                isShown={isModalShown}
                controls="confirm"
                title={`Logout ${userBaseInfo.username}?`}
                onClose={() => {
                    setIsmodalShown(false);
                }}
                onSubmit={() => dispatch(unauthorize())}
                onReject={() => setIsmodalShown(false)}
            >
                <p>After logout you will be able to choose any available account on login page.</p>
            </Modal>
        </>
    );
};

export default UserCard;
