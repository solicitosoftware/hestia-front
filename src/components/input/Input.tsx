import { forwardRef } from "react";
import style from "./styles/Input.module.css";
import { FieldError } from "react-hook-form";
import { ErrorInput } from "./ErrorInput";
import { Label } from "../label/Label";

interface Props {
  label: string;
  type: "text" | "number" | "";
  error?: FieldError | undefined;
}

export const Input = forwardRef<HTMLInputElement, Props>(function input(
  { label, type, error, ...inputProps },
  ref
) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        ref={ref}
        type={type}
        {...inputProps}
        className={`${error ? "border-error-200" : "border-gray-300"} ${
          style.input
        }`}
        placeholder={label}
      />
      <ErrorInput>{error?.message}</ErrorInput>
    </div>
  );
});
