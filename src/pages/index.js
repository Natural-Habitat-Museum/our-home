import React from "react"
import { Link } from "gatsby"
import Grid from '../components/grid'
import Square from '../components/square'
import squareStyles from '../components/square.module.css'
import gridStyles from '../components/grid.module.css'
import CurrentExImage from "../components/current-ex-image"
import TextBlinker from '../components/textBlinker'
import Rectangle from '../components/rectangle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'






import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />

    <Grid>
      <Square spanClass={squareStyles.squareTwo}>
        <h1>Natural<br />Habitat</h1>
        <h3>Museum</h3>
      </Square>



      <Square spanClass={squareStyles.squareTwo}>
        <h3>No current</h3>
        <h3>exhibition</h3>
        <h3>No current</h3>
        <h3>exhibition</h3>
        <h3>No current</h3>
        <h3>exhibition</h3>
        <h3>No current</h3>
        <h3>exhibition</h3>
        <h3>No current</h3>
        <h3>exhibition</h3>
        <h3>No current</h3>
        <h3>exhibition</h3>
        <h3>No current</h3>
        <h3>exhibition</h3>
        <h3>No current</h3>
        <h3>exhibition</h3>
      </Square>

      <Square spanClass={squareStyles.squareThree}>
        <TextBlinker textParts={['internet', 'art', 'in its', 'natural', 'habitat', '']}></TextBlinker>
      </Square>


      <Square spanClass={squareStyles.squareThree}>
        <Link to='/about'><div><h2>About</h2><h2>The</h2><h2>Museum</h2></div></Link>
      </Square>
      <Square spanClass={squareStyles.squareThree}>
        <a href="http://natural-habitat.com//newsletter/?p=subscribe"><div><h2>Suscribe</h2><h2>To Our</h2><h2>Newsletter</h2></div></a>
      </Square>

      <Rectangle colStart="1" colEnd="6" border="none">
        <a className="social-media-link" href="mailto:hello@natural-habitat.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a className="social-media-link" href="https://www.facebook.com/naturalhabitatmuseum" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a className="social-media-link" href="https://www.twitter.com/naturalhabitatm" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="social-media-link" href="https://www.instagram.com/naturalhabitatmuseum" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </Rectangle>






    </Grid>
  </Layout>
)

export default IndexPage
