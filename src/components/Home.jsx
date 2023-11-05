import React from 'react';
import { Link } from 'react-router-dom';

function Home () {

  return (
    <div className="wargame">
      <div className="div">
        <div className="overlap-group">
          <div className="wargame-block" />
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="text-wrapper">Home</div>
          <div className="main-information">
            Some background information. Soooo, my Something Awesome Project was basically me just doing a bunch of Capture The Flag's or Wargames (I still don't really know the difference) on the website "OverTheWire". As I went through them, I documented my thought process and what I did, and some things I've learnt. The documentation is <i>very</i> informal, for most of it you can see my thought process, internal struggles, and "Eureka!" moments.<br/><br/>

            The wargames I ended up doing were Leviathan, Krypton and Natas. I did some of the other ones but not enough for me to make whole pages for them. I probably will just mention some of them at the bottom of this page. But first giving a bit of context for the main ones:<br/><br/> 
            
            Leviathan is a reverse engineering wargame. It is very beginner friendly and probably my favourite out of the bunch. All the levels give you a binary executable file. You do not get the source code. From this you basically have to work out the functionality of the program and find the flag hidden in it. If there was one wargame I would want to get good at it would most likely be of this type. After finishing Leviathan I saw that Behemoth was the next extension of this it seemed. I didn't get a chance to delve too deep into it due to a lack of time, but from what I've seen it goes further into more reverse engineering and debugging software like GDB possibly Ghidra and IDA. During the holidays if I have time, I might look into more of these and just have fun with it :D. <br/><br/>

            Krypton was the next one. The name probably comes from the fact that it sounds like crypto, as in crpytography. This wargame I did not reaaaally like. The ideas of cryptography and the theory itself are very intersting. These wargames though, ummm, not so much. Most of these just involved searching up a decoder. I would probably not be interested in continuing with these. I'd imagine the harder levels would probably have some very inspired solutions but the path to get there, I am not interested in. <br/><br/>

            Natas was the last one and honestly a really great one. It's a web-browser wargame, that covers a lot of aspects of web applications. Most of the levels were quite enjoyable. It covers vulernabilities with PHP code, and SQL database stuff. I also reckon a lot of people, even without computer science backgrounds, will be able to do the earlier levels. It gets you used to the different features of websites, looking at the html code, understanding that there's an underlying file system, etc. <br/><br/>

            Besides these 3 I've had a look at Bandit, Behemoth and Narnia too. Very quickly, Bandit is the first wargame on the website and it just gets you used to linux commands and SSH. People with no background should start here. In this case this was me, because I did like a lot of levels before I realised these would not be assessed if I did them in my SAP ... Behemoth is the continuation of Leviathan and honestly I think I will look into this after the term ends. There aren't a lot of levels and I am genuinely interested in this stuff. Narnia is similar to Behemoth but you have the source code for it. I've done a few levels from Behemoth and Narnia, and they are quite intersting, but there is a noticeable jump in difficulty. Notably, there seems to be some more default steps and thinking people go through. I'd imagine this would just come with experience though. <br/><br/>

            So, yes, this is my project :&#41;. On the main map page, there will also be some mini easter eggs that you can find by solving some basic CTFs/problems, they might not be CTF's we'll see :P.
          </div>
          <div className="element">
            <Link className="link" to={"/leviathan/0"}>
              L<br/>e<br/>v
            </Link>
            <br/><br/>
            <Link className="link" to={"/krypton/0"}>
              K<br/>r<br/>y
            </Link>
            <br /><br/>
            <Link className="link" to={"/natas/0"}>
              N<br/>a<br/>t
            </Link>
            <br /><br/>
          
          </div>
          <Link className="link" to="/map">
            <img
              className="vecteezy-flag-pixel"
              alt="Vecteezy flag pixel"
              src="https://cdn.animaapp.com/projects/6544e8c887304b74da313acb/releases/6544f39a8e71c2421fb3a88e/img/flag1.png"
              />
          </Link>
        </div>
        <div className="overlap">
          <div className="text-wrapper-2">Skills</div>
        </div>
        <div className="skill-information">
            Working on using brain<br/><br/>
        </div>
      </div>
    </div>
  );
};

export default Home;