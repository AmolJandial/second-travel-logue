import { Fragment } from "react";
import { LocateIcon } from "lucide-react";

export default function TravelCard(props) {
  return (
    <>
      <div className="card-container">
        <div className="card-left">
          <img className="card-image" src={props.locationUrl} />
        </div>

        <div className="card-right">
          <div className="card-top-row">
            <LocateIcon size={16} color="red" />
            <p>{props.locationCountry}</p>
            <a href={props.locationLink}>View on google map</a>
          </div>
          <h1>{props.locationName}</h1>
          <h3>{props.locationDate}</h3>
          <p>{props.locationDesc}</p>
        </div>
      </div>
    </>
  );
}
