import React, { useRef, useState } from 'react';
import Container from '@mui/material/Container';
import "./landing.css";
// import dp from "./dp.webp";
import dp1 from "./pic.jpg";
import dp from "./finalpic.jpeg";
// import dp from "./pic2.png";
// import dp from "./mypic3.png";
// import dp from "./pic3.png";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button, TextField } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DataObjectIcon from '@mui/icons-material/DataObject';
import CodeIcon from '@mui/icons-material/Code';
import leetcode from './leetcode.png';
import i1 from './reactlogo.png';
import i2 from './mangodb.png';
import i3 from './express.png';
import i4 from './nodejs.png';
import i5 from './materialui.png';
import i6 from './css.png';
import i7 from './js.png';
import i8 from './html.png';
import i9 from './java.png';
import i10 from './c.png';
import i11 from './oauth.png';
import i12 from './mysql.png';
import i13 from './jwt.png';
import i14 from './eclipse.jpg';
import i15 from './vs.png';
import i16 from './postman.png';
import i17 from './netlify.png';
import i18 from './firebase.png';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import Rightside from './carousel';
import Blog1 from './carousel';
import Slider from './carousel';
import emailjs from '@emailjs/browser';
 import servlet from './Servlet.png';
// import Car from './carousel';


export default function Landing() {
  const skills = [
    { id: 1, name: 'React', logo: i1 },
    // { id: 2, name: 'MangoDB', logo: i2 },
    // { id: 3, name: 'Node', logo: i4 },
    // { id: 4, name: 'Express', logo: i3 },
    { id: 5, name: 'Java Script', logo: i7},
    { id: 6, name: 'HTML', logo: i8 },
    { id: 7, name: 'CSS', logo: i6 },
    { id: 8, name: 'Material UI', logo: i5 },
    // Add more skills as needed
  ];

  const skills2 = [
    { id: 1, name: 'Java', logo: i9 },
    { id: 5, name: 'C', logo: i10},
    { id: 2, name: 'MangoDB', logo: i2 },
    { id: 3, name: 'Node', logo: i4 },
    { id: 4, name: 'Express', logo: i3 },
    { id: 6, name: 'MySQL', logo: i12 },
    { id: 7, name: 'OAuth', logo: i11 },
    { id: 8, name: 'JWT', logo: i13 },
    {id:9,name:'Servlet JSP',logo:servlet}
    // Add more skills as needed
  ];

  const skills3 = [
    {id: 1, name: 'Eclipse', logo: i14 },
    { id: 5, name: 'Visual Studio Code', logo: i15},
    { id: 2, name: 'Postman', logo: i16 },
    { id: 3, name: 'Netlify', logo: i17 },
    { id: 4, name: 'FireBase', logo: i18 },
    // Add more skills as needed
  ];

    const [open1, setOpen1] = React.useState(false);

    const handleClick1 = () => {
      setOpen1(!open1);
    };
    const [open2, setOpen2] = React.useState(false);

    const handleClick2 = () => {
      setOpen2(!open2);
    };
    const [open3, setOpen3] = React.useState(false);

    const handleClick3 = () => {
      setOpen3(!open3);
    };


    

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_j7a9dcr', 'template_29uo6su', form.current, {
          publicKey: 'Nt_7KPnnaB2Nf6sLS',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Success")
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('FAILED...', error.text);
          },
        );
    }

  return (
    <Container >    
        <div className='navbar' >
        <div className='navbarLeft'>
            <h1><a href='#maindp'>RAGHUL</a></h1>
        </div>
        <div className='navbarRight'>
            <h2><a href='#maindp'>Home</a></h2>
            <h2 ><a href='#about'>About</a></h2>
            <h2><a href='#skills'>Skills</a></h2>
            <h2><a href='#project'>Projects</a></h2>
            <h2><a href='#contact'>Contact</a></h2>
        </div>
    </div>

    <section id='maindp'>
      <br></br>
    <div  style={{marginTop:"100px"}} className='maindp'>
        <div className='contact'>
            <GitHubIcon className='icon' onClick={()=>{
              window.location.href = 'https://github.com/RaghulR238';
            }}/>
            <LinkedInIcon className='icon' onClick={()=>{
              window.location.href = 'https://www.linkedin.com/in/raghul-rajan-32972a263/';
            }}/>
            
            <img className='icon' src={leetcode} onClick={()=>{
              window.location.href = 'https://leetcode.com/Raghul_2004/';
            }}></img>
            
        </div>
    <div className='dpContent'>
        <h1>Hi, I'am Raghul</h1>
        <h3>Software Developer</h3>
        <p>Seeking a software engineering position where I can utilize my strong programming skills, web developing skills, analyticalaptitude, and commitment to excellence to develop reliable, user-friendly software applications . Motivated to advance andexpand my skill set through targeted mentorship and challenging projects. Possess exceptional communication andinterpersonal skills with a proven ability to work independently and as part of a team.</p>
    <a href='#contact'><Button endIcon={<SendIcon sx={{color:'#2596be'}}/>} sx={{color:'#2596be'}}>Contact me</Button></a>
    </div>
    <div className='dp'>

       <center> <img className="image1" src={dp}></img></center>
    </div>
    </div>
    </section>
    <Container>
    
      <section id="about">
        <br></br>
        <div  className='about' >
        <div className="aboutTitle">
        <h1 >About Me</h1>
        </div>
        <div className='maindp'>
            <div className='dp'>
            <img className='image2' src={dp1}></img>
            </div>
            <div className='dpContent'>
           <h1>Hi, I'am Raghul</h1>
         {/* <h3>FullStack Developer</h3>  */}
        <p>Dedicated software engineer proficient in Java and the MERN stack, adept at solving complex problems. Experienced in developing scalable and efficient applications . Passionate about innovation and staying current with emerging technologies. Strong communicator and team player with a commitment to delivering high-quality results. Eager to contribute skills and enthusiasm to impactful projects.</p>
        <Button className='cv'>
          
      <a style={{color:'#2596be'}}
        href="\717821L238-RAGHUL R.pdf"
        target="_blank"
        download="717821L238-RAGHUL R.pdf"
        rel="noopener noreferrer"
      >
        DOWNLOAD CV
      </a>
    </Button>

            </div>
        </div>
        </div>
        </section>
        </Container>
    <Container>

      
    <section id="skills">
        <br></br>
        {/* <br></br> */}
    <div className="skills" id="skills">

    

        <h1 className='skillsTitle'>Skills</h1>
        <span>My Technical Knowledge</span>
        <br></br>

        <div className='skillset'>
      <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <DataObjectIcon />
        </ListItemIcon>
        <ListItemText primary="Frontend Developer" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {skills.map((skill) => (
            <ListItemButton key={skill.id} sx={{ pl: 8 }}>
              <ListItemIcon sx={{marginRight:'30px'}}>
                <img className='logo' src={skill.logo} alt={skill.name} />
              </ListItemIcon>
              <ListItemText primary={skill.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </div>
      

    <div className='skillset'>
      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Backend Developer" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {skills2.map((skill) => (
            <ListItemButton key={skill.id} sx={{ pl: 8 }}>
              <ListItemIcon sx={{marginRight:'30px'}}>
                <img className='logo' src={skill.logo} alt={skill.name} />
              </ListItemIcon>
              <ListItemText primary={skill.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      
    </div>

    <div className='skillset'>
      <ListItemButton onClick={handleClick3}>
        <ListItemIcon>
          <AutoAwesomeMotionIcon />
        </ListItemIcon>
        <ListItemText primary="Tools & IDE" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {skills3.map((skill) => (
            <ListItemButton key={skill.id} sx={{ pl: 8 }}>
              <ListItemIcon sx={{marginRight:'30px'}}>
                <img className='logo' src={skill.logo} alt={skill.name} />
              </ListItemIcon>
              <ListItemText primary={skill.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </div>
    <h3 style={{color:'brown'}}>Loading...</h3>
    </div>
   </section>
    </Container>


    <Container>
      <section id="project">
        <br></br>
        <div class="project">
          <h1 className='projectTitle'>Projects</h1>
          <span >My recent work</span>

          <Slider/>
        </div>
      </section>
    </Container>
    <Container>
      <section id="contact">
        <br></br>
        <div class="project">
        <h1 className='projectTitle'>Contact Me</h1>
        <span>Get in touch</span>
        <div style={{display:'flex',marginTop:'60px',width:'100%'}}>
          <div style={{width:'50%',textAlign:'center'}}>
            
            <h2 style={{marginTop:"30px"}}><CallIcon sx={{fontSize:'20px'}}/><span>    </span>Call me</h2>
            <span>+91-9677530199</span>
            <h2><EmailIcon sx={{fontSize:'20px'}}/><span>    </span>  Email</h2>
            <a href="mailto:raghulrajan2887@gmail.com" style={{cursor:'pointer'}}>raghulrajan2887@gmail.com</a>
            <h2><LocationOnIcon sx={{fontSize:'20px'}}/><span>    </span>Location</h2>
            <span>Coimbatore,India</span>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
          
        
        <form ref={form} style={{display:'flex',flexDirection:'column'}} onSubmit={sendEmail}>
      <label style={{marginBottom:"20px",fontWeight:'bold',fontSize:'20px'}}>Name</label>
      <input style={{width:"200%",height:'40px',marginBottom:"20px"}} type="text"  name="from_name" />
      <label style={{marginBottom:"20px",fontWeight:'bold',fontSize:'20px'}}>Email</label>
     
      <input style={{width:"200%",height:'40px',marginBottom:"20px"}} type="email" name="from_mail" />
      <label style={{marginBottom:"20px",fontWeight:'bold',fontSize:'20px'}}>Message</label>
      <textarea style={{width:"200%",height:'80px',marginBottom:"20px"}}  name="message" />
      
      <center style={{width:"200%",display:'flex',textAlign:"center",justifyContent:'center'}}>
        <input style={{border:'none',fontSize:'20px',color:'#2596be',cursor:'pointer'}} type="submit" value="Send"></input>
      <SendIcon sx={{color:'#2596be'}}/> </center>
    </form>
    
        
        {/* <center><Button onClick={handleSubmit}sx={{width:'200%',color:'#2596be'}} endIcon={<SendIcon sx={{color:'#2596be'}}/>}  >Send Message </Button></center> */}
     
          </div>
        </div>
        </div>
      </section>
    </Container>
    </Container>

  )
}
