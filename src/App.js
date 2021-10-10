import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts';
import Pagination from './components/Pagination';

const App = () => {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(result.data);
    }

    fetchPosts();
  }, [])

  const getComments = (id) => {
    const fetchComments = async () => {
      const result = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
      setComments(result.data);
    }

    fetchComments();
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  const changePage = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  }

  const renderPosts = () => currentPosts.map(post => <Posts key={post.id} post={post} comments={comments} getComments={getComments} />)

  return (
    <div className="posts container">
      {currentPosts && renderPosts()}
      <Pagination postsPerPage={postsPerPage} totalPosts={posts?.length} changePage={changePage} pageNumber={currentPage} />
    </div>
  );
}

export default App;
