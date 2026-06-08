import React from "react";

const Messages = () => {
  const notifications = [
    { icon: "ri-eye-line", title: "Your listing was viewed by 2 people", text: "Modern Apartment in Lazimpat is getting attention.", time: "2 hours ago", unread: true },
    { icon: "ri-question-answer-line", title: "New inquiry received", text: "Someone is interested in your City Penthouse.", time: "5 hours ago", unread: true },
    { icon: "ri-heart-line", title: "Your property was saved", text: "Luxury Villa was added to someone's favorites.", time: "Yesterday", unread: false },
    { icon: "ri-checkbox-circle-line", title: "Listing approved", text: "Cozy Family House is now live on HamroRent.", time: "2 days ago", unread: false },
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Notifications</h1>
        <p className="mt-1 text-muted-foreground">Stay updated on activity across your listings.</p>
      </div>

      <div className="flex flex-col gap-3">
        {notifications.map((n, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-4 rounded-xl border bg-card p-4 shadow-sm sm:p-5 ${
              n.unread ? "border-accent/30" : "border-border"
            }`}
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted text-xl text-primary">
              <i className={n.icon} aria-hidden="true"></i>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-medium text-foreground">{n.title}</h2>
                {n.unread && <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-label="Unread"></span>}
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{n.text}</p>
            </div>
            <span className="shrink-0 whitespace-nowrap text-xs text-muted-foreground">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
