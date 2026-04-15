import {
    Field, FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet, FieldTitle
} from "~/template/new-york-v4/ui/field"
import { Input } from "~/template/new-york-v4/ui/input"
import {Switch} from "~/template/new-york-v4/ui/switch";
import { addDays, format } from "date-fns"
import {Badge} from "~/template/new-york-v4/ui/badge";
import {
    InputGroup,
    InputGroupAddon, InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea
} from "~/template/new-york-v4/ui/input-group";
import {
    CalendarIcon,
    Check,
    ChevronDownIcon,
    ChevronsUpDown,
    CopyIcon,
    FileCodeIcon,
    InfoIcon,
    LoaderIcon,
    Search,
    SearchIcon,
    StarIcon
} from "lucide-react";
import {ButtonGroup} from "~/template/new-york-v4/ui/button-group";
import { Button } from "~/template/new-york-v4/ui/button";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { RadioGroup, RadioGroupItem } from "~/template/new-york-v4/ui/radio-group";
import { Label } from "~/template/new-york-v4/ui/label";
import {Checkbox} from "~/template/new-york-v4/ui/checkbox";
import {Popover, PopoverContent, PopoverTrigger} from "~/template/new-york-v4/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem
} from "~/template/new-york-v4/ui/command";
import {cn} from "~/lib/utils";
import React from "react";
import {NativeSelect, NativeSelectOptGroup, NativeSelectOption} from "~/template/new-york-v4/ui/native-select";
import {
    SelectTrigger,
    Select,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel, SelectItem
} from "~/template/new-york-v4/ui/select";
import {Calendar} from "~/template/new-york-v4/ui/calendar";
import type {DateRange} from "react-day-picker";
import {
    Combobox, ComboboxChip,
    ComboboxChips, ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList, ComboboxTrigger, ComboboxValue
} from "~/template/new-york-v4/ui/combobox";
import {Item, ItemContent, ItemDescription, ItemTitle} from "~/template/new-york-v4/ui/item";


export async function loader() {
    return {message: "Hello Task"}
}

const countries = [
    {code: "", value: "", continent: "", label: "Select country"},
    {
        code: "ar",
        value: "argentina",
        label: "Argentina",
        continent: "South America",
    },
    {code: "au", value: "australia", label: "Australia", continent: "Oceania"},
    {code: "br", value: "brazil", label: "Brazil", continent: "South America"},
    {code: "ca", value: "canada", label: "Canada", continent: "North America"},
    {code: "cn", value: "china", label: "China", continent: "Asia"},
    {
        code: "co",
        value: "colombia",
        label: "Colombia",
        continent: "South America",
    },
    {code: "eg", value: "egypt", label: "Egypt", continent: "Africa"},
    {code: "fr", value: "france", label: "France", continent: "Europe"},
    {code: "de", value: "germany", label: "Germany", continent: "Europe"},
    {code: "it", value: "italy", label: "Italy", continent: "Europe"},
    {code: "jp", value: "japan", label: "Japan", continent: "Asia"},
    {code: "ke", value: "kenya", label: "Kenya", continent: "Africa"},
    {code: "mx", value: "mexico", label: "Mexico", continent: "North America"},
    {
        code: "nz",
        value: "new-zealand",
        label: "New Zealand",
        continent: "Oceania",
    },
    {code: "ng", value: "nigeria", label: "Nigeria", continent: "Africa"},
    {
        code: "za",
        value: "south-africa",
        label: "South Africa",
        continent: "Africa",
    },
    {code: "kr", value: "south-korea", label: "South Korea", continent: "Asia"},
    {
        code: "gb",
        value: "united-kingdom",
        label: "United Kingdom",
        continent: "Europe",
    },
    {
        code: "us",
        value: "united-states",
        label: "United States",
        continent: "North America",
    },
]


