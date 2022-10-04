import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { fetchContacts } from '../redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <img
        src={'https://smmis.ru/wp-content/uploads/2015/02/telefonnayakniga.jpg'}
        alt="phoneBook"
        width="398px"
        height="327px"
      ></img>
      {error && <h2>Error...</h2>}
      {isLoading && <Loader />}
      {contacts.length > 0 ? (
        <>
          <Filter name="filter" />
          <ContactList />
        </>
      ) : (
        <h2>You have not added contacts yet</h2>
      )}
    </div>
  );
};
export default App;
