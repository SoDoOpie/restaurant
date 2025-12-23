import { api } from "./api";
import { useState } from "react";
import { useCookies } from "react-cookie";

export function Admin() {
  const [key, setKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [cookies, setCookie, removeCookie] = useCookies(["api-key"]);

  const checkAndSaveKey = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!key.trim()) {
      setError("Please enter an API key");
      return;
    }

    try {
      const response = await fetch(`${api}/check-api-key/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": key,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Сохраняем ключ в cookies на 30 дней
        setCookie("api-key", key, { path: "/", maxAge: 2592000 });
        setSuccess("API key saved successfully!");
        setKey("");
      } else {
        setError("Invalid API key");
      }
    } catch (err) {
      setError("Error while checking API key");
    }
  };

  const deleteKey = () => {
    removeCookie("api-key", { path: "/" });
    setKey("");
    setSuccess("API key deleted");
    setError(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <form
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-700"
        onSubmit={checkAndSaveKey}
      >
        <h2 className="text-lg font-semibold text-gray-100 mb-4">API Key Management</h2>
        
        {cookies["api-key"] && (
          <div className="mb-4 p-3 bg-green-900/30 border border-green-700 rounded-md">
            <p className="text-green-400 text-sm">Current key: {cookies["api-key"].substring(0, 20)}...</p>
          </div>
        )}

        <input
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Enter your API key"
        />
        
        {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
        {success && <p className="text-green-400 mt-2 text-sm">{success}</p>}
        
        <div className="flex items-center justify-between mt-4 gap-2">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={deleteKey}
          >
            Delete Key
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save Key
          </button>
        </div>
      </form>
    </div>
  );
}
