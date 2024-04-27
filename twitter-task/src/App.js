import logo from './logo192.png';
import './App.css';
import NavigationBar from './component/NavigationBar'
import ProfileHeader from './component/ProfileHeader';
import Post from './component/Post';

function App() {
  return (
    <>
      <NavigationBar />
      <ProfileHeader logo={logo} name="React" handle="reactjs"  />
      <section className="posts">
        <Post author="React" content="Happy 10th birthday to ReactJS! 🎉" />
        <Post author="React" content="Happy 10th birthday to ReactJS! 🎉" />
        <Post author="React" content="Happy 10th birthday to ReactJS! 🎉" />
        {/* Add more posts */}
      </section>

    </>
  );
}

export default App;

