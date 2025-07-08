import React from "react";
import axios from "axios";
import { useState } from "react";
import { useShopContext } from "../pages/context.tsx";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  interface RegisterResponse {
    message: string;
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
    };
  }

  const context = useShopContext();
  const backendUrl = context?.backendUrl || "";
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post<RegisterResponse>(`${backendUrl}/api/auth/register`, {
        email,
        password,
        name
      });
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10 justify-self-center mx-auto">
      <h1 className="justify-self-center justify-center font-bold text-3xl">DSA Registration Page</h1>
      <form className="max-w-md mx-auto mt-10 p-8 transparent rounded-xl shadow-lg" onSubmit={submit}>
        <div>
          <h1 className="text-x1 font-bold text-center">Register</h1>
          <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-full mt-6 bg-blue-400 text-white p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
          {error && <p className="mt-4 text-red-500 text-sm">{error}</p>}
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-700 hover:underline">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
