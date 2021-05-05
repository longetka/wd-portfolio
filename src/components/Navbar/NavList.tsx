import React, {FC} from 'react';

type NavLink = {
	name: string;
	href: string;
}

interface INavList {
	list: NavLink[];
}

export const NavList: FC<INavList> = ({list}) => {

	const links = list.map((item, index) => {
		return (
			<li key={index}>
				<a href={item.href}>{item.name}</a>
			</li>
		)
	})

	return (
		<div className="nav-list-container">
			<ul className="nav-list">
				{links}
			</ul>
		</div>
	);
};