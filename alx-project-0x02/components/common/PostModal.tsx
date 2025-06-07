import { useState, FormEvent } from 'react';

interface PostModalProps {
  onSubmit: (post: { title: string; content: string }) => void;
  onClose: () => void;
}

export default function PostModal({ onSubmit, onClose }: PostModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();  // Prevent page reload on submit
    if (title.trim() && content.trim()) {
      onSubmit({ title, content });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </label>

          <label className="block mb-4">
            Content:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border p-2 w-full rounded"
              required
              rows={4}
            />
          </label>

          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
