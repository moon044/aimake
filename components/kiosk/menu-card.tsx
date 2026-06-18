"use client"

import { formatWon, type MenuItem } from "@/lib/menu"
import { MenuIcon } from "./icon"

export function MenuCard({
  item,
  onSelect,
  highlight = false,
}: {
  item: MenuItem
  onSelect: (item: MenuItem) => void
  highlight?: boolean
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className={`group flex w-full flex-col overflow-hidden rounded-[20px] border-2 bg-card text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-ring ${
        highlight ? "border-primary ring-2 ring-primary/25" : "border-border"
      }`}
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-secondary">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <MenuIcon name={item.icon} className="h-12 w-12 text-secondary-foreground/70" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-[18px] font-black leading-tight text-card-foreground">
          {item.name}
        </h3>

        <p className="line-clamp-2 text-[12px] font-bold leading-snug text-muted-foreground">
          {item.description}
        </p>

        <p className="mt-auto pt-1 text-[18px] font-black leading-none text-primary">
          {formatWon(item.price)}
        </p>
      </div>
    </button>
  )
}