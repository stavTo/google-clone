import Link from "next/link";
import Parser from "html-react-parser";

export default function WebSearchResults({ results }) {
  return (
    <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results{" "}
        {results.searchInformation?.formattedSearchTime} seconds
      </p>
      {results.items?.map((res) => (
        <div key={res.link} className="mb-8 max-w-xl">
          <div className="group flex flex-col">
            <Link className="text-sm truncate" href={res.link}>{res.formattedUrl}</Link>
            <Link className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800" href={res.link}>{res.title}</Link>
          </div>
          <p className="text-gray-600">{Parser(res.htmlSnippet)}</p>
        </div>
      ))}
    </div>
  );
}