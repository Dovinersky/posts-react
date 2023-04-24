import React, { FC, ReactNode } from "react";
import Button from "../Button/Button";
import Portal from "./Portal";

export interface ModalProps {
    isShown: boolean;
    title?: string;
    controls?: "submit" | "save" | "info" | "confirm" | "none";
    size?: "small" | "normal" | "extended" | "fullviewport";
    useBackgroundDim?: boolean;
    useBackgroundBlur?: boolean;
    onSubmit?(): void;
    onReject?(): void;
    onClose?(): void;
    children?: ReactNode;
}

const Modal: FC<ModalProps> = ({
    isShown = false,
    title,
    controls = "submit",
    size = "normal",
    useBackgroundDim = true,
    useBackgroundBlur = false,
    onClose,
    onSubmit,
    onReject,
    children,
}) => {
    if (!isShown) return null;
    return (
        <Portal>
            <div
                className={`modal ${useBackgroundDim && "dimmed"} ${
                    useBackgroundBlur && "blurred"
                }`.trimEnd()}
                onClick={onClose}
            >
                <div
                    className={`modal-content ${size}`}
                    onClick={(event: React.MouseEvent) =>
                        event.stopPropagation()
                    }
                >
                    {title && <div className="title">{title}</div>}
                    <div className="body">{children && <>{children}</>}</div>
                    {controls == "none" ? null : (
                        <div className="controls">
                            {controls == "submit" || controls == "save" ? (
                                <>
                                    <Button color="accent" onClick={onSubmit}>
                                        {controls == "submit"
                                            ? "Submit"
                                            : "Save"}
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        onClick={onReject}
                                    >
                                        Cancel
                                    </Button>
                                </>
                            ) : controls == "confirm" ? (
                                <>
                                    <Button
                                        color="accent"
                                        variant="outlined"
                                        onClick={onSubmit}
                                    >
                                        Yes
                                    </Button>
                                    <Button
                                        color="accent"
                                        variant="outlined"
                                        onClick={onReject}
                                    >
                                        No
                                    </Button>
                                </>
                            ) : (
                                // controls == "info"
                                <Button variant="outlined" onClick={onSubmit}>
                                    OK
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
