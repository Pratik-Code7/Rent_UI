import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Fav_Comp from "../Components/Fav_Comp";

const Listing = () => {
  const navigate = useNavigate();

  const facilities = ["Parking", "Swimming Pool", "Gym", "WiFi"];
  const selectClass =
    "field-input appearance-none";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Breadcrumb / back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <i className="ri-arrow-left-line" aria-hidden="true"></i> Back
        </button>

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* FILTER SIDEBAR */}
          <aside className="w-full lg:w-72 lg:shrink-0">
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm lg:sticky lg:top-20">
              <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
                <i className="ri-equalizer-line text-accent" aria-hidden="true"></i>
                Filters
              </h2>

              <form className="mt-5 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-1.5">
                  <label className="field-label">Location</label>
                  <input type="text" placeholder="Search location..." className="field-input" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="field-label">Property Type</label>
                  <select className={selectClass} defaultValue="All">
                    <option>All</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>House</option>
                    <option>Office</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="field-label">Price Range</label>
                    <span className="text-xs text-muted-foreground">Rs 10k - 5L</span>
                  </div>
                  <input type="range" min="500" max="5000" defaultValue="2500" className="w-full accent-[var(--color-accent)]" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="field-label">Bedrooms</label>
                  <select className={selectClass} defaultValue="Any">
                    <option>Any</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>3 Bedrooms</option>
                    <option>4+ Bedrooms</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="field-label">Bathrooms</label>
                  <select className={selectClass} defaultValue="Any">
                    <option>Any</option>
                    <option>1 Bathroom</option>
                    <option>2 Bathrooms</option>
                    <option>3+ Bathrooms</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="field-label">Facilities</label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {facilities.map((item) => (
                      <label key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <input type="checkbox" className="h-4 w-4 rounded border-input accent-[var(--color-primary)]" />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 border-t border-border pt-4">
                  <button type="submit" className="btn btn-primary w-full">Apply</button>
                  <button type="reset" className="btn btn-outline w-full">Reset</button>
                </div>
              </form>
            </div>
          </aside>

          {/* RESULTS */}
          <div className="min-w-0 flex-1">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h1 className="font-display text-xl font-bold text-foreground sm:text-2xl">Available properties</h1>
                <p className="text-sm text-muted-foreground">6 results found</p>
              </div>
              <div className="relative">
                <select className="field-input appearance-none pr-9 text-sm" defaultValue="Recommended">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
                <i className="ri-arrow-down-s-line pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden="true"></i>
              </div>
            </div>

            <Fav_Comp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
