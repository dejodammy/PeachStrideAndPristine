import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebase_config/index';
import ContactForm from '../Contact/ContactForm';

const JobVacancy = () => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const vacanciesCollection = collection(FIRESTORE_DB, 'vacancies'); // Use the correct collection name.
        const snapshot = await getDocs(vacanciesCollection);

        const vacanciesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVacancies(vacanciesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job vacancies: ', error);
        setLoading(false);
      }
    };

    fetchVacancies();
  }, []);

  return (
    <><div className="section-title pt-50">
      <h1>Job Vacancies</h1>
      {loading ? (
        <p>Loading job vacancies...</p>
      ) : vacancies.length === 0 ? (
        <p>We have no vacancies for now. Please check back later.</p>
      ) : (
        <ul>
          {vacancies.map((vacancy) => (
            <li key={vacancy.id}>
              <h2>{vacancy.title}</h2>
              <p>Experience Required: {vacancy.experience}</p>
            </li>
          ))}
        </ul>
      )}
    </div><ContactForm /></>
  );
};

export default JobVacancy;
