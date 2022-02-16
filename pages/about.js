import Link from 'next/link'
import Layout from '../components/layout'


function About() {
    return (<Link href='/'><a><img src='/images/BG_Teams.jpg' alt='BTG Pactual' /></a></Link>)
}

About.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
  }

export default About