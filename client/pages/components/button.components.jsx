import Head from 'next/head'
import React from 'react'

export default function Button() {
  const [data, setData] = React.useState(0)
  function click() {
    setData(data + 1)
  }
  return(
    <>
    <style jsx>{
      `
        .margin-allll{
          margin-left:15px;
        }
      `
    }</style>
    <div className="home margin-allll">
      <h1>{data}</h1>
      <button type="button" className="btn btn-secondary" onClick={click}>Click</button>
    </div>
    </>
  )
}