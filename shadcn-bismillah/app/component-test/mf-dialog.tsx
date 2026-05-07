import * as React from "react";
import {Dialog as DialogPrimitive} from "radix-ui";
import {cva} from "class-variance-authority";
import {Button} from "~/template/new-york-v4/ui/button";
import {cn} from "~/lib/utils";
import {XIcon} from "lucide-react";

const contentVariations = cva(
    "",
    {
        variants: {
            type: {
                dialog: "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-1rem)] translate-x-[-50%] translate-y-[-50%] gap-3 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                drawer: "",
                alert: "",
            },
            slideFrom: {
                right: "",
                left: "",
                top: "",
                bottom: "",
            },
            dialogSize: {
                small: "max-w-lg",
                medium: "max-w-2xl",
                large: "max-w-6xl",
                full: "h-full max-h-[calc(100%-1rem)]",
            }
        }
    }
)

type SlideFrom = "right" | "left" | "top" | "bottom";
type DialogType = "dialog" | "drawer" | "alert";
type DialogSize = "small" | "medium" | "large" | "full";

export interface DialogPropsBase {
    type?: DialogType;
    slideFrom?: SlideFrom;
    showCloseButton?: boolean
    dialogSize?: DialogSize
}

export interface DialogProps extends DialogPropsBase, React.ComponentProps<typeof DialogPrimitive.Root> {}

function Dialog({ type, slideFrom, ...props }: DialogProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogPortal({...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}


function DialogClose({ ...props}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent(
    { className, children, showCloseButton = true, type = "dialog", dialogSize = "small", ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & DialogPropsBase) {

    let variations: Record<string, string> = {
        type: type
    }

    if (type === "dialog") {
        variations["dialogSize"] = dialogSize
    }

    console.log(variations)

    return (
        <DialogPortal data-slot="dialog-portal">
            <DialogOverlay/>
            <DialogPrimitive.Content
                data-slot="dialog-content"
                className={cn(
                    contentVariations(variations),
                    className
                )}
                {...props}
            >
                {children}
                {showCloseButton && (
                    <DialogPrimitive.Close
                        data-slot="dialog-close"
                        className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                    >
                        <XIcon/>
                        <span className="sr-only">Close</span>
                    </DialogPrimitive.Close>
                )}
            </DialogPrimitive.Content>
        </DialogPortal>
    )
}


function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 flex-row justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold mr-3", className)}
      {...props}
    />
  )
}

function DialogSubTitle({className, ...props}: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return (
        <DialogPrimitive.Description
            data-slot="dialog-description"
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        />
    )
}

export default function MFDialog({type = "dialog", dialogSize = "small", slideFrom = "right"} : DialogProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <Button variant="outline" onClick={()=>{setOpen(value => !value)}}>MF Dialog {type}</Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent type={type} slideFrom={slideFrom} dialogSize={dialogSize}>
                    <DialogHeader>
                        <DialogTitle>This Title is For Edit profile Please Check the Spacing</DialogTitle>
                        <DialogSubTitle>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogSubTitle>
                    </DialogHeader>

                    Body Content

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}




// DialogContent
// onPointerDownOutside={(e) => e.preventDefault()}