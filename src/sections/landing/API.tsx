// sections/landing/ApiData.tsx

import React, { useState, useEffect } from 'react';
import styles from './ApiData.module.css'; // Import the CSS module

const ApiData: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://lawonearth.co.uk/api/auth/core/login';

      // Define the headers
      const myHeaders = new Headers();
      myHeaders.append("COMPANY-CODE", "def-mc-admin");
      myHeaders.append("Authorization", "MC-H3HBRZU6ZK5744S");
      myHeaders.append("User-Agent", "Apidog/1.0.0 (https://apidog.com)");
      myHeaders.append("es_code", "es-9cc51159-c706-414e-b4d2-db8f649772f6");
      myHeaders.append("FRONTEND-KEY", "XXX");
      myHeaders.append("es_username", "7a64b5001@smtp-brevo.com");

      // Create the form data
      const formData = new FormData();
      formData.append("email", "minmattral@gmail.com");
      formData.append("password", "aAertyuiop@1");
      formData.append('pers_fName', "Min");
      formData.append('pers_mName', "Htet");
      formData.append('pers_lName', "Myet");
      formData.append('email', "minmattral@gmail.com");
      formData.append('password', "aAertyuiop@1");
      formData.append('password_confirmation', "aAertyuiop@1");
      formData.append('pers_preferredTimezone', "UTC");
      formData.append('redirectUrl', "http://lawonearth.org/");

      // Define the request options
      const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
      };

      try {
        // Perform the fetch request
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Get the response text
        const result = await response.text();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No data available</p>;

  return (
    <div className={styles.container}>
      <h2>API Response</h2>
      <div className={styles.response}>
        {data}
      </div>
    </div>
  );
};

export default ApiData;
