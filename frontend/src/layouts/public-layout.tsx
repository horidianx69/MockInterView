import Footer from "@/components/footer"
import Header from "@/components/header"
import AuthHandler from "@/handlers/auth-handler"
import { Outlet } from "react-router-dom"
// better than ../components/header

export const PublicLayout = () => {
  return (
    <div className="w-full">
        <Header/>
        <AuthHandler/>
        <Outlet />
        
        <Footer/>
    </div>
  )
}