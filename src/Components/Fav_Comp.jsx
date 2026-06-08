import React from "react";

const Fav_Comp = () => {
  const properties = [
    { id: 1, title: "Modern Apartment", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", price: "Rs 45,000/mo", location: "Lazimpat, Kathmandu", beds: 2, baths: 2, area: "1,200" },
    { id: 2, title: "Luxury Villa", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", price: "Rs 1.2L/mo", location: "Budhanilkantha, KTM", beds: 4, baths: 3, area: "3,400" },
    { id: 3, title: "Cozy Cottage", img: "https://images.unsplash.com/photo-1448630360428-65456885c650", price: "Rs 38,000/mo", location: "Tokha, KTM", beds: 2, baths: 1, area: "950" },
    { id: 4, title: "City Penthouse", img: "https://images.unsplash.com/photo-1494526585095-c41746248156", price: "Rs 95,000/mo", location: "Durbar Marg, KTM", beds: 3, baths: 2, area: "1,800" },
    { id: 5, title: "Beach House", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", price: "Rs 1.5L/mo", location: "Sanepa, Lalitpur", beds: 4, baths: 4, area: "2,600" },
    { id: 6, title: "Mountain Cabin", img: "https://images.unsplash.com/photo-1460317442991-0ec209397118", price: "Rs 55,000/mo", location: "Bhaisepati, Lalitpur", beds: 2, baths: 2, area: "1,400" },
  ];

  return (
    <div className="flex w-full flex-col gap-4">
      {properties.map((elem) => (
        <div
          key={elem.id}
          className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm md:flex-row"
        >
          {/* Image */}
          <div className="relative h-48 md:h-auto md:w-56 md:shrink-0">
            <img src={elem.img || "/placeholder.svg"} alt={elem.title} crossOrigin="anonymous" className="h-full w-full object-cover" />
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-card/95 px-2.5 py-1 text-xs font-semibold text-accent shadow-xs">
              <i className="ri-heart-fill" aria-hidden="true"></i> Saved
            </span>
          </div>

          {/* Content */}
          <div className="flex w-full flex-col justify-between p-4 md:p-5">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-lg font-semibold text-foreground">{elem.title}</h2>
                <p className="shrink-0 font-display text-lg font-bold text-primary">{elem.price}</p>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <i className="ri-map-pin-2-line text-accent" aria-hidden="true"></i>
                <span>{elem.location}</span>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><i className="ri-hotel-bed-line" aria-hidden="true"></i>{elem.beds} Beds</span>
                <span className="flex items-center gap-1.5"><i className="ri-drop-line" aria-hidden="true"></i>{elem.baths} Baths</span>
                <span className="flex items-center gap-1.5"><i className="ri-ruler-line" aria-hidden="true"></i>{elem.area} sqft</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
              <button className="btn btn-outline px-3 py-1.5 text-sm">
                <i className="ri-eye-line" aria-hidden="true"></i> View details
              </button>
              <button className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-error transition-colors hover:bg-error-subtle">
                <i className="ri-close-line" aria-hidden="true"></i> Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fav_Comp;
