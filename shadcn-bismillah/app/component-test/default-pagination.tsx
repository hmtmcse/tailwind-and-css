import {cn} from "~/lib/utils";

export interface PaginationProps {
    totalPage: number
    currentPage: number
    itemPerPage: number
    onChangePagination?: (event: any, pageNumber: number) => void;
    onChangeItemPerPage?: (event: any, itemPerPage: number) => void;
}

export const DOTS = "...";

interface PaginationParams {
    currentPage: number;
    totalPage: number;
    siblingCount?: number;
}

function range(start: number, end: number): number[] {
    return Array.from(
        {length: end - start + 1},
        (_, index) => start + index
    );
}

export function calculatePagination({currentPage, totalPage, siblingCount = 1, }: PaginationParams): Array<number | string> {

    /*
     Example:
     1 ... 4 5 6 ... 10
    */

    // total visible items before using dots
    const totalVisiblePages = siblingCount + 5;

    // show all pages
    if (totalVisiblePages >= totalPage) {
        return range(1, totalPage);
    }

    const leftSibling = Math.max(
        currentPage - siblingCount,
        1
    );

    const rightSibling = Math.min(
        currentPage + siblingCount,
        totalPage
    );

    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPage - 2;

    // ---------------------------------------------------
    // CASE 1
    // 1 2 3 4 5 ... 20
    // ---------------------------------------------------

    if (!showLeftDots && showRightDots) {
        const leftPages = range(
            1,
            3 + siblingCount * 2
        );

        return [
            ...leftPages,
            DOTS,
            totalPage,
        ];
    }

    // ---------------------------------------------------
    // CASE 2
    // 1 ... 16 17 18 19 20
    // ---------------------------------------------------

    if (showLeftDots && !showRightDots) {
        const rightPages = range(
            totalPage - (3 + siblingCount * 2) + 1,
            totalPage
        );

        return [
            1,
            DOTS,
            ...rightPages,
        ];
    }

    // ---------------------------------------------------
    // CASE 3
    // 1 ... 8 9 10 ... 20
    // ---------------------------------------------------

    const middlePages = range(
        leftSibling,
        rightSibling
    );

    return [
        1,
        DOTS,
        ...middlePages,
        DOTS,
        totalPage,
    ];
}


export function DefaultPagination({}: PaginationProps) {

    const getRegularItem = (content: any) => {
        return (
            <span className={cn(
                "bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50",
                "cursor-pointer",
                "h-9 flex items-center justify-center border",
                "leading-5 px-3 text-sm text-body font-medium"
            )}>Previous</span>
        )
    }

    return (
        <>
            <nav className="flex items-center space-x-4">
                <ul className="flex -space-x-px text-sm">
                    <li>{calculatePagination({
                        currentPage: 21,
                        totalPage: 50,
                        siblingCount: 2
                    })}</li>

                </ul>
            </nav>
        </>
    )
}