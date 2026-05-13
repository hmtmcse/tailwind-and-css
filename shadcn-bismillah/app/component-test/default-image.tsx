import {cva} from "class-variance-authority";
import {cn} from "~/lib/utils";
import React, {useEffect, useState} from "react";

const imageVariations = cva(
    "aspect-square object-cover",
    {
        variants: {
            shape: {
                circle: "rounded-full",
                rounded: "rounded-lg",
                square: "rounded-none",
            }
        }
    }
)

const imageWrapperVariations = cva(
    "flex shrink-0 relative",
    {
        variants: {
            avatar: {
                default: "size-8",
                small: "size-6",
                medium: "size-10",
                large: "size-12",
            }
        }
    }
)

interface ImagePropsBase {
    src: string
    alt: string
    height?: string
    width?: string
    ratio?: string
    loading?: "lazy" | "eager"
    decoding?: "async" | "sync" | "auto"
    shape?: "circle" | "square" | "rounded"
    avatar?: "default" | "small" | "medium" | "large"

    fallback?: string
    fallbackSrc?: string
    isDirectLoading?: boolean
}

type ImageProps = ImagePropsBase & React.ComponentProps<"span">

function getPlaceholder(text: string, width = 400, height = 400) {
    const fontSize = Math.floor(Math.min(width, height) * 0.4);
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="#e2e8f0"/>
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="${fontSize}" font-family="sans-serif" fill="#94a3b8">${text}</text>
    </svg>`.replace(/\n/g, "").replace(/"/g, "'");

    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export default function DefaultImage({src, alt, loading = "lazy", decoding = "async", ratio, height, width, shape = "rounded", fallbackSrc, fallback, isDirectLoading, avatar, className}: ImageProps) {
    const [onLoading, setOnLoading] = useState(true);

    const style: Record<string, any> = {}
    if (ratio) {
        style.aspectRatio = ratio
    }

    useEffect(() => {
        if (!isDirectLoading) {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.onload = () => {
                setOnLoading(false);
            };
            img.src = src;
        }
    }, [src]);

    const getImageSource = () => {
        if (isDirectLoading) {
            return src
        }
        const placeholder = fallbackSrc ? fallbackSrc : getPlaceholder(fallback || "")
        return onLoading ? placeholder : src
    }

    const getSizeClass = () => {
        if (!height && !width) {
            return "size-full"
        }
        return ""
    }

    return (
        <span className={cn(imageWrapperVariations({avatar}), className)}>
            <img
                loading={loading}
                src={getImageSource()}
                alt={alt}
                decoding={decoding}
                style={style}
                height={height}
                width={width}
                className={cn(
                    imageVariations({shape}),
                    getSizeClass(),
                )}
            />
        </span>
    )
}