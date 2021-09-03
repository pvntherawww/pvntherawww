import React, {useContext, useEffect, useState} from "react";
import './css/Home.scss';
import Navigation from "./Navigation";
import MobileTopNavigation from "./MobileTopNavigation";
import SideBar from "./SideBar";
import FooterMusicPlayer from "./FooterMusicPlayer";
import BottomNavigationMobile from "./BottomNavigationMobile";
import MusicCardContainer from "./MusicCardContainer";
import {useSelector} from "react-redux";
import {ThemeContext} from "./Theme";
import AddMusic from "./AddMusic";
import FooterSelectMusic from "./FooterSelectMusic";
import CurrentPlayingLarge from "./CurrentPlayingLarge";
import Search from "./Search";
import About from "./About";
import Playlist from "./Playlist";
import {Skeleton} from "@material-ui/lab";

function getCurrPage(pathName) {
    switch (pathName) {
        case "/music":
            return <MusicCardContainer/>
        case "/music/search":
            return <Search/>
        // case "/music/search":
        //     return <AddMusic/>
        case "/music/about":
            return <About/>
        default:
            if (pathName.startsWith("/music/playlist/")) {
                return <Playlist/>
            }
            return null
    }
}


function Home() {


    const [screenSize, setScreenSize] = useState(undefined);
    const [currMusic, setCurrMusic] = useState(null);
    const [Page, setCurrPage] = useState(<MusicCardContainer/>);

    let pathname = window.location.pathname;
    useEffect(() => {
        setCurrPage(getCurrPage(pathname))
    }, [pathname]);

    window.addEventListener("resize", handleResize);

    function handleResize() {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    });

    const useStyle = useContext(ThemeContext);
    const {playing, bannerOpen} = useSelector(state => state.musicReducer);


    useEffect(() => {
        setCurrMusic(playing)
    }, [playing])

    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true)
    }, []);


    return (
        <div style={useStyle.component} className={"home-container"}>
            {
                !loaded ?
                    <div className="Home-skeleton">
                        <Skeleton animation={"wave"} variant={"rect"} height={"100vh"}/>
                    </div>
                    :
                    <>
                        {
                            screenSize <= 970 ?
                                <MobileTopNavigation/> :
                                <Navigation/>
                        }
                        <section className={"home-music-container"}>
                            <div className="sidebar-home">
                                <SideBar/>
                            </div>
                            <div className="main-home">
                                {
                                    Page
                                }
                            </div>
                        </section>
                        {
                            bannerOpen
                            &&
                            <section className="current-large-banner">
                                <CurrentPlayingLarge/>
                            </section>
                        }
                        <React.Fragment>
                            {
                                currMusic
                                    ?
                                    <FooterMusicPlayer music={currMusic}/>
                                    :
                                    <FooterSelectMusic/>
                            }
                            {
                                screenSize <= 970 && <BottomNavigationMobile/>
                            }
                        </React.Fragment>
                    </>
            }
        </div>
    );
}

export default Home;