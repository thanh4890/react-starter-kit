import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper } from './style'

const Header = () => (
  <HeaderWrapper>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </HeaderWrapper>
)

export default Header
