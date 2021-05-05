import React, { FC } from 'react';


export const Navbar:FC = ({children}) => {
	return (
		<nav className="d-grid navbar">
			{children}
		</nav>
	)
}