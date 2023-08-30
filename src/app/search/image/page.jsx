import ImageSearchResults from "@/components/ImageSearchResults";
import axios from "axios";
import Link from "next/link";

export default async function ImageSearchPage({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response =
    await axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image
  `);

  if (!response) {
    throw new Error("Something went wrong");
  }
  const data = response.data;
  console.log(data);
  const results = data.items;
  console.log(results);
  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage.
        </p>
        <Link className="text-blue-500" href="/">
          Home
        </Link>
      </div>
    );
  }
  return <>{results && <ImageSearchResults results={data} />}</>;
}
