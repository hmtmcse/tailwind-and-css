import { Button } from "~/template/new-york-v4/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "~/template/new-york-v4/ui/dropdown-menu"
import {
    BellIcon,
    CreditCardIcon, DownloadIcon,
    EyeIcon, FileCodeIcon, FileIcon,
    FileTextIcon, FolderIcon, FolderOpenIcon, FolderSearchIcon, HelpCircleIcon, KeyboardIcon,
    LanguagesIcon, LayoutIcon, LogOutIcon, MailIcon,
    MonitorIcon, MoonIcon,
    MoreHorizontalIcon, PaletteIcon, SaveIcon, SettingsIcon, ShieldIcon, SquarePen, SunIcon, UserIcon
} from "lucide-react";
import React, {Fragment} from "react";

export async function loader() {
    return {message: "Hello Task"}
}

type DropdownItemVariant = "default" | "destructive" | "outline" | "secondary" | "ghost"
type DropdownSize = "default" | "small"
type DropdownPosition = "start" | "center" | "end"


interface DropdownItemBaseProps {
    nameContent: React.ReactNode
    shortcut?: string
    actionData?: any
    action?: (actionData?: any) => void
    variant?: DropdownItemVariant
    hideMe?: boolean
    separator?: boolean
}

interface DropdownItemProps extends DropdownItemBaseProps {
    nested?: Array<DropdownItemProps>
    group?: Array<DropdownItemProps>
}

interface DropdownProps {
    trigger: React.ReactNode
    items: Array<DropdownItemProps>
    size?: DropdownSize
    position?: DropdownPosition
}

function Dropdown({trigger, items, size, position = "end"}: DropdownProps) {

    const getItem = React.useCallback((item: DropdownItemProps, key: number) => {
        const itemProps: Record<string, any> = {}
        if (item.hideMe) {
            return ""
        }

        if (item.action) {
            itemProps.onClick = () => item.action?.(item.actionData)
        }

        if (item.variant) {
            itemProps.variant = item.variant
        }

        return (
            <Fragment key={key}>
                <DropdownMenuItem {...itemProps}>
                    {item.nameContent}
                    {item.shortcut && <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>}
                </DropdownMenuItem>
                {item.separator && <DropdownMenuSeparator/>}
            </Fragment>
        )
    }, [])

    const generateGroup = React.useCallback((groupItem: DropdownItemProps, key: number) => {
        return (
            <Fragment key={key}>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>{groupItem.nameContent}</DropdownMenuLabel>
                    {groupItem.group && generateItem(groupItem.group)}
                </DropdownMenuGroup>
                {groupItem.separator && <DropdownMenuSeparator/>}
            </Fragment>
        )
    }, [])

    const generateNestedItem = React.useCallback((nestedItem: DropdownItemProps, key: number) => {
        return (
            <Fragment key={key}>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>{nestedItem.nameContent}</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            {nestedItem.nested && generateItem(nestedItem.nested)}
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                {nestedItem.separator && <DropdownMenuSeparator/>}
            </Fragment>
        )
    }, [])

    const generateItem = React.useCallback((itemList: Array<DropdownItemProps>) => (
        itemList.map((item: DropdownItemProps, index: number) => {
            if (item.group) {
                return generateGroup(item, index)
            }
            if (item.nested) {
                return generateNestedItem(item, index)
            }
            return getItem(item, index)
        })
    ), [])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {trigger}
            </DropdownMenuTrigger>
            {items.length > 0 && <DropdownMenuContent className="w-40" align={position}>{generateItem(items)}</DropdownMenuContent>}
        </DropdownMenu>
    )
}

const navigation: DropdownProps = {
    trigger: <Button variant="outline"><SquarePen/></Button>,
    items: [
        {nameContent: "Home", action: (data: any) => console.log("Home")},
        {nameContent: "About", separator: true},
        {
            nameContent: "Team",
            group: [
                {nameContent: "Members", action: (data: any) => console.log("Members")},
                {nameContent: "New Members", action: (data: any) => console.log("Members")},
                {nameContent: "Old Members", action: (data: any) => console.log("Members")},
                {
                    nameContent: "Nested",
                    nested: [
                        {nameContent: "Nested 1"},
                        {nameContent: "Nested 2"},
                        {nameContent: "Nested 3"},
                        {
                            nameContent: "Nested Group",
                            group: [
                                {nameContent: "NG 1"},
                                {nameContent: "NG 2"},
                                {nameContent: "NG 3"},
                            ]
                        },
                    ]
                }
            ],
            separator: true
        },
        {
            nameContent: "Settings",
            action: (data: any) => console.log("Settings"),
            nested: [
                {nameContent: "Profile", action: (data: any) => console.log("Profile"), shortcut: "⇧⌘P"},
                {nameContent: "Billing", action: (data: any) => console.log("Billing"), shortcut: "⌘B"},
                {nameContent: "Team", action: (data: any) => console.log("Team")},
                {nameContent: "Subscription", action: (data: any) => console.log("Subscription")},
                {nameContent: "Keyboard shortcuts", action: (data: any) => console.log("Keyboard shortcuts")},
                {nameContent: "Theme", action: (data: any) => console.log("Theme")},
                {nameContent: "Language", action: (data: any) => console.log("Language")},
                {nameContent: "Notifications", action: (data: any) => console.log("Notifications")},
                {nameContent: "Advanced", action: (data: any) => console.log("Advanced")},
            ],
            separator: true
        },
        {nameContent: (<><UserIcon/> Profile</>)},
        {nameContent: (<><CreditCardIcon/> Billing</>)},
        {nameContent: (<><SettingsIcon/> Settings</>)},
    ]
}

