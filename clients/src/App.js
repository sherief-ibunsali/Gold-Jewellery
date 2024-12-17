import Header from "./components/header/header";
import Home from "./components/home/home";
import Category from "./components/category/category";
import AboutUs from "./components/about/about";
import OfferGoldListPage from "./components/offer/offer";
import Gallery from "./components/gallery/gallery";
import Gift from "./components/gifts/gift";
import Form from "./components/contact/form";
import Footer from "./components/footer/footer";
export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Category />
      <AboutUs />
      <OfferGoldListPage />
      <Gallery />
      <Gift />
      <Form />
      <Footer />
    </div>
  );
}
