import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({
  placeholder = "Type here...",
  className = "",
  ...props
}: Props) => {
  return (
    <input
      {...props}
      placeholder={placeholder}
      className={`p-1 border border-border inline-block rounded-sm focus:outline-none focus:ring-primary focus:ring-1 ${className}`}
    />
  );
};
