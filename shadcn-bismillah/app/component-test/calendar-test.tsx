import React from "react";
import {Calendar, CalendarDayButton} from "~/template/new-york-v4/ui/calendar";
import {addDays} from "date-fns";
import type {DateRange} from "react-day-picker";
import {Card, CardContent, CardFooter} from "~/template/new-york-v4/ui/card";
import {Button} from "~/template/new-york-v4/ui/button";
import {Field, FieldGroup, FieldLabel} from "~/template/new-york-v4/ui/field";
import {InputGroup, InputGroupAddon, InputGroupInput} from "~/template/new-york-v4/ui/input-group";
import {Clock2Icon} from "lucide-react";

export async function loader() {
    return {message: "Hello Task"}
}

function CalendarDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
            captionLayout="dropdown"
        />
    )
}

function CalendarWithTimezone() {
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined)

    React.useEffect(() => {
        setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
    }, [])

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            timeZone={timeZone}
        />
    )
}

function CalendarRange() {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
        from: new Date(new Date().getFullYear(), 0, 12),
        to: addDays(new Date(new Date().getFullYear(), 0, 12), 30),
    })

    return (
        <Card className="mx-auto w-fit p-0">
            <CardContent className="p-0">
                <Calendar
                    mode="range"
                    captionLayout="dropdown"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={4}
                    disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                    }
                />
            </CardContent>
        </Card>
    )
}

function CalendarWithPresets() {
    const [date, setDate] = React.useState<Date | undefined>(
        new Date(new Date().getFullYear(), 1, 12)
    )
    const [currentMonth, setCurrentMonth] = React.useState<Date>(
        new Date(new Date().getFullYear(), new Date().getMonth(), 1)
    )
    return (
        <Card className="mx-auto w-fit max-w-[300px]">
            <CardContent>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    month={currentMonth}
                    onMonthChange={setCurrentMonth}
                    fixedWeeks
                    className="p-0 [--cell-size:--spacing(9.5)]"
                />
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2 border-t">
                {[
                    {label: "Today", value: 0},
                    {label: "Tomorrow", value: 1},
                    {label: "In 3 days", value: 3},
                    {label: "In a week", value: 7},
                    {label: "In 2 weeks", value: 14},
                ].map((preset) => (
                    <Button
                        key={preset.value}
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => {
                            const newDate = addDays(new Date(), preset.value)
                            setDate(newDate)
                            setCurrentMonth(
                                new Date(newDate.getFullYear(), newDate.getMonth(), 1)
                            )
                        }}
                    >
                        {preset.label}
                    </Button>
                ))}
            </CardFooter>
        </Card>
    )
}

function CalendarWithTime() {
    const [date, setDate] = React.useState<Date | undefined>(
        new Date(new Date().getFullYear(), new Date().getMonth(), 12)
    )
    return (
        <Card className="mx-auto w-fit">
            <CardContent>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="p-0"
                />
            </CardContent>
            <CardFooter className="border-t bg-card">
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="time-from">Start Time</FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="time-from"
                                type="time"
                                step="1"
                                defaultValue="10:30:00"
                                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                            />
                            <InputGroupAddon>
                                <Clock2Icon className="text-muted-foreground"/>
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="time-to">End Time</FieldLabel>
                        <InputGroup>
                            <InputGroupInput
                                id="time-to"
                                type="time"
                                step="1"
                                defaultValue="12:30:00"
                                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                            />
                            <InputGroupAddon>
                                <Clock2Icon className="text-muted-foreground"/>
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>
                </FieldGroup>
            </CardFooter>
        </Card>
    )
}

function CalendarBookedDates() {
    const [date, setDate] = React.useState<Date | undefined>(
        new Date(new Date().getFullYear(), 1, 3)
    )
    const bookedDates = Array.from(
        {length: 15},
        (_, i) => new Date(new Date().getFullYear(), 1, 12 + i)
    )
    return (
        <Card className="mx-auto w-fit p-0">
            <CardContent className="p-0">
                <Calendar
                    mode="single"
                    defaultMonth={date}
                    selected={date}
                    onSelect={setDate}
                    disabled={bookedDates}
                    modifiers={{
                        booked: bookedDates,
                    }}
                    modifiersClassNames={{
                        booked: "[&>button]:line-through opacity-100",
                    }}
                />
            </CardContent>
        </Card>
    )
}

function CalendarCustomDays() {
    const [range, setRange] = React.useState<DateRange | undefined>({
        from: new Date(new Date().getFullYear(), 11, 8),
        to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
    })
    return (
        <Card className="mx-auto w-fit p-0">
            <CardContent className="p-0">
                <Calendar
                    mode="range"
                    defaultMonth={range?.from}
                    selected={range}
                    onSelect={setRange}
                    numberOfMonths={1}
                    captionLayout="label"
                    className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
                    formatters={{
                        formatMonthDropdown: (date) => {
                            return date.toLocaleString("default", {month: "long"})
                        },
                    }}
                    components={{
                        DayButton: ({children, modifiers, day, ...props}) => {
                            const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6
                            return (
                                <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                                    {children}
                                    {!modifiers.outside && (
                                        <span className={"text-destructive font-medium"}>{isWeekend ? "$120" : "$100"}</span>
                                    )}
                                </CalendarDayButton>
                            )
                        },
                    }}
                />
            </CardContent>
        </Card>
    )
}



export default function CalendarTest() {
    return (
        <div className={"flex flex-col gap-y-4 w-full"}>

            <Calendar
                mode="range"
                captionLayout="dropdown-years"
            />


            <CalendarCustomDays/>
            <CalendarBookedDates/>
            <CalendarWithTime/>
            <CalendarWithPresets/>
            <CalendarRange/>
            <CalendarWithTimezone/>
            <CalendarDemo/>
        </div>
    )
}