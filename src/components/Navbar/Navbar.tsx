import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import RouteItems from '../../RouteItems';

type NavItemProps = {
  title: string;
  icon: string | HTMLImageElement;
  active?: boolean;
  onClick: React.MouseEventHandler | undefined;
  route: string;
};

const NavItem: React.FC<NavItemProps> = ({
  title,
  icon,
  active,
  onClick,
  route,
}: NavItemProps) => (
  <NavLink
    className={({ isActive }) =>
      `Navbar__item${isActive ? ' Navbar__item--active' : ''}`
    }
    type="button"
    to={route}
    role="link listitem"
  >
    {icon} {title}
  </NavLink>
);

NavItem.defaultProps = {
  active: false,
};

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => (
  <nav className="Navbar" role="list">
    {RouteItems.map((route) => (
      <NavItem key={route.route} title={route.title} icon={route.icon} route={route.route} />
    ))}
  </nav>
);

type NavbarProps = {};

export default Navbar;
