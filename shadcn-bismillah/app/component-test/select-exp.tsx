import {InputFrame} from "~/input/input-frame";
import SelectField, {defaultOptions, extraOptions} from "~/component-test/select-field";
import BasicUIAsyncComboBox from "./base-ui/async-combobox/async-combobox";
import CreatableCombobox from "~/component-test/base-ui/creatable-combobox/creatablecombobox";
import Dropzone from "react-dropzone";

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
                hintsMessage={"Add new options"}
                errorMessage={"Please select a country"}
                required={true}
            >
                <SelectField
                    options={[]}
                    labelKey={"label"}
                    valueKey={"value"}
                    emptyOptionContent={"Add new"}
                    createNewItem={(searchText: string, setNewOptions: (newOptions: Array<any>) => void) => {
                        console.log("Create new item with value: ", searchText)
                        setNewOptions([{label: "Bangladesh", value: "BD"}])
                    }}
                    />
            </InputFrame>

            <InputFrame
                className={"mt-5"}
                label={"Country"}
                hintsMessage={"Async options"}
                errorMessage={"Please select a country"}
                required={true}
                isError={true}
            >
                <SelectField
                    isMulti={true}
                    options={defaultOptions}
                    labelKey={"label"}
                    valueKey={"value"}
                    emptyOptionContent={"Item not found"}
                    loadNewItem={(updateLoader: (isLoading: boolean) => void, setNewOptions: (newOptions: Array<any>) => void) => {
                        console.log("Called Load New Item");
                        updateLoader(true)
                        setTimeout(() => {
                            console.log("Fired after 2 seconds");
                            setNewOptions(extraOptions)
                        }, 2000);
                    }}
                />
            </InputFrame>


            <InputFrame
                className={"mt-5"}
                label={"Upload File"}
                hintsMessage={"Customized Input"}
                errorMessage={"Please select a country"}
                required={true}
                isError={true}
            >
                <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                    {({getRootProps, getInputProps, isDragActive}) => (
                        <section>
                            <div
                                aria-invalid={true}
                                {...getRootProps()}
                                className={`
          flex items-center justify-center
          w-full h-40
          border-2 border-dashed rounded-lg
          cursor-pointer
          transition
          ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"} aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40,
        `}
                            >
                                <input {...getInputProps()} />
                                <p className="text-gray-500">
                                    {isDragActive
                                        ? "Drop files here..."
                                        : "Drag & drop files here, or click"}
                                </p>
                            </div>
                        </section>
                    )}
                </Dropzone>
            </InputFrame>


            {/*<div className={"text-xl mt-6"}>Basic UI Component</div>*/}

            {/*<div className={"mt-5"}>*/}
            {/*    <BasicUIAsyncComboBox/>*/}
            {/*</div>*/}

            {/*<div className={"mt-5"}>*/}
            {/*    <CreatableCombobox/>*/}
            {/*</div>*/}


        </div>
    )
}