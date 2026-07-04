import ButtonTesting from "~/component-test/button-testing";
import CardTesting from "~/component-test/card-testing";
import { Button } from "~/template/new-york-v4/ui/button";
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription, ItemFooter, ItemGroup,
    ItemMedia,
    ItemSeparator,
    ItemTitle
} from "~/template/new-york-v4/ui/item";
import {BadgeCheckIcon, ChevronRightIcon, Icon, InboxIcon, Plus, PlusIcon} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/template/new-york-v4/ui/avatar";

export async function loader() {
    return {message: "Hello Task"}
}

function ItemDemo() {
    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            <Item variant="muted">
                <ItemContent>
                    <ItemTitle>Basic Item</ItemTitle>
                    <ItemDescription>
                        A simple item with title and description.
                    </ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Button variant="outline" size="sm">
                        Action
                    </Button>
                </ItemActions>
            </Item>
            <Item variant="outline" size="sm" asChild>
                <a href="#">
                    <ItemMedia>
                        <BadgeCheckIcon className="size-5"/>
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Your profile has been verified.</ItemTitle>
                    </ItemContent>
                    <ItemActions>
                        <ChevronRightIcon className="size-4"/>
                    </ItemActions>
                </a>
            </Item>
        </div>
    )
}

function ItemAvatar() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-sm"
            variant="outline"
            className="rounded-full"
            aria-label="Invite"
          >
            <Plus />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar className="hidden sm:flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="hidden sm:flex">
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>
            Invite your team to collaborate on this project.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

function BasicItem() {
    return (
        <Item>
            <ItemMedia variant="icon">
                <Plus/>
            </ItemMedia>
            <ItemContent>
                <ItemTitle>Title</ItemTitle>
                <ItemDescription>Description</ItemDescription>
            </ItemContent>
            <ItemActions>
                <Button>Action</Button>
            </ItemActions>
        </Item>
    )
}

function ItemSizeDemo() {
    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            <Item variant="outline">
                <ItemMedia variant="icon">
                    <InboxIcon/>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>Default Size</ItemTitle>
                    <ItemDescription>
                        The standard size for most use cases.
                        <ItemSeparator/>
                    </ItemDescription>
                </ItemContent>
            </Item>
            <Item variant="outline" size="sm">
                <ItemMedia variant="icon">
                    <InboxIcon/>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>Small Size</ItemTitle>
                    <ItemDescription>A compact size for dense layouts.</ItemDescription>
                </ItemContent>
            </Item>
            <Item variant="outline">
                <ItemMedia variant="icon">
                    <InboxIcon/>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>Extra Small Size</ItemTitle>
                    <ItemDescription>The most compact size available.</ItemDescription>
                </ItemContent>
            </Item>
        </div>
    )
}


const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com",
  },
]


function ItemGroupExample() {
    return (
        <ItemGroup className="gap-2">
            {people.map((person, index) => (
                <Item key={person.username} variant="outline">
                    <ItemMedia>
                        <Avatar>
                            <AvatarImage src={person.avatar} className="grayscale"/>
                            <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </ItemMedia>
                    <ItemContent className="gap-1">
                        <ItemTitle>{person.username}</ItemTitle>
                        <ItemDescription>{person.email}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <PlusIcon/>
                        </Button>
                    </ItemActions>
                </Item>
            ))}
        </ItemGroup>
    )
}


function ItemTesting1() {
    return (
        <div className="flex w-full max-w-md flex-col gap-6">
            <Item variant="outline" size="sm" asChild>
                <a href="#">
                                        <ItemActions>
                        <ChevronRightIcon className="size-4"/>
                    </ItemActions>
                    <ItemContent>
                        <ItemTitle>Your profile has been verified.</ItemTitle>
                    </ItemContent>
                                        <ItemMedia>
                        <BadgeCheckIcon className="size-5"/>
                    </ItemMedia>
                </a>
            </Item>
        </div>
    )
}


export default function CommonTest() {
    return(
        <>
            <ItemTesting1/>
            <ItemGroupExample/>
            <ItemSizeDemo/>
            <BasicItem/>
            <ItemAvatar/>
            <ItemDemo/>
            <CardTesting/>
            <ButtonTesting/>
        </>
    )
}