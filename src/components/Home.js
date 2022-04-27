import React, { useState } from 'react'
import Footer from './Common/Footer'
import Header from './Common/Header'

export default function Home() {
    var name="sakshi " //name is simple variable
    const [surname, setSurname] = useState("sisodiya")
  return (
    <>
      <Header/>
      <main>
          <h1>Home Page</h1>
            <h2>Hello {name} {surname} from App component</h2>

            <ul class="list-group">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
            </ul>
      </main>
      <Footer/>
    </>
  )
}
