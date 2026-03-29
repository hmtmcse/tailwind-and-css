import './App.css'
import {GridSystemV1} from "./component/grid-system-v1.tsx";
import {CardSystemV1} from "./component/card-system-v1.tsx";

function App() {
    return (
        <>
            <div className={"p-5"}>
                <CardSystemV1/>
                <div className={"mb-12"}></div>
                <GridSystemV1/>
            </div>
        </>
    )
}

export default App
