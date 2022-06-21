import Link from 'next/Link'
import Image from 'next/image'
import styles from '@/styles/Eventitem.module.css'


function Eventitem({evt}) {
  return (
    <div className={styles.event}>
        <div className={styles.img}>
            <Image 
            src={evt.image.data ? evt.image.data.attributes.url : '/images/event-default.png'}
            width={170}
            height={100}
            />
        </div>
        <div className={styles.info}>
            <span>
                {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
            </span>
            <h3>{evt.name}</h3>
        </div>
        <div className={styles.link}>
            <Link href={`/events/${evt.slug}`}>
                <a className='btn'>Details</a>
            </Link>
        </div>
    </div>
  )
}

export default Eventitem