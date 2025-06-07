import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const addPost = (post) => setPosts([...posts, post]);

  {posts.map((p, i) => (
    <Card key={i} title={p.title} content={p.content} />
  ))}

  {showModal && <PostModal onSubmit={addPost} onClose={() => setShowModal(false)} />}
  <button onClick={() => setShowModal(true)}>Add Post</button>
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <Card title="Card One" content="This is card one." />
      <Card title="Card Two" content="This is card two." />
    </>
  );
}


