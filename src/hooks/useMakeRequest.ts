import { useState } from "react";

const useMakeRequest = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const url = "https://assignment-api-spxd.onrender.com/api/";

  const sendRequest = (data: any, path: string, type: "GET" | "POST"): any => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      let formData = JSON.stringify(data);
      let requestOptions = {
        method: type,
        headers: myHeaders,
        body: type === "POST" ? formData : undefined,
        redirect: "follow" as RequestRedirect,
        mode: "no-cors" as RequestMode,
      };
      fetch(url + "" + path, requestOptions)
        .then((response) => {
          let res = response.json();
          setResponse(res);
          setLoading(false);
          resolve(res);
        })
        .catch((error) => {
          console.log("error", error);
          setLoading(false);
          reject(error);
        });
    });
  };

  return { sendRequest, loading, error, response };
};

export default useMakeRequest;
