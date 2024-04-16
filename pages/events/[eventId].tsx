"use client";
import EventContent from "@root/components/event-detail/event-content";
import EventLogistics from "@root/components/event-detail/event-logistics";
import EventSummary from "@root/components/event-detail/event-summary";
import ErrorAlert from "@root/components/ui/error-alert";
import { getEventById } from "@root/dummy-data";
import { useRouter } from "next/router";
import { Fragment, use } from "react";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
