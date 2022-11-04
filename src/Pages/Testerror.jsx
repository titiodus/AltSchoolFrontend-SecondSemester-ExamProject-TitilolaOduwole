import { useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import ErrorFallback from './Errorfallback.jsx'
import Navigation from '../components/Navigation.jsx'

export default function TestError(){
  const [food, setFood]= useState('')
  const FoodError = ({food}) => {
    if(food === 'egusi') {
      throw new Error('You never dey hear word!')
    } else {
      return `My favourite is ${food}`
    }
  }
  return <>
    <Navigation />
    <input value={food} type='text' placeholder="Do not enter Egusi" onChange={(e)=>setFood(e.target.value)} />
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>setFood('')} resetKeys={[food]}>
      <FoodError food={food} />
    </ErrorBoundary>
  </>
}