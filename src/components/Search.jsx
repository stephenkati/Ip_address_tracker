import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
const Search = () => {
  return (
    <form className='search'>
      <input type="text" placeholder="Search for any ip address or domain" />
      <button
        className='search-icon'
      >
        <MdKeyboardArrowRight />
      </button>
    </form>
  )
}

export default Search;
