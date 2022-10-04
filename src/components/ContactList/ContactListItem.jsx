import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
        return (
            <>
            <p className={s.contact}>{name}: {number}</p>
            <button 
            id={id}
            className={s.deleteBtn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </>
        );
      
}

ContactListItem.propTypes = { 
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
   
};