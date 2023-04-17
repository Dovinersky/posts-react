import React, { FC } from "react";
import Button from "../Button/Button";
import PaginationButton from "../Button/PaginationButton";

export interface PaginationProps {
    pagesCount: number;
    selectedPage?: number;
    additionalAroundSelectedOffset?: number;
    onPageClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

const Pagination: FC<PaginationProps> = React.memo(
    ({ pagesCount, selectedPage = 1, additionalAroundSelectedOffset = 3, onPageClick }) => {
        if (pagesCount < 10) {
            const pages = [...Array(pagesCount)].map((item, index) => index + 1);
            return (
                <div className="uikit-pagination">
                    {pages.map((item) => (
                        <PaginationButton
                            key={item}
                            onClick={onPageClick}
                            className={item == selectedPage ? "active" : ""}
                        >
                            {item}
                        </PaginationButton>
                    ))}
                </div>
            );
        }
        if (selectedPage - additionalAroundSelectedOffset - 3 <= 1) {
            const pages = [...Array(additionalAroundSelectedOffset * 2 + 4)].map((item, index) => index + 1);
            return (
                <div className="uikit-pagination">
                    {pages.map((item) => (
                        <PaginationButton
                            key={item}
                            onClick={onPageClick}
                            className={item == selectedPage ? "active" : ""}
                        >
                            {item}
                        </PaginationButton>
                    ))}
                    <span className="dots">...</span>
                    <PaginationButton
                        key={pagesCount}
                        onClick={onPageClick}
                        className={pagesCount == selectedPage ? "active" : ""}
                    >
                        {pagesCount}
                    </PaginationButton>
                </div>
            );
        }

        if (selectedPage + additionalAroundSelectedOffset + 3 >= pagesCount) {
            const pages = [...Array(additionalAroundSelectedOffset * 2 + 4)]
                .map((item, index) => pagesCount - index)
                .reverse();
            return (
                <div className="uikit-pagination">
                    <PaginationButton key={1} onClick={onPageClick}>
                        {1}
                    </PaginationButton>
                    <span className="dots">...</span>
                    {pages.map((item) => (
                        <PaginationButton
                            key={item}
                            onClick={onPageClick}
                            className={item == selectedPage ? "active" : ""}
                        >
                            {item}
                        </PaginationButton>
                    ))}
                </div>
            );
        }

        const pages = [...Array(additionalAroundSelectedOffset * 2 + 1)].map(
            (item, index) => selectedPage - additionalAroundSelectedOffset + index
        );

        return (
            <div className="uikit-pagination">
                <PaginationButton key={1} onClick={onPageClick} className={1 == selectedPage ? "active" : ""}>
                    {1}
                </PaginationButton>
                <span className="dots">...</span>
                {pages.map((item) => (
                    <PaginationButton key={item} onClick={onPageClick} className={item == selectedPage ? "active" : ""}>
                        {item}
                    </PaginationButton>
                ))}
                <span className="dots">...</span>
                <PaginationButton
                    key={pagesCount}
                    onClick={onPageClick}
                    className={pagesCount == selectedPage ? "active" : ""}
                >
                    {pagesCount}
                </PaginationButton>
            </div>
        );
    }
);

export default Pagination;
