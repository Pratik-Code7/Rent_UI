import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../assets/google.png";
import logo from "../assets/logo.png";
import { useGoogleLogin } from "@react-oauth/google";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      });
      const user = await res.json();
      localStorage.setItem("user", JSON.stringify(user));
    },
    onError: () => console.log("Login Failed"),
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <Link to="/" aria-label="HamroRent home">
            <img src={logo || "/placeholder.svg"} alt="HamroRent" className="h-9 w-auto object-contain" />
          </Link>
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Log in to continue to your account</p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="field-label">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="field-input"
                autoComplete="email"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="field-label">Password</label>
                <a href="/" className="text-xs font-medium text-primary hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="field-input pr-11"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <i className={showPassword ? "ri-eye-fill" : "ri-eye-off-fill"} aria-hidden="true"></i>
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-1 w-full">
              Log in
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border"></span>
            <span className="text-xs font-medium text-muted-foreground">OR</span>
            <span className="h-px flex-1 bg-border"></span>
          </div>

          <button
            type="button"
            onClick={() => googleLogin()}
            className="btn btn-outline w-full"
          >
            <img src={google || "/placeholder.svg"} alt="" className="h-5 w-5" />
            Continue with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <a href="/" className="font-semibold text-primary hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Auth;
