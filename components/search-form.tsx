"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface SearchFormProps {
  initialQuery?: string;
}

const SearchForm = ({ initialQuery = "" }: SearchFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery);

  // Update local state when URL params change
  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);

    if (query.trim()) {
      params.set("q", query.trim());
    } else {
      params.delete("q");
    }

    router.push(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex items-center form-input rounded-md px-4 space-x-2">
        <Search className="text-primary" />
        <input
          type="text"
          className="form-input outline-none flex-1"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
