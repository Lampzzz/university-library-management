import BookOverview from "@/components/book/book-overview";
import React from "react";
import BookList from "@/components/book/book-list";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  const data = await db.select().from(users);
  console.log(JSON.stringify(data, null, 2));

  return (
    <>
      <BookOverview {...sampleBooks[0]} userId={"1" as string} />

      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
