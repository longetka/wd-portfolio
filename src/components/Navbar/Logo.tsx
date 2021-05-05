import React, {FC} from 'react';

interface ILogo {
	image: string;
	alt: string;
}

export const Logo: FC<ILogo> = ({image, alt}) => {
	return (
		<div className="logo">
			<img src={image} alt={alt} />
			<p>Cherepanov Denis Web Developer</p>
		</div>
	)
}