import Header from "./Header/Header";
import Offer from "./Offer/Offer";
import ContactDetails from "./ContactDetails/ContactDetails";
import "../Main/Main.scss";

const Main = () => {
  return (
    <main>
      <Header />
      <section>
        <h1>Nagłówek</h1>
        <p>Description</p>
        <Offer />
      </section>
      <ContactDetails />
    </main>
  );
};

export default Main;
