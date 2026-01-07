// src/pages/Signup.jsx
import { useState, useContext } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/todos");
    } catch (err) {
      setError("Signup failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Create Account</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <Input
          type="email"
          placeholder="Email"
          className="mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          className="mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button className="w-full" type="submit">
          Sign Up
        </Button>

        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
