import { useState, useEffect, useRef } from "react";
const LINK =
  "http://api.aladhan.com/v1/timingsByAddress/17-05-2023?address=Brussels";

function CallToPrayerService() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      return;
    }
    setLoading(true);

    fetch(LINK)
      .then((reponse) => {
        return reponse.json();
      })
      .then((reponse) => setData(reponse))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    isMounted.current = true;
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return { data, loading, error };
}

export default CallToPrayerService;
