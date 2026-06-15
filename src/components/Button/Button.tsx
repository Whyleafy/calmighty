import classes from "./Button.module.css";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isActive?: boolean;
}

export const Button = ({
  className,
  children,
  isActive,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(className, classes.button, {
        [classes.active]: isActive,
      })}
    >
      {children}
    </button>
  );
};
