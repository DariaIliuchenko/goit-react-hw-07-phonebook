import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function ContactListItem({ name, phone, id }) {
  const dispatch = useDispatch();
        return (
            <>
            <p className={s.contact}>{name}: {phone} </p>
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
  phone: PropTypes.string.isRequired,
   
};