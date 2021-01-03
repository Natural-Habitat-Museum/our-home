import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 NOT FOUND</h1>
    {/* <h2>This door is a fire exit. It triggered an alarm. You are now being escorted out of the museum. It's okay. you didn't know. No judgement. </h2> */}
    <Link to="/"><h3>Go to home</h3></Link>
  </Layout>
)

export default NotFoundPage
