import Link from "next/link";

export const NavLink = ({
  title,
  href,
  className,
  onclick,
}: {
  title: string;
  href: string;
  className?: string;
  onclick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}) => {
  return (
    <Link
      onClick={onclick}
      href={href}
      className={` font-bold hover:text-link-hover ${className}`}
    >
      {title}
    </Link>
  );
};
