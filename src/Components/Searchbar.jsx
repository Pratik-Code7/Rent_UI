import React, { useState } from "react";

const Searchbar = () => {
  const [active, setActive] = useState("Buy");

  const tabs = ["Buy", "Rent", "Sell"];

  const primeLocations = [
    "Baluwatar", "Bhaisepati", "Budhanilkantha", "Durbar Marg", "Hattisar",
    "Jawalakhel", "Jhamsikhel", "Kalanki", "Kamaladi", "Kirtipur", "Kupondole",
    "Lazimpat", "Lokanthali", "Madhyapur Thimi", "Maharajgunj", "Naxal",
    "New Road", "Patan Dhoka", "Pulchowk", "Putalisadak", "Sallaghari",
    "Sanepa", "Sitapaila", "Suryabinayak", "Thamel", "Tokha",
  ];

  const typeOptions = {
    Buy: ["House", "Apartment", "Penthouse", "Land"],
    Rent: ["Office Space", "Duplex", "House", "Apartment", "Land"],
    Sell: ["Residential House", "Apartment", "Flat", "Commercial Property", "Retail Shop", "Land", "Penthouse"],
  };

  const selectClass =
    "h-11 w-full appearance-none rounded-lg border border-input bg-card px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-3 focus:ring-primary/10";

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-border bg-card p-3 shadow-lg sm:p-4">
      {/* Segmented control */}
      <div className="mb-3 inline-flex rounded-lg bg-muted p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-md px-5 py-1.5 text-sm font-semibold transition-colors ${
              active === tab
                ? "bg-card text-primary shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">Location</span>
          <div className="relative">
            <select className={selectClass} defaultValue="">
              <option value="" disabled>Select location</option>
              {primeLocations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true"></i>
          </div>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">Property type</span>
          <div className="relative">
            <select className={selectClass} defaultValue="">
              <option value="">Any type</option>
              {typeOptions[active].map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true"></i>
          </div>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">Price range</span>
          <div className="relative">
            <select className={selectClass} defaultValue="">
              <option value="">Any price</option>
              <option>Rs 10k - 50k</option>
              <option>Rs 50k - 1L</option>
              <option>Rs 1L - 5L</option>
              <option>Rs 5L+</option>
            </select>
            <i className="ri-arrow-down-s-line pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true"></i>
          </div>
        </label>

        <button className="btn btn-accent h-11 lg:w-auto">
          <i className="ri-search-line" aria-hidden="true"></i>
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
