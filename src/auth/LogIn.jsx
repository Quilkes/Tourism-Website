import React, { useState } from "react";
import { Lock, Eye, EyeOff, Mail } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("user@example0.com");
  const [password, setPassword] = useState("123456789");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(""); // Reset any previous errors

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login Successful!");
      navigate("/admin");
    } catch (err) {
      console.error("Login Error:", err.message);
      setError("Failed to login. Check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0]">
      <div className="w-full max-w-lg p-8 bg-white shadow-xl rounded-2xl">
        {/* Logo Section */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center z-50 w-full h-[40px] md:h-[50px]">
            <img
              src="logo.png"
              alt="Logo"
              className="object-contain w-auto h-full"
            />
          </div>
          <h1 className="mt-4 text-3xl font-bold text-[#402a2c]">
            Welcome Back
          </h1>
          <p className="text-[#6c757d]">Log in to your account</p>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-4 text-sm text-center text-[#be2130]">{error}</div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="w-5 h-5 text-[#6c757d]" />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 pl-10 pr-4 border border-[#ced4da] rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-5 h-5 text-[#6c757d]" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 pl-10 pr-12 border border-[#ced4da] rounded-lg focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#6c757d]"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center w-full py-3 space-x-2 text-white transition-colors duration-300 bg-green-600 rounded-lg hover:bg-green-700"
          >
            <Lock className="w-5 h-5" />
            <span>{isSubmitting ? "Logging in..." : "Login"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
