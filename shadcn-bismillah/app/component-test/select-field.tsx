import {
    Combobox, ComboboxChip,
    ComboboxChips, ComboboxChipsInput,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList, ComboboxValue
} from "~/template/new-york-v4/ui/combobox";
import React from "react";
import {ComboboxContent} from "~/components/ui/combobox";

export const defaultOptions = [
    {label: "Bangladesh", value: "BD"},
    {label: "Pakistan", value: "PK"},
    {label: "India", value: "IN"},
    {label: "United States", value: "US"},
    {label: "United Kingdom", value: "GB"},
    {label: "Canada", value: "CA"},
    {label: "Australia", value: "AU"},
    {label: "Germany", value: "DE"},
    {label: "France", value: "FR"},
    {label: "Japan", value: "JP"},
    {label: "China", value: "CN"},
    {label: "South Korea", value: "KR"},
    {label: "Turkey", value: "TR"},
    {label: "Russia", value: "RU"},
    {label: "Saudi Arabia", value: "SA"},
    {label: "United Arab Emirates", value: "AE"},
];


interface SelectFieldProps {
    isMulti?: boolean
    options: Array<any>;
    labelKey: string;
    valueKey: string;
    customItem?: (item: any, labelKey: string, valueKey: string, options: Array<any>) => React.ReactNode;
    defaultValue?: any;
    // async
    // custom element - account
    // clean - value


}


export default function SelectField({options, labelKey, valueKey, isMulti, customItem, defaultValue}: SelectFieldProps) {
    const [value, setValue] = React.useState<Record<any, any>[]>([])

    const getSingleInput = () => {
        return (<ComboboxInput placeholder="Placeholder Text Here" showClear={true}/>)
    }

    const getMultiInput = () => {
        return (
            <ComboboxChips>
                <ComboboxValue>
                    {value.map((item: any, index: number) => (
                        <ComboboxChip key={item[valueKey]}>{item[labelKey]}</ComboboxChip>
                    ))}
                </ComboboxValue>
                <ComboboxChipsInput placeholder="Add framework"/>
            </ComboboxChips>
        )
    }

    const onValueChange = (inputValue: any) => {
        setValue(inputValue)
    }

    const ignoreItemIfSelected = (item: any) => {
        return value.some((v: any) => v[valueKey] === item[valueKey])
    }

    let conditionalProps: any = {}
    if (isMulti) {
        conditionalProps["value"] = value
    }

    return (
        <Combobox items={options} onValueChange={onValueChange} {...conditionalProps} multiple={isMulti} defaultValue={defaultValue}>
            {isMulti ? getMultiInput() : getSingleInput()}
            <ComboboxContent>
                <ComboboxEmpty>When Item list is empty</ComboboxEmpty>
                <ComboboxList>
                    {(item: any, index: any) => {
                        if (isMulti && ignoreItemIfSelected(item)) {
                            return null
                        }
                        return (
                            <ComboboxItem key={index} value={item}>
                                {customItem ? customItem(item, labelKey, valueKey, options) : item[labelKey]}
                            </ComboboxItem>
                        )
                    }}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    )
}