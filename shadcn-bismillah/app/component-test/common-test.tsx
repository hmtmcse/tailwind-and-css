import ButtonTesting from "~/component-test/button-testing";
import CardTesting from "~/component-test/card-testing";

export async function loader() {
    return {message: "Hello Task"}
}


export default function CommonTest() {
    return(
        <>
            <CardTesting/>
            <ButtonTesting/>
        </>
    )
}