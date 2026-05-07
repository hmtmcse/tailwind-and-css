import {Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarImage} from "~/template/new-york-v4/ui/avatar";
import {AspectRatio} from "~/template/new-york-v4/ui/aspect-ratio";

export async function loader() {
    return {message: "Hello Task"}
}


function DefaultThings() {
    return (
        <>

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

            <AvatarGroup className="grayscale size-10 mt-5">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter"/>
                    <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
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

        </>
    )
}

export default function ImageTesting() {
    return(
        <>
            <DefaultThings/>
        </>
    )
}