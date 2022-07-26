import React from 'react';
import s from './Search.module.scss';

const Search = () => {
  return (
    <>
      <form className={s.header_search}>
        <input className={s.input} type={'text'} placeholder={'Search'}></input>
        <span className={s.header_search_icon}>
          <svg
            className="svgIcon-use"
            width="28"
            height="28"
            viewBox="0 0 25 25"
          >
            <path d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
          </svg>
        </span>
      </form>
    </>
  );
};

export { Search };
