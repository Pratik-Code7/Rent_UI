import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import hero from "../assets/hero.png";
import Searchbar from "../Components/Searchbar";
import List_item from "../Components/List_item";
import InfoBox from "../Components/InfoBox";
import ListItemSkeleton from "../Components/ListItemSkeleton";

const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const data = [
    { id: 1, image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa", text: "Modern Luxury Villa", price: "Rs 1.2L/mo", location: "Budhanilkantha, KTM", beds: 4, baths: 3, area: "3,400", tag: "For Rent" },
    { id: 2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", text: "City Apartment", price: "Rs 45,000/mo", location: "Lazimpat, KTM", beds: 2, baths: 2, area: "1,200", tag: "For Rent" },
    { id: 3, image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", text: "Cozy Family House", price: "Rs 2.4 Cr", location: "Bhaisepati, Lalitpur", beds: 5, baths: 4, area: "4,100", tag: "For Sale" },
    { id: 4, image: "https://images.unsplash.com/photo-1613977257363-707ba9348227", text: "Riverside Property", price: "Rs 78,000/mo", location: "Sanepa, Lalitpur", beds: 3, baths: 2, area: "1,800", tag: "For Rent" },
    { id: 5, image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6", text: "Hilltop Retreat", price: "Rs 3.1 Cr", location: "Tokha, KTM", beds: 4, baths: 3, area: "2,900", tag: "For Sale" },
    { id: 6, image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", text: "Garden Bungalow", price: "Rs 95,000/mo", location: "Maharajgunj, KTM", beds: 3, baths: 3, area: "2,200", tag: "For Rent" },
  ];

  const valueProps = [
    { icon: "ri-verified-badge-line", title: "Verified listings", text: "Every property is reviewed by our team before it goes live, so you only see genuine homes." },
    { icon: "ri-user-heart-line", title: "Direct from owners", text: "Connect and negotiate directly with property owners — no middlemen, no hidden brokerage fees." },
    { icon: "ri-shield-check-line", title: "Secure & transparent", text: "Clear pricing, honest details, and protected conversations for a worry-free renting experience." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero || "/placeholder.svg"}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20"></div>

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 md:py-28 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card/15 px-3 py-1 text-xs font-medium text-primary-foreground ring-1 ring-inset ring-card/25">
              <i className="ri-map-pin-line" aria-hidden="true"></i>
              Trusted across Nepal
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Find your next home in Nepal
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Buy, sell, and rent properties with ease. Trusted by thousands of
              renters and owners across the country.
            </p>
          </div>

          <Searchbar />
        </div>
      </section>

      {/* Featured listings */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Featured listings</h2>
            <p className="mt-1.5 text-muted-foreground">Hand-picked homes available right now.</p>
          </div>
          <Link to="/listing" className="btn btn-outline">
            View all
            <i className="ri-arrow-right-line" aria-hidden="true"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array(6).fill(0).map((_, i) => <ListItemSkeleton key={i} />)
            : data.map((item) => (
                <List_item
                  key={item.id}
                  image={item.image}
                  text={item.text}
                  price={item.price}
                  location={item.location}
                  beds={item.beds}
                  baths={item.baths}
                  area={item.area}
                  tag={item.tag}
                />
              ))}
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Why choose HamroRent?</h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              We make finding and listing rental properties simple, transparent, and direct.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {valueProps.map((vp) => (
              <InfoBox key={vp.title} icon={vp.icon} title={vp.title} text={vp.text} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-12 text-center sm:px-12">
          <h2 className="max-w-xl text-balance font-display text-2xl font-bold text-primary-foreground sm:text-3xl">
            Have a property to rent or sell?
          </h2>
          <p className="max-w-lg text-pretty text-primary-foreground/80">
            List it in minutes and reach thousands of verified renters and buyers across Nepal.
          </p>
          <Link to="/post" className="btn btn-accent">
            <i className="ri-add-line" aria-hidden="true"></i>
            Post your property
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="col-span-2 flex flex-col gap-3 md:col-span-2">
            <span className="font-display text-lg font-bold text-foreground">HamroRent</span>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Nepal's trusted community-driven rental marketplace. We make finding
              and listing rental properties simple, transparent, and direct.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Quick links</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><Link to="/" className="transition-colors hover:text-foreground">Home</Link></li>
              <li><Link to="/listing" className="transition-colors hover:text-foreground">Buy</Link></li>
              <li><Link to="/listing" className="transition-colors hover:text-foreground">Rent</Link></li>
              <li><Link to="/post" className="transition-colors hover:text-foreground">Sell</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><a href="/" className="transition-colors hover:text-foreground">Terms of Service</a></li>
              <li><a href="/" className="transition-colors hover:text-foreground">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-5 sm:px-6 lg:px-8">
            <p className="text-sm text-muted-foreground">© 2026 HamroRent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
