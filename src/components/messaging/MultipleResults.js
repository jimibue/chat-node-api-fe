import React from 'react'
import ClipboardCopy from './CopyText';

export default function MultipleResults({str}) {
    const results = str.split(':\n');
  return (
    <div>
        <h1>results</h1>
        { results.map((result, index) => {
           return <ClipboardCopy text={result}/>
        })}
    </div>
  )
}
