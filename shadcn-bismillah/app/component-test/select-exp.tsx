import {InputFrame} from "~/input/input-frame";
import SelectField, {defaultOptions} from "~/component-test/select-field";

export async function loader() {
    return {message: "Hello Task"}
}


export default function SelectExp() {
    return (
        <div className={"m-5"}>
            <InputFrame
                className={"mt-5"}
                label={"Country"}
                hintsMessage={"Multi select"}
                errorMessage={"Please select a country"}
                required={true}
            >
                <SelectField options={defaultOptions} labelKey={"label"} valueKey={"value"} isMulti={true}/>
            </InputFrame>

            <InputFrame
                className={"mt-5"}
                label={"Country"}
                hintsMessage={"Single Select"}
                errorMessage={"Please select a country"}
                required={true}
            >
                <SelectField options={defaultOptions} labelKey={"label"} valueKey={"value"}/>
            </InputFrame>


            <InputFrame
                className={"mt-5"}
                label={"Country"}
                hintsMessage={"Customized Input"}
                errorMessage={"Please select a country"}
                required={true}
            >
                <SelectField options={defaultOptions} labelKey={"label"} valueKey={"value"} customItem={(item: any, labelKey: string, valueKey: string, options: Array<any>) =>{
                    return item.label + " - " + item.value
                }}/>
            </InputFrame>

        </div>
    )
}