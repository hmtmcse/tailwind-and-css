import { AspectRatio } from "./../components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
          <img
              src="https://avatars.githubusercontent.com/u/1875791?v=4"
              alt="Card image"
              className="w-full rounded-lg object-cover grayscale dark:brightness-20"
          />
      </AspectRatio>
    </div>
  )
}
