import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [buckets, setBuckets] = useState([]);

  useEffect(() => {
    const fetchBuckets = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/scan');
        setBuckets(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBuckets();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">AWS Buckets</h1>
      <ul className="mt-4">
        {buckets.map((bucket) => (
          <li key={bucket.Name} className="p-2 border-b">{bucket.Name}</li>
        ))}
      </ul>
    </div>
  );
}
