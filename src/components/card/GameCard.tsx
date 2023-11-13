import { FC, ComponentProps } from "react";
import { cn } from "@/lib/utils.ts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { IGame } from "@/types/IGame.ts";
import { Link } from "react-router-dom";
import CardImg from "@/components/card/CardImg.tsx";
import BulletList from "@/components/BulletList.tsx";

type CardProps = ComponentProps<typeof Card> & CardGameMeta;
type CardGameMeta = { gameInfo: IGame };

const GameCard: FC<CardProps> = ({
  className,
  gameInfo,
  ...props
}: CardProps) => {
  return (
    <Card className={cn(`w-[350px] relative`, className)} {...props}>
      <CardImg url={gameInfo?.thumbnail} />
      <div className="px-2">
        <CardHeader>
          <Link to={`:${gameInfo.id}`}>
            <CardTitle>{gameInfo?.title}</CardTitle>
          </Link>
        </CardHeader>
        <CardContent className="grid gap-4">
          <BulletList bulletColor="bg-emerald-500">
            <>
              <p className="text-sm font-medium leading-none">
                {gameInfo?.genre}
              </p>
              <p className="text-sm text-muted-foreground">
                {gameInfo?.publisher}
              </p>
            </>
          </BulletList>
        </CardContent>
      </div>
    </Card>
  );
};

export default GameCard;
