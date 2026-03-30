import "./assets/css/style.css"
import {Button} from "./shadcn/ui/button.tsx";
import {ButtonGroup} from "./shadcn/ui/button-group.tsx";

export default function Application(){
    return (
        <>
            <div className={"text-red-500 font-bold"}>
                Bismillah
            </div>

            <Button variant={"secondary"} size={"sm"}>Button</Button>

            <ButtonGroup>
                <Button variant="outline" size={"sm"}>Archive</Button>
                <Button variant="outline" size={"sm"}>Report</Button>
            </ButtonGroup>

        </>
    )
}