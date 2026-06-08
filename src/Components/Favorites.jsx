import React from "react";
import Fav_Comp from "./Fav_Comp";

const Favorites = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Favorites</h1>
        <p className="mt-1 text-muted-foreground">Properties you&apos;ve saved for easy access later.</p>
      </div>

      {/* Helper banner */}
      <div className="flex items-center gap-4 rounded-xl border border-border bg-accent-subtle p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-card text-2xl text-accent">
          <i className="ri-heart-line" aria-hidden="true"></i>
        </div>
        <div>
          <h2 className="font-display text-base font-semibold text-foreground">Save properties you love</h2>
          <p className="text-sm text-muted-foreground">
            Click the heart icon on any property to save it for easy access later.
          </p>
        </div>
      </div>

      <Fav_Comp />
    </div>
  );
};

export default Favorites;
