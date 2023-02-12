import React from 'react'
import { Accordion, Button, ButtonGroup,  } from 'react-bootstrap'
import {AiOutlineLike,AiOutlineDislike} from 'react-icons/ai';
import {RiShareForwardLine} from 'react-icons/ri';
import {HiDownload} from 'react-icons/hi';
import {CgPlayListAdd} from 'react-icons/cg';
const channel = {
ImageURL:"https://yt3.ggpht.com/Vzv2OJNdnqMMuBwBp4RMI-4Mp5V3ouabPv0yO69EuxHxtazM12v7DFEOOna9ZEbcS3go-0hb=s48-c-k-c0x00ffffff-no-rj",
ChannelName : "Codecademy",
SubNumbers: "10M",

}





const ProfileDiscription = () => {
  return (
    <div style={{width:"942px"}} >
    <div style={{display:"flex",width:"942px", justifyContent:"space-between" }}  >
    <div  style={{display:"flex", width:"250px", justifyContent:"space-between"}}  id='container -rofile'>
       <img width="45px" height="45px" style={{borderRadius:"100%"}}  src={channel.ImageURL} alt="goimg" />
    <div>
        <h4 style={{fontSize:'14px'}} >{channel.ChannelName}</h4>
        <p   style={{fontSize:'12px'}}  >{channel.SubNumbers}</p>
       
    </div>
    <Button  variant="light">Subscribe</Button>
    </div>
    <div  id='viewer-reaction'>
    <ButtonGroup style={{color:"#D3D4D5"}} aria-label="Basic example">
      <Button  variant="light">  <AiOutlineLike/> 1M</Button>
      
      <Button variant="light"> <AiOutlineDislike/>    </Button>
    </ButtonGroup>
      <Button  variant="light">  <RiShareForwardLine/> Share</Button>
    <Button  variant="light">  <HiDownload/>  Download</Button>
    <Button variant="light">      <CgPlayListAdd/>   Save</Button>
    <Button  variant="light">...</Button>


            
        

    </div>
    
    </div>
    <Accordion defaultActiveKey="0">
      
      <Accordion.Item eventKey="1">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default ProfileDiscription