import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  constrained?: boolean;
  ref?: React.RefObject<HTMLDivElement>;
}

const Container = ({
  className,
  constrained = false,
  ref,
  ...props
}: ContainerProps) => (
  <div
    className={twMerge(
      "max-w-4xl lg:max-w-(--breakpoint-xl) 2xl:max-w-(--breakpoint-2xl)",
      constrained ? "sm:px-7 lg:px-8" : "px-4 sm:px-6 lg:px-8",
      className
    )}
    {...props}
    ref={ref}
  />
);

export type { ContainerProps };
export { Container };
