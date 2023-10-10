import { useState } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
import styled from 'styled-components'

const Input = styled.input`
  font-size: large;
  border-radius: 25px;
  padding: 8px;
`

function App() {
  const [text, setText] = useState('')
  const handleChange: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
    setText(e.target.value)
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <QRCode value={text}></QRCode>
      
      <div className="input-here">
        <p>Enter your text here</p>
        <Input type="text" value={text} onChange={handleChange}/>
      </div>
    </div>
  )
}

export default App
