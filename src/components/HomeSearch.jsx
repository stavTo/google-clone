"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    try {
      setLoading(true);
      const res = (
        await axios.get("https://random-word-api.herokuapp.com/word")
      ).data[0];
      if (!res) return;
      router.push(`/search/web?searchTerm=${res}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="mt-8 flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row justify-center">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={loading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {loading ? (
            <img
              className="h-6 text-center"
              src="spinner.svg"
              alt="Loading..."
            />
          ) : (
            "I am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
