import Header from "./Header/Header";
import Offer from "./Offer/Offer";
import ContactDetails from "./ContactDetails/ContactDetails";
import logo from "../../assets/logo.jpg";
import "../Main/Main.scss";

const Main = () => {
  return (
    <main className="main">
      <Header />
      <section className="main__section">
        <h1 className="main__heading p-3 pb-5 pt-5 m-0">Tortowe wariacje i cukrowe inspiracje</h1>
        <p className="shadow p-1 m-3 mt-0 bg-white rounded">Jesteśmy pracownią artystycznych tortów i słodkości. Tworzymy w oparciu o solidny fundament wykształcenia w zakresie technologii żywienia i doświadczenie w komponowaniu nowych smaków. To właśnie smak, jakość i wygląd są podstawowymi kryteriami, które nasi klienci biorą pod uwagę przy wyborze i degustacji słodkości. Dlatego kreując nasze desery, właśnie tym czynnikom poświęcamy najwięcej uwagi.</p>
      </section>
      <Offer/>
      <ContactDetails />
    </main>
  );
};

export default Main;
