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
        <div>
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
              <h3>{data.name}</h3>
              <p>{data.bio}</p>
            </div>
            <div>
              <p>{data.followers} followers</p>
            </div>
            <div>
              <p>{data.following} following</p>
            </div>
            <div>
              <p>{data.public_repos} Repositories</p>
            </div>
          </section>
        </div>
    </>
    );
}
