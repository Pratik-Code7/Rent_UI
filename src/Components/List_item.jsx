import React, { useState } from "react";

const List_item = ({ image, text, price = "Rs 45,000/mo", location = "Lazimpat, Kathmandu", beds = 2, baths = 2, area = "1,200", tag = "For Rent" }) => {
  const [saved, setSaved] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow duration-200 hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={text}
          loading="lazy"
          crossOrigin="anonymous"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-card/95 px-2.5 py-1 text-xs font-semibold text-primary shadow-xs">
          {tag}
        </span>
        <button
          onClick={() => setSaved((s) => !s)}
          aria-label={saved ? "Remove from saved" : "Save property"}
          aria-pressed={saved}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-card/95 text-foreground shadow-xs transition-colors hover:text-accent"
        >
          <i className={saved ? "ri-heart-fill text-accent" : "ri-heart-line"} aria-hidden="true"></i>
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-semibold leading-snug text-foreground">{text}</h3>
          <p className="shrink-0 font-display text-base font-bold text-primary">{price}</p>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <i className="ri-map-pin-2-line text-accent" aria-hidden="true"></i>
          <span className="truncate">{location}</span>
        </div>

        <div className="mt-1 flex items-center gap-4 border-t border-border pt-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <i className="ri-hotel-bed-line" aria-hidden="true"></i>
            {beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <i className="ri-drop-line" aria-hidden="true"></i>
            {baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <i className="ri-ruler-line" aria-hidden="true"></i>
            {area} sqft
          </span>
        </div>
      </div>
    </article>
  );
};

export default List_item;
