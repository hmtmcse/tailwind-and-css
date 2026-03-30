import "./assets/css/style.css"
import {Button} from "./shadcn/ui/button.tsx";
import {ButtonGroup} from "./shadcn/ui/button-group.tsx";
import {useEffect, useState} from "react";

export default function Application() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;

        if (dark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [dark]);

    return (
        <>
            <div className={"text-red-500 font-bold"}>
                Bismillah
            </div>

            <Button className={"mt-5"} variant={"secondary"} size={"sm"} onClick={() => setDark(!dark)}>Dark</Button>

            <br/>
            <br/>

            <Button className={"mt-5"} variant={"secondary"} size={"sm"}>Button</Button>

            <br/>
            <br/>

            <ButtonGroup>
                <Button variant="outline" size={"sm"}>Archive</Button>
                <Button variant="outline" size={"sm"}>Report</Button>
            </ButtonGroup>

        </>
    )
}