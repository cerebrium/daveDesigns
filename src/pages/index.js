import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import '../components/layout.scss'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    dave: file(relativePath: { eq: "dave.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }`)

  return (
    <div className='overallDiv'>
      <SEO title="Home" />
      <div className='navBar'>
          <div className='dropDownHamburger'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <div className='dropDownContent'>
            <div className='linkStyle'>
              <Link to="/products/" className='links'>Products</Link>
            </div>
            <div className='linkStyle'>
              <Link to="/contact/" className='links'>Contact</Link>
            </div>
          </div>
        </div>
      <div className='contentTwo'>
        <h1 className='titles'>Welcome to Dave Designs</h1>
        <div className='daveClass'>
          <Img fluid={data.dave.childImageSharp.fluid} alt='dave'/>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
