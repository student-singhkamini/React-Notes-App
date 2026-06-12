import React, { useState } from "react";

const Form = () => {
const [title, setTitle] = useState('');
const [detail,setDetail] = useState('');

const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({title,detail});
    setTask(copyTask);
   
    
    
    
    
    setTitle('');
    setDetail('');
  };

  const deleteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1);

    setTask(copyTask);
   
    
    
  }


  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col lg:w-1/2 gap-4 items-start p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* PEHLA INPUT FOR HEADING */}

        <input
          className="px-5 py-2  border-2 rounded w-full outline-none font-medium"
          type="text"
          placeholder="Heading"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
            
            

          }}
        />
        {/* DETAILS OF NOTES */}
        <textarea
          className="px-5 py-2 flex h-32 border-2 rounded w-full outline-none font-medium"
          type="text"
          placeholder="Enter Details"
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value)
          }}
        />
        <button className="bg-white text-black px-5 py-2 rounded w-full outline-none font-medium active:scale-95">
          Add Note
        </button>
      </form>

      <div className="p-10 lg:w-1/2 lg:border-l-2">
        <h1 className="text-4xl font-bold underline decoration-dotted">Your Notes</h1>
        <div className="flex flex-wrap items-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function(elem,idx){
            return <div  key ={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-2xl text-black pt-5 px-4 pb-4 bg-amber-300">
                <div>
                  <h3 className='font-bold leading-tight font-serif text-center'>{elem.title}</h3>
                <p className="mt-2  leading-tight text-amber-950 font-serif text-xs">{elem.detail}</p>

                </div>
                <button onClick={()=>{
                  deleteNote(idx);
                }}
                className="w-full cursor-pointer active:scale-95 bg-red-600 text-white border-none rounded py-1 text-xs px-2 font-bold hover:bg-red-700">Delete </button>
                
            </div>
            
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
