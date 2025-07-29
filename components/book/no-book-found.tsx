import Image from "next/image";

const NoBookFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 mt-10">
      <Image
        src="/images/no-books.png"
        alt="No results found"
        width={200}
        height={200}
      />
      <h1 className="text-white font-semibold text-3xl">No results found</h1>
      <p className="text-light-100 text-center">
        We couldn't find any books matching your search. <br /> Try using
        different keywords or check for typos.
      </p>
    </div>
  );
};

export default NoBookFound;
