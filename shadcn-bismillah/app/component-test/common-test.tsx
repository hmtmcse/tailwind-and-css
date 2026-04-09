import ButtonTesting from "~/component-test/button-testing";

export async function loader() {
    return {message: "Hello Task"}
}


export default function CommonTest() {
    return(
        <>
            <ButtonTesting/>
        </>
    )
}