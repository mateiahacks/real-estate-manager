import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center rounded-md text-sm cursor-pointer text-xs",
  {
    variants: {
      variant: {
        primary:
          "bg-primary p-4 text-white font-light hover:bg-white hover:bg-primary-2",
        secondary:
          "border p-4 border-primary text-primary hover:bg-primary hover:text-white",
      },
      size: { sm: "", lg: "h-9" },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  children,
  className,
  size,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
