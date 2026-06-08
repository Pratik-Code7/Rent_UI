import React from "react";

const Property = () => {
  const dashStats = [
    { title: "Total Likes", value: 120, icon: "ri-heart-3-line" },
    { title: "Inquiries", value: 45, icon: "ri-question-answer-line" },
    { title: "Applications", value: 18, icon: "ri-file-list-3-line" },
    { title: "Active Listings", value: 8, icon: "ri-home-4-line" },
  ];

  const items = [
    { img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc", title: "Modern Apartment", price: "Rs 45,000/mo", location: "Lazimpat, Kathmandu", beds: 2, baths: 2, rating: "4.5", posted: "2 days ago", status: "Active" },
    { img: "https://images.unsplash.com/photo-1501183638710-841dd1904471", title: "Luxury Villa", price: "Rs 1.2L/mo", location: "Budhanilkantha, KTM", beds: 4, baths: 3, rating: "4.8", posted: "5 days ago", status: "Active" },
    { img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", title: "City Penthouse", price: "Rs 95,000/mo", location: "Durbar Marg, KTM", beds: 3, baths: 2, rating: "4.6", posted: "1 week ago", status: "Active" },
    { img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", title: "Cozy Family House", price: "Rs 78,000/mo", location: "Sanepa, Lalitpur", beds: 3, baths: 3, rating: "4.7", posted: "2 weeks ago", status: "Draft" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">My Properties</h1>
        <p className="mt-1 text-muted-foreground">Manage your active properties and track their performance.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {dashStats.map((elem, idx) => (
          <div key={idx} className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle text-accent">
              <i className={`${elem.icon} text-lg`} aria-hidden="true"></i>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{elem.title}</p>
              <p className="font-display text-2xl font-bold text-foreground">{elem.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Property List */}
      <div className="flex flex-col gap-4">
        {items.map((elem, idx) => (
          <div
            key={idx}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm md:flex-row"
          >
            {/* Image */}
            <div className="relative h-48 md:h-auto md:w-64 md:shrink-0">
              <img src={elem.img || "/placeholder.svg"} alt={elem.title} crossOrigin="anonymous" className="h-full w-full object-cover" />
              <span
                className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  elem.status === "Active"
                    ? "bg-success-subtle text-success"
                    : "bg-warning-subtle text-warning"
                }`}
              >
                {elem.status}
              </span>
            </div>

            {/* Details */}
            <div className="flex w-full flex-col justify-between p-4 md:p-5">
              <div className="flex flex-col gap-3">
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
                  <span className="flex items-center gap-1.5"><i className="ri-star-fill text-accent" aria-hidden="true"></i>{elem.rating}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3 text-sm">
                <span className="text-muted-foreground">Posted {elem.posted}</span>
                <div className="flex items-center gap-1">
                  <button className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                    <i className="ri-pencil-line" aria-hidden="true"></i> Edit
                  </button>
                  <button className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 font-medium text-error transition-colors hover:bg-error-subtle">
                    <i className="ri-delete-bin-line" aria-hidden="true"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Property;
