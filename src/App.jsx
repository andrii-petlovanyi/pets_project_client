import React from "react"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { Layout } from "./layout/Layout"

import Login from "./pages/Login"
import News from "./pages/News"
import NotFound from "./pages/NotFound"
import Notices from "./pages/Notices"
import OurFriends from "./pages/OurFriends"
import Register from "./pages/Register"
import UserDashboard from "./pages/UserDashboard"

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
