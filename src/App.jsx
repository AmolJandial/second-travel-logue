import MyHeader from "./components/header";
import TravelCard from "./components/travelCard";
import data from "./data";

export default function App() {
  const travelCards = data.map((el) => {
    return (
      <TravelCard
        key={el.id}
        locationUrl={el.img.src}
        locationCountry={el.country}
        locationLink={el.googleMapsLink}
        locationName={el.title}
        locationDate={el.dates}
        locationDesc={el.text}
      />
    );
  });

  return (
    <>
      <MyHeader />
      {travelCards}
    </>
  );
}
