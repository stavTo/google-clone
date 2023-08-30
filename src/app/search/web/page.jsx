import axios from "axios";
import React from "react";

export default async function WebSearchPage({ searchParams }) {
  const response =
    await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}
  `);
  const results = response.data.items;
  console.log(results);
  return <>{results && results.map((res) => <h1>{res.title}</h1>)}</>;
}
