export function GridSystemV1() {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-200">1</div>
                <div className="bg-blue-200">2</div>
                <div className="bg-blue-200">3</div>
            </div>

            <div className={"mt-14 font-bold text-3xl text-green-950"}>Responsive</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-green-200">Box</div>
            </div>

            <div className={"mt-14 font-bold text-3xl text-green-950"}>12-Column System (Closest to Bootstrap)</div>

            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-red-200">
                    A
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-red-200">
                    B
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4 bg-red-200">
                    C
                </div>
            </div>


            <div className={"mt-14 font-bold text-3xl text-green-950"}>Unequal Columns (Like col-8 + col-4)</div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8 bg-yellow-200">Main</div>
                <div className="col-span-4 bg-yellow-300">Sidebar</div>
            </div>

            <div className={"mt-14 font-bold text-3xl text-green-950"}>Nested Grid</div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8 bg-gray-200">
                    Parent
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-white">Child 1</div>
                        <div className="bg-white">Child 2</div>
                    </div>
                </div>
            </div>


            <div className={"mt-14 font-bold text-3xl text-green-950"}>Flex Alternative (Closer to Bootstrap Row)</div>
            <div className="flex flex-wrap gap-4">
                <div className="w-full md:w-1/2 lg:w-1/3 bg-purple-200">1</div>
                <div className="w-full md:w-1/2 lg:w-1/3 bg-purple-200">2</div>
                <div className="w-full md:w-1/2 lg:w-1/3 bg-purple-200">3</div>
            </div>

            <div className={"mt-14 font-bold text-3xl text-green-950"}>Flex</div>
            <div className="flex">
                <div className="bg-blue-200 w-1/2">A</div>
                <div className="bg-red-300 w-1/2">B</div>
            </div>

            <div className={"mt-14 font-bold text-3xl text-green-950"}>Basic Flex Row</div>
            <div className="flex gap-2">
                <div className="w-1/3 bg-blue-200">1</div>
                <div className="w-1/3 bg-blue-200">2</div>
                <div className="w-1/3 bg-blue-200">3</div>
            </div>


            <div className={"mt-14 font-bold text-3xl text-green-950"}>Responsive Columns</div>
            <div className="flex flex-wrap gap-4">
                <div className="w-full md:w-1/2 lg:w-1/3 bg-green-200">
                    Box
                </div>
            </div>

            <div className={"mt-14 font-bold text-3xl text-green-950"}>Unequal Columns (col-8 + col-4)</div>
            <div className="flex gap-4">
                <div className="w-2/3 bg-yellow-200">Main</div>
                <div className="w-1/3 bg-yellow-300">Sidebar</div>
            </div>

            <div className={"mt-14 font-bold text-3xl text-green-950"}>Auto Equal Columns</div>
            <div className="flex">
                <div className="flex-1 bg-purple-200">1</div>
                <div className="flex-1 bg-purple-500">2</div>
            </div>

            <div className={"mt-14 font-bold text-3xl text-green-950"}>12 Column Layout (Flex Version)</div>
            <div className="flex flex-wrap">
                <div className="w-1/12 bg-blue-100">1</div>
                <div className="w-1/12 bg-blue-200">1</div>
                <div className="w-1/12 bg-blue-300">1</div>
                <div className="w-1/12 bg-blue-400">1</div>
                <div className="w-1/12 bg-blue-500">1</div>
                <div className="w-1/12 bg-blue-600">1</div>
                <div className="w-1/12 bg-blue-700">1</div>
                <div className="w-1/12 bg-blue-800">1</div>
                <div className="w-1/12 bg-blue-900">1</div>
                <div className="w-1/12 bg-blue-950">1</div>
                <div className="w-1/12 bg-blue-100">1</div>
                <div className="w-1/12 bg-blue-200">1</div>
            </div>

            <div className={"mt-14 font-bold text-3xl text-green-950"}>Mixed 12 Column Layout</div>
            <div className="flex flex-wrap gap-4">
                <div className="w-1/4 bg-blue-200 p-4">col-3</div>
                <div className="w-1/2 bg-blue-300 p-4">col-6</div>
                <div className="w-1/4 bg-blue-400 p-4">col-3</div>
            </div>


        </>
    )
}