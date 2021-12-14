import React from 'react';
import { useLocation } from 'react-router-dom';
import usePathValid from '../hooks/usePathValid';

const CreatorNav = props => {
  const { pathname } = useLocation();

  const [, isCreatorNavPathVaild] = usePathValid(pathname);

  return isCreatorNavPathVaild && <button>네브바</button>;
};

export default CreatorNav;
