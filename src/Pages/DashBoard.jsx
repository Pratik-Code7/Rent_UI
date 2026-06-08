import { useState } from "react";
import Navbar from "../Components/Navbar";
import Property from "../Components/Property";
import Favorites from "../Components/Favorites";
import Messages from "../Components/Messages";
import Profile from "../Components/Profile";

const DashBoard = () => {
  const [active, setActive] = useState(0);

  const dashList = [
    { label: "My Properties", icon: "ri-home-4-line" },
    { label: "Favorites", icon: "ri-heart-line" },
    { label: "Notifications", icon: "ri-notification-3-line" },
    { label: "Profile Settings", icon: "ri-user-settings-line" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
        {/* Sidebar */}
        <aside className="md:w-64 md:shrink-0">
          <nav className="flex gap-1 overflow-x-auto rounded-xl border border-border bg-card p-2 no-scrollbar md:flex-col">
            {dashList.map((elem, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`flex items-center gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  active === idx
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <i className={`${elem.icon} text-base`} aria-hidden="true"></i>
                {elem.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1">
          {active === 0 && <Property />}
          {active === 1 && <Favorites />}
          {active === 2 && <Messages />}
          {active === 3 && <Profile />}
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
