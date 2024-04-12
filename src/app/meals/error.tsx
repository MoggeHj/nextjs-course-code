"use client";
//file nam error.tsx is a reserved name in next.js and will be automatically trigged when an error occures
//this is valid for all nested files as well
const Error = ({ error }) => {
  return (
    <main className="error">
      Failed to load meals
      <h1>An error occurred!</h1>
      <p>Failed to fetch meal data. Please try again later</p>
    </main>
  );
};

export default Error;
