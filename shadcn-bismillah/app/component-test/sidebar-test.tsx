import { Button } from "~/template/new-york-v4/ui/button";
import {Card, CardContent} from "~/template/new-york-v4/ui/card";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "~/template/new-york-v4/ui/collapsible";
import {ChevronDownIcon} from "lucide-react";

export async function loader() {
    return {message: "Hello Task"}
}

function CollapsibleBasicTest() {
    return (
        <Collapsible>
            <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
            <CollapsibleContent>
                Yes. Free to use for personal and commercial projects. No attribution
                required.
            </CollapsibleContent>
        </Collapsible>
    )
}

function CollapsibleBasic() {
    return (
        <Card className="mx-auto w-full max-w-sm">
            <CardContent>
                <Collapsible className="rounded-md data-[state=open]:bg-muted">
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="group w-full">
                            Product details
                            <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180"/>
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                        <div>
                            This panel can be expanded or collapsed to reveal additional
                            content.
                        </div>
                        <Button size="xs">Learn More</Button>
                    </CollapsibleContent>
                </Collapsible>
            </CardContent>
        </Card>
    )
}


export default function SidebarTest() {
    return(
        <div className={"m-4"}>
            <CollapsibleBasic/>
            <CollapsibleBasicTest/>
            Sidebar Test
        </div>
    )
}