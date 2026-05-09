import {
    Sheet, SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "~/template/new-york-v4/ui/sheet"
import {Button} from "~/template/new-york-v4/ui/button";
import { Label } from "~/template/new-york-v4/ui/label";
import { Input } from "~/template/new-york-v4/ui/input";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/template/new-york-v4/ui/dialog";
import {Field, FieldGroup} from "~/template/new-york-v4/ui/field";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "~/template/new-york-v4/ui/alert-dialog";
import MFDialog from "~/component-test/mf-dialog";

export async function loader() {
    return {message: "Hello Task"}
}

function DialogDemo() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">

          <DialogHeader>
            <DialogTitle>This Title is For Edit profile Please Check the Spacing</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

function SheetDemo() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>


            <SheetContent side={"right"}>
                <SheetHeader>
                    <SheetTitle>This Title is For Edit profile Please Check the Spacing</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                    </SheetDescription>
                </SheetHeader>

                <FieldGroup className={"px-4"}>
                    <Field>
                        <Label htmlFor="name-1">Name</Label>
                        <Input id="name-1" name="name" defaultValue="Pedro Duarte"/>
                    </Field>
                    <Field>
                        <Label htmlFor="username-1">Username</Label>
                        <Input id="username-1" name="username" defaultValue="@peduarte"/>
                    </Field>
                </FieldGroup>

                <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>

    )
}

function AlertDialogDemo() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Show Alert</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}


export default function DialogTest() {
    return(
        <div className={"m-4"}>
            <DialogDemo/>
            <div className={"my-4"}><SheetDemo/></div>
            <div className={"my-4"}><AlertDialogDemo/></div>
            <div className={"my-4"}><MFDialog dialogSize={"small"}/></div>
            <div className={"my-4"}><MFDialog type={"drawer"} slideFrom={"top"}/></div>
        </div>
    )
}