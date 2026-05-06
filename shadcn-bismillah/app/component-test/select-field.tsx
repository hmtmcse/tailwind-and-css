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

export const extraOptions = [
    { label: "Afghanistan", value: "AF" },
    { label: "Argentina", value: "AR" },
    { label: "Brazil", value: "BR" },
    { label: "Mexico", value: "MX" },
    { label: "Italy", value: "IT" },
    { label: "Spain", value: "ES" },
    { label: "Netherlands", value: "NL" },
    { label: "Sweden", value: "SE" },
    { label: "Norway", value: "NO" },
    { label: "Denmark", value: "DK" },
    { label: "Switzerland", value: "CH" },
    { label: "New Zealand", value: "NZ" },
    { label: "Singapore", value: "SG" },
    { label: "Malaysia", value: "MY" },
    { label: "Indonesia", value: "ID" },
    { label: "Thailand", value: "TH" },
    { label: "Vietnam", value: "VN" },
    { label: "South Africa", value: "ZA" },
    { label: "Egypt", value: "EG" },
    { label: "Nigeria", value: "NG" },
];


interface SelectFieldProps {
    isMulti?: boolean
    options: Array<any>;
    labelKey: string;
    valueKey: string;
    customItem?: (item: any, labelKey: string, valueKey: string, options: Array<any>) => React.ReactNode;
    defaultValue?: any;
    emptyOptionContent?: any;
    createNewItem?: (searchText: string, setNewOptions: (newOptions: Array<any>) => void) => void;
    loadNewItem?: (updateLoader: (isLoading: boolean) => void, setNewOptions: (newOptions: Array<any>) => void) => void;
    // async
    // clean - value
}


export default function SelectField({options, labelKey, valueKey, isMulti, customItem, defaultValue, createNewItem, loadNewItem, emptyOptionContent = "List is empty"}: SelectFieldProps) {
    const [value, setValue] = React.useState<Record<any, any>[]>([])
    const [dynamicOptions, setDynamicOptions] = React.useState<any[]>([])
    const [showEmptyOption, setShowEmptyOption] = React.useState<boolean>(true)
    const [isLoading, setLoading] = React.useState<boolean>(false)
    const [searchText, setSearchText] = React.useState('');

    const mergedItems = React.useMemo(() => {
        const map = new Map();
        [...dynamicOptions, ...options].forEach(item => {
            map.set(item[valueKey], item);
        });
        return Array.from(map.values());
    }, [dynamicOptions, options, valueKey]);

    const selectedItemSet = React.useMemo(() => {
        return new Set((Array.isArray(value) ? value : []).map(v => v[valueKey]));
    }, [value, valueKey]);

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

    const onValueChange = React.useCallback((selectedValue: any) => {
        if (Array.isArray(selectedValue)) {
            setValue(selectedValue);
        } else {
            let value: any = []
            if (selectedValue !== null && selectedValue !== undefined) {
                value.push(selectedValue)
            }
            setValue(value);
        }
    }, []);

    const ignoreItemIfSelected = React.useCallback((item: any) => {
        return selectedItemSet.has(item[valueKey]);
    }, [selectedItemSet, valueKey]);

    let conditionalProps: any = {}
    if (isMulti) {
        conditionalProps["value"] = value
    }

    const onInputValueChange = React.useCallback((searchValue: string, event: any) => {
        const trimmed = searchValue.trim();
        setSearchText(trimmed);
        if (loadNewItem && !isLoading) {
            let refinedSearchText: string = trimmed.toLowerCase();
            let willCall: boolean = !mergedItems.some((item: any) => (String(item?.[labelKey]).toLowerCase().includes(refinedSearchText)));
            if (!willCall) {
                return
            }
            loadNewItem((isLoading: boolean) => {
                setLoading(isLoading);
            }, (newOptions: Array<any>) => {
                setDynamicOptions(prev => [
                    ...prev,
                    ...newOptions
                ]);
                setLoading(false)
            })
        }
        setShowEmptyOption(true);
    }, [isLoading]);

    const getEmptyContent = React.useCallback(() => {
        if (!showEmptyOption || isLoading) {
            return ""
        }
        let emptyContent: any = emptyOptionContent
        let emptyType: any = "message"
        if (createNewItem) {
            emptyType = "action"
            emptyContent = (
                <div className={"w-full"} onClick={() => {
                    setShowEmptyOption(false);
                    createNewItem(searchText, (newOptions: Array<any>) => {
                        setDynamicOptions(prev => [
                            ...prev,
                            ...newOptions
                        ]);
                    })
                }}>{emptyOptionContent}</div>
            )
        }
        return (<ComboboxEmpty type={emptyType}>{emptyContent}</ComboboxEmpty>)
    }, [isLoading])

    const getStatus = () => {
        let content: any = null
        if (isLoading) {
            content = (
                <>
                    <span className={styles.spinner}/>
                    Searching…
                </>
            )
        }
        if (!content) {
            return ""
        }
        return (
            <ComboboxStatus>{content}</ComboboxStatus>
        )
    }

    return (
        <Combobox
            items={mergedItems}
            onValueChange={onValueChange}
            onInputValueChange={onInputValueChange}
            {...conditionalProps}
            multiple={isMulti}
            defaultValue={defaultValue}
            onOpenChangeComplete={(open: boolean) => {
                setShowEmptyOption(true)
            }}
        >
            {isMulti ? getMultiInput() : getSingleInput()}
            <ComboboxContent>
                {getEmptyContent()}
                {getStatus()}
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