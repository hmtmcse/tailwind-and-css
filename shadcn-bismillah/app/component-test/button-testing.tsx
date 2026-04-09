import { Button } from "~/template/new-york-v4/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "~/template/new-york-v4/ui/card";
import {
    ArchiveIcon,
    ArrowUpIcon,
    CalendarPlusIcon,
    CircleFadingArrowUpIcon,
    ClockIcon,
    ListFilterIcon,
    MailCheckIcon,
    MoreHorizontalIcon,
    TagIcon, Trash2Icon
} from "lucide-react";
import {IconGitBranch} from "@tabler/icons-react";
import {Spinner} from "~/template/new-york-v4/ui/spinner";
import {ButtonGroup} from "~/template/new-york-v4/ui/button-group";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuSub, DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "~/template/new-york-v4/ui/dropdown-menu";
import React from "react";


function ButtonGroupWithDropdown() {
    const [label, setLabel] = React.useState("personal")
    return (
        <ButtonGroup>
            <Button variant="outline">Snooze</Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" aria-label="More Options">
                        <MoreHorizontalIcon/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <MailCheckIcon/>
                            Mark as Read
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <ArchiveIcon/>
                            Archive
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <ClockIcon/>
                            Snooze
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <CalendarPlusIcon/>
                            Add to Calendar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <ListFilterIcon/>
                            Add to List
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                                <TagIcon/>
                                Label As...
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                                <DropdownMenuRadioGroup
                                    value={label}
                                    onValueChange={setLabel}
                                >
                                    <DropdownMenuRadioItem value="personal">
                                        Personal
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="work">
                                        Work
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="other">
                                        Other
                                    </DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuItem variant="destructive">
                            <Trash2Icon/>
                            Trash
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </ButtonGroup>
    )
}


export default function ButtonTesting() {
    return (
        <>
            <Card className={"m-5"}>
                <CardHeader>
                    <CardTitle>All Type of Button</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-wrap items-center gap-2 md:flex-row">
                        <Button variant="default">Default</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                        <Button variant="outline">Outline</Button>



                        <Button variant="outline" size="icon"> <ArrowUpIcon/> </Button>
                        <Button variant="default" size="icon"> <ArrowUpIcon/> </Button>
                        <Button variant="destructive" size="icon"> <ArrowUpIcon/> </Button>

                        <Button variant="default" size={"default"}>Size default</Button>
                        <Button variant="default" size={"lg"}>Size lg</Button>
                        <Button variant="default" size={"sm"}>Size sm</Button>
                        <Button variant="default" size={"xs"}>Size xs</Button>

                        <Button variant="outline" size="icon-xs">  <CircleFadingArrowUpIcon /> </Button>
                        <Button variant="outline" size="icon-sm">  <CircleFadingArrowUpIcon /> </Button>
                        <Button variant="outline" size="icon-lg">  <CircleFadingArrowUpIcon /> </Button>

                        <Button variant="outline" size="sm">
                            <IconGitBranch/> New Branch
                        </Button>

                        <Button variant="destructive" size="icon" className="rounded-full">
                            <ArrowUpIcon/>
                        </Button>

                        <Button variant="outline">
                            <Spinner data-icon="inline-start"/>
                            Generating
                        </Button>

                        <ButtonGroup>
                            <Button variant="outline">Archive</Button>
                            <Button variant="outline">Report</Button>
                        </ButtonGroup>

                        <ButtonGroup orientation={"vertical"}>
                            <Button variant="outline">Archive</Button>
                            <Button variant="outline">Report</Button>
                        </ButtonGroup>

                        <ButtonGroupWithDropdown/>

                    </div>
                </CardContent>
            </Card>
        </>
    )
}