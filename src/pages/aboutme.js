import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutMe = () => {
    return (
    <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
    )
}

// Rest of the component...

export const Head = () => <Seo title="About Me" />
export default AboutMe