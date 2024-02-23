import {
  FieldError,
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import Select from "react-select";
import style from "./styles/Select.module.css";
import { ErrorInput } from "../input/ErrorInput";
import { Label } from "../label/Label";

interface Props {
  label: string;
  required?: boolean;
  options: { value: number | string; label: string }[];
  error?: FieldError | undefined;
  defaultValue: { value: number | string; label: string } | undefined;
}

export const SelectInput = <T extends FieldValues>(
  props: UseControllerProps<T> & Props
) => {
  const { options, label, defaultValue, required, error, ...controllerProps } =
    props;
  const {
    field: { onChange },
  } = useController(controllerProps);

  const getValue = () => {
    if (!!defaultValue)
      return {
        value: defaultValue?.value ?? "",
        label: defaultValue?.label,
      };
    return null;
  };

  return (
    <div>
      <Label required={required}>{label}</Label>
      <Select
        className={`${
          error?.message ? "border-error-200" : "border-gray-300"
        } ${style.select}`}
        value={getValue()}
        placeholder="Seleccione"
        instanceId="selectbox"
        onChange={(newValue) => onChange(newValue)}
        options={options}
      />
      <ErrorInput>{error?.message}</ErrorInput>
    </div>
  );
};
