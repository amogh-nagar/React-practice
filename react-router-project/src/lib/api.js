const FIREBASE_URL = "https://react-redux-1a070-default-rtdb.firebaseio.com";

export const getallquotes = async () => {
  const res = await fetch(`${FIREBASE_URL}/quotes.json`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not fetch quotes");
  }

  const transformeddata = [];

  for (let key in data) {
    const quoteobj = {
      id: key,
      ...data[key],
    };
    transformeddata.push(quoteobj);
  }

  return transformeddata;
};

export const getsinglequote = async (quoteId) => {
  const res = await fetch(`${FIREBASE_URL}/quotes/${quoteId}.json`);
  // console.log(res)
  const data = await res.json();
  // console.log("data:",data)
  if (!res.ok) {
    throw new Error(data.message || "Could not fetch quotes");
  }

  const loadedquote = {
    id: quoteId,
    ...data,
  };

  return loadedquote;
};

export const addQuote = async (quotedata) => {
  const res = await fetch(`${FIREBASE_URL}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quotedata),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Could not create quote");
  }

  return null;
};
