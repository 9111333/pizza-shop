import HomeP from "./Pages/HomeP/HomeP";
import AboutP from "./Pages/AboutP/AboutP";
import ContactP from "./Pages/ContactP/ContactP";
import MenuP from "./Pages/MenuP/MenuP";

const routes = [
    {path: '/' , element: <HomeP/>},
    {path: '/about-p' , element: <AboutP/>},
    {path: '/contact-p' , element: <ContactP/>},
    {path: '/menu-p' , element: <MenuP/>}
]

export default routes