import { Typography } from "@material-tailwind/react";
import { Link } from "react-router";

export function NavButton({
  title,
  to,
  icon,
}: {
  title: string;
  to: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="flex gap-2 items-center bg-gray-900 px-6 py-4 rounded-lg lg:p-6"
    >
      {icon}
      <Typography variant="h4" className="text-blue-400">
        {title}
      </Typography>
    </Link>
  );
}
