import 'materialize-css/dist/css/materialize.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts';

const App = () => {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
      setPosts(result.data);
    }).catch(error => {
      console.error(error);
    })   
  }, [])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then(result => {
      setComments(result.data);
    }).catch(error => {
      console.error(error);
    })   
  }, [])

  const renderPosts = () => posts && posts.map(post => <Posts key={post.id} post={post} comments={comments} />)

  return (
    <div className="posts">
      {renderPosts()}
    </div>
  );
}

export default App;
