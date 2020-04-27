import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import LogoImg from "../images/rap-logo-dark.png"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        width: 1170,
        maxWidth: '90%',
        padding: `0`,
      }}
    >
      <div class="LogoContainer">
        <Link to="/" >
          <img src={LogoImg} alt="Rapid Acceleration Partners"/>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
