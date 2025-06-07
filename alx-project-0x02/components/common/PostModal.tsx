import { useState } from 'react';

export default function PostModal({ onSubmit, onClose }: any) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmit({ title, content });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Content" onChange={(e) => setContent(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
