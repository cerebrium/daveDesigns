import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import '../components/layout.scss'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Products = () => {
  const data = useStaticQuery(graphql`
  query {
    rollingPin: file(relativePath: { eq: "rolls/woodRoller.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    otherRoll: file(relativePath: { eq: "rolls/otherRoll.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    multipleRolls: file(relativePath: { eq: "rolls/multipleRolls.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bowlOne: file(relativePath: { eq: "bowls/bowlOne.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bowlTwo: file(relativePath: { eq: "bowls/bowlTwo.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bowlThree: file(relativePath: { eq: "bowls/bowlThree.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    bowlFour: file(relativePath: { eq: "bowls/bowlFour.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
  `)

  const [ selectedPhoto, setSelectedPhoto ] = useState('')
  const [ selectedList, setSelectedList ] = useState('Rolls')

  const handleClick = (e) => {
    let myVar = e.target.alt
    console.log(e.target.alt)
    if (myVar === 'woodRoller') {
      setSelectedPhoto(<Img fluid={data.rollingPin.childImageSharp.fluid} alt='woodRoller' className='selectedImage'/>)
    } else if (myVar === 'multipleRolls') {
      setSelectedPhoto(<Img fluid={data.multipleRolls.childImageSharp.fluid} alt='multipleRolls' className='selectedImage'/>)
    } else if (myVar === 'otherRoll') {
      setSelectedPhoto(<Img fluid={data.otherRoll.childImageSharp.fluid} alt='otherRoll' className='selectedImage'/>)
    } else if (myVar === 'bowlOne') {
      setSelectedPhoto(<Img fluid={data.bowlOne.childImageSharp.fluid} alt='bowlOne' className='selectedImage'/>)
    } else if (myVar === 'bowlTwo') {
      setSelectedPhoto(<Img fluid={data.bowlTwo.childImageSharp.fluid} alt='bowlTwo' className='selectedImage'/>)
    } else if (myVar === 'bowlThree') {
      setSelectedPhoto(<Img fluid={data.bowlThree.childImageSharp.fluid} alt='bowlThree' className='selectedImage'/>)
    } else if (myVar === 'bowlFour') {
      setSelectedPhoto(<Img fluid={data.bowlFour.childImageSharp.fluid} alt='bowlFour' className='selectedImage'/>)
    }
  }

  var listOfProducts;
  if (selectedList === 'Rolls') {
    listOfProducts = (
      <>
        <div className='imageContainer' onClick={handleClick} >
          <Img fluid={data.rollingPin.childImageSharp.fluid} alt='woodRoller' />
        </div>
        <div className='imageContainer' onClick={handleClick}>
          <Img fluid={data.multipleRolls.childImageSharp.fluid} alt='multipleRolls' />
        </div>
        <div className='imageContainer' onClick={handleClick} >
          <Img fluid={data.otherRoll.childImageSharp.fluid} alt='otherRoll' />
        </div>
      </>
    )
  } else if (selectedList === 'Bowls') {
    listOfProducts = (
      <>
        <div className='imageContainer' onClick={handleClick} >
          <Img fluid={data.bowlOne.childImageSharp.fluid} alt='bowlOne'/>
        </div>
        <div className='imageContainer' onClick={handleClick}>
          <Img fluid={data.bowlTwo.childImageSharp.fluid} alt='bowlTwo'/>
        </div>
        <div className='imageContainer' onClick={handleClick} >
          <Img fluid={data.bowlThree.childImageSharp.fluid} alt='bowlThree'/>
        </div>
        <div className='imageContainer' onClick={handleClick} >
          <Img fluid={data.bowlFour.childImageSharp.fluid} alt='bowlFour'/>
        </div>
      </>
    )
  }

  const changeColumn = (e) => {
    console.log(e.target.id)
    if (e.target.id === 'rolls') {
      setSelectedList('Rolls')
    } else if (e.target.id === 'bowls') {
      setSelectedList('Bowls')
    }
  }

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
                    <Link to="/" className='links'>Home</Link>
                </div>
                <div className='linkStyle'>
                    <Link to="/contact/" className='links'>Contact</Link>
                </div>
            </div>
        </div>
        <div className='content'>
          <div className='titleScroll'>
          <h1 className='titles'>{selectedList}</h1>
          </div>
          <div className='titleProducts'>
            <h1 className='titles'>Selected</h1>
          </div>
            <div className='screenImageColumn'>
              <div className='innerSelector'>
                <h3 ><span onClick={changeColumn} id='rolls' className='selectors'>Rolls</span> | <span onClick={changeColumn} id='bowls' className='selectors'>Bowls</span></h3>
              </div>
              {listOfProducts}
            </div>
            <div className='selectedPhoto'>
              <div className='selectedImageSizing' onClick={handleClick}>
                  {selectedPhoto}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Products
