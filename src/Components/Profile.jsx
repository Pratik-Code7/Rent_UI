import React from "react";

const Profile = () => {
  const infoItems = [
    { icon: "ri-time-line", label: "Member Since", value: "May 12, 2023" },
    { icon: "ri-map-pin-line", label: "Location", value: "Kathmandu, Nepal" },
    { icon: "ri-phone-line", label: "Phone", value: "+977 98XXXXXXXX" },
  ];

  const fields = [
    { label: "Full Name", type: "text", placeholder: "Pratik Shakya" },
    { label: "Email", type: "email", placeholder: "you@example.com" },
    { label: "Phone Number", type: "tel", placeholder: "+977 98XXXXXXXX" },
    { label: "Location", type: "text", placeholder: "Kathmandu, Nepal" },
  ];

  return (
    <div className="flex w-full flex-col gap-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Profile Settings</h1>
        <p className="mt-1 text-muted-foreground">Manage your account information and preferences.</p>
      </div>

      <div className="flex w-full flex-col gap-6 lg:flex-row">
        {/* LEFT: identity card */}
        <div className="flex w-full flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-sm lg:w-1/3">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-semibold text-primary-foreground">
              PS
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">Pratik Shakya</h2>
              <p className="text-sm text-muted-foreground">pratik@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-lg border border-border p-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
                  <i className={`${item.icon} text-lg`} aria-hidden="true"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: edit form */}
        <div className="flex w-full flex-col gap-5 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8 lg:w-2/3">
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">Personal information</h2>
            <p className="text-sm text-muted-foreground">Update your details so owners can reach you.</p>
          </div>

          <form className="grid grid-cols-1 gap-5 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            {fields.map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <label className="field-label">{f.label}</label>
                <input className="field-input" type={f.type} placeholder={f.placeholder} />
              </div>
            ))}

            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="field-label">Bio</label>
              <textarea className="field-input h-28 resize-none" placeholder="Tell others a little about yourself..." />
            </div>

            <div className="flex justify-end gap-3 md:col-span-2">
              <button type="reset" className="btn btn-outline">Cancel</button>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
