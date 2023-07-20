import Header from "./Header/Header";
import Offer from "./Offer/Offer";
import ContactDetails from "./ContactDetails/ContactDetails";
import logo from "../../assets/logo.jpg";
import "../Main/Main.scss";

const Main = () => {
  return (
    <main className="main pt-5 pb-5">
      <section className="main__section">
        <div className="w-25 mx-auto my-3 main__border" />
        <h1 className="main__heading p-1 m-3">
          Tortowe wariacje i cukrowe inspiracje
        </h1>
        <div className="w-25 mx-auto my-3 main__border" />
        <p className="main__description p-1 pt-4 pb-4 m-3 mt-0">
          Jesteśmy pracownią artystycznych tortów i słodkości. Tworzymy w
          oparciu o solidny fundament wykształcenia w zakresie technologii
          żywienia i doświadczenie w komponowaniu nowych smaków. To właśnie
          smak, jakość i wygląd są podstawowymi kryteriami, które nasi klienci
          biorą pod uwagę przy wyborze i degustacji słodkości. Dlatego kreując
          nasze desery, właśnie tym czynnikom poświęcamy najwięcej uwagi.
        </p>

        <Offer />
      </section>
    </main>
  );
};

export default Main;