function BasicStructure() {
    const [date, setDate] = React.useState<Date>()
    const [date2, setDate2] = React.useState<DateRange | undefined>({
        from: new Date(new Date().getFullYear(), 0, 20),
        to: addDays(new Date(new Date().getFullYear(), 0, 20), 20),
    })

    const [value, setValue] = React.useState<string[]>([])

    return (
        <FieldSet>
            <FieldLegend>Profile</FieldLegend>
            <FieldDescription>This appears on invoices and emails.</FieldDescription>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="name">Full name</FieldLabel>
                    <Input id="name" autoComplete="off" placeholder="Evil Rabbit"/>
                    <FieldDescription>This appears on invoices and emails.</FieldDescription>
                </Field>

                <Field>
                    <FieldLabel htmlFor="username">Username</FieldLabel>
                    <Input id="username" autoComplete="off" aria-invalid/>
                    <FieldError>Choose another username.</FieldError>
                </Field>

                <Field orientation="horizontal">
                    <Switch id="newsletter"/>
                    <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
                </Field>


                <Field data-invalid>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input id="email" type="email" aria-invalid/>
                    <FieldError>Enter a valid email address.</FieldError>
                </Field>

                <Field>
                    <FieldLabel htmlFor="input-required">
                        <span className="text-destructive">*</span> Required Field
                    </FieldLabel>
                    <Input
                        id="input-required"
                        placeholder="This field is required"
                        required
                    />
                    <FieldDescription>This field must be filled out.</FieldDescription>
                </Field>

                <Field>
                    <FieldLabel htmlFor="input-badge">
                        Webhook URL{" "}
                        <Badge variant="secondary" className="ml-auto">
                            Beta
                        </Badge>
                    </FieldLabel>
                    <Input
                        id="input-badge"
                        type="url"
                        placeholder="https://api.example.com/webhook"
                    />
                </Field>


                <Field>
                    <FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
                    <InputGroup>
                        <InputGroupInput id="input-group-url" placeholder="example.com"/>
                        <InputGroupAddon>
                            <InputGroupText>https://</InputGroupText>
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                            <InfoIcon/>
                        </InputGroupAddon>
                    </InputGroup>
                </Field>

                <Field>
                    <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
                    <ButtonGroup>
                        <Input id="input-button-group" placeholder="Type to search..."/>
                        <Button variant="outline">Search</Button>
                    </ButtonGroup>
                </Field>

                <InputGroup className="max-w-xs">
                    <InputGroupInput placeholder="Search..."/>
                    <InputGroupAddon>
                        <Search/>
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
                </InputGroup>

                <Field className="max-w-sm">
                    <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
                    <InputGroup>
                        <InputGroupInput id="inline-start-input" placeholder="Search..."/>
                        <InputGroupAddon align="inline-start">
                            <SearchIcon className="text-muted-foreground"/>
                        </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>Icon positioned at the start.</FieldDescription>
                </Field>

                <Field>
                    <FieldLabel htmlFor="block-start-textarea">Textarea</FieldLabel>
                    <InputGroup>
                        <InputGroupTextarea
                            id="block-start-textarea"
                            placeholder="console.log('Hello, world!');"
                            className="font-mono text-sm"
                        />
                        <InputGroupAddon align="block-start">
                            <FileCodeIcon className="text-muted-foreground"/>
                            <InputGroupText className="font-mono">script.js</InputGroupText>
                            <InputGroupButton size="icon-xs" className="ml-auto">
                                <CopyIcon/>
                                <span className="sr-only">Copy</span>
                            </InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                        Header positioned above the textarea.
                    </FieldDescription>
                </Field>

                <Field>
                    <FieldLabel htmlFor="block-end-textarea">Textarea</FieldLabel>
                    <InputGroup>
                        <InputGroupTextarea
                            id="block-end-textarea"
                            placeholder="Write a comment..."
                        />
                        <InputGroupAddon align="block-end">
                            <InputGroupText>0/280</InputGroupText>
                            <InputGroupButton variant="default" size="sm" className="ml-auto">
                                Post
                            </InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                        Footer positioned below the textarea.
                    </FieldDescription>
                </Field>

                <InputGroup>
                    <InputGroupInput placeholder="Card number"/>
                    <InputGroupAddon align="inline-end">
                        <StarIcon/>
                        <InfoIcon/>
                    </InputGroupAddon>
                </InputGroup>

                <InputGroup>
                    <InputGroupTextarea placeholder="Enter your message"/>
                    <InputGroupAddon align="block-end">
                        <InputGroupText className="text-xs text-muted-foreground">
                            120 characters left
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>

                <InputGroup>
                    <InputGroupInput placeholder="https://x.com/shadcn"/>
                    <InputGroupAddon align="inline-end">
                        <InputGroupButton
                            aria-label="Copy"
                            title="Copy"
                            size="icon-xs"
                            onClick={() => {

                            }}
                        >
                            {false ? <IconCheck/> : <IconCopy/>}
                        </InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>


                <InputGroup>
                    <InputGroupInput placeholder="Refreshing data..."/>
                    <InputGroupAddon>
                        <LoaderIcon className="animate-spin"/>
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                        <InputGroupText className="text-muted-foreground">
                            Please wait...
                        </InputGroupText>
                    </InputGroupAddon>
                </InputGroup>

                <RadioGroup defaultValue="comfortable" className="w-fit">
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="default" id="r1"/>
                        <Label htmlFor="r1">Default</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="comfortable" id="r2"/>
                        <Label htmlFor="r2">Comfortable</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <RadioGroupItem value="compact" id="r3"/>
                        <Label htmlFor="r3">Compact</Label>
                    </div>
                </RadioGroup>


                <RadioGroup defaultValue="comfortable" className="w-fit">
                    <Field orientation="horizontal">
                        <RadioGroupItem value="default" id="desc-r1"/>
                        <FieldContent>
                            <FieldLabel htmlFor="desc-r1">Default</FieldLabel>
                            <FieldDescription>
                                Standard spacing for most use cases.
                            </FieldDescription>
                        </FieldContent>
                    </Field>
                    <Field orientation="horizontal">
                        <RadioGroupItem value="comfortable" id="desc-r2"/>
                        <FieldContent>
                            <FieldLabel htmlFor="desc-r2">Comfortable</FieldLabel>
                            <FieldDescription>More space between elements.</FieldDescription>
                        </FieldContent>
                    </Field>
                    <Field orientation="horizontal">
                        <RadioGroupItem value="compact" id="desc-r3"/>
                        <FieldContent>
                            <FieldLabel htmlFor="desc-r3">Compact</FieldLabel>
                            <FieldDescription>
                                Minimal spacing for dense layouts.
                            </FieldDescription>
                        </FieldContent>
                    </Field>
                </RadioGroup>

                <RadioGroup defaultValue="plus" className="max-w-sm">
                    <FieldLabel htmlFor="plus-plan">
                        <Field orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Plus</FieldTitle>
                                <FieldDescription>
                                    For individuals and small teams.
                                </FieldDescription>
                            </FieldContent>
                            <RadioGroupItem value="plus" id="plus-plan"/>
                        </Field>
                    </FieldLabel>
                    <FieldLabel htmlFor="pro-plan">
                        <Field orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Pro</FieldTitle>
                                <FieldDescription>For growing businesses.</FieldDescription>
                            </FieldContent>
                            <RadioGroupItem value="pro" id="pro-plan"/>
                        </Field>
                    </FieldLabel>
                    <FieldLabel htmlFor="enterprise-plan">
                        <Field orientation="horizontal">
                            <FieldContent>
                                <FieldTitle>Enterprise</FieldTitle>
                                <FieldDescription>
                                    For large teams and enterprises.
                                </FieldDescription>
                            </FieldContent>
                            <RadioGroupItem value="enterprise" id="enterprise-plan"/>
                        </Field>
                    </FieldLabel>
                </RadioGroup>

                <FieldSet className="w-full max-w-xs">
                    <FieldLegend variant="label">Notification Preferences</FieldLegend>
                    <FieldDescription>
                        Choose how you want to receive notifications.
                    </FieldDescription>
                    <RadioGroup defaultValue="email">
                        <Field orientation="horizontal" data-invalid>
                            <RadioGroupItem value="email" id="invalid-email" aria-invalid/>
                            <FieldLabel htmlFor="invalid-email" className="font-normal">
                                Email only
                            </FieldLabel>
                        </Field>
                        <Field orientation="horizontal" data-invalid>
                            <RadioGroupItem value="sms" id="invalid-sms" aria-invalid/>
                            <FieldLabel htmlFor="invalid-sms" className="font-normal">
                                SMS only
                            </FieldLabel>
                        </Field>
                        <Field orientation="horizontal" data-invalid>
                            <RadioGroupItem value="both" id="invalid-both" aria-invalid/>
                            <FieldLabel htmlFor="invalid-both" className="font-normal">
                                Both Email & SMS
                            </FieldLabel>
                        </Field>
                    </RadioGroup>
                </FieldSet>

                <FieldGroup className="mx-auto w-56">
                    <Field orientation="horizontal" data-invalid>
                        <Checkbox
                            id="terms-checkbox-invalid"
                            name="terms-checkbox-invalid"
                            aria-invalid
                        />
                        <FieldLabel htmlFor="terms-checkbox-invalid">
                            Accept terms and conditions
                        </FieldLabel>
                    </Field>
                </FieldGroup>

                <FieldSet>
                    <FieldLegend variant="label">
                        Show these items on the desktop:
                    </FieldLegend>
                    <FieldDescription>
                        Select the items you want to show on the desktop.
                    </FieldDescription>
                    <FieldGroup className="gap-3">
                        <Field orientation="horizontal">
                            <Checkbox
                                id="finder-pref-9k2-hard-disks-ljj-checkbox"
                                name="finder-pref-9k2-hard-disks-ljj-checkbox"
                                defaultChecked
                            />
                            <FieldLabel
                                htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
                                className="font-normal"
                            >
                                Hard disks
                            </FieldLabel>
                        </Field>
                        <Field orientation="horizontal">
                            <Checkbox
                                id="finder-pref-9k2-external-disks-1yg-checkbox"
                                name="finder-pref-9k2-external-disks-1yg-checkbox"
                                defaultChecked
                            />
                            <FieldLabel
                                htmlFor="finder-pref-9k2-external-disks-1yg-checkbox"
                                className="font-normal"
                            >
                                External disks
                            </FieldLabel>
                        </Field>
                        <Field orientation="horizontal">
                            <Checkbox
                                id="finder-pref-9k2-cds-dvds-fzt-checkbox"
                                name="finder-pref-9k2-cds-dvds-fzt-checkbox"
                            />
                            <FieldLabel
                                htmlFor="finder-pref-9k2-cds-dvds-fzt-checkbox"
                                className="font-normal"
                            >
                                CDs, DVDs, and iPods
                            </FieldLabel>
                        </Field>
                        <Field orientation="horizontal">
                            <Checkbox
                                id="finder-pref-9k2-connected-servers-6l2-checkbox"
                                name="finder-pref-9k2-connected-servers-6l2-checkbox"
                            />
                            <FieldLabel
                                htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
                                className="font-normal"
                            >
                                Connected servers
                            </FieldLabel>
                        </Field>
                    </FieldGroup>
                </FieldSet>


                <FieldGroup className="mx-auto w-72">
                    <Field orientation="horizontal">
                        <Checkbox
                            id="terms-checkbox-desc"
                            name="terms-checkbox-desc"
                            defaultChecked
                        />
                        <FieldContent>
                            <FieldLabel htmlFor="terms-checkbox-desc">
                                Accept terms and conditions
                            </FieldLabel>
                            <FieldDescription>
                                By clicking this checkbox, you agree to the terms and conditions.
                            </FieldDescription>
                        </FieldContent>
                    </Field>
                </FieldGroup>

                <FieldGroup className="max-w-sm">
                    <Field orientation="horizontal">
                        <Checkbox id="terms-checkbox" name="terms-checkbox"/>
                        <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
                    </Field>
                    <Field orientation="horizontal">
                        <Checkbox
                            id="terms-checkbox-2"
                            name="terms-checkbox-2"
                            defaultChecked
                        />
                        <FieldContent>
                            <FieldLabel htmlFor="terms-checkbox-2">
                                Accept terms and conditions
                            </FieldLabel>
                            <FieldDescription>
                                By clicking this checkbox, you agree to the terms.
                            </FieldDescription>
                        </FieldContent>
                    </Field>
                    <Field orientation="horizontal" data-disabled>
                        <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled/>
                        <FieldLabel htmlFor="toggle-checkbox">Enable notifications</FieldLabel>
                    </Field>
                    <FieldLabel>
                        <Field orientation="horizontal">
                            <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2"/>
                            <FieldContent>
                                <FieldTitle>Enable notifications</FieldTitle>
                                <FieldDescription>
                                    You can enable or disable notifications at any time.
                                </FieldDescription>
                            </FieldContent>
                        </Field>
                    </FieldLabel>
                </FieldGroup>

                <NativeSelect>
                    <NativeSelectOption value="">Select status</NativeSelectOption>
                    <NativeSelectOption value="todo">Todo</NativeSelectOption>
                    <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
                    <NativeSelectOption value="done">Done</NativeSelectOption>
                    <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
                </NativeSelect>

                <NativeSelect>
                    <NativeSelectOption value="">Select department</NativeSelectOption>
                    <NativeSelectOptGroup label="Engineering">
                        <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
                        <NativeSelectOption value="backend">Backend</NativeSelectOption>
                        <NativeSelectOption value="devops">DevOps</NativeSelectOption>
                    </NativeSelectOptGroup>
                    <NativeSelectOptGroup label="Sales">
                        <NativeSelectOption value="sales-rep">Sales Rep</NativeSelectOption>
                        <NativeSelectOption value="account-manager">
                            Account Manager
                        </NativeSelectOption>
                        <NativeSelectOption value="sales-director">
                            Sales Director
                        </NativeSelectOption>
                    </NativeSelectOptGroup>
                    <NativeSelectOptGroup label="Operations">
                        <NativeSelectOption value="support">
                            Customer Support
                        </NativeSelectOption>
                        <NativeSelectOption value="product-manager">
                            Product Manager
                        </NativeSelectOption>
                        <NativeSelectOption value="ops-manager">
                            Operations Manager
                        </NativeSelectOption>
                    </NativeSelectOptGroup>
                </NativeSelect>

                <Select>
                    <SelectTrigger className="w-full max-w-48">
                        <SelectValue placeholder="Select a fruit"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select>
                    <SelectTrigger className="w-full max-w-64">
                        <SelectValue placeholder="Select a timezone"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>North America</SelectLabel>
                            <SelectItem value="est">Eastern Standard Time</SelectItem>
                            <SelectItem value="cst">Central Standard Time</SelectItem>
                            <SelectItem value="mst">Mountain Standard Time</SelectItem>
                            <SelectItem value="pst">Pacific Standard Time</SelectItem>
                            <SelectItem value="akst">Alaska Standard Time</SelectItem>
                            <SelectItem value="hst">Hawaii Standard Time</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Europe & Africa</SelectLabel>
                            <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
                            <SelectItem value="cet">Central European Time</SelectItem>
                            <SelectItem value="eet">Eastern European Time</SelectItem>
                            <SelectItem value="west">Western European Summer Time</SelectItem>
                            <SelectItem value="cat">Central Africa Time</SelectItem>
                            <SelectItem value="eat">East Africa Time</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Asia</SelectLabel>
                            <SelectItem value="msk">Moscow Time</SelectItem>
                            <SelectItem value="ist">India Standard Time</SelectItem>
                            <SelectItem value="cst_china">China Standard Time</SelectItem>
                            <SelectItem value="jst">Japan Standard Time</SelectItem>
                            <SelectItem value="kst">Korea Standard Time</SelectItem>
                            <SelectItem value="ist_indonesia">
                                Indonesia Central Standard Time
                            </SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Australia & Pacific</SelectLabel>
                            <SelectItem value="awst">Australian Western Standard Time</SelectItem>
                            <SelectItem value="acst">Australian Central Standard Time</SelectItem>
                            <SelectItem value="aest">Australian Eastern Standard Time</SelectItem>
                            <SelectItem value="nzst">New Zealand Standard Time</SelectItem>
                            <SelectItem value="fjt">Fiji Time</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>South America</SelectLabel>
                            <SelectItem value="art">Argentina Time</SelectItem>
                            <SelectItem value="bot">Bolivia Time</SelectItem>
                            <SelectItem value="brt">Brasilia Time</SelectItem>
                            <SelectItem value="clt">Chile Standard Time</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>


                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            data-empty={!date}
                            className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground"
                        >
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                            <ChevronDownIcon/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            defaultMonth={date}
                        />
                    </PopoverContent>
                </Popover>

                <Field className="mx-auto w-60">
                    <FieldLabel htmlFor="date-picker-range">Date Picker Range</FieldLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                id="date-picker-range"
                                className="justify-start px-2.5 font-normal"
                            >
                                <CalendarIcon/>
                                {date2?.from ? (
                                    date2.to ? (
                                        <>
                                            {format(date2.from, "LLL dd, y")} -{" "}
                                            {format(date2.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date2.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="range"
                                defaultMonth={date2?.from}
                                selected={date2}
                                onSelect={setDate2}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </Field>

                {/*<DatePickerSimple/>*/}

                <div className="flex items-center space-x-2">
                    <Switch id="airplane-mode"/>
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>

                <Combobox items={["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]}>
                    <ComboboxInput placeholder="Select a framework"/>
                    <ComboboxContent>
                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                        <ComboboxList>
                            {(item) => (
                                <ComboboxItem key={item} value={item}>
                                    {item}
                                </ComboboxItem>
                            )}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

                <Combobox
                    items={["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]}
                    multiple
                    value={value}
                    onValueChange={setValue}
                >
                    <ComboboxChips>
                        <ComboboxValue>
                            {value.map((item) => (
                                <ComboboxChip key={item}>{item}</ComboboxChip>
                            ))}
                        </ComboboxValue>
                        <ComboboxChipsInput placeholder="Add framework"/>
                    </ComboboxChips>
                    <ComboboxContent>
                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                        <ComboboxList>
                            {(item) => (
                                <ComboboxItem key={item} value={item}>
                                    {item}
                                </ComboboxItem>
                            )}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

                <Combobox items={["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]} defaultValue={"SvelteKit"}>
                    <ComboboxInput placeholder="Select a framework" showClear/>
                    <ComboboxContent>
                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                        <ComboboxList>
                            {(item) => (
                                <ComboboxItem key={item} value={item}>
                                    {item}
                                </ComboboxItem>
                            )}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

                <Combobox
                    items={countries.filter((country) => country.code !== "")}
                    itemToStringValue={(country: (typeof countries)[number]) => country.label}
                >
                    <ComboboxInput placeholder="Search countries..."/>
                    <ComboboxContent>
                        <ComboboxEmpty>No countries found.</ComboboxEmpty>
                        <ComboboxList>
                            {(country) => (
                                <ComboboxItem key={country.code} value={country}>
                                    <Item className="p-0">
                                        <ItemContent>
                                            <ItemTitle className="whitespace-nowrap">
                                                {country.label}
                                            </ItemTitle>
                                            <ItemDescription>
                                                {country.continent} ({country.code})
                                            </ItemDescription>
                                        </ItemContent>
                                    </Item>
                                </ComboboxItem>
                            )}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

                <Combobox items={countries} defaultValue={countries[0]}>
                    <ComboboxTrigger render={<Button variant="outline" className="w-64 justify-between font-normal"><ComboboxValue/></Button>}/>
                    <ComboboxContent>
                        <ComboboxInput showTrigger={false} placeholder="Search"/>
                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                        <ComboboxList>
                            {(item) => (
                                <ComboboxItem key={item.code} value={item}>
                                    {item.label}
                                </ComboboxItem>
                            )}
                        </ComboboxList>
                    </ComboboxContent>
                </Combobox>

            </FieldGroup>
        </FieldSet>
    )
}


export default function InputField() {
    return (
        <>
            <div className={"m-4"}>
                 <BasicStructure/>
            </div>
        </>
    )
}