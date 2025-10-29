import { EventsPromps } from "@/lib/Events";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import pin from "@/public/assets/icons/pin.svg";
import calender from "@/public/assets/icons/calendar.svg";
import clock from "@/public/assets/icons/clock.svg";

export default function EventCard({
  title,
  image,
  slug,
  location,
  date,
  time,
}: EventsPromps) {
  return (
    <div>
      <Link href={`/events/${slug}`} id="event-card">
        <Image
          src={image}
          alt="image"
          width={410}
          height={300}
          className="poster"
        />
        <div className="flex flex-row gap-2">
          <Image src={pin} alt="image" width={14} height={14} />
          <p>{location}</p>
        </div>

        <p className="title">{title}</p>

        <div className="datetime">
          <div>
            <Image src={calender} alt="date" width={14} height={14} />
            <p>{date}</p>
          </div>
          <div>
            <Image src={clock} alt="time" width={14} height={14} />
            <p>{time}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
