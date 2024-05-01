import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TableHeader from "@/Components/TableHeader";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link, router } from "@inertiajs/react";

export default function index({ auth, projects, queryParams = null }) {
    queryParams = queryParams || {};

    const SearchFiledInput = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("project.index", queryParams));
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        SearchFiledInput(name, e.target.value);
    };

    const shortChanged = (filedName) => {
        if (filedName === queryParams.sortFiled) {
            console.log("if");
            if (queryParams.sortDirection === "asc") {
                queryParams.sortDirection = "desc";
            } else {
                queryParams.sortDirection = "asc";
            }
        } else {
            console.log("else");
            queryParams.sortFiled = filedName;
            queryParams.sortDirection = "asc";
        }

        router.get(route("project.index", queryParams));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Project
                </h2>
            }
        >
            <Head title="Project" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <TableHeader
                                            name={"id"}
                                            sortChanged={shortChanged}
                                            sortFiled={queryParams.sortFiled}
                                            sortDirection={
                                                queryParams.sortDirection
                                            }
                                        >
                                            ID
                                        </TableHeader>
                                        <th scope="col" className="px-6 py-3">
                                            IMAGE
                                        </th>
                                        <TableHeader
                                            name={"name"}
                                            sortChanged={shortChanged}
                                            sortFiled={queryParams.sortFiled}
                                            sortDirection={
                                                queryParams.sortDirection
                                            }
                                        >
                                            NAME
                                        </TableHeader>
                                        <TableHeader
                                            name={"status"}
                                            sortChanged={shortChanged}
                                            sortFiled={queryParams.sortFiled}
                                            sortDirection={
                                                queryParams.sortDirection
                                            }
                                        >
                                            STATUS
                                        </TableHeader>

                                        <TableHeader
                                            name={"created_at"}
                                            sortChanged={shortChanged}
                                            sortFiled={queryParams.sortFiled}
                                            sortDirection={
                                                queryParams.sortDirection
                                            }
                                        >
                                            CREATE DATE
                                        </TableHeader>
                                        <TableHeader
                                            name={"due_date"}
                                            sortChanged={shortChanged}
                                            sortFiled={queryParams.sortFiled}
                                            sortDirection={
                                                queryParams.sortDirection
                                            }
                                        >
                                            DUE DATE
                                        </TableHeader>
                                        <TableHeader
                                            name={"created_by"}
                                            sortChanged={shortChanged}
                                            sortFiled={queryParams.sortFiled}
                                            sortDirection={
                                                queryParams.sortDirection
                                            }
                                        >
                                            CREATED BY
                                        </TableHeader>
                                        <th scope="col" className="px-6 py-3">
                                            ACTION
                                        </th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3"
                                        ></th>
                                        <th scope="col" className="px-6 py-3">
                                            <TextInput
                                                className="w-full"
                                                placeholder="Project Name"
                                                onBlur={(e) => {
                                                    SearchFiledInput(
                                                        "name",
                                                        e.target.value
                                                    );
                                                }}
                                                onKeyPress={(e) => {
                                                    onKeyPress("name", e);
                                                }}
                                                defaultValue={queryParams.name}
                                            />
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            <SelectInput
                                                className="w-full"
                                                onChange={(e) => {
                                                    SearchFiledInput(
                                                        "status",
                                                        e.target.value
                                                    );
                                                }}
                                                defaultValue={
                                                    queryParams.status
                                                }
                                            >
                                                <option value="">
                                                    Select Status
                                                </option>
                                                <option value="pending">
                                                    Pending
                                                </option>
                                                <option value="in_progress">
                                                    In Progress
                                                </option>
                                                <option value="completed">
                                                    Completed
                                                </option>
                                            </SelectInput>
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3"
                                        ></th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3"
                                        ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.data.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        >
                                            <th
                                                scope="row"
                                                className="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {item.id}
                                            </th>
                                            <td className="px-2 py-1">
                                                <img
                                                    className="w-16"
                                                    src={item.image_path}
                                                    alt=""
                                                />
                                            </td>
                                            <td className="px-2 py-1">
                                                {item.name}
                                            </td>
                                            <td className="p-4 border-blue-gray-50">
                                                <div className="w-max">
                                                    <div
                                                        className={
                                                            "relative grid items-center px-2 py-1 font-sans text-xs font-bold text-white uppercase rounded-md select-none whitespace-nowrap " +
                                                            PROJECT_STATUS_CLASS_MAP[
                                                                item.status
                                                            ]
                                                        }
                                                    >
                                                        <span className="">
                                                            {
                                                                PROJECT_STATUS_TEXT_MAP[
                                                                    item.status
                                                                ]
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-2 py-1">
                                                {item.created_at}
                                            </td>
                                            <td className="px-2 py-1">
                                                {item.due_date}
                                            </td>
                                            <td className="px-2 py-1">
                                                {item.created_by.name}
                                            </td>
                                            <td className="px-2 py-1">
                                                <Link
                                                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    href={route(
                                                        "project.edit",
                                                        item.id
                                                    )}
                                                >
                                                    Edit
                                                </Link>

                                                <Link
                                                    className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                    href={route(
                                                        "project.destroy",
                                                        item.id
                                                    )}
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="pb-4 border-t border-blue-gray-50">
                                <Pagination link={projects.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
