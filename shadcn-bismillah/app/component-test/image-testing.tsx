import {Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarImage} from "~/template/new-york-v4/ui/avatar";
import {AspectRatio} from "~/template/new-york-v4/ui/aspect-ratio";

import logo from "./assets/images/logo-green.png"
import profile from "./assets/images/profile.jpg"
import DefaultImage from "~/component-test/default-image";

export async function loader() {
    return {message: "Hello Task"}
}


function DefaultThings() {
    return (
        <div className={"mt-50"}>

            <Avatar>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="grayscale"

                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar className={"size-20 mt-5"}>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                <AvatarFallback>CN</AvatarFallback>
                <AvatarBadge className="bg-green-600 dark:bg-green-800"/>
            </Avatar>

            <AvatarGroup className="grayscale mt-5">
                <Avatar size={"lg"}>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar size={"lg"}>
                    <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter"/>
                    <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar size={"lg"}>
                    <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                </Avatar>
            </AvatarGroup>

            <div className="flex flex-wrap items-center gap-2 grayscale mt-5">
                <Avatar size="sm">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar size="lg">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>

            <div className="w-full max-w-sm mt-5">
                <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
                    <img
                        src="https://avatar.vercel.sh/shadcn1"
                        alt="Photo"
                        className="w-full rounded-lg object-cover grayscale dark:brightness-20"
                    />
                </AspectRatio>
            </div>

        </div>
    )
}

interface ImageProps {
    src: string;
    altText?: string;
}

function ImageWithStatus({src, altText}: ImageProps) {
    return (
        <span className={"flex shrink-0 size-12 relative"}>
            <img src={src} alt={altText} className={"aspect-square size-full rounded-full object-cover"}/>
            <span className="absolute right-0 bottom-0 z-10 rounded-full bg-green-600 ring-2 ring-white size-4"></span>
        </span>
    )
}

function Image({src, altText}: ImageProps) {
    return (
        <span className={"flex shrink-0 size-28"}>
            <img src={src} alt={altText} className={"aspect-square size-full rounded-2xl object-cover"}/>
        </span>
    )
}

export default function ImageTesting() {
    return(
        <div className={"m-5"}>


            <div className={""}>
                <DefaultImage
                    src={"https://avatars.githubusercontent.com/"}
                    alt={"BFE Logo"}
                    shape={"circle"}
                    className={"w-250"}
                    fallback={"BF"}
                />
            </div>


            <div className={"mt-2 mb-2"}>

                <DefaultImage
                    src={profile}
                    alt={"Profile"}
                    fallback={"TM"}
                    avatar={"default"}
                    shape={"circle"}/>

            </div>
            <div className={"mt-2 mb-2"}>
                <DefaultImage
                    src={"https://hmtmcse.com/image.png"}
                    alt={"Profile"} fallback={"TM"}
                    avatar={"default"}
                    shape={"circle"}
                />
            </div>

            <DefaultThings/>
        </div>
    )
}