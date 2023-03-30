import React from 'react'

export default function SingleMessage({role,content,loading}) {
  return (
    <div className={`single-message ${role}`}>
       {role ==='assistant' ?  <img alt='user img' src='https://i.etsystatic.com/25672526/r/il/9926ae/4736624079/il_1588xN.4736624079_o07h.jpg'/> : <img alt='user img'  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'/>}
        <p style={{}}>
           {content ? content : 'loading...'}
        </p>
       
 
    </div>
  )
}
