"use client";

import config from "@/lib/config";
import { IKImage } from "imagekitio-next";
import { BookOpenText, Calendar } from "lucide-react";
import BookCover from "./book-cover";

interface Props {
  book: Book;
  borrowDate: string;
  dueDate: string;
}

const BorrowBookCard = ({ book, borrowDate, dueDate }: Props) => {
  const { title, author, genre, coverColor, coverUrl } = book;

  return (
    <div className="gradient-vertical p-4 rounded-xl">
      <div className="p-4 rounded-md mb-4 h-60 overflow-hidden flex items-center justify-center relative">
        <div
          className="absolute inset-0 w-full h-full opacity-50"
          style={{ backgroundColor: coverColor }}
        ></div>
        <BookCover
          className="shadow-md"
          coverColor={coverColor}
          coverImage={coverUrl}
          variant="small"
        />
      </div>
      <div className="mb-4">
        <h1 className="text-white text-lg font-semibold break-words">
          {title} - By {author}
        </h1>
        <small className="italic text-light-100">{genre}</small>
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-2">
          <BookOpenText color="#A5CFE7" size={16} />
          <p className="text-light-100 text-sm">Borrowed on {borrowDate}</p>
        </div>
        <div className="flex items-center gap-2">
          <Calendar color="#E7C9A5" size={16} />
          <p className="text-light-100 text-sm">{dueDate}</p>
        </div>
      </div>
    </div>
  );
};

export default BorrowBookCard;
