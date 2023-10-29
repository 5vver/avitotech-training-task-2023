import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IGame } from "@CustomTypes/IGame.ts";
import { Link } from "react-router-dom";

type CardProps = React.ComponentProps<typeof Card> & CardGameMeta;
type CardGameMeta = { gameInfo: IGame };

const GameCard = ({ className, gameInfo, ...props }: CardProps) => {
  return (
    <Card className={cn("w-[350px]", className)} {...props}>
      <CardHeader>
        <Link to={`:${gameInfo.id}`}>
          <CardTitle>{gameInfo?.title}</CardTitle>
        </Link>
        <CardDescription>{gameInfo?.thumbnail}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4">
          {gameInfo?.short_description}
          aaa
        </div>
        <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">
              {gameInfo?.genre}
            </p>
            <p className="text-sm text-muted-foreground">
              {gameInfo?.publisher}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default GameCard;
