import { Children, FC, ReactNode } from "react";

export type BulletListProps = {
  children: ReactNode;
  bulletColor?: "bg-sky-500" | "bg-emerald-500";
};

const BulletList: FC<BulletListProps> = ({
  bulletColor,
  children,
  ...props
}: BulletListProps) => (
  <ul {...props}>
    {Children.map(children, (child, index) => (
      <li key={index}>
        <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          <span
            className={`flex h-2 w-2 translate-y-1 rounded-full ${
              bulletColor ?? "bg-sky-500"
            }
            `}
          />
          <div className="space-y-1">{children}</div>
        </div>
      </li>
    ))}
  </ul>
);

export default BulletList;
