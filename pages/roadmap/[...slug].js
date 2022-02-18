import { useRouter } from 'next/router'
import RoadMunk from '../../components/roadmunk'

const Roadmap = () => {
    const router = useRouter()
    const slug = router.query.slug || []
    const url = 'https://app-rm.roadmunk.com/publish/' + slug.join('/')

    return (
        <RoadMunk url={url} />
    )
}

export default Roadmap
