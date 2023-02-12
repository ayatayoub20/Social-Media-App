import './home.css';
import Stories from '../../components/stories/stories';
import Posts from '../../components/posts/posts';
import { useContext } from 'react';
import { DarkModeContext } from '../../Context/darkmodeContex';


const Home= ()=> {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={`home ${darkMode ? "dark" : "light"}`}>
            <Stories />
            <Posts />
        </div>
    );
}

export default Home;