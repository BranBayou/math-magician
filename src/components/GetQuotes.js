import { useState, useEffect } from 'react';

function GetQuotes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=knowledge', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'nXJn87kLhgCGxAj8hDZPYw==e2qMnfkkPacAT9an',
          'Content-Type': 'application/json',
        },
      });
      setLoading(false);
      setError(false);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div className="quote-con">
      <h3>knowledge</h3>
      {error && <span className="error">Error fetching quotes...</span>}
      {data.map(({ author, quote }) => (
        <li key={author}><em>{quote}</em></li>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default GetQuotes;
