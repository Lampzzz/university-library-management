"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface Props {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

const SelectInput = ({ label, options, value, onChange }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer text-light-100  bg-dark-300 py-2 px-4 rounded-md border-none outline-none">
        {label}{" "}
        <span className="text-primary capitalize font-semibold">{value}</span>{" "}
        <ChevronDown size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-dark-300 border-none outline-none">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            className="cursor-pointer hover:bg-transparent focus:bg-transparent hover:text-light-100 focus:text-light-100 !text-light-100"
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectInput;
