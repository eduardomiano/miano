import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import RoadMunk from '../../components/roadmunk'

const Roadmap = () => {
    const router = useRouter()
    const slug = router.query.slug || []
    const url = slug.join('/')
    debugger
    return (
        <div className='bg-yellow-200 h-screen'>            
            <RoadMunk url={url} />
        </div>
    )
}

export default Roadmap
