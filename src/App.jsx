import './App.css';
import './css/Nav.css';
import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route} from 'react-router-dom';
import MyGithub from './Pages/Mygithub.jsx';
import ReposPage from './Pages/ReposPage.jsx'
import SingleRepo from './Pages/SingleRepo.jsx'
import Err404 from './Pages/Err404.jsx'
import TestError from './Pages/Testerror.jsx'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './Pages/Errorfallback.jsx';


export default function App() {
  
  return <>
    <ErrorBoundary FallbackComponent={ErrorFallback}> 
    <HelmetProvider>  
    <Routes>
      <Route path='/' element={<MyGithub />} />
      <Route path='repositories' element={<ReposPage />}>
        <Route path='singlerepo' element={<SingleRepo />} />
      </Route>
        
      <Route path='testerror' element={<TestError />} />
      <Route path='*' element={<Err404 />} />
    </Routes>
    </HelmetProvider>  
    </ErrorBoundary>
  </>
    
    
    
}