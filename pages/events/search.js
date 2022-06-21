const qs = require('qs')
import { useRouter } from 'next/router'
import Link from 'next/Link'
import Layout from '@/components/Layout'
import Eventitem from '@/components/Eventitem'
import { API_URL } from '@/config/index'


export default function SearchPage({events}) {
    const router = useRouter()
    return (
    <Layout title='Search Results'>
        <Link href='/events'>Go Back</Link>
    <h1>Search Results for {router.query.term}</h1>
    {events.length === 0 && <h3>No events to show</h3>}

    {events.map(evt => <Eventitem key={evt.id} evt={evt.attributes}/>)}
  </Layout>
  )
}


export async function getServerSideProps({query:{term}}) {
  const query = qs.stringify({
    populate: '*',
    filters: {
        $or: [
            {
                name: {
                    $contains: term,
                },
            },
            {
                performers: {
                    $contains: term,
                }
            },
            {
                description: {
                    $contains: term,
                }
            },
            {
                venue: {
                    $contains: term,
                }
            }
        ]
        
    },
  })
  const res = await fetch(`${API_URL}/events?${query}`)
  const events = await res.json()
  console.log(events)
  return {
    props: {events: events.data},
  }
}