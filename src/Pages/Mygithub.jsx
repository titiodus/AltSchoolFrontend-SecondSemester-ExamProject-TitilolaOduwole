import Navigation from "../components/Navigation.jsx";
import '../css/Mygithub.css';
import useFetch from '../hook/useFetch.jsx';
import { Helmet } from 'react-helmet-async';

export default function MyGithub() {
    const url = "https://api.github.com/users/titiodus"
    const {loading,data}=useFetch(url)
    console.log(data)
  
    
  return (
    <>
        <div className="nav-container">
        <Helmet>
          <title>Github Profile using API</title>
          <meta name='description' content='Retreiving Github profile data using API.' type='section' />
        </Helmet>  
            <Navigation />
        </div>
        <div className="mycard">
          <section className='card'>
            <img className="profile-img" src={data.avatar_url} alt='A smiling Titi' />
            <div className='card-top'>
              <p className="git-bio">{data.bio}</p>
              <p className="git-name">{data.name}</p> 
            </div>
            <div>
              <p className="git-followers">{data.followers} followers</p>
            </div>
            <div>
              <p className="git-following">{data.following} following</p>
            </div>
            <div>
              <p className="git-repos">{data.public_repos} Repositories</p>
            </div>
          </section>
        </div>
    </>
    );
}
