import {useLocation} from "react-router-dom";
import { format } from "date-fns";
import '../css/SingleRepo.css';
import { Helmet } from 'react-helmet-async';

export default function Repo(){
  const myRepos = useLocation()
  const{details}= myRepos.state
  console.log(details)
return <>
  
<article className="repo-container">
<Helmet>
          <title>Github Profile using API</title>
          <meta name='description' content='Showing a single repository with nested route using API.' type='article' />
        </Helmet> 
  <div>
    <div>
      <img  src={details.owner.avatar_url} alt={details.owner.login} className="singlerepo-img"/>
    </div>  
        <div className="dt-container">
          <p className="date-info">
              This repository was created on{" "}
              {format(new Date(details.created_at), "dd MMMM yyyy")} by{" "}
              {details.owner.login}
            </p>
         
        </div>
    
        <div className="txt-container"> 
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
    
        
        <div className="li-container">
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
        
  </div>  
</article>
</>
  
}