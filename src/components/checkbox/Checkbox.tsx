import { Checkbox } from "flowbite-react";
import { Label } from "../label/Label";
import { FieldError, Merge } from "react-hook-form";
import { ErrorInput } from "../input/ErrorInput";

interface Props {
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
  flex?: "col" | "row";
  onChange: (name: string, checked: boolean) => void;
  error?:
    | Merge<
        FieldError,
        [(FieldError | undefined)?, ...(FieldError | undefined)[]]
      >
    | undefined;
}

export const CheckInput = ({
  label,
  required,
  options,
  flex = "row",
  error,
  onChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Label required={required}>{label}</Label>
      <div className={`flex flex-col md:flex-${flex} flex-wrap gap-3`}>
        {options?.map((option) => (
          <div className="flex items-center gap-2" key={option.label}>
            <Checkbox
              className={`${
                error?.message ? "border-error-200" : "border-gray-300"
              }`}
              name={option.label}
              onChange={(e) => onChange(option.value, e.target.checked)}
            />
            <p>{option.label}</p>
          </div>
        ))}
      </div>
      <ErrorInput>{error?.message}</ErrorInput>
    </div>
  );
};
