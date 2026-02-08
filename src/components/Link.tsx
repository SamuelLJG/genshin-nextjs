import NextLink from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<"a"> & {
  href: string;
};

const FORCE_RELOAD = true; // 🔥 mude para true quando quiser <a>

export default function Link({ href, children, ...props }: Props) {
  if (FORCE_RELOAD) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}