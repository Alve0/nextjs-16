import React from "react";
import Btn from "./Components/Btn";
import EventCard from "./Components/EventCard";
import { Events } from "@/lib/Events";

function Home() {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups and Conferences, All in one Place
      </p>
      <Btn />

      <div className="mt-20 space-y-7">
        <h3>Featured Eventes</h3>

        <ul className="events list-none">
          {Events.map((event) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;
