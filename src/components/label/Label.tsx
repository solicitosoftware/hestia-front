import style from "./styles/Label.module.css";

interface Props {
  required?: boolean;
  children?: string;
}

export const Label = ({ children, required, ...labelProps }: Props) => {
  return (
    <p {...labelProps} className={style.label}>
      {children}
      {required && <span className="text-error-200 pl-1">*</span>}
    </p>
  );
};
