"use client"

import "./css/collapsible-animation.css"

import { Collapsible as CollapsiblePrimitive } from "radix-ui"
import {cn} from "~/template/new-york-v4/lib/utils";

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
    className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
        className={cn(
        "overflow-hidden",
        "data-[state=open]:animate-[mw-collapsible-down_99ms_ease-out]",
        "data-[state=closed]:animate-[mw-collapsible-up_99ms_ease-out]",
        className
      )}
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
