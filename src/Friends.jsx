import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends () {
  const [friends, setfriends] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setfriends(data)
    )
  }, [])
   
    return (
        <div> 
            <h2>Friends: {friends.length}</h2>
           {
            friends.map(friend => <Friend friend={friend}></Friend>)
           }
        </div>
    )
}