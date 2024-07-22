import React from "react"

const Listitem = ({ items, removeItem, editItem }) => {
  return (
    <div className='list'>
      {items.map((item) => {
        const { id, title } = item
        return (
          <div className='box' key={id}>
            <p>{title}</p>
            <div className='btn'>
              <button type='button' className='edit' onClick={() => editItem(id)}>
                <i className='fa fa-edit'></i>
              </button>
              <button type='button' className='delete' onClick={() => removeItem(id)}>
                <i className='fa fa-trash'></i>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Listitem
