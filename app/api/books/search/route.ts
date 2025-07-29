import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { desc, like, or } from "drizzle-orm";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";

    let searchResults;

    if (query.trim()) {
      // Search in title, author, and description
      searchResults = await db
        .select()
        .from(books)
        .where(
          or(
            like(books.title, `%${query}%`),
            like(books.author, `%${query}%`),
            like(books.description, `%${query}%`)
          )
        )
        .orderBy(desc(books.createdAt))
        .limit(20);
    } else {
      // Return all books if no query
      searchResults = await db
        .select()
        .from(books)
        .orderBy(desc(books.createdAt))
        .limit(10);
    }

    return NextResponse.json(searchResults);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Failed to search books" },
      { status: 500 }
    );
  }
}
