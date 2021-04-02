import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>This page is awesome!</p>
    <p>Let's change this page</p>
    <p>n-th line here</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
