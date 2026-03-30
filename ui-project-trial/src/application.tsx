import "./assets/css/style.css"
import {Button} from "./shadcn/ui/button.tsx";

export default function Application(){
    return (
        <>
            <div className={"text-red-500 font-bold"}>
                Bismillah
            </div>

            <Button variant={"secondary"}>Button</Button>

        </>
    )
}