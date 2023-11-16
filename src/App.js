import {  Routes, Route } from "react-router-dom"
import { Artist, Browse, Browser, Charts, Header, Home, Layout, LayoutSidebar } from "./router"
function App() {
  return (
    <>
    <Routes>
      <Route path ="/" 
      element={<Layout>
              <Home />
            </Layout>} />
      <Route
          path='/browser'
          element={
            <Layout>
              <Browser />
            </Layout>
          }
        />
        <Route
          path='/charts'
          element={
            <Layout>
              <Charts />
            </Layout>
          }
        />
        <Route
          path='/artists'
          element={
            <Layout>
              <Artist />
            </Layout>
          }
        />
    </Routes>
  
    </>
  );
}

export default App;
