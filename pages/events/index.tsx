import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents, getFeaturedEvents } from "@root/helpers/api-util";
import EventList from "@root/components/events/event-list";
import EventsSearch from "@root/components/events/events-search";

const AllEventsPage = (props) => {
  const events = props.events;
  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler}></EventsSearch>
      <EventList items={events}></EventList>
    </>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
