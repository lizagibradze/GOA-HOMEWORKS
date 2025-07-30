import React, { useState } from 'react'

function textchange() {
    const [text, setText] = useState('hii')
  return (
    <div>
        <h1>{text} </h1>
        <button onClick={() => setText('rogor xar?')}>aaaaaaaaadw</button>
    </div>
  )
}

export default textchange
