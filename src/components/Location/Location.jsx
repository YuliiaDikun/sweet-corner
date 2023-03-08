import React from "react";
import { locationData } from "./location-data";
import { SocialLinks } from "../";
import {
  LocationList,
  LocationItem,
  Type,
  City,
  Address,
  TimeWrapper,
  Days,
  Hours,
  LocationContactLink,
} from "./Location.styled";
const Location = () => {
  return (
    <section>
      <h2 className="visually-hidden ">Location</h2>
      <LocationList>
        {locationData.map((location) => {
          return (
            <LocationItem key={location.id}>
              <Type>{location.type}</Type>
              <City>{location.city}</City>
              <Address>{location.address}</Address>
              <TimeWrapper>
                {location.open.map((time, i) => {
                  return (
                    <li key={ i}>
                      <Days>{time.openDays}</Days>
                      <Hours>{time.openHours}</Hours>
                    </li>
                  );
                })}
              </TimeWrapper>
              <ul>
                <li>
                  <LocationContactLink
                    href={`tel:${location.phone.replace("-", "")}`}
                  >
                    {location.phone}
                  </LocationContactLink>
                </li>
                <li>
                  <LocationContactLink href={`mailto:${location.email}`}>
                    {location.email}
                  </LocationContactLink>
                </li>
              </ul>
            </LocationItem>
          );
        })}
      </LocationList>
      <SocialLinks />
    </section>
  );
};

export default Location;
