import React from 'react'

function AddList({addlist,hdlDel}) {
    console.log(addlist.id);
  return (
    <div key={addlist.id}>
        <button onClick={(e)=>hdlDel (e,addlist.id)}>delete</button>
        <div className="flex gap-5 py-1">
            <input type="checkbox" name="content" id="" />
            <label htmlFor="content">{addlist.content}</label>
        </div>
    </div>
  )
}

export default AddList