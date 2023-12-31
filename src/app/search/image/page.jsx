import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}
  `);

  if (!response) {
    console.log(response);
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  const results = data.items;
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
