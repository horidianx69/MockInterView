import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router-dom"
import {Container} from "@/components/container"

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
        <Header/>
        <Container className="grow">
            <main className="grow">
                <Outlet />
            </main>
        </Container>
        <Footer/>
    </div>
  );
}

export default MainLayout;
