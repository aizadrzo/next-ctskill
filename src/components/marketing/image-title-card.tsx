import Image from "next/image";
import { Card, CardFooter } from "../ui/card";

export interface ImageTitleCardProps {
  title: string;
  image: string;
}

export function ImageTitleCard({ title, image }: ImageTitleCardProps) {
  return (
    <Card className="w-fit py-0 border-neutral-grey-100">
      <Image
        src={image}
        alt="Background Pattern"
        width={296}
        height={240}
        className="max-w-[296] h-[240px] relative rounded-t-xl"
      />
      <CardFooter className="w-full flex justify-center mb-6">
        {title}
      </CardFooter>
    </Card>
  );
}
