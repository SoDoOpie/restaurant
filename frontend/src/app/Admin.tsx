import { useQuery } from "@tanstack/react-query";
import { api } from "./api";
import { useState } from "react";
import { useCookies } from "react-cookie";

export function Admin() {
  const [key, setKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [, setCookies, removeCookies] = useCookies(["api-key"]);

  const useCheckapi = useQuery({
    queryKey: ["checkapi"],
    queryFn: async () => {
      const response = await fetch(`${api}/check-api-key/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": key,
        },
      });
      return response.json();
    },
  });

  const formAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("suka", key);
    try {
      const response = useCheckapi;
    } catch (error) {
      setError("Error while checking API key");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <form
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
        onSubmit={formAction}
      >
        <h2 className="text-lg font-semibold text-gray-100 mb-4">API Key</h2>
        <input
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter your API key"
        />
        {error && <p className="text-red-600 mt-2">{error}</p>}
        <div className="flex items-center justify-end mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            //onClick={() => removeCookies("api-key")}
          >
            Delete API Key
          </button>
        </div>
      </form>
    </div>
  );
}
