import { cx } from "cva";

interface ButtonProps extends JSX.HtmlButtonTag {}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      class={cx(
        "rounded-lg border border-purple-500/40 bg-purple-800/50 p-3 font-bold hover:bg-purple-800/70",
        rest.class,
      )}
    >
      {children}
    </button>
  );
}
