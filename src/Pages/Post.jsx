import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Post = () => {
  const facilities = [
    "WiFi", "Air Conditioning", "Balcony", "Garden", "Swimming Pool",
    "Security", "Gym", "Elevator", "Parking", "Furnished",
  ];

  const Section = ({ icon, title, children }) => (
    <section className="rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
        <i className={`${icon} text-accent`} aria-hidden="true"></i>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );

  const Field = ({ label, children }) => (
    <div className="flex flex-col gap-1.5">
      <label className="field-label">{label}</label>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Post a property</h1>
          <p className="mt-1.5 text-muted-foreground">Fill out the details below to publish your listing.</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          {/* BASIC DETAILS */}
          <Section icon="ri-information-line" title="Basic Details">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Field label="Property Title">
                <input type="text" placeholder="e.g. Modern 2BHK Apartment" className="field-input" />
              </Field>
              <Field label="Property Type">
                <select className="field-input appearance-none" defaultValue="">
                  <option value="" disabled>Select type</option>
                  <option>Apartment</option><option>House</option><option>Villa</option><option>Office</option>
                </select>
              </Field>
              <Field label="Status">
                <select className="field-input appearance-none" defaultValue="">
                  <option value="" disabled>Select status</option>
                  <option>For Sale</option><option>For Rent</option>
                </select>
              </Field>
              <div className="md:col-span-3">
                <Field label="Description">
                  <textarea rows="4" placeholder="Describe the property, neighbourhood and highlights..." className="field-input resize-none" />
                </Field>
              </div>
            </div>
          </Section>

          {/* PRICING & LOCATION */}
          <Section icon="ri-map-pin-line" title="Pricing & Location">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Field label="Price">
                <input type="number" placeholder="Enter price" className="field-input" />
              </Field>
              <Field label="Currency">
                <select className="field-input appearance-none">
                  <option>NPR (Rs)</option><option>USD ($)</option><option>INR (₹)</option>
                </select>
              </Field>
              <Field label="Negotiable">
                <select className="field-input appearance-none" defaultValue="">
                  <option value="" disabled>Select</option><option>Yes</option><option>No</option>
                </select>
              </Field>
              <Field label="Country">
                <select className="field-input appearance-none">
                  <option>Nepal</option><option>India</option>
                </select>
              </Field>
              <Field label="City">
                <select className="field-input appearance-none" defaultValue="">
                  <option value="" disabled>Select city</option><option>Kathmandu</option><option>Pokhara</option>
                </select>
              </Field>
              <Field label="Address">
                <input type="text" placeholder="Street, area" className="field-input" />
              </Field>
            </div>
          </Section>

          {/* PROPERTY DETAILS */}
          <Section icon="ri-home-gear-line" title="Property Details">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {["Area (sqft)", "Bedrooms", "Bathrooms", "Floors", "Parking", "Year Built"].map((label) => (
                <Field key={label} label={label}>
                  <input type="number" placeholder="0" className="field-input" />
                </Field>
              ))}
            </div>
          </Section>

          {/* FACILITIES */}
          <Section icon="ri-service-line" title="Facilities">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {facilities.map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-input p-3 text-sm text-foreground transition-colors hover:border-primary hover:bg-muted"
                >
                  <input type="checkbox" className="h-4 w-4 accent-[var(--color-primary)]" />
                  {item}
                </label>
              ))}
            </div>
          </Section>

          {/* IMAGES */}
          <Section icon="ri-image-add-line" title="Property Images">
            <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-input p-10 text-center transition-colors hover:border-primary hover:bg-muted">
              <i className="ri-upload-cloud-2-line text-3xl text-muted-foreground" aria-hidden="true"></i>
              <span className="text-sm font-medium text-foreground">Click to upload images</span>
              <span className="text-xs text-muted-foreground">PNG or JPG, up to 5MB each</span>
              <input type="file" multiple accept="image/*" className="sr-only" />
            </label>
          </Section>

          {/* CONTACT */}
          <Section icon="ri-contacts-line" title="Contact Information">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Field label="Your Name">
                <input type="text" placeholder="Full name" className="field-input" />
              </Field>
              <Field label="Phone Number">
                <input type="tel" placeholder="+977 98XXXXXXXX" className="field-input" />
              </Field>
              <Field label="Email Address">
                <input type="email" placeholder="you@example.com" className="field-input" />
              </Field>
            </div>
            <label className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <input type="checkbox" className="h-4 w-4 accent-[var(--color-primary)]" />
              I agree to the Terms &amp; Conditions
            </label>
          </Section>

          {/* ACTIONS */}
          <div className="flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-end">
            <Link to="/" className="btn btn-outline w-full sm:w-auto">Cancel</Link>
            <button type="submit" className="btn btn-accent w-full sm:w-auto">
              <i className="ri-send-plane-line" aria-hidden="true"></i>
              Publish Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
