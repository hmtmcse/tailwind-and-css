import * as React from "react";
import {Dialog as DialogPrimitive} from "radix-ui";
import {cva} from "class-variance-authority";
import {Button} from "~/template/new-york-v4/ui/button";
import {cn} from "~/lib/utils";
import {XIcon} from "lucide-react";
import {Field, FieldGroup} from "~/template/new-york-v4/ui/field";
import {Label} from "~/template/new-york-v4/ui/label";
import {Input} from "~/template/new-york-v4/ui/input";
import {ScrollArea} from "~/template/new-york-v4/ui/scroll-area";

const contentVariations = cva(
    "",
    {
        variants: {
            type: {
                dialog: "fixed top-[50%] left-[50%] z-50 flex flex-col w-full max-w-[calc(100%-1rem)] max-h-[calc(100%-1rem)] translate-x-[-50%] translate-y-[-50%] gap-2 rounded-lg border bg-background p-5 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                drawer: "fixed z-50 bg-background p-5 gap-2 flex flex-col  shadow-lg transition ease-in-out data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:animate-in data-[state=open]:duration-500",
                alert: "",
            },
            slideFrom: {
                right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                top: "inset-x-0 top-0 h-auto max-h-[calc(100%-10rem)] border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom: "inset-x-0 bottom-0 h-auto max-h-[calc(100%-10rem)] border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            },
            dialogSize: {
                small: "max-w-lg",
                medium: "max-w-2xl",
                large: "max-w-6xl",
                full: "h-full",
            }
        }
    }
)

interface DialogEngine {
    open: (title?: string, subTitle?: string, slideFrom?: SlideFrom) => void
    close: () => void
}

interface DialogFooterActionButton {
    verient: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
    label: React.ReactNode
    data?: any
    onClick: (data?: any) => void
}

type SlideFrom = "right" | "left" | "top" | "bottom";
type DialogType = "dialog" | "drawer" | "alert";
type DialogSize = "small" | "medium" | "large" | "full";

export interface DialogPropsBase {
    type?: DialogType;
    slideFrom?: SlideFrom;
    showCloseButton?: boolean
    dialogSize?: DialogSize
    header?: React.ReactNode
    footer?: React.ReactNode
    body?: React.ReactNode
    title?: string
    subTitle?: string
    isOpen?: boolean
    footerActionButtons?: any
}

export interface DialogProps extends DialogPropsBase, React.ComponentProps<typeof DialogPrimitive.Root> {}

function Dialog({ type, slideFrom, ...props }: DialogProps) {
  return <DialogPrimitive.Root data-tag="dialog" {...props} />
}

function DialogPortal({...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-tag="dialog-portal" {...props} />
}


function DialogClose({ ...props}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-tag="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-tag="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent(
    { className, children, showCloseButton = true, type = "dialog", dialogSize = "small", slideFrom = "right", ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & DialogPropsBase) {

    let variations: Record<string, string> = {
        type: type
    }

    if (type === "dialog") {
        variations["dialogSize"] = dialogSize
    } else if (type === "drawer") {
        variations["slideFrom"] = slideFrom
    }

    console.log("variations", variations)

    return (
        <DialogPortal data-tag="dialog-portal">
            <DialogOverlay/>
            <DialogPrimitive.Content
                data-tag="dialog-content"
                className={cn(
                    contentVariations(variations),
                    className
                )}
                {...props}
            >
                {children}
                {showCloseButton && (
                    <DialogPrimitive.Close
                        data-tag="dialog-close"
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
      data-tag="dialog-header"
      className={cn("flex flex-col gap-2", className)}
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
      data-tag="dialog-footer"
      className={cn(
          "mt-auto flex flex-row justify-end gap-2",
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
      data-tag="dialog-title"
      className={cn("text-lg leading-none font-semibold mr-3", className)}
      {...props}
    />
  )
}

function DialogSubTitle({className, ...props}: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return (
        <DialogPrimitive.Description
            data-tag="dialog-description"
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
                    <ScrollArea>
                        <div className={"overflow-y-auto"}>
                            Body Content
                            <FieldGroup>
                                <Field>
                                    <Label htmlFor="name-1">Name</Label>
                                    <Input id="name-1" name="name" defaultValue="Pedro Duarte"/>
                                </Field>
                                <Field>
                                    <Label htmlFor="username-1">Username</Label>
                                    <Input id="username-1" name="username" defaultValue="@peduarte"/>
                                </Field>
                            </FieldGroup>

                            <FieldGroup>
                                <Field>
                                    <Label htmlFor="name-1">Name</Label>
                                    <Input id="name-1" name="name" defaultValue="Pedro Duarte"/>
                                </Field>
                                <Field>
                                    <Label htmlFor="username-1">Username</Label>
                                    <Input id="username-1" name="username" defaultValue="@peduarte"/>
                                </Field>
                            </FieldGroup>


                            <FieldGroup>
                                <Field>
                                    <Label htmlFor="name-1">Name</Label>
                                    <Input id="name-1" name="name" defaultValue="Pedro Duarte"/>
                                </Field>
                                <Field>
                                    <Label htmlFor="username-1">Username</Label>
                                    <Input id="username-1" name="username" defaultValue="@peduarte"/>
                                </Field>
                            </FieldGroup>


                            <FieldGroup>
                                <Field>
                                    <Label htmlFor="name-1">Name</Label>
                                    <Input id="name-1" name="name" defaultValue="Pedro Duarte"/>
                                </Field>
                                <Field>
                                    <Label htmlFor="username-1">Username</Label>
                                    <Input id="username-1" name="username" defaultValue="@peduarte"/>
                                </Field>
                            </FieldGroup>

                            <FieldGroup>
                                <Field>
                                    <Label htmlFor="name-1">Name</Label>
                                    <Input id="name-1" name="name" defaultValue="Pedro Duarte"/>
                                </Field>
                                <Field>
                                    <Label htmlFor="username-1">Username</Label>
                                    <Input id="username-1" name="username" defaultValue="@peduarte"/>
                                </Field>
                            </FieldGroup>


                        </div>


                    </ScrollArea>



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