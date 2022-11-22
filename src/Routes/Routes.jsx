import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PdfVisualizer from '../Pages/PdfVisualizer'

const RoutesLinks = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/cv' element={ <PdfVisualizer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesLinks