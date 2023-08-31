import Header from "./Header/Header";
import Offer from "./Offer/Offer";
import Arrow from "../Arrow/Arrow";
import "../Main/Main.scss";

const Main = () => {
  return (
    <main className="main pb-5">
      <Arrow/>
      <Header/>
      <section className="main__section">
        <div className="w-25 mx-auto my-3 main__border" />
        <h1 className="main__heading">
        CHODŹ NA CIACHO – ZACHWYCAJĄCE WYPIEKI NA KAŻDĄ OKAZJĘ
        </h1>
        <div className="w-25 mx-auto my-3 main__border" />
        <p className="main__description p-1 pt-5 pb-2 m-3 mt-0">
        U nas powstają wyjątkowe artystyczne torty, ciasta i ciasteczka tworzone z ogromną pasją i zaangażowaniem w każdy szczegół. Magia naszych wypieków przejawia się w niebanalnym wyglądzie i wyjątkowym smaku. Są to słodkości przygotowywane na indywidualne zamówienia a przy ich tworzeniu bazujemy wyłącznie na najlepszej jakości składnikach i autorskich przepisach. Smak, jakość i wygląd idą u nas w parze!
        </p>
        <p className="main__description p-1 pb-5 m-3 mt-0">Miłość do słodkości, rękodzieła i wszystkiego co piękne w naturze przejawia się w tym, co tworzymy. Smak, jakość i wygląd to podstawowe kryteria, którymi kierujemy się przy tworzeniu naszych słodkości. Uwielbiamy bawić się smakiem i tworzyć nowe połączenia smakowe. Na bieżąco śledzimy trendy smakowe i wizualne w nowoczesnym cukiernictwie, bierzemy udział w szkoleniach i ciągle się rozwijamy. Wszystko co dla Was przygotowujemy jest tworzone z sercem i pasją!</p>

        <Offer />
      </section>
    </main>
  );
};

export default Main;
