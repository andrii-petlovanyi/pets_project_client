import React from "react"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./layout/Layout"
import './index.css'
import { Login, News, NotFound, Notices, OurFriends, Register, UserDashboard } from "./pages"
import UiKit from "./pages/UiKit"

function App() {

  return (
    <>
      <Suspense fallback={false}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route element={<PrivateRoute />}> */}
            <Route index element={<UserDashboard />} />
            <Route path="news" element={<News />} />
            <Route path="notices" element={<Notices />} />
            <Route path="partners" element={<OurFriends />} />
            <Route path="uikit" element={<UiKit />} />
            {/* </Route> */}

            {/* <Route element={<PublicRoute />}> */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            {/* </Route> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
