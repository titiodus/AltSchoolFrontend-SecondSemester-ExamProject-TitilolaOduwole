import { Link, Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation.jsx'
import '../css/ReposPage.css';
import { useState } from "react";
import useFetch from "../hook/useFetch.jsx"


export default function ReposPage() {
  const [page, setPage] = useState()

  const total = 6
  const url = `https://api.github.com/users/titiodus/repos?page=${page}&per_page=5`
  const { loading, data } = useFetch(url)
  console.log(data)

  
  return <>
    
    <main>
    <Navigation />
    <p className='repos-text'>Repositories</p>
        {data && data.map(details=><li key={details.id} className="repos-card">
          <p>{details.full_name}</p>
          <p>{details.description}</p>
          
          <div className="repos-info">
            {details.language ? <p>🔴{details.language}</p> : (<p>🔴MarkUp</p> )}
            <p>forks: {details.forks}</p>
            <p>stars: {details.stargazers_count
}</p>
          </div>
          
        <Link className='repo-more' to="singlerepo" state={{details: details }}>See more...</Link>
        </li>
          )}
        <div className='buttons'>
        <button className='outer-btns' disabled={page <= 1} onClick={() => setPage(prev => prev - 1)}>prev</button>
        <p>{page}</p>


        {Array.from({ length: total }, (value, index) => index + 1).map((doc) =>
          <button onClick={() => setPage(doc)} key={doc}>{doc}</button>
        )}
        <button className='outer-btns' disabled={page >= 6} onClick={() => setPage(prev => prev + 1)}>next</button>
      </div>

        
        <Outlet />
      </main>
    </>
  
}