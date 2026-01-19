import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router-dom"
// better than ../components/header

export const PublicLayout = () => {
  return (
    <div className="w-full">
        <Header/>

        <Outlet />
        
        <Footer/>
    </div>
  )
}