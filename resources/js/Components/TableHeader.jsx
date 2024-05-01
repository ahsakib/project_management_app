export default function TableHeader({
    name,
    sortChanged = () => {},
    children,
    sortFiled,
    sortDirection,
}) {
    return (
        <th

            onClick={() => {
                sortChanged(name);
            }}
            scope="col"
            className="px-6 py-3 cursor-pointer"

        >
            <div className="grid grid-cols-2 items-center">
                <div className="col-span-1 gap-2">{children}</div>
                <div className="col-span-1 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className={
                            "w-3 h-3 " +
                            (sortFiled === name && sortDirection === "asc"
                                ? "text-white"
                                : "")
                        }
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 15.75 7.5-7.5 7.5 7.5"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className={
                            "w-3 h-3 " +
                            (sortFiled === name && sortDirection === "desc"
                                ? "text-white"
                                : "")
                        }
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
            </div>
        </th>
    );
}
