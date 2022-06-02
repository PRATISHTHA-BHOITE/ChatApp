
import { Component } from "react"
import data from "react-dom"
import Chat from "./Chat"

function App()
{
  return(
    <div>
      <Chat name="Raju" message="How are you?" time="20 minutes ago" url="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"/>
      <Chat name="John" message="I am fine" time="100 minutes ago" url="https://cdn4.vectorstock.com/i/1000x1000/32/18/user-sign-icon-person-symbol-human-avatar-vector-12693218.jpg"/>
    </div>
    
  )
}

//outside-->Parent Component
//inside--> child component
data.render(<App/>,document.getElementById("root"))