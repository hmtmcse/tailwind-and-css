export function CardSystemV1() {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
                <img
                    src="https://avatars.githubusercontent.com/u/1875791?v=4"
                    alt="Card image"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h5 className="text-lg font-semibold mb-2">Card Title</h5>

                    <p className="text-gray-600 text-sm mb-4">
                        This is a Bootstrap-style card built using Tailwind CSS v4 utilities.
                    </p>

                    <a href="#"
                       className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        Go somewhere
                    </a>
                </div>

            </div>
        </>
    )
}