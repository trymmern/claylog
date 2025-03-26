import { Typography } from "@material-tailwind/react";

export function Card({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) {
  return (
    <div className="bg-gray-800 p-6 shadow-lg rounded-lg min-w-50">
      <img
        className="rounded-lg h-60 w-60 aspect-1/1 shadow-xl shadow-gray-900/50 object-contain object-center"
        src={image}
      />
      <Typography variant="h3" className="flex justify-center mt-2 mb-2">
        {title}
      </Typography>
      <Typography className="flex justify-center text-gray-400">
        {text}
      </Typography>
    </div>
  );
}
