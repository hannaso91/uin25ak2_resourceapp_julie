import './App.css'
import Layout from './components/Layout'
import { Route, Routes } from "react-router-dom";
import Resources from './components/Resources'

function App() {
 
  return (
    <>
      <Layout>
        <Routes>
            <Route path="/" element={<Resources category={"html"}/>}/>
            <Route path="/html" element={<Resources category={"html"}/>}/>
            <Route path="/css" element={<Resources category={"css"}/>}/>
            <Route path="/javascript" element={<Resources category={"javascript"}/>}/>
            <Route path="/react" element={<Resources category={"react"}/>}/>
            <Route path="/headless-cms" element={<Resources category={"headless-cms"}/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App