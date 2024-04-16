const getAllEvents = async () => {
  const response = await fetch(
    "https://nextjs-course-ba8a1-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
};

const getEventById = async (id) => {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
};

const getFilteredEvents = async (dateFilter) => {
  const allEvents = await getAllEvents();

  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export { getAllEvents, getFeaturedEvents, getEventById, getFilteredEvents };
