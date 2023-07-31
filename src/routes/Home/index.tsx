import {
    Typography,
    Button,
} from '@material-tailwind/react';
import './styles.css'; 

const Home = () => {
    return(
        <article className="hero-text-container">
            <Typography className="hero-header">
                Cool text!
            </Typography>

            <Typography className="hero-text">
                Content!
            </Typography>
            
            <Typography className="hero-text">
                More content!
            </Typography>
            <a href="#quick-links">
                <Button variant="gradient" size="lg" className="read-more-button">
                    <span>Read More →</span>
                </Button>
            </a>
        </article>
    );
};

export default Home;
