const qs = require('qs')
import Link from 'next/Link'
import Layout from '@/components/Layout'
import Eventitem from '@/components/Eventitem'
import Pagination from '@/components/Pagination'
import { API_URL } from '@/config/index'

const PER_PAGE = 5


export default function EventsPage({events, page, total}) {
  //console.log(events)

  return (
    <Layout>
      
    <h1>Events</h1>
    {events.length === 0 && <h3>No events to show</h3>}

    {events.map(evt => <Eventitem key={evt.id} evt={evt.attributes}/>)}

    <Pagination page={page} total={total}/>
  </Layout>
  )
}


export async function getServerSideProps({query: {page = 1}}) {
  
  //Fetch events
  const query = qs.stringify({
    populate: '*',
    sort: ['date:asc'],
    pagination: {
      page: page,
      pageSize: PER_PAGE,
    }
  })
  const eventRes = await fetch(`${API_URL}/events?${query}`)
  //console.log(await res.json())

  const events = await eventRes.json()
  //console.log(events.meta.pagination.pageCount)
  return {
    props: {events: events.data,
    page: +page,
    total: events.meta.pagination.pageCount}
  }
}