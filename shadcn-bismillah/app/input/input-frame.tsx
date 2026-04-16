import React from "react";
import {cn} from "~/lib/utils";
import {cva} from "class-variance-authority";

type InputFrameOrientation = "vertical" | "horizontal";

interface InputFrameProps {
    label?: string,
    orientation?: InputFrameOrientation,
    labelNext?: any, // Node
    required?: boolean,
    errorMessage?: string
    hintsMessage?: string,
    children?: any,
    isError?: boolean,
    isChildFirst?: boolean,
}

function generate12DigitNumber() {
    const min = 100_000_000_000;
    const max = 999_000_000_000;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num.toString();
}

const fieldVariants = cva(
  "group/input-frame flex w-full gap-2 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ]
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)


function getLabel(labelKey: string, label?: string, required?: boolean, labelNext?: any) {
    if (!label) {
        return ""
    }
    let requiredLabel: any = required ? <span className="text-destructive relative top-[2.5px] required-symbol font-bold">*</span> : ""
    return (
        <label data-tag={"label"} htmlFor={labelKey} className={cn(
            "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            "group/tag-label peer/tag-label flex w-fit gap-1 leading-snug group-data-[disabled=true]/field:opacity-50",
            "has-[>[data-tag=input-frame]]:w-full has-[>[data-tag=input-frame]]:flex-col has-[>[data-tag=input-frame]]:rounded-md has-[>[data-tag=input-frame]]:border [&>*]:data-[tag=input-frame]:p-4",
            "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
        )}>
            {requiredLabel} {label} {labelNext}
        </label>
    )
}

function getErrorMessage(errorMessage?: string) {
    if (!errorMessage) {
        return ""
    }
    return (
        <div className={cn("text-sm font-normal text-destructive")}>{errorMessage}</div>
    )
}

function getHintsMessage(hintsMessage?: string) {
    if (!hintsMessage) {
        return ""
    }
    return (
        <p className={cn(
            "text-sm leading-normal font-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance",
            "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
            "[&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        )}>{hintsMessage}</p>
    )
}

export function InputFrame({className, label, required, errorMessage, hintsMessage, labelNext, children, isError, orientation = "vertical", isChildFirst = true}: InputFrameProps & React.ComponentProps<"div">) {
    const labelKey = generate12DigitNumber()
    const conditionalProps: any = {}
    let errorHintHTML: any = ""
    if (isError) {
        conditionalProps["data-invalid"] = true
        if (errorMessage) {
            errorHintHTML = getErrorMessage(errorMessage)
        }
    } else if (hintsMessage) {
        errorHintHTML = getHintsMessage(hintsMessage)
    }

    let labelFirstHTML: any = ""
    let labelLastHTML: any = ""
    if (isChildFirst) {
        labelFirstHTML = getLabel(labelKey, label, required, labelNext)
    } else {
        labelLastHTML = getLabel(labelKey, label, required, labelNext)
    }

    return (
        <div
            data-orientation={orientation}
            data-tag={"input-frame"} className={cn(fieldVariants({ orientation }), className)} {...conditionalProps}>
            {labelFirstHTML}
            {children}
            <div className="group/field-content flex flex-1 flex-col gap-1.5 leading-snug">
                {labelLastHTML}
                {errorHintHTML}
            </div>
        </div>
    )
}

