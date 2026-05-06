import {InputFrame} from "~/input/input-frame";
import SelectField, {defaultOptions} from "~/component-test/select-field";
import BasicUIAsyncComboBox from "./base-ui/async-combobox/async-combobox";
import CreatableCombobox from "~/component-test/base-ui/creatable-combobox/creatablecombobox";

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

            <InputFrame
                className={"mt-5"}
                label={"Country"}
                hintsMessage={"Async options"}
                errorMessage={"Please select a country"}
                required={true}
            >
                <SelectField
                    options={[]}
                    labelKey={"label"}
                    valueKey={"value"}
                    />
            </InputFrame>


            <div className={"text-xl"}>Basic UI Component</div>

            <div className={"mt-5"}>
                <BasicUIAsyncComboBox/>
            </div>

            <div className={"mt-5"}>
                <CreatableCombobox/>
            </div>


        </div>
    )
}