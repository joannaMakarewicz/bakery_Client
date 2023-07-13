import Header from "./Header/Header";
import Offer from "./Offer/Offer";
import ContactDetails from "./ContactDetails/ContactDetails";
import "../Main/Main.scss";

const Main = () => {
  return (
    <main className="main">
      <Header />
      <section className="main__section">
        <h1 className="main__heading pb-5 pt-5 m-0">Tortowe wariacje i cukrowe inspiracje</h1>
        <p className="shadow p-3 m-4 mt-0 bg-white rounded">Jesteśmy pracownią artystycznych tortów i słodkości. Tworzymy w oparciu o solidny fundament wykształcenia w zakresie technologii żywienia i doświadczenie w komponowaniu nowych smaków. To właśnie smak, jakość i wygląd są podstawowymi kryteriami, które nasi klienci biorą pod uwagę przy wyborze i degustacji słodkości. Dlatego kreując nasze desery, właśnie tym czynnikom poświęcamy najwięcej uwagi.</p>
      </section>
      <div className="main__extra">
       Test
      </div>
      <Offer/>
      <ContactDetails />
    </main>
  );
};

export default Main;
