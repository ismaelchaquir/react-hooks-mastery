import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((Response) => {
        return Response.json();
      })
      .then((user) => {
        const { login } = user;
        setUser(() => {
          return login;
        });
        setIsLoading(false);
      })
      .catch((error) => {
        return console.log(error);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1 style={{ backgroundColor: "red" }}>Error</h1>
      </div>
    );
  }

  return <h1>{user}</h1>;
};

export default MultipleReturns;
