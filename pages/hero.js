import Layout from '../components/layout'

export default function Hero() {
  return <div>Hero</div>
}

Hero.getLayout = function getLayout(page) {
  return (
      <Layout>
          {page}
      </Layout>
  )
}