import * as React from "react";
import {Dialog as DialogPrimitive} from "radix-ui";
import {cn} from "~/lib/utils";
import {XIcon} from "lucide-react";
import {DialogOverlay, DialogPortal} from "~/template/new-york-v4/ui/dialog";
import {Button} from "~/template/new-york-v4/ui/button";
import {cva} from "class-variance-authority";

const contentVariations = cva(
    "fixed z-50 bg-background gap-4 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
        variants: {
            type: {
                dialog: "top-[50%] left-[50%] grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] rounded-lg border p-6 duration-200 outline-none data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95  data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
                drawer: "flex flex-col transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
                alert: "",
            },
            slideFrom: {
                right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                top: "inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom: "inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            }
        }
    }
)

export interface DialogProps extends React.ComponentProps<typeof DialogPrimitive.Root> {
}

function Dialog({ ...props }: DialogProps) {
  return <DialogPrimitive.Root data-tag="dialog" {...props}/>
}

type SlideFrom = "right" | "left" | "top" | "bottom" | undefined;

function DialogContent({
  className,
  children,
  showCloseButton = true,
    type = "dialog",
    slideFrom = "right",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean,
    type?: "dialog" | "drawer" | "alert",
    slideFrom?: SlideFrom,
}) {

    const closeButton = React.useCallback(() => {
        if (!showCloseButton) {
            return
        }
        return (
            <DialogPrimitive.Close
                data-tag="dialog-close"
                className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
            >
                <XIcon/>
                <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
        )
    }, [])

    let conditionalVariations: Record<string, string> = {}
    if (type === "drawer") {
        conditionalVariations["slideFrom"] = slideFrom
    }

    return (
        <DialogPortal data-tag="dialog-portal">
            <DialogOverlay/>
            <DialogPrimitive.Content
                data-tag="dialog-content"
                className={cn(
                    contentVariations({type, ...conditionalVariations}),
                    className
                )}
                {...props}
            >
                {children}
                {closeButton()}
            </DialogPrimitive.Content>
        </DialogPortal>
    )
}


export default function MFDialog() {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <Button variant="outline" onClick={()=>{setOpen(value => !value)}}>MF Dialog</Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent type={"drawer"} slideFrom={"left"}>
                    Dialog
                </DialogContent>
            </Dialog>
        </>
    )
}


// DialogContent
// onPointerDownOutside={(e) => e.preventDefault()}