export default function DropdownTest() {



    return(
        <div className={"m-4 flex gap-2"}>


            <DropdownMenuIcons/>
            <DropdownMenuDemo/>
            <DropdownMenuBasic/>
            <DropdownMenuSubmenu/>
            <DropdownMenuComplex/>

             <Dropdown {...navigation}/>
        </div>
    )
}

function DropdownMenuComplex() {
    const [notifications, setNotifications] = React.useState({
        email: true,
        sms: false,
        push: true,
    })
    const [theme, setTheme] = React.useState("light")
    // @ts-ignore
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Complex Menu</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-44">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>File</DropdownMenuLabel>
                    <DropdownMenuItem>
                        <FileIcon/>
                        New File
                        <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <FolderIcon/>
                        New Folder
                        <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
                    </DropdownMenuItem>

                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <FolderOpenIcon/>
                            Open Recent
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Recent Projects</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                        <FileCodeIcon/>
                                        Project Alpha
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <FileCodeIcon/>
                                        Project Beta
                                    </DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>
                                            <MoreHorizontalIcon/>
                                            More Projects
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>
                                                    <FileCodeIcon/>
                                                    Project Gamma
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <FileCodeIcon/>
                                                    Project Delta
                                                </DropdownMenuItem>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator/>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <FolderSearchIcon/>
                                        Browse...
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        <SaveIcon/>
                        Save
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DownloadIcon/>
                        Export
                        <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>View</DropdownMenuLabel>
                    <DropdownMenuCheckboxItem
                        checked={notifications.email}
                        onCheckedChange={(checked) =>
                            setNotifications({...notifications, email: checked === true})
                        }
                    >
                        <EyeIcon/>
                        Show Sidebar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        checked={notifications.sms}
                        onCheckedChange={(checked) =>
                            setNotifications({...notifications, sms: checked === true})
                        }
                    >
                        <LayoutIcon/>
                        Show Status Bar
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <PaletteIcon/>
                            Theme
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                                    <DropdownMenuRadioGroup
                                        value={theme}
                                        onValueChange={setTheme}
                                    >
                                        <DropdownMenuRadioItem value="light">
                                            <SunIcon/>
                                            Light
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="dark">
                                            <MoonIcon/>
                                            Dark
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="system">
                                            <MonitorIcon/>
                                            System
                                        </DropdownMenuRadioItem>
                                    </DropdownMenuRadioGroup>
                                </DropdownMenuGroup>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuItem>
                        <UserIcon/>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCardIcon/>
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <SettingsIcon/>
                            Settings
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                                    <DropdownMenuItem>
                                        <KeyboardIcon/>
                                        Keyboard Shortcuts
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <LanguagesIcon/>
                                        Language
                                    </DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>
                                            <BellIcon/>
                                            Notifications
                                        </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuGroup>
                                                    <DropdownMenuLabel>
                                                        Notification Types
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuCheckboxItem
                                                        checked={notifications.push}
                                                        onCheckedChange={(checked) =>
                                                            setNotifications({
                                                                ...notifications,
                                                                push: checked === true,
                                                            })
                                                        }
                                                    >
                                                        <BellIcon/>
                                                        Push Notifications
                                                    </DropdownMenuCheckboxItem>
                                                    <DropdownMenuCheckboxItem
                                                        checked={notifications.email}
                                                        onCheckedChange={(checked) =>
                                                            setNotifications({
                                                                ...notifications,
                                                                email: checked === true,
                                                            })
                                                        }
                                                    >
                                                        <MailIcon/>
                                                        Email Notifications
                                                    </DropdownMenuCheckboxItem>
                                                </DropdownMenuGroup>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator/>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <ShieldIcon/>
                                        Privacy & Security
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <HelpCircleIcon/>
                        Help & Support
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <FileTextIcon/>
                        Documentation
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem variant="destructive">
                        <LogOutIcon/>
                        Sign Out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function DropdownMenuSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Submenu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>More options</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Calendly</DropdownMenuItem>
                      <DropdownMenuItem>Slack</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Webhook</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Advanced...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DropdownMenuDemo() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Shortcut</Button>
            </DropdownMenuTrigger>


            <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>
                        Profile
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator/>

                <DropdownMenuGroup>
                    <DropdownMenuLabel>Team</DropdownMenuLabel>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        New Team
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>GitHub</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuItem disabled>API</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function DropdownMenuBasic() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Basic</Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>

                <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() =>{console.log("clicked")}}>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>

                <DropdownMenuSeparator/>

                <DropdownMenuItem>GitHub</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuItem disabled>API</DropdownMenuItem>

                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuItem>Email</DropdownMenuItem>
                            <DropdownMenuItem>Message</DropdownMenuItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuSub>
                                <DropdownMenuSubTrigger>More...</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem>Email</DropdownMenuItem>
                                        <DropdownMenuItem>Message</DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem>More...</DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>



            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function DropdownMenuIcons() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">With Icon</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <UserIcon/>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <CreditCardIcon/>
                    Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon/>
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem variant="destructive">
                    <LogOutIcon/>
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}