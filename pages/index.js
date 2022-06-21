
const qs = require('qs')
import Link from 'next/Link'
import Layout from '@/components/Layout'
import Eventitem from '@/components/Eventitem'
import { API_URL } from '@/config/index'



export default function HomePage({events}) {
  return (
    
            <Layout>
      
            <h1>Upcoming Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}
      
            {events.map(evt => <Eventitem key={evt.id} evt={evt.attributes}/>)}
            {events.length >0 && (
              <Link href='/events'>
                <a className='btn-secondary'>View All Events</a>
              </Link>
            )}
          </Layout>
  )
}


export async function getStaticProps() {
  const query = qs.stringify({
    populate: '*',
    sort: ['date:asc'],
  })
  const res = await fetch(`${API_URL}/events?${query}`)
  const events = await res.json()
  return {
    props: {events: events.data},
    revalidate: 1,
  }
}