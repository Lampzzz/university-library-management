"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-dark-300 group-[.toaster]:text-white group-[.toaster]:border-dark-100 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-light-100",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-dark-100",
          cancelButton:
            "group-[.toast]:bg-dark-600 group-[.toast]:text-light-100",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
