//is only trigged if there are multiple paths so it doesn't match the [eventId] path.
import { useRouter } from "next/router";

import { getFilteredEvents, getAllEvents } from "@root/helpers/api-util";
import EventList from "@root/components/events/event-list";
import ResultsTitle from "@root/components/events/results-title";
import Button from "@root/components/ui/button";
import ErrorAlert from "@root/components/ui/error-alert";

const FilteredEventsPage = (props) => {
  //const router = useRouter();

  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (props.hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <Button link="/events">Show all events</Button>
      </>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);

  return (
    <div>
      <ResultsTitle date={date}></ResultsTitle>
      <EventList items={filteredEvents}></EventList>
    </div>
  );
};

export default FilteredEventsPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
      //notFound: true,
      // redirect: {   // Redirects to the error page
      //   destination: "/error",
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  debugger;
  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
