import { BrowserRouter, Route, Routes } from "react-router";
import CenteredLayout from "./layouts/CenteredLayout";
import HomePage from "./pages/HomePage"

export default function() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CenteredLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}