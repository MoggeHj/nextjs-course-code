//file nam not-found.tsx is a reserved name in next.js and will be automatically trigged when a page is not found
//this is valid for all nested files as well
const NotFound = () => {
  return (
    //"not-found" is in global.css and can therefore be used here without importing it
    <main className="not-found">
      <h1>Meal not found</h1>
      <p>Unfortunately, we could not find the requested page or meal data.</p>
    </main>
  );
};

export default NotFound;
