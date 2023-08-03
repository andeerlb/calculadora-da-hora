import { Link } from 'react-router-dom'
import React from 'react'

export default function About() {
  return (
    <>
      About
      <h2> <Link to={'/'}> Go to Home Page</Link></h2>
    </>
  )
}
