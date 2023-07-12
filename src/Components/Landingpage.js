import React, { useState } from 'react'
import { messages } from './Messages'
import profile from "../assets/profile-1.jpg"
import profile1 from "../assets/profile-1.jpg"
import profile2 from "../assets/profile-2.jpg"
import profile3 from "../assets/profile-3.jpg"
import profile4 from "../assets/profile-4.jpg"
import profile5 from "../assets/profile-5.jpg"
import profile6 from "../assets/profile-6.jpg"
import profile7 from "../assets/profile-7.jpg"
import profile8 from "../assets/profile-8.jpg"
import profile9 from "../assets/profile-9.jpg"
import profile10 from "../assets/profile-10.jpg"
import profile11 from "../assets/profile-11.jpg"
import profile12 from "../assets/profile-12.jpg"
import profile13 from "../assets/profile-13.jpg"
import profile14 from "../assets/profile-14.jpg"
import profile15 from "../assets/profile-15.jpg"
import profile16 from "../assets/profile-16.jpg"
import profile17 from "../assets/profile-17.jpg"
import feed1 from "../assets/feed-1.jpg"
import feed2 from "../assets/feed-2.jpg"
import feed3 from "../assets/feed-3.jpg"
import feed4 from "../assets/feed-4.jpg"
import feed5 from "../assets/feed-5.jpg"
import feed6 from "../assets/feed-6.jpg"
import feed7 from "../assets/feed-7.jpg"
import logo from "../assets/mylogo.png"

