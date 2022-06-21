import Link from "next/link"

function Pagination({page, total}) {
  return (
    <>
        {page > 1 && (
        <Link href={`/events?page=${page -1}`}>
            <a className='btn-secondary'>Prev</a>
        </Link>
        )}
        {page < total && (
        <Link href={`/events?page=${page +1}`}>
            <a className='btn-secondary'>Next</a>
        </Link>
        )}
    </>
  )
}

export default Pagination