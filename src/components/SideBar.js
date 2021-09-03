import React, {useContext} from "react";
import "./assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import {ThemeContext} from "./Theme";
import {ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined} from "@material-ui/icons";


function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>LIBRARY</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/music"} title={"Home"} />
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/music/about"}  title={"About"}/>
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/music/search"}  title={"Search"}/>
                {/*<SideBarOptions className={"lib-sub"} Icon={AlbumIcon} href={"/home/album"}  title={"Album"}/>
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeopleIcon} href={"/home/artist"}  title={"Artist"}/>*/}
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>MY PLAYLIST</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/music/playlist/instrumental"}  title={"Instrumental"}/>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/music/playlist/electronic"}  title={"Electronic"}/>
            </div>
        </aside>
    );
}

/*
*
* */

export default SideBar;