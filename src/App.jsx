import { Suspense, useState, lazy } from 'react'

import './App.css'
import { HashRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'aos/dist/aos.css'
import Loader from './components/common/Loader/Loader'


const Home = lazy(() => {
  return Promise.all([
    import("./pages/Home"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});
const Legal = lazy(() => {
  return Promise.all([
    import("./components/common/legal/Legal"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});
const Privacy = lazy(() => {
  return Promise.all([
    import('./components/common/privacy/Privacy'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});
const Cygna = lazy(() => {
  return Promise.all([
    import("./pages/Cygna"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});

const Blog = lazy(() => {
  return Promise.all([
    import("./pages/Blog"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});

const Paper = lazy(() => {
  return Promise.all([
    import("./components/blog/paper/Paper"),
    new Promise(resolve => setTimeout(resolve, 1000))
  ])
    .then(([moduleExports]) => moduleExports);
});


function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter  >


      <Suspense fallback={<Loader />}>
        <div className="layout">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Article/:id' element={<Paper/>}/>
            <Route path='/Cygna-partenaire' element={<Cygna />} />
            <Route path='/Politique-de-confidentialité' element={<Privacy />} />
            <Route path='/Mentions-légales' element={<Legal />} />
          </Routes>
        </div>
      </Suspense>


    </HashRouter>

  )
}

export default App
