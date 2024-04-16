import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents, getFeaturedEvents } from "@root/dummy-data";
import EventList from "@root/components/events/event-list";
import EventsSearch from "@root/components/events/events-search";

const AllEventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler}></EventsSearch>
      <EventList items={events}></EventList>
    </Fragment>
  );
};

export default AllEventsPage;
