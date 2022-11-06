import {useLocation} from "react-router-dom"
import { format } from "date-fns"
import '../css/SingleRepo.css'

export default function Repo(){
  const myRepos = useLocation()
  const{details}= myRepos.state
  console.log(details)
return <>
  
<article className="repo-container">
    <div>
      <img  src={details.owner.avatar_url} alt={details.owner.login} className="profile-img"/>
       <div className='repo-about'>
          <p>{details.name}</p>
           <a
            className="text-sm"
            href={details.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Repo
          </a>
        </div>
        <ul>
          <li>
            <p className="date-info">
              This repository was created on{" "}
              {format(new Date(details.created_at), "dd MMMM yyyy")} by{" "}
              {details.owner.login}
            </p>
          </li> 
        </ul>
    </div>
        
        <div>
          <ul className='repo-state'>
            <li className='li-item'>{details.language}</li>
             <li className='li-item'>
               {details.private ? (<p> Private</p>) : (<p> Public</p> )}
             </li> 
          </ul>
        </div>
        <div className='singlerepo'>
          
          <ul className='repo-count'>
            <li className='li-item'>{details.stargazers_count.toLocaleString()} stars</li>
            <li className='li-item'>{details.watchers_count.toLocaleString()} Watchers</li>
          </ul>
        </div>
        
      
  </article>
</>
  
}