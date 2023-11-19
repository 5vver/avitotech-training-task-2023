import React, { ReactNode, FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export type AppLinkProps = {
  to: string;
  children: ReactNode;
};
const AppLink: FC<NavLinkProps & AppLinkProps> = ({
  to,
  children,
}: AppLinkProps) => (
  <NavLink to={to}>
    {children}
  </NavLink>
);

export default AppLink;
