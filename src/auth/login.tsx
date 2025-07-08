import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useShopContext } from '../pages/context.tsx';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  interface LoginResponse {
    token: string,
    user: {
      id: string,
      email: string,
      name: string,
      role: string
    };

  }

  const context = useShopContext();
  const backendUrl = context?.backendUrl || ""
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post<LoginResponse>(`${backendUrl}/api/auth/login`, {
        email,
        password
      });
      if(response.status === 200) {
        navigate("/");
      }
      // if(response.data.user.role === "admin") {
      //   navigate("/admin");  
      // }
    } catch (error: unknown) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Login failed. Please try again.");
      } else {
        setError("Login failed. Please try again.");
      }
    }finally {
      setIsLoading(false);
    }
    
  }
  return (
    <div className="mt-10 justify-self-center mx-auto">
      <h1 className="justify-self-center justify-center font-bold text-3xl">
        DSA Login Page
      </h1>
      <form className="max-w-md mx-auto mt-10 p-8 transparent rounded-xl shadow-lg" onSubmit={submit}>
        <div>
          <h1 className="text-x1 font-bold text-center">Login</h1>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
          <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input value={password} onChange={(e) => setPassword(e.target.value)}
            type="password"
            aria-placeholder="password"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="w-full mt-6 bg-blue-400 text-white p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {error && (
            <p className="mt-4 text-sm text-red-600">
              {error}
            </p>
          )}
          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-700 hover:underline">
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login
