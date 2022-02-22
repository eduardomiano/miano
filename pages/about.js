import Layout from '../components/layout'


 function About({ repos }) {

    console.log(repos)

    return (

        <>
            <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal"
                onClick={() => toggleModal('authentication-modal')}>
                Toggle modal
            </button>

            
            {repos.map((r) => 
                <div key={r.id}>{r.name}</div>
            )}
        </>
    )
}

About.getInitialProps = async (ctx) => {
    try {
        const res = await fetch('https://api.github.com/users/eduardomiano/repos')
        const result = await res.json()
        console.log(result)
        return { repos: result }
    } catch (error) {
        console.log('error:')
        console.error(error)
    }
}

About.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default About