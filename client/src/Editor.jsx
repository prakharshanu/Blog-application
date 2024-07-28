import { useEffect, useState } from "react";
import ReactQuill from "react-quill";

export default function Editor({value,onChange}) {
  const [modules,setModules]=useState({});
  useEffect(()=>{
    const mod={
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image'],
        ['clean'],
      ],
    }
    setModules(mod);
  },[])
  return (
    <div className="content">
    <ReactQuill
      value={value}
      theme={'snow'}
      onChange={onChange}
      modules={modules} />
    </div>
  );
}