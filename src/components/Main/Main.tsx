import Header from "./Header/Header";
import Carousel from "react-bootstrap/Carousel";
import Offer from "./Offer/Offer";
import Arrow from "../Arrow/Arrow";
import "../Main/Main.scss";
import Feedback from "../Feedback/Feedback";
import bcg5 from "../../assets/bcg1.jpeg";
import bcg6 from "../../assets/bcg2.jpeg";
import bcg7 from "../../assets/bcg3.jpeg";

const Main = () => {
  const opinions = [
    {
      authorName: "Ola Baca",
      text: "Przepiękny wizualnie tort, udekorowany prawdziwymi ciętymi, kwiatami, ale przede wszystkim przepyszny. Zrównoważone smaki - przede wszystkim nie za słodki, był po prostu przepyszny. Zamówiłam tort inspirowany naturą o smaku cytrynowo - malinowym. Bardzo polecam!",
      data: "20 marca 2022r.",
    },
    // {
    //   authorName: "Ola Baca",
    //   text: "Przepiękny wizualnie tort, udekorowany prawdziwymi ciętymi, kwiatami, ale przede wszystkim przepyszny. Zrównoważone smaki - przede wszystkim nie za słodki, był po prostu przepyszny. Zamówiłam tort inspirowany naturą o smaku cytrynowo - malinowym. Bardzo polecam!",
    //   data: "21marca 2022r.",
    // },
    // {
    //   authorName: "Ola guca",
    //   text: "Przepiękny wizualnie tort, udekorowany prawdziwymi ciętymi, kwiatami, ale przede wszystkim przepyszny. Zrównoważone smaki - przede wszystkim nie za słodki, był po prostu przepyszny. Zamówiłam tort inspirowany naturą o smaku cytrynowo - malinowym. Bardzo polecam!",
    //   data: "22 marca 2022r.",
    // },
    {
      authorName: "Ola Baca",
      text: "Przepiękny wizualnie tort, udekorowany prawdziwymi ciętymi, kwiatami, ale przede wszystkim przepyszny. Zrównoważone smaki - przede wszystkim nie za słodki, był po prostu przepyszny. Zamówiłam tort inspirowany naturą o smaku cytrynowo - malinowym. Bardzo polecam!",
      data: "23 marca 2022r.",
    },
  ];
  return (
    <main className="main pb-5">
      <Arrow />
      <Header />
      <article className="main__section">
        <div className="w-25 mx-auto my-3 main__border" />
        <h1 className="main__heading">
          CHODŹ NA CIACHO – ZACHWYCAJĄCE WYPIEKI NA KAŻDĄ OKAZJĘ
        </h1>
        <div className="w-25 mx-auto my-3 main__border" />
        <p className="main__description p-1 pt-5 pb-2 m-3 mt-0">
          U nas powstają wyjątkowe artystyczne torty, ciasta i ciasteczka
          tworzone z ogromną pasją i zaangażowaniem w każdy szczegół. Magia
          naszych wypieków przejawia się w niebanalnym wyglądzie i wyjątkowym
          smaku. Są to słodkości przygotowywane na indywidualne zamówienia a
          przy ich tworzeniu bazujemy wyłącznie na najlepszej jakości
          składnikach i autorskich przepisach. Smak, jakość i wygląd idą u nas w
          parze!
        </p>
        </article>

        <article className="main__opinion">
          <h2>Opinie naszych Klientów</h2>
          <div className="main__section">
          <Carousel>
          {opinions.map((opinion) => {
            return (
              <Carousel.Item>
                <Feedback
                  authorName={opinion.authorName}
                  text={opinion.text}
                  data={opinion.data}
                  key={Math.random()}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
          </div>

        </article>
        <article className="main__section">
        <p className="main__description p-1 pb-5 m-3 mt-0">
          Miłość do słodkości, rękodzieła i wszystkiego co piękne w naturze
          przejawia się w tym, co tworzymy. Smak, jakość i wygląd to podstawowe
          kryteria, którymi kierujemy się przy tworzeniu naszych słodkości.
          Uwielbiamy bawić się smakiem i tworzyć nowe połączenia smakowe. Na
          bieżąco śledzimy trendy smakowe i wizualne w nowoczesnym
          cukiernictwie, bierzemy udział w szkoleniach i ciągle się rozwijamy.
          Wszystko co dla Was przygotowujemy jest tworzone z sercem i pasją!
        </p>

        <Offer />
      </article>
    </main>
  );
};

export default Main;
