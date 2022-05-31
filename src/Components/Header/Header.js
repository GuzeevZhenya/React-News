import React, { useState } from 'react';
import { HeaderAvatar } from './HeaderAvatar/HeaderAvatar';
import { HeaderSearch } from './HeaderSearch/HeaderSearch';
import './Header.css';
 

export const Header = () => {

	return (
		<div className="header">
			<h1 className="header-title">Info News</h1>
			<HeaderSearch/>
			<HeaderAvatar/>
		</div>
	);
};
