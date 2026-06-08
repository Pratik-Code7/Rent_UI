import React from "react";

const InfoBox = ({ icon = "ri-verified-badge-line", title = "Verified listings", text = "Every property is reviewed by our team before it goes live." }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-subtle text-accent">
        <i className={`${icon} text-2xl`} aria-hidden="true"></i>
      </div>
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
};

export default InfoBox;
