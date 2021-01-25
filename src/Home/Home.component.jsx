import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Masonry from 'react-masonry-css';
import './Home.css';
import backgroundChar from '../assets/background/page_bg-chara.png';
import backgroundBg from '../assets/background/page_bg.jpg';
import backgroundOverlay from '../assets/background/page_bg-overlay.png';
import logo from '../assets/logo.png';
import showcase from '../assets/showcase.jpg';
import anniversary from '../assets/anniversary.jpg';
// import trailer1 from '../assets/trailer_thmub03.jpg';
// import trailer2 from '../assets/maxresdefault.jpg';
// import trailer3 from '../assets/maxresdefault (1).jpg';
import about from '../assets/about_img01.png';
import ethan from '../assets/character_img01.jpg';
import chris from '../assets/character_img02.jpg';
import gallery1 from '../assets/image gallery/images_img04.jpg';
import gallery2 from '../assets/image gallery/images_img07.jpg';
import gallery3 from '../assets/image gallery/images_img11.jpg';
import gallery4 from '../assets/image gallery/images_img12.jpg';
import gallery5 from '../assets/image gallery/images_img13.jpg';
import gallery6 from '../assets/image gallery/images_img14.jpg';
import gallery7 from '../assets/image gallery/images_img15.jpg';
import gallery8 from '../assets/image gallery/images_img16.jpg';
import gallery9 from '../assets/image gallery/images_img17.jpg';
import gallery10 from '../assets/image gallery/images_img18.jpg';
import playstation from '../assets/footer content/ps5_logo.png';
import xbox from '../assets/footer content/xbox_logo.png';
import steam from '../assets/footer content/steam_logo.png';
import esrb from '../assets/footer content/esrb_icon.jpg';
import youtube from '../assets/social media icons/yt_icon-shadow.svg';
import twitter from '../assets/social media icons/tw_icon-shadow.svg';
import instagram from '../assets/social media icons/insta_icon-shadow.svg';
import banner1 from '../assets/footer content/25th_bnr.jpg';
import banner2 from '../assets/footer content/re7_bnr.jpg';
import capcom from '../assets/footer content/capcom_b.png';
import { backgroundStyle } from '../utils/misc';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
          });
        AOS.refresh();
      }, []);

    return (
        <div className={'parentContainer'}>

            {/* BACKGROUNDS */}
            <div
                className={'bgMountains'}
                style={backgroundStyle(backgroundBg, 'center bottom no-repeat')}
            />
            <div
                className={'bgCharacter'}
                style={backgroundStyle(backgroundChar, 'center')}
            />
            <div
                className={'bgOverlay'}
                style={backgroundStyle(backgroundOverlay, 'center')}
                data-aos={'fade-in'}
                data-aos-anchor={'#bgTrigger'}
                data-aos-anchor-placement={'top'}
            />

            {/* VIEW ONE CONTAINER */}
            <div className={'viewOne'} data-aos={'fade-down'}>
                {/* LOGO */}
                <h1>
                    <img src={logo} alt={'logo'} className={'logo'} data-aos="zoom-in"/>
                </h1>

                {/* RELEASE DATE */}
                <p>COMING 2021</p>

                {/* SCROLLER */}
                <div className={'scrollContainer'}>
                    <a className={'scrollDown'} href={'#topics'}>
                    </a>
                    {/* <a className={'scrollDownAnimation'} href={'#topics'}>
                    </a> */}
                </div>

            </div>


            {/* TOPICS */}
            <div id={'bgTrigger'} className={'topicContainer'}>
                <p id={'topics'} data-aos={'fade-up'}>TOPICS</p>
                <div className={'imgContainer'}>

                    {/* SHOWCASE */}
                    <div
                        data-aos={'fade-up'}
                        className={'topic'}
                        onClick={() => {
                            window.open('https://www.residentevil.com/village/us/topics/showcase/',
                        )}}
                    >
                        <div>
                            <img src={showcase} alt={'topic1'} />
                            <div className={'topicText'}>
                                Watch the recording of the Resident Evil Showcase |
                                January 2021 to find out the latest information on Resident Evil Village!
                            </div>
                        </div>
                        <div className={'dateContainer'}>
                            <div className={'flashingDotAnimation'} />
                            <div className={'flashingDot'} />
                            1/22/2021
                        </div>
                    </div>

                    {/* ANNIVERSARY */}
                    <div
                        data-aos={'fade-up'}
                        className={'topic'}
                        onClick={() => {
                            window.open('https://www.residentevil.com/village/us/topics/',
                        )}}>
                        <div>
                            <img src={anniversary} alt={'topic2'} data-aos="zoom-in"/>
                            <div className={'topicText'}>
                                Join us for the anniversary!
                            </div>
                        </div>
                        <div className={'dateContainer'}>
                            <div className={'flashingDotAnimation'} />
                            <div className={'flashingDot'} />
                            1/22/2021
                        </div>
                    </div>

                </div>
            </div>


            {/* TRAILERS (SCRAPPING FOR NOW) */}
            {/* <div className={'trailerContainer'}>
                <p>TRAILERS</p>
                <div className={'imgContainer'}>
                    <img src={trailer1} alt={'trailer1'} />
                    <img src={trailer2} alt={'trailer2'} />
                    <img src={trailer3} alt={'trailer3'} />
                </div>
            </div> */}


            {/* ABOUT */}
            <div className={'aboutContainer'} data-aos={'fade-up'}>

                {/* ABOUT IMAGE */}
                <img src={about} alt={'about'} className={'aboutImage'} />

                {/* ABOUT DESCRIPTION */}
                <div className={'about'}>
                    <p className={'aboutLabel'}>ABOUT</p>
                    The next generation of survival horror rises in the form of Resident Evil Village, the eighth major entry in the Resident Evil series.
                    With ultra-realistic graphics powered by the RE Engine, fight for survival as danger lurks around every corner.

                    Years after the tragic events of Resident Evil 7 biohazard, Ethan Winters has started over with his wife Mia,
                    finally living in peace and putting the past behind them. However, Chris Redfield, the legendary hero from previous Resident Evil games,
                    suddenly disrupts their life, throwing a devastated Ethan into a new and twisted nightmare in search of answers.
                </div>
                
            </div>


            {/* CHARACTERS */}
            <p data-aos={'fade-up'}>CHARACTERS</p>
            <div className={'characters'}>

                {/* ETHAN WINTERS BIO */}
                <div className={'bioContainer'} data-aos={'fade-up'}>
                    <h3>
                        Ethan Winters
                    </h3>
                    <img src={ethan} alt={'ethan'} className={'charImage'}/>
                    <div>
                        The protagonist of Resident Evil 7 biohazard, Ethan's story continues in Resident Evil Village. After being swept up into the events of
                        the Baker estate incident, this regular nobody somehow managed to escape that nightmare alive. Ever since, he has lived a quiet existence
                        with his wife Mia under the protection of the BSAA.
                    </div>
                </div>

                {/* CHRIS REDFIELD BIO */}
                <div className={'bioContainer'} data-aos={'fade-up'}>
                    <h3>
                        Chris Redfield
                    </h3>
                    <img src={chris} alt={'chris'} className={'charImage'}/>
                    <div>
                        A mainstay of the series since the first Resident Evil, this former S.T.A.R.S. member has fought his way through numerous bioterror incidents.
                        He currently works as a specialist for the BSAA, a counter-bioterror NGO.
                    </div>
                </div>
            
            </div>


            {/* IMAGES */}
            <div className={'imageGallery'} data-aos={'fade-up'}>
                <p>IMAGES</p>
                <Masonry className={'imageGrid'} columnClassName={'galleryColumn'}>
                    <img src={gallery1} alt={'gallery1'} />
                    <img src={gallery2} alt={'gallery2'} />
                    <img src={gallery3} alt={'gallery3'} />
                    <img src={gallery4} alt={'gallery4'} />
                    <img src={gallery5} alt={'gallery5'} />
                    <img src={gallery6} alt={'gallery6'} />
                    <img src={gallery7} alt={'gallery7'} />
                    <img src={gallery8} alt={'gallery8'} />
                    <img src={gallery9} alt={'gallery9'} />
                    <img src={gallery10} alt={'gallery10'} />
                </Masonry>

            </div>


            {/* FOOTER */}
            <div id={'bgFinalTrigger'} className={'footerContainer'}>

                {/* FOOTER LABEL */}
                <div className={'footerHeader'}>Resident Evil Village</div>

                {/* PLATFORMS */}
                <div className={'gamePlatform'}>

                    {/* PLAYSTATION LOGO */}
                    <img src={playstation} alt={'playstation'} className={'playstationLogo'} />

                    {/* XBOX LOGO */}
                    <img src={xbox} alt={'xbox'} className={'xboxLogo'} />

                    {/* STEAM LOGO */}
                    <img src={steam} alt={'steam'} className={'steamLogo'} />
                </div>

                {/* GAME LABELS */}
                <div className={'labelContainer'}>
                    <div className={'footerLabel'}>
                        Genre: Survival Horror
                    </div>
                    <div className={'footerLabel'}>
                        Release Date: 2021 (Tentative)
                    </div>
                    <div className={'footerLabel'}>
                        MSRP: Pending
                    </div>
                </div>
                <div className={'labelContainer'}>
                    <div className={'footerLabel'}>
                        Players: 1
                    </div>
                    <div className={'labelContainer'}>
                        Rating:
                        <img src={esrb} alt={'esrb'} className={'esrbLogo'}/>
                    </div>
                </div>


                {/* SOCIAL MEDIA */}
                <div className={'socialMediaContainer'}>
                    <p className={'socialMediaLabel'}>OFFICIAL ACCOUNTS</p>

                    {/* YOUTUBE */}
                    <img
                        src={youtube}
                        alt={'youtube'}
                        className={'socialMediaIcon'}
                        onClick={() => {
                            window.open('https://www.youtube.com/user/ResidentEvil')
                        }}
                    />

                    {/* TWITTER */}
                    <img
                        src={twitter}
                        alt={'twitter'}
                        className={'socialMediaIcon'}
                        onClick={() => {
                            window.open('https://twitter.com/RE_games')
                        }}
                    />

                    {/* INSTAGRAM */}
                    <img
                        src={instagram}
                        alt={'instagram'}
                        className={'socialMediaIcon'}
                        onClick={() => {
                            window.open('https://www.instagram.com/re_games/')
                        }}
                    />
                </div>

                {/* FOOTER BANNERS */}
                <div>
                    {/* ANNIVERSARY BANNER */}
                    <img
                        src={banner1}
                        alt={'banner1'}
                        className={'banner'}
                        onClick={() => {
                            window.open('https://www.residentevil.com/25th/en/')
                        }}
                    />

                    {/* RE7 GOLD BANNER */}
                    <img
                        src={banner2}
                        alt={'banner2'}
                        className={'banner'}
                        onClick={() => {
                            window.open('http://residentevil7.com/us/')
                        }}
                    />
                </div>

            </div>

            {/* CAPCOM LOGO */}
            <div className={'capcomLogo'}>
                    <img src={capcom} alt={'capcom'} className={'capcom'}/>
            </div>
            

        </div>
    );
};

export default Home;