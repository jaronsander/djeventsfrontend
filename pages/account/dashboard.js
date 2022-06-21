import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import DashboardEvent from "@/components/DashboardEvent"
import { API_URL, NEXT_URL } from "@/config/index"
import styles from '@/styles/Dashboard.module.css'
import EventsPage from "pages/events"
import { parseCookies } from "@/helpers/index"
const qs = require('qs')

function DashboardPage({events, token}) {
    const router = useRouter()
    const deleteEvent = async (id) => {
        //console.log(id)
        if(confirm('Are you sure')){
            const res = await fetch(`${API_URL}/events/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()
            if(!res.ok){
                toast.error(data.message)
            } else {
                router.push('/events')
            }
        }
    }
    //console.log(events)
  return (
    <Layout title='User Dashboard'>
        <div className={styles.dash}>
            <h1>Dashboard</h1>
            <h3>My Events</h3>

            {events.map((evt) => (
                <DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent}/>
            ))}
        </div>
        
    </Layout>
  )
}

export async function getServerSideProps({req}) {
    const data = await fetch(`${NEXT_URL}/api/user`, req)
    const user = await data.json()
    //console.log(user.user.username)
    const query = qs.stringify({
        populate: {
            user: {
                filters: {
                    id: {
                        $eq: user.user.id,
                    },
                },
            },
        },
    })
    const {token} = parseCookies(req)
    // console.log(`${API_URL}/events?${query}`)
    const evts = await fetch(`${API_URL}/events?${query}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const evt = await evts.json()
    // console.log(evt.data)
    const userEvt = evt.data.filter(e => e.attributes.user.data !== null)

    return {
        props: {
            events: userEvt,
            token
        }
    }
}

export default DashboardPage