import { auth } from "@/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { db } from "@/database/drizzle";
import { books, borrowRecords, users } from "@/database/schema";
import { getInitials } from "@/lib/utils";
import { desc, eq, inArray } from "drizzle-orm";
import Image from "next/image";
import UniversityCard from "@/components/university-card";
import ProfileInfo from "@/components/profile-info";
import { BadgeCheck, BadgeX } from "lucide-react";
import BorrowBookCard from "@/components/book/borrow-book-card";
import dayjs from "dayjs";

const Page = async () => {
  const session = await auth();

  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, session?.user?.id as string));

  const borrowedBooks = await db
    .select()
    .from(borrowRecords)
    .where(eq(borrowRecords.userId, session?.user?.id as string))
    .orderBy(desc(borrowRecords.borrowDate));

  const borrowedBooksDetails = await db
    .select()
    .from(books)
    .where(
      inArray(
        books.id,
        borrowedBooks.map((book) => book.bookId)
      )
    );

  const formatDate = (date: Date | string) => {
    return dayjs(date).format("MMM DD, YYYY");
  };

  const getDaysLeft = (dueDate: Date | string) => {
    const now = dayjs();
    const due = dayjs(dueDate);
    const diff = due.diff(now, "day");
    return diff > 0
      ? `${diff} day${diff === 1 ? "" : "s"} left to due`
      : "Due!";
  };

  return (
    <div className="flex items-start justify-center h-full space-x-10">
      <div className="gradient-blue w-full h-full drop-shadow-md p-10 rounded-3xl relative">
        <Image
          src="/images/profile-tag.png"
          alt="profile background"
          width={60}
          height={70}
          className="absolute -top-5 left-1/2 transform -translate-x-1/2"
        />
        <div className="flex items-center gap-4 mb-8 mt-20">
          <div className="p-2 bg-[#333C5C33] rounded-full">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-amber-100 text-xl font-semibold">
                {getInitials(session?.user?.name || "IN")}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              {user[0]?.status === "APPROVED" ? (
                <>
                  <BadgeCheck className="w-4 h-4 text-green-500" />
                  <p className="text-light-100">Verified Student</p>
                </>
              ) : (
                <>
                  <BadgeX className="w-4 h-4 text-red-500" />
                  <p className="text-light-100">Unverified Student</p>
                </>
              )}
            </div>
            <p className="text-white text-xl font-semibold">
              {session?.user?.name}
            </p>
            <p className="text-light-100">{session?.user?.email}</p>
          </div>
        </div>
        <ProfileInfo label="University" value={"University of Caloocan City"} />
        <ProfileInfo label="Student ID" value={user[0]?.universityId || ""} />
        <div className="mt-10 w-full relative h-96">
          <UniversityCard universityCardPath={user[0]?.universityCard} />
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-light-100 font-semibold text-2xl mb-4">
          Borrowed Books
        </h1>

        <div className="grid grid-cols-2 gap-4">
          {borrowedBooksDetails.map((book, index) => {
            const borrowRecord = borrowedBooks[index];
            return (
              <BorrowBookCard
                key={book.id}
                book={book}
                borrowDate={formatDate(borrowRecord?.borrowDate || new Date())}
                dueDate={getDaysLeft(borrowRecord?.dueDate || new Date())}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
