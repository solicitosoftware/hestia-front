import { forwardRef } from "react";
import style from "./styles/Input.module.css";
import { FieldError } from "react-hook-form";

interface Props {
  title: string;
  type: "text" | "number" | "";
  error?: FieldError | undefined;
}

const ErrorInput = ({ children }: { children?: string }) => {
  return <p className={style.error}>{children}</p>;
};

export const Input = forwardRef<HTMLInputElement, Props>(function input(
  { title, type, error, ...inputProps },
  ref
) {
  return (
    <div>
      <label className={style.label}>{title}</label>
      <input
        ref={ref}
        type={type}
        {...inputProps}
        className={`${error ? "border-error-200" : "border-gray-300"} ${
          style.input
        }`}
        placeholder={title}
      />
      <ErrorInput>{error?.message}</ErrorInput>
    </div>
  );
});