function Landingpage() {
    const [activeLink, setActiveLink] = useState(null);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [activeFontSize, setActiveFontSize] = useState('');
    
    const [activeColor, setActiveColor] = useState('');
    
    const [bg, setBg] = useState('');
    var root=document.querySelector(":root")


    const handleColorClick = (className) => {
      setActiveColor(className);
  let primaryHue;
      if (className.includes('color-1')) {
        primaryHue=252
      } else if (className.includes('color-2')) {
        primaryHue=52
      } else if (className.includes('color-3')) {
        primaryHue=352
      } else if (className.includes('color-4')) {
        primaryHue=152
      } else if (className.includes('color-5')) {
        primaryHue=202
      }
      root.style.setProperty('--primary-color-hue', primaryHue);
    };

    const handleFontSizeClick = (fontSize, className) => {
      setActiveFontSize(fontSize);
  
      if (className.includes('font-size-1')) {
     root.style.setProperty('--sticky-top-left', '5.4rem');
   root.style.setProperty('--sticky-top-right', '5.4rem');

   
      } else if (className.includes('font-size-2')) {
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');
      
      } else if (className.includes('font-size-3')) {
        root.style.setProperty('--sticky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');
       
      } else if (className.includes('font-size-4')) {
        root.style.setProperty('--sticky-top-left', '-5rem');
   root.style.setProperty('--sticky-top-right', '-25rem');

      } else if (className.includes('font-size-5')) {
        root.style.setProperty('--sticky-top-left', '-12rem');
   root.style.setProperty('--sticky-top-right', '-35rem');

      }
    };


    const Getbg=(dark,white,light,text)=>{
        root.style.setProperty('--dark-color-lightness', dark);
        root.style.setProperty('--light-color-lightness', light);
        root.style.setProperty('--white-color-lightness', white);
        root.style.setProperty('--text-colour', text);
    }


    const handleBGClick = (className) => {
        setBg(className);

        if (className.includes('bg-1')) {
       Getbg("95%","100%","7%","#000")
          } else if (className.includes('bg-2')) {
            Getbg("95%","20%","15%","#fff")
          } else if (className.includes('bg-3')) {
            Getbg("95%","10%","0%","#fff")
          }

    }
  
    const handleLinkClick = (index) => {
      setActiveLink(index);
      if(index===6){
        setOpen(true)
    };
      }
      
    const spanList = [
        { size: '1rem', className: 'font-size-1' },
        { size: '2rem', className: 'font-size-2' },
        { size: '3rem', className: 'font-size-3' },
        { size: '4rem', className: 'font-size-4' },
        { size: '5rem', className: 'font-size-5' }
      ];
      
  const colorList = [
    { className: 'color-1' },
    { className: 'color-2' },
    { className: 'color-3' },
    { className: 'color-4' },
    { className: 'color-5' }
  ];


  const filteredMessages = messages.filter((message) => {
        return message.name.toLowerCase().includes(search.toLowerCase());
      });

  return (
    <>
   <nav>
    <div className='container'>

    

 <div className='logo'>
 <img src={logo} className='logo-img'/>
 </div>
       
  

<div className='search-bar'>
    <i className='uil uil-search'></i>
    <input type='search'
    placeholder='search for creators'/>
</div>
<div className='create'>
    <label for="create-post" className='btn btn-primary'>Create</label>
    <div className='profile'>
        <img src={profile} className='profile-photo'/>
    </div>
</div>
</div>

   </nav>

{/* 
   <--------------------End of Navbar----------> */}
<main>
    <div className='container'>
{/* <-----------------LEFT--------------> */}
<div className='left'>
    <a className='profile'>
        <div>
            <img src={profile} className='profile-photo'/>
        </div>
        <div className='handle'>
            <h4>Diana Ayi</h4>
            <p className='text-muted'>
                @dayi
            </p>
        </div>
    </a>

    {/* sidebar */}
    <div className='sidebar'>
      <a
        className={`menu-item ${activeLink === 0 ? 'active' : ''}`}
        onClick={() => handleLinkClick(0)}
      >
        <span>
          <i className='uil uil-home'></i>
        </span>
        <h3>Home</h3>
      </a>
      <a
        className={`menu-item ${activeLink === 1 ? 'active' : ''}`}
        onClick={() => handleLinkClick(1)}
      >
        <span>
          <i className='uil uil-compass'></i>
        </span>
        <h3>Explore</h3>
      </a>
      <a
        className={`menu-item ${activeLink === 2 ? 'active' : ''}`}
        onClick={() => handleLinkClick(2)}
      >
        <span>
          <i className='uil uil-bell'></i>
          <small className={activeLink===2?"nopopup":"notification-count"}>+6</small>
        </span>
        <h3>Notification</h3>
        {/*---------------- Notification popup----- */}
<div className={activeLink===2?"popups":"nopopup"}>
<div>
    <div className='profile-photo'>
        <img src={profile}/>
    </div>
    <div className='popup-body'>
        <b>Keka Benjamin</b>accepted your friend
        request
        <small className='text-muted'>2 DAYS AGO</small>
    </div>
</div>
<div>
    <div className='profile-photo'>
        <img src={profile1}/>
    </div>
    <div className='popup-body'>
        <b>Barani anandh</b>accepted your friend
        request
        <small className='text-muted'>1 DAYS AGO</small>
    </div>
</div>
<div>
    <div className='profile-photo'>
        <img src={profile2}/>
    </div>
    <div className='popup-body'>
        <b>krishna</b>accepted your friend
        request
        <small className='text-muted'>3 DAYS AGO</small>
    </div>
</div>
<div>
    <div className='profile-photo'>
        <img src={profile3}/>
    </div>
    <div className='popup-body'>
        <b>Mukseen</b>accepted your friend
        request
        <small className='text-muted'>1 HOUR AGO</small>
    </div>
</div>
<div>
    <div className='profile-photo'>
        <img src={profile4}/>
    </div>
    <div className='popup-body'>
        <b>Danial</b>accepted your friend
        request
        <small className='text-muted'>4 DAYS AGO</small>
    </div>
</div>
<div>
    <div className='profile-photo'>
        <img src={profile5}/>
    </div>
    <div className='popup-body'>
        <b>Bharathraj</b>accepted your friend
        request
        <small className='text-muted'>2 DAYS AGO</small>
    </div>
</div>

</div>
      </a>

      <a
        className={`menu-item ${activeLink === 3 ? 'active' : ''}`}
        onClick={() => handleLinkClick(3)}
      >
        <span>
          <i className='uil uil-envelope-alt'></i>
          <small  className={activeLink===3?"nopopup":"notification-count"}>8</small>
        </span>
        <h3>Message</h3>
      </a>
      <a
        className={`menu-item ${activeLink === 4 ? 'active' : ''}`}
        onClick={() => handleLinkClick(4)}
      >
        <span>
          <i className='uil uil-bookmark'></i>
        </span>
        <h3>Bookmarks</h3>
      </a>
      <a
        className={`menu-item ${activeLink === 5 ? 'active' : ''}`}
        onClick={() => handleLinkClick(5)}
      >
        <span>
          <i className='uil uil-chart-line'></i>
        </span>
        <h3>Analytics</h3>
      </a>
      <a
        className={`menu-item ${activeLink === 6 ? 'active' : ''}`}
        onClick={() => handleLinkClick(6)}
      >
        <span>
          <i className='uil uil-palette'></i>
        </span>
        <h3>Theme</h3>
      </a>
      <a
        className={`menu-item ${activeLink === 7 ? 'active' : ''}`}
        onClick={() => handleLinkClick(7)}
      >
        <span>
          <i className='uil uil-setting'></i>
        </span>
        <h3>Settings</h3>
      </a>
    </div>

    <label for="create post" className='btn btn-primary'>
    Create Post
</label>
    
</div>

{/* <-----------------MIDDLE--------------> */}

<div className='middle'>

    {/* =====Stories===== */}

    <div className='stories'>
<div className='story'>
    <div className='profile-photo'>
        <img src={profile8}/>
    </div>
    <p className='name'>My Story</p>

</div>
<div className='story'>
    <div className='profile-photo'>
        <img src={profile9}/>
    </div>
    <p className='name'>Barani</p>

</div>
<div className='story'>
    <div className='profile-photo'>
        <img src={profile10}/>
    </div>
    <p className='name'>Krish</p>

</div>
<div className='story'>
    <div className='profile-photo'>
        <img src={profile11}/>
    </div>
    <p className='name'>Mukseen</p>

</div>
<div className='story'>
    <div className='profile-photo'>
        <img src={profile12}/>
    </div>
    <p className='name'>Mc Coder</p>

</div>



    </div>

  {/* =====End of Stories===== */}
<form className='create-post'>
    <div className='profile-photo'>
        <img src={profile}/>
    </div>
    <input type='text' placeholder="What's on your mind ? " id='create-post'/>
    
    <input type='submit' value="post" className='btn btn-primary'/>

</form>




{/* <-----------------Feed--------------> */}


<div className='feeds'>
<article className='feed'>

    <div className='head'>
    <div className='user'>
        <div className='profile-photo'>
        <img src={profile13}/>
        </div>
        <div className='info'>
    <h3>Lana Rose</h3>
    <small>Dubai,15 MINUTES AGO</small>
</div>
 
</div>

<div className='edit'>
    <i className='uil uil-ellipsis-h'></i>
</div>
    </div>


    <div className='photo'>
        <img src={feed1}/>
    </div>

    <div className='action-button'>
        <div className='interaction-buttons'>
        <span><i className='uil uil-heart'></i></span>
        <span><i className='uil uil-comment-dots'></i></span>
        <span><i className='uil uil-share-alt'></i></span>
        </div>

        <div className='bookmark'>
        <span><i className='uil uil-bookmark-full'></i></span> 
        </div>
      
    </div>

    <div className='liked-by'>
        <div className='profiles'>
        <span>
    <img src={profile10}/>
</span>
<span>
    <img src={profile11}/>
</span>
<span>
    <img src={profile12}/>
</span>
        </div>


<p>
    Liked by<b>Earnest Achiever</b>
    and <b>2234 others</b>
   
</p>


    </div>

    <div className='caption'>
    <p>
        <b>
            Lana eius
        </b>
        <b>
            lorem ipsum dolor sit quyisum eius
        </b>
        <span className='harsh-tag'> #lifestyle</span>
    </p>

</div>
<div className='text-muted comments'>
    View all 277 comments
</div>


</article>


</div>
<div className='feeds'>
<article className='feed'>

    <div className='head'>
    <div className='user'>
        <div className='profile-photo'>
        <img src={profile14}/>
        </div>
        <div className='info'>
    <h3>Barani Anandh</h3>
    <small>Dubai,15 MINUTES AGO</small>
</div>
 
</div>

<div className='edit'>
    <i className='uil uil-ellipsis-h'></i>
</div>
    </div>


    <div className='photo'>
        <img src={feed2}/>
    </div>

    <div className='action-button'>
        <div className='interaction-buttons'>
        <span><i className='uil uil-heart'></i></span>
        <span><i className='uil uil-comment-dots'></i></span>
        <span><i className='uil uil-share-alt'></i></span>
        </div>

        <div className='bookmark'>
        <span><i className='uil uil-bookmark-full'></i></span> 
        </div>
      
    </div>

    <div className='liked-by'>
        <div className='profiles'>
        <span>
    <img src={profile10}/>
</span>
<span>
    <img src={profile11}/>
</span>
<span>
    <img src={profile12}/>
</span>
        </div>


<p>
    Liked by<b>Earnest Achiever</b>
    and <b>2234 others</b>
   
</p>


    </div>

    <div className='caption'>
    <p>
        <b>
            Lana eius
        </b>
        <b>
            lorem ipsum dolor sit quyisum eius
        </b>
        <span className='harsh-tag'> #lifestyle</span>
    </p>

</div>
<div className='text-muted comments'>
    View all 277 comments
</div>


</article>


</div>
<div className='feeds'>
<article className='feed'>

    <div className='head'>
    <div className='user'>
        <div className='profile-photo'>
        <img src={profile15}/>
        </div>
        <div className='info'>
    <h3>David Miller</h3>
    <small>Dubai,15 MINUTES AGO</small>
</div>
 
</div>

<div className='edit'>
    <i className='uil uil-ellipsis-h'></i>
</div>
    </div>


    <div className='photo'>
        <img src={feed3}/>
    </div>

    <div className='action-button'>
        <div className='interaction-buttons'>
        <span><i className='uil uil-heart'></i></span>
        <span><i className='uil uil-comment-dots'></i></span>
        <span><i className='uil uil-share-alt'></i></span>
        </div>

        <div className='bookmark'>
        <span><i className='uil uil-bookmark-full'></i></span> 
        </div>
      
    </div>

    <div className='liked-by'>
        <div className='profiles'>
        <span>
    <img src={profile10}/>
</span>
<span>
    <img src={profile11}/>
</span>
<span>
    <img src={profile12}/>
</span>
        </div>


<p>
    Liked by<b>Earnest Achiever</b>
    and <b>2234 others</b>
   
</p>


    </div>

    <div className='caption'>
    <p>
        <b>
            Lana eius
        </b>
        <b>
            lorem ipsum dolor sit quyisum eius
        </b>
        <span className='harsh-tag'> #lifestyle</span>
    </p>

</div>
<div className='text-muted comments'>
    View all 277 comments
</div>


</article>


</div>
<div className='feeds'>
<article className='feed'>

    <div className='head'>
    <div className='user'>
        <div className='profile-photo'>
        <img src={profile16}/>
        </div>
        <div className='info'>
    <h3>Sanjai</h3>
    <small>Dubai,15 MINUTES AGO</small>
</div>
 
</div>

<div className='edit'>
    <i className='uil uil-ellipsis-h'></i>
</div>
    </div>


    <div className='photo'>
        <img src={feed4}/>
    </div>

    <div className='action-button'>
        <div className='interaction-buttons'>
        <span><i className='uil uil-heart'></i></span>
        <span><i className='uil uil-comment-dots'></i></span>
        <span><i className='uil uil-share-alt'></i></span>
        </div>

        <div className='bookmark'>
        <span><i className='uil uil-bookmark-full'></i></span> 
        </div>
      
    </div>

    <div className='liked-by'>
        <div className='profiles'>
        <span>
    <img src={profile15}/>
</span>
<span>
    <img src={profile11}/>
</span>
<span>
    <img src={profile12}/>
</span>
        </div>


<p>
    Liked by<b>Earnest Achiever</b>
    and <b>2234 others</b>
   
</p>


    </div>

    <div className='caption'>
    <p>
        <b>
            Lana eius
        </b>
        <b>
            lorem ipsum dolor sit quyisum eius
        </b>
        <span className='harsh-tag'> #lifestyle</span>
    </p>

</div>
<div className='text-muted comments'>
    View all 277 comments
</div>


</article>


</div>
<div className='feeds'>
<article className='feed'>

    <div className='head'>
    <div className='user'>
        <div className='profile-photo'>
        <img src={profile17}/>
        </div>
        <div className='info'>
    <h3>Lana Rose</h3>
    <small>Dubai,15 MINUTES AGO</small>
</div>
 
</div>

<div className='edit'>
    <i className='uil uil-ellipsis-h'></i>
</div>
    </div>


    <div className='photo'>
        <img src={feed5}/>
    </div>

    <div className='action-button'>
        <div className='interaction-buttons'>
        <span><i className='uil uil-heart'></i></span>
        <span><i className='uil uil-comment-dots'></i></span>
        <span><i className='uil uil-share-alt'></i></span>
        </div>

        <div className='bookmark'>
        <span><i className='uil uil-bookmark-full'></i></span> 
        </div>
      
    </div>

    <div className='liked-by'>
        <div className='profiles'>
        <span>
    <img src={profile10}/>
</span>
<span>
    <img src={profile11}/>
</span>
<span>
    <img src={profile12}/>
</span>
        </div>


<p>
    Liked by<b>Earnest Achiever</b>
    and <b>2234 others</b>
   
</p>


    </div>

    <div className='caption'>
    <p>
        <b>
            Lana eius
        </b>
        <b>
            lorem ipsum dolor sit quyisum eius
        </b>
        <span className='harsh-tag'> #lifestyle</span>
    </p>

</div>
<div className='text-muted comments'>
    View all 277 comments
</div>


</article>


</div>
<div className='feeds'>
<article className='feed'>

    <div className='head'>
    <div className='user'>
        <div className='profile-photo'>
        <img src={profile10}/>
        </div>
        <div className='info'>
    <h3>Lana Rose</h3>
    <small>Dubai,15 MINUTES AGO</small>
</div>
 
</div>

<div className='edit'>
    <i className='uil uil-ellipsis-h'></i>
</div>
    </div>


    <div className='photo'>
        <img src={feed6}/>
    </div>

    <div className='action-button'>
        <div className='interaction-buttons'>
        <span><i className='uil uil-heart'></i></span>
        <span><i className='uil uil-comment-dots'></i></span>
        <span><i className='uil uil-share-alt'></i></span>
        </div>

        <div className='bookmark'>
        <span><i className='uil uil-bookmark-full'></i></span> 
        </div>
      
    </div>

    <div className='liked-by'>
        <div className='profiles'>
        <span>
    <img src={profile10}/>
</span>
<span>
    <img src={profile11}/>
</span>
<span>
    <img src={profile12}/>
</span>
        </div>


<p>
    Liked by<b>Earnest Achiever</b>
    and <b>2234 others</b>
   
</p>


    </div>

    <div className='caption'>
    <p>
        <b>
            Lana eius
        </b>
        <b>
            lorem ipsum dolor sit quyisum eius
        </b>
        <span className='harsh-tag'> #lifestyle</span>
    </p>

</div>
<div className='text-muted comments'>
    View all 277 comments
</div>


</article>


</div>
<div className='feeds'>
<article className='feed'>

    <div className='head'>
    <div className='user'>
        <div className='profile-photo'>
        <img src={profile2}/>
        </div>
        <div className='info'>
    <h3>Lana Rose</h3>
    <small>Dubai,15 MINUTES AGO</small>
</div>
 
</div>

<div className='edit'>
    <i className='uil uil-ellipsis-h'></i>
</div>
    </div>


    <div className='photo'>
        <img src={feed7}/>
    </div>

    <div className='action-button'>
        <div className='interaction-buttons'>
        <span><i className='uil uil-heart'></i></span>
        <span><i className='uil uil-comment-dots'></i></span>
        <span><i className='uil uil-share-alt'></i></span>
        </div>

        <div className='bookmark'>
        <span><i className='uil uil-bookmark-full'></i></span> 
        </div>
      
    </div>

    <div className='liked-by'>
        <div className='profiles'>
        <span>
    <img src={profile10}/>
</span>
<span>
    <img src={profile11}/>
</span>
<span>
    <img src={profile12}/>
</span>
        </div>


<p>
    Liked by<b>Earnest Achiever</b>
    and <b>2234 others</b>
   
</p>


    </div>

    <div className='caption'>
    <p>
        <b>
            Lana eius
        </b>
        <b>
            lorem ipsum dolor sit quyisum eius
        </b>
        <span className='harsh-tag'> #lifestyle</span>
    </p>

</div>
<div className='text-muted comments'>
    View all 277 comments
</div>


</article>


</div>
<div className='feeds'>
<article className='feed'>

    <div className='head'>
    <div className='user'>
        <div className='profile-photo'>
        <img src={profile6}/>
        </div>
        <div className='info'>
    <h3>Lana Rose</h3>
    <small>Dubai,15 MINUTES AGO</small>
</div>
 
</div>

<div className='edit'>
    <i className='uil uil-ellipsis-h'></i>
</div>
    </div>


    <div className='photo'>
        <img src={feed3}/>
    </div>

    <div className='action-button'>
        <div className='interaction-buttons'>
        <span><i className='uil uil-heart'></i></span>
        <span><i className='uil uil-comment-dots'></i></span>
        <span><i className='uil uil-share-alt'></i></span>
        </div>

        <div className='bookmark'>
        <span><i className='uil uil-bookmark-full'></i></span> 
        </div>
      
    </div>

    <div className='liked-by'>
        <div className='profiles'>
        <span>
    <img src={profile10}/>
</span>
<span>
    <img src={profile11}/>
</span>
<span>
    <img src={profile12}/>
</span>
        </div>


<p>
    Liked by<b>Earnest Achiever</b>
    and <b>2234 others</b>
   
</p>


    </div>

    <div className='caption'>
    <p>
        <b>
            Lana eius
        </b>
        <b>
            lorem ipsum dolor sit quyisum eius
        </b>
        <span className='harsh-tag'> #lifestyle</span>
    </p>

</div>
<div className='text-muted comments'>
    View all 277 comments
</div>


</article>


</div>

</div>



{/* <-----------------RIGHT--------------> */}

<div className='right'>

<div className={activeLink===3?"messageshow messages":"messages"}>
    <div className='heading'>
        <h4>Messages</h4>
        <i className='uil uil-edit'></i>
    </div>
{/* <---------Search Bar-----------> */}
<div className='search-bar'>
    <i className='uil uil-search'></i>
    <input type='search' placeholder='search messages' onChange={(e)=>setSearch(e.target.value)}/>
</div>

{/* <---------Message catagory-----------> */}
<div className='category'>
    <h6 className='active'>Primary</h6>
    <h6>General</h6>
    <h6 className='friend-requests'>Requests(7)</h6>
</div>

{/* <---------Message-----------> */}
<div>
    {
    
    (filteredMessages?filteredMessages:messages)
 .map((message) => (
      <div className="message" key={message.id}>
        <div className="profile-photo">
          <img src={message.imageSrc} alt="Profile" />
          <div className="active"></div>
        </div>
        <div className="msg-body">
          <h5>{message.name}</h5>
          <p className="text-muted">{message.time}</p>
        </div>
      </div>
    ))}
  </div>

</div>

{/* <---------End Of Message-----------> */}

{/* <---------Friend Requests-----------> */}

<div className='friend-request'>
    <h4>Requests</h4>
    <div className='request'>
<div className='info'>
    <div className='profile-photo'>
        <img src={profile11}/>
    </div>
    <div>
        <h5>Hajia Bintu</h5>
        <p className='text-muted'>
            8 mutual friends
        </p>
       
    </div>

</div>
<div className='action'>
            <button className='btn btn-primary'>
                Accept
            </button>
            <button className='btn'>
         Decline
            </button>
        </div>

    </div>
    <div className='request'>
<div className='info'>
    <div className='profile-photo'>
        <img src={profile3}/>
    </div>
    <div>
        <h5>Krish</h5>
        <p className='text-muted'>
            19 mutual friends
        </p>
       
    </div>

</div>
<div className='action'>
            <button className='btn btn-primary'>
                Accept
            </button>
            <button className='btn'>
         Decline
            </button>
        </div>

    </div>
    <div className='request'>
<div className='info'>
    <div className='profile-photo'>
        <img src={profile4}/>
    </div>
    <div>
        <h5>Antony</h5>
        <p className='text-muted'>
            2 mutual friends
        </p>
       
    </div>

</div>
<div className='action'>
            <button className='btn btn-primary'>
                Accept
            </button>
            <button className='btn'>
         Decline
            </button>
        </div>

    </div>
</div>




</div>


{/* <========================End of Right -----------> */}


{/* <========================Customize -----------> */}

<div className={open?"customize-theme":"nopopup"}>
<div className='card'>
<i class="uil uil-multiply" onClick={()=>setOpen(false)}></i>
    <h2>Customize your view</h2>
    <p className={open?"text-muted":""}>Manage your font size,color,and background.</p>


{/* <-----------Font Size----------> */}
    <div className='font-size'>
    <h4>Font Size</h4>
<div>
<h6>Aa</h6>
<div className="choose-size">
      {spanList.map((span, index) => (
        <span
          key={index}
          className={` ${span.className} ${activeFontSize === span.size ? 'active' : ''}`}
          onClick={() => handleFontSizeClick(span.size, span.className)}
        ></span>
      ))}
    </div>
<h3>Aa</h3>
    </div>
    </div>

{/* <-----------Primary color----------> */}    
<div className='color'>
<h4>Color</h4>

<div className="choose-color">
      {colorList.map((color, index) => (
        <span
          key={index}
          className={` ${color.className} ${activeColor === color.className ? 'active' : ''}`}
          onClick={() => handleColorClick(color.className)}
        ></span>
      ))}
    </div>
    </div>

{/* <-----------Background color----------> */}   

<div className='background'>
    <h4>Background</h4>
    <div className="choose-bg">
      <div className={bg==="bg-1"?"bg-1 active ": "bg-1"} onClick={() => handleBGClick('bg-1')} >
        <span></span>
        <h5 style={{color:"#000"}}>Light</h5>
      </div>
      <div className={bg==="bg-2"?"bg-2 active ": "bg-2"}  onClick={() => handleBGClick('bg-2')}>
        <span></span>
        <h5>Dim</h5>
      </div>
      <div className={bg==="bg-3"?"bg-3 active ": "bg-3"}  onClick={() => handleBGClick('bg-3')}>
        <span></span>
        <h5>Lights Out</h5>
      </div>
    </div>
</div>


</div>



</div>




    </div>
</main>







   </>
  )
}

export default Landingpage