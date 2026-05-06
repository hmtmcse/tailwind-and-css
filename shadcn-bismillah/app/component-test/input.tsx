import {
    Combobox, ComboboxChip,
    ComboboxChips, ComboboxChipsInput,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList, ComboboxStatus, ComboboxValue
} from "~/template/new-york-v4/ui/combobox";
import React from "react";
import {ComboboxContent} from "~/components/ui/combobox";
import styles from "./select-field.module.css"

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
    emptyOptionContent?: any;
    createNewItem?: (searchText: string) => void;
    // async
    // clean - value
}


export default function SelectField(
    {
        options,
        labelKey,
        valueKey,
        isMulti,
        customItem,
        defaultValue,
        createNewItem,
        emptyOptionContent = "List is empty"
    }: SelectFieldProps) {
    const [value, setValue] = React.useState<Record<any, any>[]>([])
    const [dynamicOptions, setDynamicOptions] = React.useState<any[]>([])
    const [showEmptyOption, setShowEmptyOption] = React.useState<boolean>(true)
    const [isLoading, setLoading] = React.useState<boolean>(false)
    const [searchText, setSearchText] = React.useState('');

    // Done
    const mergedItems = React.useMemo(() => {
        const map = new Map();
        [...dynamicOptions, ...options].forEach(item => {
            map.set(item[valueKey], item);
        });
        return Array.from(map.values());
    }, [dynamicOptions, options, valueKey]);

    // Done
    const selectedSet = React.useMemo(() => {
        return new Set(value.map(v => v[valueKey]));
    }, [value, valueKey]);

    // Done
    const onValueChange = React.useCallback((inputValue: any) => {
        setValue(inputValue);
    }, []);

    // Done
    const onInputValueChange = React.useCallback((searchValue: string) => {
        setSearchText(searchValue);
        setShowEmptyOption(true);
    }, []);

    // Done
    const ignoreItemIfSelected = React.useCallback((item: any) => {
        return selectedSet.has(item[valueKey]);
    }, [selectedSet, valueKey]);


    const renderItem = React.useCallback((item: any) => {
        if (isMulti && ignoreItemIfSelected(item)) {
            return null;
        }

        return (
            <ComboboxItem key={item[valueKey]} value={item}>
                {customItem ? customItem(item, labelKey, valueKey, options) : item[labelKey]}
            </ComboboxItem>
        );
    }, [isMulti, ignoreItemIfSelected, customItem, labelKey, valueKey, options]);


    const getSingleInput = () => {
        return (<ComboboxInput placeholder="Placeholder Text Here" showClear={true}/>)
    }

    const getMultiInput = () => (
        <ComboboxChips>
            <ComboboxValue>
                {value.map((item: any) => (
                    <ComboboxChip key={item[valueKey]}>
                        {item[labelKey]}
                    </ComboboxChip>
                ))}
            </ComboboxValue>
            <ComboboxChipsInput placeholder="Add item"/>
        </ComboboxChips>
    );

    let conditionalProps: any = {}
    if (isMulti) {
        conditionalProps["value"] = value
    }

    const getEmptyContent = () => {
        if (!showEmptyOption) {
            return null
        }
        if (createNewItem) {
            return (
                <ComboboxEmpty type="action">
                    <div
                        onClick={() => {
                            setShowEmptyOption(false);
                            createNewItem(searchText);
                        }}
                    >
                        {emptyOptionContent}
                    </div>
                </ComboboxEmpty>
            );
        }

        return (
            <ComboboxEmpty type="message">
                {emptyOptionContent}
            </ComboboxEmpty>
        );
    };

    const getStatus = () => {
        if (!isLoading) return null;

        return (
            <ComboboxStatus>
                <span className={styles.spinner}/>
                Searching…
            </ComboboxStatus>
        );
    };

    return (
        <Combobox
            items={mergedItems}
            onValueChange={onValueChange}
            onInputValueChange={onInputValueChange}
            {...conditionalProps}
            multiple={isMulti}
            defaultValue={defaultValue}
            onOpenChangeComplete={() => setShowEmptyOption(true)}
        >
            {isMulti ? getMultiInput() : getSingleInput()}

            <ComboboxContent>
                {getEmptyContent()}
                {getStatus()}
                <ComboboxList>
                    {renderItem}
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    );
}