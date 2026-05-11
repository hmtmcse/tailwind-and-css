import { Button } from "~/template/new-york-v4/ui/button";
import {Card, CardContent} from "~/template/new-york-v4/ui/card";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "~/template/new-york-v4/ui/collapsible";
import {Airplay, ChevronDown, ChevronDownIcon, Settings} from "lucide-react";
import {
    Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader, SidebarInset,
    SidebarMenu, SidebarMenuAction, SidebarMenuBadge,
    SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
    SidebarProvider, SidebarRail, SidebarTrigger
} from "~/template/new-york-v4/ui/sidebar";
import * as React from "react";
import {IconMail} from "@tabler/icons-react";

export async function loader() {
    return {message: "Hello Task"}
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

function getSimpleSidebarItem(){
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton><Airplay /> Simple Overview</SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

function getSidebarMenuItem() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton variant={"outline"} size={"default"} isActive={false}>
                        <Settings /> Overview
                    </SidebarMenuButton>
                    <SidebarMenuAction showOnHover={true}><IconMail /></SidebarMenuAction>
                    {/*<SidebarMenuBadge><IconMail /></SidebarMenuBadge>*/}
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton>Other</SidebarMenuButton>
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                                Submenu Item 1
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                                Submenu Item 2
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <SidebarMenuSubButton>
                                Submenu Item 3
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}

function SidebarBasicTest() {
    return (
        <Sidebar>
            <SidebarHeader>
                Sidebar Header
            </SidebarHeader>
            <SidebarContent>

                {getSidebarMenuItem()}
                {getSimpleSidebarItem()}

            </SidebarContent>
            <SidebarFooter>
                Sidebar Footer
            </SidebarFooter>

            <SidebarRail/>
        </Sidebar>
    )
}


export default function SidebarTest() {
    return (
        <div className={"m-4"}>
            <SidebarProvider>
                <SidebarBasicTest/>

                <SidebarInset>
                     <SidebarTrigger className="-ml-1" />
                    <CollapsibleBasic/>
                    Sidebar Test
                </SidebarInset>

            </SidebarProvider>
        </div>
    )
}