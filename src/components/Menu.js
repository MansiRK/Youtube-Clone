import React from "react"
import styled from "styled-components"
import AppLogo from "../image/logo.png"

import HomeIcon from '@mui/icons-material/Home'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagSharpIcon from '@mui/icons-material/OutlinedFlagSharp';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


const Container = styled.div`
  flex: 1;
  background-color: #272727;
  height: 100vh;
  color: white;
  font-size: 15px
`

const Wrapper = styled.div`
padding: 18px 26px;
`

const Logo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-size: 20px;
font-weight: bold;
margin-bottom: 25px
`

const Image = styled.img`
height: 35px;

`

const Items = styled.div`
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
margin-bottom: 10px;
`
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid rgb(155, 155, 155); 
`

const Login = styled.div`
`
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid blue;
color: blue;
border-radius: 3px;
font-size: 15px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
align-items: center;
display: flex;
gap: 5px;
`

const Menu = () => {
    return (
        <Container>

            <Wrapper>
                <Logo>
                    <Image src={AppLogo} />
                    VidTube
                </Logo>
                <Items>
                    <HomeIcon/>
                        Home
                </Items>
                <Items>
                    <ExploreOutlinedIcon/>
                    Explore
                </Items>
                <Items>
                    <SubscriptionsOutlinedIcon/>
                    Subscriptions
                </Items>
                <Hr/>
                <Items>
                    <VideoLibraryOutlinedIcon/>
                    Library
                </Items>
               
                <Items>
                    <HistoryOutlinedIcon/>
                    History
                </Items>

                <Items>
                    <SmartDisplayOutlinedIcon/>
                    Your videos
                </Items>
                <Items>
                    <WatchLaterOutlinedIcon/>
                    Watch later
                </Items>
                <Hr/>
                <Login>
                Sign in to subscribe, like and comment videos.
                <Button>
                    <AccountCircleOutlinedIcon/>
                Sign In
                </Button>
               </Login>
               <Hr/>
                <Items>
                    <WhatshotOutlinedIcon/>
                    Trending
                </Items>
                <Items>
                    <ShoppingBagOutlinedIcon/>
                    Shopping
                </Items>
                <Items>
                    <MusicNoteOutlinedIcon/>
                    Music
                </Items>
                <Items>
                    <MovieCreationOutlinedIcon/>
                    Movies
                </Items>
                <Items>
                    <LiveTvOutlinedIcon/>
                    Live
                </Items>
                <Items>
                    <SportsEsportsOutlinedIcon/>
                    Gaming
                </Items>
                <Items>
                    <EmojiEventsOutlinedIcon/>
                    Sports
                </Items>
                <Items>
                    <LightbulbOutlinedIcon/>
                    Learning
                </Items>
                <Hr/>
                <Items>
                    <SettingsOutlinedIcon/>
                    Settings
                </Items>
                <Items>
                    <OutlinedFlagSharpIcon/>
                    Report history
                </Items>
                <Items>
                    <HelpOutlineOutlinedIcon/>
                    Help
                </Items>
                <Items>
                    <FeedbackOutlinedIcon/>
                    Send feedback
                </Items>
            </Wrapper>

        </Container>
    )
}

export default Menu