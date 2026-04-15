import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet
} from "~/template/new-york-v4/ui/field"
import { Input } from "~/template/new-york-v4/ui/input"
import {Switch} from "~/template/new-york-v4/ui/switch";
import {Separator} from "~/components/ui/separator";


export async function loader() {
    return {message: "Hello Task"}
}


function BasicStructure() {
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

            </FieldGroup>
        </FieldSet>
    )
}


export default function InputField() {
    return (
        <>
            <div className={"m-4"}>

                 <BasicStructure/>

                <Separator className="mt-20"/>

                <Field>
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                        Name on Card
                    </FieldLabel>
                    <Input
                        id="checkout-7j9-card-name-43j"
                        placeholder="Evil Rabbit"
                        required
                    />
                </Field>
            </div>
        </>
    )
}