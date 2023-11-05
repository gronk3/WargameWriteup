import React from 'react';
import { useParams, Link } from 'react-router-dom';

function End () {

  const params = useParams();

  let information = null;
  if (params.wargame === undefined) {
    information = 
        <div className="main-information">
          So, this will be a summary page of my project. I feel like I've learnt a lot but at the same time I could've definitely spent more time going through more CTF's and exploring more strategies and solutions. On the side panel, these will redirect you to what I've learnt from each wargame and also just some random comments I might have about them. The process overall was quite enjoyable, albeit some parts were tedious, especially this write up :/.<br/><br/>

          But yes, anyways I'll save the reflection to that 2 page report thingy that I still have to do.<br/><br/><br/><br/>

          A little quick honorable mention to the levels in the wargame that were basically just blacklisting things you could do. Throughout this course, this has come up so much and I love seeing this recurring theme. <br/><br/><br/><br/>

          Also, those skills on the side bar, it's not too important now but I originally intended to highlight the ones that were relevant to solving each level but I very clearly did not do that. But yeah I thought it would've been a nice way to show what's needed to solve each level.
        </div>
  }else if (params.wargame === "leviathan") {
    information = 
        <div className="main-information">
          <h3><u>
            Leviathan:<br/>
          </u></h3>
          Okay, so what did I learn from this wargame. I think out of all of them this one was probably the most instructive. Some of the other ones just felt like you learn niche pieces of information but this one I learnt more strategies, techniques and just overall mindset.<br/><br/>

          To start off with, in terms of technical stuff, I feel a lot more comfortable using some of the commands. `strings`, `ltrace`, `strace`, `gdb`, `objdump` etc. are just things I wouldn't really use outside of this context. But after going through them I feel quite comfortable in using them, not to say I'm an expert but I feel confident that I have enough of a handle on them that I could read documentation for them to suit my needs in the future (given the problem isn't crazy hard). I also learnt some general tricks, not really specific to Leviathan, but I just happened to learn while doing this wargame, the most notable is the command `mktemp -d`. This is by no means some hidden command, but I just never used it and I've always just made temp files called "temp.[some_extension]", but this way is a lot more efficient and is probably quite useful when running bash scripts. I can make a temporary directory and chuck random files there, AMAZING!!! On top of this, from looking at gdb and objdump stuff, basically just assembly code, it scares me a lot less. I understood general things from assembly because of COMP1521, but I feel like if you gave me like a month to analyse the assembly code of a relatively simple file, I COULD DO IT! Which I am happy with :&#40;.<br/><br/>
            
          Besides that, I also learnt more general stuff like reading documentation more carefully. Most of these wargames are done in C, and the C language does have a lot of exploitable features, given it's history and relatively lower level nature. As such, when tackling wargames I think an important aspect is reading through the documentation of function calls seen in the ltrace. And pairing with that, using input that the program doesn't expect! It is not uncommon that vulnerabilities arise from the programmer assuming the user will use their program correctly. This assumption leads to them not accounting for these edge cases. In terms of mitigation, it's kind of a moot point since most programs these days aren't coded in C, so these are kind of just more instructive and academic, rather than real world applicable. But the idea of reverse engineering a program does come up in real world, the most important thing is probably don't hard code your values, and this was seen very early on in the levels when they stopped doing that. 
        </div>
  } else if (params.wargame === "natas") {
    information = 
        <div className="main-information">
          <h3><u>
            Natas:<br/>
          </u></h3>
          This wargame probably had the most diversity in terms of things learnt. Since the wargame is web-browser based there is a lot of things to cover. Starting from reading basic HTML and looking through the file system of the webpage, then it delves into features of the website, cookies - authentication and persistence, to referers and robots.txt files which deals with web crawlers. Then it goes onto more technical stuff, reading and using PHP code on a website to give it functionality but also exploitable entry points, then manipulating database queries with SQL injection, and I kinda stopped there 😅. <br/><br/>

          But yes, lots of things to be learnt. I think some of the earlier stuff about the featuers of the website were quite interesting to me, I honestly did not know about them, or if I had, I forgotten about them. Reading through the walkthroughs and seeing them talk about robots.txt files and referers sent me into like a very shallow rabbit hole of just researching what they are and what the point of them was. The robots.txt file in particular, since referers are kind of intuitive. To put it shortly, robots.txt files basically tell web-crawlers which URLs they can and cannot access. This is done for a few reasons, an important one being as to not overload your site with requests. What are web-crawlers? They are just little bots that roam the web and index stuff so that we know what the website is about, so when you search something up on Google, the correct thing pops up. Or at least something like that. Referers as mentioned are quite intuitive, I just didn't really know that sites had them and that we could manipulate them with a chrome extension. Referers just tell the website how they got to your website, this is mostly important for data analysis. You can figure out who are your friends by seeing which website redirects people to your website the most :DD (that's like an online kdrama in the making).<br/><br/>

          Stuff like cookies and authentication I kind of already knew because the idea pops up a lot in many other courses. Cookies are basically the reason why if you're logged into something and you refresh you can don't have to log in again. It's like a mini temporary ticket associated with your account so the database knows who you are. If someone gets a hold of your cookie before you logout (invalidate the cookie), this could be bad as we've seen in the XSS wargames (those were actually really fun and I imagine would probably maybe come up in the later parts of this wargame if I got to it).<br/><br/>

          The technical stuff like SQLi and PHP stuff were very interesting. I've never dealt with PHP before and I can kind of see why? Although I don't know much about these types of languages the exploits they showed in this wargame kind of show that PHP might be a bit outdated. To avoid a lot of these entry points the input will probably need to be sanitised to make sure nothing malicious gets passed through. In similar essence, SQLi is great but a lot of the queries need to be sanitised or passed in differently. I don't know if PHP can do it but other languages can make it so that the query gets passed in as an argument so you can't really manipulate it without the function screaming at you. 
        </div>
  } else if (params.wargame === "krypton") {
    information = 
    <div className="main-information">
          <h3><u>
            Krypton:<br/>
          </u></h3>
          Honestly, I don't think I learnt a whole lot from this besides just getting exposed more to cryptography in practice. Although the levels weren't the most engaging thing ever, the structure was quite good from a informative standpoint. It starts with very easy ciphers that you can literally just decode with a decoding function, or a relatively simple algorithm. Then, slowly, there are restrictions on the ciphers which make things more difficult. The wargame really highlights the importance of keeping secrets safe, but also that brute force methods will still mostly work. This kind of brings home a point brought up in lectures, that we don't necessarily need to make a cypher thats unbreakable, rather, we just need a cypher that takes a long time to solve. If something takes a long time to brute force through that's like good enough for the most part. And these exercises basically takes you through that gradual development of removing information, such that the cypher is still crackable but it'll just take longer.<br/><br/>

          Just to reiterate, the main exploit of these wargames is that they are brute forceable, and smart people have already written up web-applications or softwares that can break these cyphers. The way you can make cyphers harder to crack is basically remove patterns and information from the hacker. For example, if you have a substitution cypher or a shift cypher or something similar, don't use the same key for each letter. Using a rotation like a Vignere cypher is better, using a random key like a one time pad is better. And don't share your secrets!!
        </div>
  }

  return (
    <div className="wargame">
      <div className="div">
        <div className="overlap-group">
          <div className="wargame-block" />
          <div className="rectangle" />
          <div className="rectangle-2" />
          <div className="text-wrapper">The End</div>
          {information}
          <div className="element">
            <Link className="link" to={"/end/leviathan"}>
              L<br/>e<br/>v
            </Link>
            <br/><br/>
            <Link className="link" to={"/end/krypton"}>
              K<br/>r<br/>y
            </Link>
            <br /><br/>
            <Link className="link" to={"/end/natas"}>
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
            Using brain<br/><br/>
            Terminal commands<br/><br/>
            `$strings` command<br/><br/>
            `$ltrace` command<br/><br/>
            `$trace` command<br/><br/>
            Reading more documentation<br/><br/>
            Utilising online resources<br/><br/>
            Utilising online resources<br/><br/>
            Brute force<br/><br/>
            GDB<br/><br/>
            HTML knowledge<br/><br/>
            PHP<br/><br/>
            SQLi<br/><br/>
        </div>
      </div>
    </div>
  );
};

export default End;