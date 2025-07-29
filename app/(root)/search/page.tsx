import BookList from "@/components/book/book-list";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { desc, or, sql } from "drizzle-orm";
import SearchInput from "@/components/search-input";
import NoBookFound from "@/components/book/no-book-found";

interface SearchPageProps {
  searchParams: { q?: string };
}

const Page = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const query = params.q || "";

  let searchBooks;

  if (query.trim()) {
    searchBooks = (await db
      .select()
      .from(books)
      .where(
        or(
          sql`${books.title} ILIKE ${`%${query}%`}`,
          sql`${books.author} ILIKE ${`%${query}%`}`,
          sql`${books.description} ILIKE ${`%${query}%`}`
        )
      )
      .orderBy(desc(books.createdAt))
      .limit(20)) as Book[];
  } else {
    searchBooks = (await db
      .select()
      .from(books)
      .limit(10)
      .orderBy(desc(books.createdAt))) as Book[];
  }

  return (
    <div className="flex flex-col">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-ibm-plex-sans text-light-100 font-semibold uppercase mb-4">
          Discover Your Next Great Read:
        </p>
        <h1 className="text-white font-bold text-5xl">
          Explore and Search for <span className="text-primary">Any Book</span>{" "}
          In Our Library
        </h1>
        <SearchInput initialQuery={query} />
      </div>
      <div className="flex justify-between mt-20">
        <h1 className="text-light-100 font-semibold text-2xl">
          {query ? (
            <>
              Search Results for <span className="text-primary">{query}</span>
            </>
          ) : (
            "Search Results"
          )}
        </h1>
      </div>

      {searchBooks.length > 0 ? (
        <BookList title="" books={searchBooks} />
      ) : (
        <NoBookFound />
      )}
    </div>
  );
};

export default Page;
