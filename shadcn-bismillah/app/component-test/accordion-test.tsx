import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "~/template/new-york-v4/ui/accordion";

export async function loader() {
    return {message: "Hello Task"}
}

const items = [
  {
    value: "item-1",
    trigger: "How do I reset my password?",
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
  },
  {
    value: "item-2",
    trigger: "Can I change my subscription plan?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
]

function Example1() {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="max-w-lg"
        >
            {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export function AccordionBorders() {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full rounded-sm border"
            defaultValue="billing"
        >
            {items.map((item) => (
                <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="border-b px-4 last:border-b-0"
                >
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}



export default function AccordionTest() {
    return(
        <div className={"m-5 flex gap-20"}>
           <AccordionBorders/>
           <Example1/>
        </div>
    )
}