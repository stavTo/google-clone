import axios from "axios";
import Link from "next/link";
import React from "react";

export default async function WebSearchPage({ searchParams }) {
  const response =
    await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}
  `);

  if (!response) {
    throw new Error("Something went wrong");
  }
  const results = response.data.items;
  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage.
        </p>
          <Link className="text-blue-500" href="/">Home</Link>
      </div>
    );
  }
  return <>{results && results.map((res) => <h1>{res.title}</h1>)}</>;
}
