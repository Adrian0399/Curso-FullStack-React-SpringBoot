import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelloWorldApp } from './HelloWorld'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorldApp 
      id={'17'} 
      user={{ name: 'Adrian' , lastName: 'Olvera' }}   
      nick={'Kaibil57'}
    />
  </React.StrictMode>,
)
  