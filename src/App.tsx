import { Suspense } from "react"
import routes from "./routes"
import { Route, Routes } from "react-router-dom"
import { Preloader } from "./utils/Preloader"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"


function App() {

  return (
    <main className='w-full min-h-screen bg-bodyBg text-gray-100'>
      <Header />
      <Suspense fallback={<Preloader />}>
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} index={path === "/"} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </main>
  )
}

export default App
