import './AboutMe.css'
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Hiking, MusicNote, Restaurant, Movie } from '@mui/icons-material';

const AboutMe = () => {
    return (
        <div id='about' className='about-container background'>
            <Typography variant='h3' className='section-title'>
                About Marina
            </Typography>
            <div className='content-container'>
                <div className='content-paragraphs'>
                    <Typography className='about-text hook' >
                        Hello there! My name is Marina Quiñones, and I’m a professional makeup artist and licensed esthetician based in Orlando, Florida.
                    </Typography>
                    <Typography className='about-text'>
                        I absolutely love making my clients feel their very best and most beautiful. I have been in the beauty industry for six years, and I've really come to find my passion in bridal work. I love stories, and being a part of someone's special day is such an honor and brings me so much joy.
                        My priority is you, and to make you feel like I'm your friend and confidante on your special day, like an extra bridesmaid or sister.
                    </Typography>
                    <Typography className='about-text'>
                        My goal is to give you a makeup look that is perfectly customized to your unique features, a look that is customized and uniquely you. On your wedding day, I want to make you feel calm and confident.
                        I will be there for you not only to provide makeup, but also to support you and be your hype woman!
                    </Typography>
                </div>
                <div className='content-list'>
                    <Typography className='about-text'>
                        When I’m not working, you can find me:
                    </Typography>
                    <List className='hobby-list'>
                        <ListItem>
                            <ListItemIcon><Hiking /></ListItemIcon>
                            <ListItemText primary="Hiking in the forest" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><MusicNote /></ListItemIcon>
                            <ListItemText primary="Singing karaoke with my friends" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Restaurant /></ListItemIcon>
                            <ListItemText primary="Eating delicious food" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Movie /></ListItemIcon>
                            <ListItemText primary="Watching movies with friends & family" />
                        </ListItem>
                    </List>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
