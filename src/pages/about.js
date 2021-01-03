import React from "react"
import GridAbout from '../components/gridAbout'
import Rectangle from '../components/rectangle'
import Layout from "../components/layout"
import SEO from "../components/seo"
import gridStyles from '../components/grid.module.css'
// import aboutStyles from '../components/about.module.css'
import DianaImage from "../components/diana-img"
import AlexImage from "../components/alex-img"
import TobiasImage from "../components/tobias-img"
import HomeButton from "../components/homeButton"





const AboutPage = () => (
  <Layout>
    <SEO title="Home" />


    <GridAbout>
      <Rectangle colStart="1" colEnd="span 6" border="none">
        <div className={gridStyles.gridEl}>
          <h2>Natural Habitat is a virtual museum for internet art. Founded in 2019 by Alex Kälin in Zürich, Switzerland.</h2>
          <h2>The museum celebrates exceptional art that floats on the internet. It aims to put internet art in the limelight and encourage its development. Our mission is to show how internet art is part of art history. We are committed to give a place to internet art and make it understood by a broader audience. The museum aspires to be easily understandable for everyone interested.</h2>
        </div>
      </Rectangle>
      <Rectangle colStart="1" colEnd="span 3" border="none">
        <div>
          <h2 className={gridStyles.gridEl}>Collection</h2>
          <div className={gridStyles.gridElMargin}>
            <p>The collection contains information about pieces such as “Priceless” by Kevin Abosch and Ai Weiwei or “*MOUCHETTE*” by Martine Neddam that reflect on how we live our lives in an interconnected world. The collection explores the possibilities and limits of the medium internet. It includes subjects such as connectivity, interaction, value, chance, identity and control. <br /><br /><strong>Numbers</strong>
              <br />59 Artworks
<br />1 Publications
<br />1 Emulators
<br />1 Exhibitions</p>
          </div>
        </div>
      </Rectangle>
      <Rectangle colStart="4" colEnd="span 3">
        <div>
          <h2 className={gridStyles.gridEl}>exhibitions</h2>
          <div className={gridStyles.gridElMargin}>
            <p>
              <strong>#StayHomeGoViral</strong> <br />19.03.2020 – ongoing
  <br /><a href="https://www.natural-habitat.com/exhibition/index.php">Visit the exhibition</a>
              <br /><br />

              <strong>But is it art?</strong> <br />17.07.2019 – 17.01.2020
<br />extended until 17.03.2020 due to popular demand</p>
          </div>
        </div>
      </Rectangle>
      <Rectangle colStart="1" colEnd="span 2">
        <div className={gridStyles.gridImg}>
          <AlexImage />
        </div>
        <div className={gridStyles.gridElMargin}>
          <h1>Alex Kälin</h1>
          <h3>Director</h3>
          <p>Alex Kälin is a Multimedia Producer, his work focuses on cultural journalism. He studied Multimedia Production in Bern and has worked in desktop publishing, graphic design and film. He became the founder and director of “Natural Habitat”, a digital museum for internet art, due to his interest in fostering the art movement. Currently he leads the Natural Habitat Association and keeps the collection growing.</p><p>
            The first pieces he acquired information about were “PEPE WEST”, “No Fun”, “King's Cross Phone-In”. He aims to collect information about some great things that happened to the internet so they can't be forgotten as easily as all the bullshit online.</p>
        </div>

      </Rectangle>
      <Rectangle colStart="3" colEnd="span 2">
        <div className={gridStyles.gridImg}>
          <DianaImage />
        </div>
        <div className={gridStyles.gridElMargin}>
          <h1>Diana Lira</h1>
          <h3>Head Curator</h3>
          <p>Diana Lira is an independent curator and adviser, focusing on the intersection between fine arts, technology and economy. She studied Biology, completed the program of the MA Curatorial Studies and recently concluded her MA in Transdisciplinary Studies in Arts. She counts on 10 years of experience in the contemporary fine arts system in different positions, performing different roles. She became a specialist in developing cross-cultural collaborations between different individuals and organizations across the globe. Currently she works in the field of AI, consults start-ups and manages and advises emerging and established artists in specific steps throughout their career. She is the Head Curator of Natural Habitat.</p>
        </div>

      </Rectangle>
      <Rectangle colStart="5" colEnd="span 2">
        <div className={gridStyles.gridImg}>
          <TobiasImage />
        </div>
        <div className={gridStyles.gridElMargin}>
          <h1>Tobias Dupuch</h1>
          <h3>Head Of Technology</h3>
          <p>Tobias Dupuch is an Interaction Designer and the prototype of a “jack of all trades”. While he rejects to exempt himself from the suspicion of being the traditionally accompanying master of none, it must be noted that his work as an artist has been featured in the collection before he joined the association as head of technology in late 2019. As a passionate human-centered designer who codes he will not only help forming but also realizing the future of the Museum.</p>
        </div>

      </Rectangle>
      <Rectangle colStart="1" colEnd="span 3" border="none">
        <div>
          <h2 className={gridStyles.gridEl}>join us</h2>
          <div className={gridStyles.gridElMargin}>
            <h2>
              The museum is owned by the Natural Habitat Association, a non-profit organisation based in Zürich. We need your help to keep the museum going. <a href="mailto:hello@natural-habitat.com" target="_blank">Become a sponsor.</a>
            </h2>
          </div>
        </div>
      </Rectangle>
      <Rectangle colStart="4" colEnd="span 3">
        <div>
          <h2 className={gridStyles.gridEl}>contact us</h2>
          <div className={gridStyles.gridElMargin}>
            <h2>
              For more detailed information about the museum and its collection please <a href="mailto:hello@natural-habitat.com" target="_blank">leave us a message</a> or <a href="http://natural-habitat.com//newsletter/?p=subscribe" target="_blank">subscribe to our newsletter.</a>
            </h2>
          </div>
        </div>
      </Rectangle>


    </GridAbout>
    <HomeButton />
  </Layout>
)

export default AboutPage
