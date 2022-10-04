import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { filterContact } from 'redux/filterSlice';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const eventFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
    return (
      <div className={s.filter}>
        Find contacts by name
        <label className={s.filterLabel}>
          <input 
          type='text'
          name={filter}
            className={s.filterInput}
            value={filter}
          onChange={eventFilter} />
        </label>
      </div>
    );
  
}

