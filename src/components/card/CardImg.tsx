import { FC } from "react";
import { cn } from "@/lib/utils.ts";

export type CardImgProps = {
  url: string;
  className?: string | undefined;
};

const CardImg: FC<CardImgProps> = ({
  className,
  url,
  ...props
}: CardImgProps) => (
  <div
    className={cn(
      "relative top-0 left-0 w-full h-40 bg-contain bg-no-repeat rounded-lg bg-[center_top_1rem] opacity-90",
      className,
    )}
    style={{
      backgroundImage: `url(${url})`,
    }}
    {...props}
  />
);

export default CardImg;
