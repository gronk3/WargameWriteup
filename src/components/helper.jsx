import React from "react";
import HTMLComment from 'react-html-comment';

import "./style.css";
import Lev0_1 from "../assets/leviathan0_1.png"
import Lev1_1 from "../assets/leviathan1_1.png"
import Lev1_2 from "../assets/leviathan1_2.png"
import Lev1_3 from "../assets/leviathan1_3.png"
import Lev1_4 from "../assets/leviathan1_4.png"
import Lev2_1 from "../assets/leviathan2_1.png"
import Lev2_2 from "../assets/leviathan2_2.png"
import Lev2_3 from "../assets/leviathan2_3.png"
import Lev2_5 from "../assets/leviathan2_5.png"
import Lev2_6 from "../assets/leviathan2_6.png"
import Lev2_7 from "../assets/leviathan2_7.png"
import Lev3_1 from "../assets/leviathan3_1.png"
import Lev4_1 from "../assets/leviathan4_1.png"
import Lev4_2 from "../assets/leviathan4_2.png"
import Lev5_1 from "../assets/leviathan5_1.png"
import Lev6_1 from "../assets/leviathan6_1.png"
import Lev6_2 from "../assets/leviathan6_2.png"
import Lev6_3 from "../assets/leviathan6_3.png"
import Lev6_4 from "../assets/leviathan6_4.png"
import Lev6_5 from "../assets/leviathan6_5.png"
import Lev6_6 from "../assets/leviathan6_6.png"
import Kryp0_1 from "../assets/krypton0_1.png"
import Kryp1_1 from "../assets/krypton1_1.png"
import Kryp1_2 from "../assets/krypton1_2.png"
import Kryp2_1 from "../assets/krypton2_1.png"
import Kryp3_1 from "../assets/krypton3_1.png"
import Kryp3_2 from "../assets/krypton3_2.png"
import Kryp3_3 from "../assets/krypton3_3.png"
import Kryp3_4 from "../assets/krypton3_4.png"
import Kryp3_5 from "../assets/krypton3_5.png"
import Kryp3_6 from "../assets/krypton3_6.png"
import Kryp3_7 from "../assets/krypton3_7.png"
import Kryp3_8 from "../assets/krypton3_8.png"
import Kryp3_9 from "../assets/krypton3_9.png"
import Kryp3_10 from "../assets/krypton3_10.png"
import Kryp3_11 from "../assets/krypton3_11.png"
import Kryp3_12 from "../assets/krypton3_12.png"
import Kryp4_1 from "../assets/krypton4_1.png"
import Kryp4_2 from "../assets/krypton4_2.png"
import Kryp5_1 from "../assets/krypton5_1.png"
import Kryp5_2 from "../assets/krypton5_2.png"
import Kryp5_3 from "../assets/krypton5_3.png"
import Kryp5_4 from "../assets/krypton5_4.png"
import Kryp5_5 from "../assets/krypton5_5.png"
import Kryp6_1 from "../assets/krypton6_1.png"
import Natas4_1 from "../assets/natas4_1.png"
import Natas5_1 from "../assets/natas5_1.png"
import Natas5_2 from "../assets/natas5_2.png"
import Natas6_1 from "../assets/natas6_1.png"
import Natas6_2 from "../assets/natas6_2.png"
import Natas7_1 from "../assets/natas7_1.png"
import Natas8_1 from "../assets/natas8_1.png"
import Natas8_2 from "../assets/natas8_2.png"
import Natas9_1 from "../assets/natas9_1.png"
import Natas9_2 from "../assets/natas9_2.png"
import Natas9_3 from "../assets/natas9_3.png"
import Natas11_1 from "../assets/natas11_1.png"
import Natas11_2 from "../assets/natas11_2.png"
import Natas11_3 from "../assets/natas11_3.png"
import Natas15_1 from "../assets/natas15_1.png"
import Natas15_2 from "../assets/natas15_2.png"
import Natas15_3 from "../assets/natas15_3.png"



export const CurrInformation = ({wargame, level}) => {

  let information = null;
  if (wargame === "leviathan") {
    if (level === '0') {
      information = <Leviathan0></Leviathan0>;
    } else if (level === '1') {
      information = <Leviathan1></Leviathan1>;
    } else if (level === '2') {
      information = <Leviathan2></Leviathan2>;
    } else if (level === '3') {
      information = <Leviathan3></Leviathan3>;
    } else if (level === '4') {
      information = <Leviathan4></Leviathan4>;
    } else if (level === '5') {
      information = <Leviathan5></Leviathan5>;
    } else if (level === '6') {
      information = <Leviathan6></Leviathan6>;
    } else if (level === 'end') {
      information = <LeviathanEnd></LeviathanEnd>;
    }
  } else if (wargame === "krypton") {
    if (level === '0') {
      information = <Krypton0></Krypton0>;
    } else if (level === '1') {
      information = <Krypton1></Krypton1>;
    } else if (level === '2') {
      information = <Krypton2></Krypton2>;
    } else if (level === '3') {
      information = <Krypton3></Krypton3>;
    } else if (level === '4') {
      information = <Krypton4></Krypton4>;
    } else if (level === '5') {
      information = <Krypton5></Krypton5>;
    } else if (level === '6') {
      information = <Krypton6></Krypton6>;
    } else if (level === 'end') {
      information = <KryptonEnd></KryptonEnd>;
    }
  } else if (wargame === "natas") {
    if (level === '0') {
      information = <Natas0></Natas0>;
    } else if (level === '1') {
      information = <Natas1></Natas1>;
    } else if (level === '2') {
      information = <Natas2></Natas2>;
    } else if (level === '3') {
      information = <Natas3></Natas3>;
    } else if (level === '4') {
      information = <Natas4></Natas4>;
    } else if (level === '5') {
      information = <Natas5></Natas5>;
    } else if (level === '6') {
      information = <Natas6></Natas6>;
    } else if (level === '7') {
      information = <Natas7></Natas7>;
    } else if (level === '8') {
      information = <Natas8></Natas8>;
    } else if (level === '9') {
      information = <Natas9></Natas9>;
    } else if (level === '10') {
      information = <Natas10></Natas10>;
    } else if (level === '11') {
      information = <Natas11></Natas11>;
    } else if (level ==="10") {
      information = <Natas10></Natas10>;
    } else if (level === '11') {
      information = <Natas11></Natas11>;
    } else if (level === '12') {
      information = <Natas12></Natas12>;
    } else if (level === '13') {
      information = <Natas13></Natas13>;
    } else if (level === '14') {
      information = <Natas14></Natas14>;
    } else if (level === '15') {
      information = <Natas15></Natas15>;
    } else if (level === 'end') {
      information = <NatasEnd></NatasEnd>;
    }
  }
  return (<>{information}</>)
};


//=================================================================================================================
// LEVIATHAN
//=================================================================================================================

const Leviathan0 = () => {
  return (
    <div className="main-information">
      <div>
        Level 0:<br /><br />
        Looking through the root directory there are no files. That can't be right hmm. Doing ls -a reveals hidden files (files that start with a "."). This reveals a directory called .backup. This isn't totally unusual but lets just go check it out. Inside is a html file called bookmarks. Opening it up, it just seems like a bunch of normal html stuff. I tried to open the file with live server but it didn't let me. The next best thing to do is just to search through the file for anything obvious. Because I don't want to actually scan through the website I ran cat on the file and piped it with grep and just tried random key words like "flag". The second word I tried was "leviathan and that revealed one matching line", which so happened to contain the password for the next level.
      </div>
      <br /><br />
      <img src={Lev0_1} alt="" />
    </div>
  );
};

const Leviathan1 = () => {
  return (
    <div className="main-information">
      <div>
        Level 1:<br /><br />
        Inside this root directory theres an executable file called "check". Running this program it seems it requires a password. From doing some of the earlier CTFs of the course, my brain is getting more accustomed to calling upon ltrace/strace in these types of situations. If things get dire I will look further into things like GDB. But for now running it with ltrace reveals that our password is "sex", very creative.
      </div>
      <br />
      <img src={Lev1_1} alt="" />
      <br /><br />
      <div>
        After entering the correct password I get the following trace:
      </div>
      <br />
      <img src={Lev1_2} alt="" />
      <br /><br />
      <div>
        Upon searching up what geteuid and setreuid were (because u can never be too sure, even when it's like in the name), it seems that the program basically gave me access to another user. I'm an impostor. Opening up another terminal verifies this.
      </div>
      <br />
      <img src={Lev1_3} alt="" />
      <br /><br />
      <div>
        With struggle, it became clear that I'm impersonating a user for the next level, and on the website one of the only information they give is that the passwords for the levels are stored in the "/etc/leviathan_pass" directory. But users can only access the password for the level they are on. But since   I'm now a user for level 2, I can see that password.
      </div>
      <br />
      <img src={Lev1_4} alt="" />
      <br /><br />
      <div>
        (don't mind the horrendous way I did it, I got there eventually :P)
      </div>

    </div>
  );
};


const Leviathan2 = () => {
  return (
    <div className="main-information">
      <div>
        Level 2:<br /><br />
        For this level there's a executable file called printfile. Presumably it prints out the file. Trying it on printfile itself prints out some indiscernible stuff, which seems like binary code which would make sense. My first instinct is to try and print out the passwords from the files in  "/etc/leviathan_pass", similar to the previous level. But this runs into its own errors:
      </div>
      <br />
      <img src={Lev2_1} alt="" />
      <br /><br />
      <div>
        Leviathan2 says permission denied even though I could normally print out the contents of that file which is interesting. And any other file that I naturally don't have permission to says I cannot have that file. 
        I then tried using ltrace and strace as my default behaviour. ltrace does not reveal any information.
      </div>
      <br />
      <img src={Lev2_2} alt="" />
      <br /><br />
      <div>
        strace shows a lot more, but whether its helpful is beyond me as most of it seems like gibberish to me.
      </div>
      <br />
      <img src={Lev2_3} alt="" />
      <br /><br />
      <div>
        The only real other thing I thought might've been worth trying is using the "strings" command. Notably when running it for /etc/leviathan_pass/leviathan2, it actually does print out the current levels password, but when running it for /etc/leviathan_pass/leviathan 3, or something I don't have access to, it doesn't reveal anything of importance. <br />
        So with no where to go and nothing else in my arsenal, I'm going to watch some videos on reverse engineering to learn some more tools that might help in this problem (safe to say as of now I am stuck!). <br /><br />
        Okay after watching a few videos it became apparent that some of these tools are probably not relevant for this level (?). Mainly because they require downloading stuff on a local setup, but since all these tasks are done through ssh I can't actually use those softwares. So, I've decided to consult a walkthrough for this specific level. I read through two walkthroughs for this level, and they seem to do very similar things. The big thing they did differently to me is they looked very deep into the semantics of how the functions, seen in the ltrace, were used, whereas I just glossed over them for the most part.
      </div>
      <br />
      <div>
        I think before seeing the walkthrough for this my brain would not have been primed to solve it in this way. I'm realising more that a good thing to try is passing input that the program might not expect and seeing the behaviour of it. Here the program wants one file, so lets see what happens when we give it more! We see that not suprisingly it only checks the first file and then it prints out the first file.
      </div>
      <br />
      <img src={Lev2_5} alt="" />
      <br /><br />
      <div>
        The cool step I really liked was checking what happens when we pass it an argument that has a space in it. So, lets make a file with a space. The guide showed that we can first make a temp dir and place the file in there. I have also not seen/used that before so that is actually kind of cool. Seems VERY useful in just everyday life, rather than manually making an ugly temp file then deleting it later.
      </div>
      <br />
      <img src={Lev2_6} alt="" />
      <br /><br />
      <div>
        What we find when we run the program is that it will check the full file name to see if its valid and we have permissions etc. Then we will run cat only on the file up to the space!!! And from this point I could see what they were trying to do, they wanted to make a file up to the space that somehow contained the contents of the flag for the next level and print that out. The way they did that was through a symbolic link. 
        <br /> <br />
        And thats it flag found!!!!!
        <br /><br />
        I think I have noticed that for the leviathan levels, it seems as of now I have most of the tools required to solve the problems it's just a matter of thinking and approach.  I have added to my repertoire of tools that I will try looking deeper into suspicious function calls, as well as trying to use input that the program does not necessarily expect!
      </div>
      <br />
      <img src={Lev2_7} alt="" />

    </div>
  );
};

const Leviathan3 = () => {
  return (
    <div className="main-information">
      <div>
        Level 3:<br /><br /> 
        Okay so I don't know if my brain is actually getting better at this or if this was just an easy level. This felt very standard. I started off by just running the program to see what I was dealing with. It asked for a password. I gave it a password. And not suprisingly, it was wrong. Then my best friend ltrace revealed that the password was "snlprintf" from a suspicious strcmp. After rerunning the program and entering that password I was in. I ran the command "whoami" just to see what user I was, and it seemed I was impersonating the user for the next level, so I simply just read the file containing the passcode. YIPPEEEE!!!
      </div>
      <br />
      <img src={Lev3_1} alt="" />
    </div>
  );
};

const Leviathan4 = () => {
  return (
    <div className="main-information">
      <div>
        Level 4:<br /><br /> 
        Going through standard procedure ls the file, nothing showed so I reran it with the flag -a which revealed a hidden directory called .trash. Inside that directory revealed an executable file called bin. Running the program just spat out binary numbers. Running it with ltrace showed that we actually ran the function fopen on the file containing the flag
      </div>
      <br />
      <img src={Lev4_1} alt="" />
      <br /><br />
      <div>
        So my first thought was that the numbers represent the ascii values of the characters. I don't think anyone expects me to translate this by hand so I just passed it into a binary to ascii converter and got a random string
      </div>
      <br />
      <img src={Lev4_2} alt="" />
      <br /><br />
      <div>
        This looks like it could be the flag so I'll put this in and see if it takes me to the next level. An important thing to note as to why it really does seem like the flag is that all the characters are alphanumeric, which is the format of the previous flags, and its quite unlikely that there are no other weird characters flying around.<br /> <br />
        Can confirm that was the flag :&#41;
      </div>
      <br />
    </div>
  );
};

const Leviathan5 = () => {
  return (
    <div className="main-information">
      <div>
        Level 5:<br /><br /> 
        Executable file called leviathan5. Running it shows that it can't find a preset file. Runnning it with ltrace reveals we are trying to run fopen on a file called "/tmp/file.log" and read that file.
        So it seems very similar to the earlier level where all we need to do is create a symbolic link called "/tmp/file.log" that links with the password for the next level
        And the easy part is that it doesn't even do any checks
      </div>
      <br />
      <img src={Lev5_1} alt="" />
      <br /><br />
      <div>
        This seems oddly straightforward A LOT easier than the earlier question which is weird to me??<br /><br />
        Okay I tried to do some suspicious loop holing, and create a sym link between the tmp file and the file containing the password for the next next level. But it seems to be built against that. Also, when running the program with ltrace it will automatically not be able to find the program, so I can't see what happens after we read the file. I feel like what I tested would be the natural response to most people so it makes sense that they would consider that. Oh well seems like that's the end of this level onto the next!!
      </div>
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <a href="https://cdn.animaapp.com/projects/6544e8c887304b74da313acb/releases/65480ab9fa5e4242ace92ada/img/cat2-1.png">Flag</a>
    </div>
  );
};

const Leviathan6 = () => {
  return (
    <div className="main-information">
      <div>
        Level 6:<br /><br /> 
        LUCKY LAST LEVEL!!!!<br/>
        Binary executable file that when runs says it needs a 4 digit code. Just going through the motion we run it through ltrace and it shows that we use atoi, which presumably takes our 4 digit number and turns it into a string. And just from context, we probably are going to be using that number to compare with some prechosen number. If the numbers match, then we continue. But as of now, they are not matching.<br/><br/>
      </div>
      <br />
      <img src={Lev6_1} alt="" />
      <br/><br/>
      <div>
        Just before anything else happens, let's just play around with the program for a bit, by trying to input weird stuff that the program might not expect and see what happens.<br/><br/>

        Okay after playing around with different inputs, giving it characters, a number with less than 4 digits, a number with more than 4 digits, more than one input, it basically all has the same response and doesn't give any extra information.<br/><br/>
        
        As it stands though, if the program really does want to match a 4 digit number, let's just brute force run all possible 4 digit numbers. After running a small script (not really a script though? a terminal command?)<br/> 
        `for i in &#123;0..9999&#125;;do ./leviathan6 "$i";done;`,<br/> 
        we have access to user leviathan7, and as we've seen we can just simply read out the flag.
      </div>
      <br />
      <img src={Lev6_2} alt="" />
      <br/><br/>
      <div>
        But of course there is no way this was the intended solution (right?), yeah probably not. In that case, let me read through a walkthough to see how they <i>actually</i> wanted us to do this. It seems they used GDB, which is a very common tool in reverse engineering problems. Okay I can do that, let me have a look. I must preface, because I can't remember (and I don't want to go back and look) but I don't reaaaally know how to use GDB, and I know kind of a small but not really amount of assembly from COMP1521. 
      </div>
      <br />
      <img src={Lev6_3} alt="" />
      <br />
      <img src={Lev6_4} alt="" />
      <br/><br/>
      <div>
        So, looking through main there are some things I do recognise. There are function calls to geteuid and setreuid which I recognise means that we will basically be given impostor powers if we succeed somewhere. What else? There are some some stuff closer to the top, which seems like the check to see that there is one command line argument and it prints and exits if we did bad things. The important part seems to be line +84, where we compare two registers and the line right after says if they're not equal (jne) (omg I remember some stuff 😎). So, basically we want to compare these two registers here. Since I don't really know how to do that I'm just going to read the walkthrough and search it up.<br/><br/>

        So, what we can do is run gdb with the following command:<br/>
        `$gdb --args leviathan6 0000`<br/>
        this allows us to run it with arguments, which tbh I didn't really know how to do.<br/><br/>

        Then the command `$disassemble main`, will give us the assembly code, which I've just been using `$objdump -d` to do. We can then put a breakpoint at the address we want, namely the line that compares the two values `$break *0x0804922a` (* means pointer, for people that only work with Python :p, no flame, don't hurt me). Then, running the programming with `$run`, will make it so the program stops at this point, of which we can now analyse the program's state. The command `$info registers`, tells us what is stored inside each register. 
      </div>
      <br />
      <img src={Lev6_5} alt="" />
      <br /><br />
      <div>
        Of which we can see the register $ebp holds the address 0xffffd588. But the assembly code shows that we actually want -0xc(%ebp), which is the register $ebp - 0xc, once again, honestly I did not know that was the syntax for subtracting things, but I guess it makes sense. So, I could manually calculate the address but why bother when we don't have to. The only thing left to do is to see what value is stored at that address, which we can do with the command `$x`, which means examine.
      </div>
      <br />
      <img src={Lev6_6} alt="" />
      <br /><br />
      <div>
        And translating this to a decimal number, we see that the 4 digit code they wanted was 7123. YIPPEEEEE!!!!<br/><br/>

        Note: the format `$&#123;command&#125;`, the only thing I'm typing in is the &#123;command&#125;. :&#41;
      </div>
    </div>
  );
};

const LeviathanEnd = () => {
  return (
    <div className="main-information">
      <div>
        COMPLETED.<br/><br/>
        Here are references to things I used throughout this:<br/><br/>
        Videos used to learn stuff about reverse engineering. Mostly covered stuff on Ghidra and IDA pro. <a href="https://www.youtube.com/watch?v=gh2RXE9BIN8">Video 1</a> and <a href="https://www.youtube.com/watch?v=RCgEIBfnTEI&t=644s">Video 2</a>.<br/>
        Level 3: Walkthough guides cause I got stuck cause I was bad. <a href="https://mayadevbe.me/posts/overthewire/leviathan/level3/">Walkthrough 1</a> and <a href="https://jhalon.github.io/over-the-wire-leviathan/">Walkthrough 2</a>.<br/>
        Level 4: <a href="https://www.rapidtables.com/convert/number/binary-to-ascii.html">Binary code to ascii converter.</a><br/>
        Level 6: <a href="https://mayadevbe.me/posts/overthewire/leviathan/level7/">Walkthrough</a> used.<br/><br/>

        This has probably been my favourite wargame so far. (This was the first one I did, but this is like kinda written later after I've done more.) The challenges were very fun, and it really did make me feel like I was a hacker-ish, not just someone making online resources solve it for me (*COUGH* KRYPTON *COUGH*).<br/><br/>
        A few of the levels were actually quite challenging for my newbie brain, but it was great fun and it never really felt frustrating. If I got stuck for a while, I knew it just meant that when I got to have a look at the solution I would learn something I found genuinely interesting and enjoyable. The challenges themselves also weren't incredibly difficult. Would definitely recommend this wargame to anyone!! Even people that haven't done anything like this before (would probably recommend getting used to the terminal first BUT STRAIGHT AFTER I would recommend this :&#41;).
      </div>
    </div>
  );
};

//=================================================================================================================
// KRYPTON
//=================================================================================================================

const Krypton0 = () => {
  return (
    <div className="main-information">
      <div>
        Level 0:<br /><br /> 
        Pretty easy not much thinking involved, can simply just run the decode function to decode our message. Probably do not encode any important secrets/messages with this cause even I could break it.<br/><br/>

        Note that it's relatively obvious this is a base64 encoding since they pad out their strings with equal signs.
      </div>
      <br />
      <img src={Kryp0_1} alt="" />
    </div>
  );
};

const Krypton1 = () => {
  return (
    <div className="main-information">
      <div>
        Level 1:<br /><br /> 
        Also not too hard, I just searched up a shift cypher and let it do the solving for me.
      </div>
      <br />
      <img src={Kryp1_1} alt="" />
      <br /><br />
      <div>
        Alternatively, if I didn't have access to this I could just brute force test each shift value in the terminal using 'tr'. This would be quite tedious though.
        This is what it would look like for the correct shift
      <br />
      <img src={Kryp1_2} alt="" />
      </div>
    </div>
  );
};

const Krypton2 = () => {
  return (
    <div className="main-information">
      <div>
        Level 2:<br /><br /> 
        This involves solving a caeser cipher, luckily they give us the keyfile which is basically how the caeser cipher encrypts our message, as well as an executable function that will encrypt any file we choose using the given keyfile
        So all we have to do is run the encrypt executable on all the letters to see where they map to
        Then we can just match the encrypted letters with the original letters to get back our original message
      </div>
      <br />
      <img src={Kryp2_1} alt="" />
      <div>
        This level really emphasises how important it is to not let anyone know the key if your trying to hide something!!
      </div>
    </div>
  );
};

const Krypton3 = () => {
  return (
    <div className="main-information">
      <div>
        Level 3:<br /><br /> 
        The previous level really emphasises how important it is to not let anyone know the key if your trying to hide something
        In this level, we perform a similar task, solving a substitution cipher but this time we are not given the key.
        Before doing it this will undoubtedly make the task noticeably harder, but still not impossible<br/><br/>
        Instead of a key, they have provided intercepted messages. Since the substitution cipher uses the same letter mapping, having multiple intercepted messages reveals information about the letters given the messages have context (here the context is that the messages are in American English). So, with this we can start to analyse the frequency of letters since certain letters pop up more frequently in English text.<br/><br/>
        I copied a <a href="https://askubuntu.com/questions/593383/how-to-count-occurrences-of-each-character#:~:text=Do%20a%20for%20loop%20for,instances%2C%20and%20print%20the%20result.&text=This%20will%20count%20all%20ANSI,does%20not%20use%20ignore%20case">bash script</a> which basically given a file will print out the frequencies of each letter<br/><br/>
        Running the program on the interepted message I get the results
      </div>
      <br />
      <img src={Kryp3_1} alt="" />
      <br />
      <img src={Kryp3_2} alt="" />
      <br />
      <img src={Kryp3_3} alt="" />
      <div>
        Now im going to search up a table for the frequency of letters and compare it with our values.
      </div>
      <br />
      <img src={Kryp3_4} alt="" />
      <div>
        Okay but I found this was a bet tedious to look up, and a nicer representation would have everything lined up
      </div>
      <br />
      <img src={Kryp3_5} alt="" />
      <div>
        So lets try this again
      </div>
      <br />
      <img src={Kryp3_6} alt="" />
      <br />
      <img src={Kryp3_7} alt="" />
      <br />
      <img src={Kryp3_8} alt="" />
      <div>
        The message we are trying to decode is:<br/>
        KSVVW BGSJD SVSIS VXBMN YQUUK BWNCU ANMJS<br/><br/>
        
        So very similar to that one exercise way back when, I'm going to just basically do an informed trial and error
        From the data it seems very likely that e has been encrypted to s (e -&#62; s), since the frequency of s is consistently the highest which checks out with our real world data.<br/><br/>
        This was the bash script btw
      </div>
      <br/>
      <img src={Kryp3_12} alt="" />
      <div>
        It was at this point where I got stuck for a while cause I could not find/think of a 5 letter word that has the letter e in the 1,3,5 position. That's because there is no word like that.........<br/><br/>
        It then became clear that the message is probably not just a bunch of 5 letter words (oops)
        So with that in mind I just carried on looking at the frequencies<br/><br/>
        But first I combined all the files together so I could just look at all of instead of 3 different graphs, not sure if this is better but I'm just going to try and see where it leads<br/><br/>
      </div>
      <img src={Kryp3_9} alt="" />
      <div>
        so just blindly following the table we have that q-&#62;t, j-&#62;a, u-&#62;o, b-&#62;i
        so filling in this for now lets see what we get<br/><br/>
        e | t | a | o | i | n | s | h | r | d | l | c | u | m | w | f | g | y | p | b | v | k | j | x | q | z <br/><br/>
        s | q | j | u | b | n | g | c | d | z | v | w | m | y | t | x | k | e | l | a | f | i | o | r | h | p <br/><br/>
        Okay so this is absolute gibberish<br/><br/>
        KSVVW BGSJD SVSIS VXBMN YQUUK BWNCU ANMJS<br/><br/>
        GELLC ISEAR ELEKE LFIUN MTOOG INCHO BNUAE<br/><br/>
        which does make sense due to the small sample of letters and the relatively close frequencies between two letters
        so I could keep trying
        but im just going to search up a substituion solver and see if it can work it out for me
        Placing in the first intercepted message into a random substitution solver yields this
      </div>
      <br/>
      <img src={Kryp3_10} alt="" />
      <br/>
      <br/>
      <div>
        even though they didnt do anything about the spaces there are things that actually look like words in here
        reading the first line it says "in cryptograph caesar cipher also known as a caesar cipher the shift cipher caesars code or casear shift..."
        so some words seem intelligible
        lets try chucking in our encoded message see if it does anything
      </div>
      <br/>
      <img src={Kryp3_11} alt="" />
      <br/><br/>
      <div>
        "Well done the level four password is brute"<br/><br/><br/>
        level made me sad but yay we have the next password
      </div>
    </div>
  );
};

const Krypton4 = () => {
  return (
    <div className="main-information">
      <div>
        Level 4:<br /><br /> 
        This is given to be a Vigenère Cipher, with key length 6 and we have intercepted two pieces of information. Once again, this is another improvement on the last cipher. The other one used the same mapping for each character, i.e. if a mapped to b, then a will ALWAYS map to b.<br/><br/>
        For a Vigenère Cipher, the mapping basically rotates based off a key length. For a key length 'x' we will basically have to deal with x potentially unique mappings, this obviously makes the problem harder<br/><br/>
        But for a hacker desperately trying to crack a message this can still be decoded fairly reasonably, especially if we are given the key length<br/><br/>
        So, now I could try doing what I did before and fail miserably but im going to try to find a decoder online, hopefully there is one<br/><br/>
        Similar to the previous level im going to place the encoded message before the intercepted message and just in case ill pad it out with random letters
      </div>
      <br />
      <img src={Kryp4_1} alt="" />
      <br /><br />
      <div>
        Doing the same with the other intercepted message reveals the same password
      </div>
      <br />
      <img src={Kryp4_2} alt="" />
      <br /><br />
      <div>
        So the password should be CLEARTEXT hopefully 🙏
      </div>
    </div>
  );
};

const Krypton5 = () => {
  return (
    <div className="main-information">
      <div>
        Level 5:<br /><br /> 
        This level progresses to the next level by basically not giving us the key length. So I am definitely NOT going to do this level manually. I'm going to use the same website that I used for the last program. This website needs a key length as input (can be a range) and some input. So using the intercepted message again and using a relatively larger range I'm going to run it and see what happens
      </div>
      <br />
      <img src={Kryp5_1} alt="" />
      <br /><br />
      <div>
        We get the following information
      </div>
      <br />
      <img src={Kryp5_2} alt="" />
      <br /><br />
      <div>
        the keyword "keylength" already seems convincing but just in case it gave us something more ambiguous Im going to run the same thing with the other two intercepted file and see if it produces the same keyword, if it does we can be pretty sure that the keyword is correct
        For the second one so far so good
      </div>
      <br />
      <img src={Kryp5_3} alt="" />
      <br /><br />
      <div>
        Just in case though we will also run the last one but this is basically solved at this point
      </div>
      <br />
      <img src={Kryp5_4} alt="" />
      <br /><br />
      <div>
        AMAZING!!!<br/><br/>
        Now LETS DECODE OUR MESSAGE!!!<br/><br/>
        Since our keyword is keylength it has key length 9, so I'll just pad out the encoded message. I could at this point probably do it manually with all this information I have, but lets just keep using this :&#62;<br/><br/>
        And we get that our password is "RANDOM"<br/><br/>
      </div>
      <br />
      <img src={Kryp5_5} alt="" />
    </div>
  );
};

const Krypton6 = () => {
  return (
    <div className="main-information">
      <div>
        Level 6:<br /><br /> 
        LAST LEVEL!!!!!!!!!!!<br/>
        Honestly, at this point the Kyrpton wargames and decoding messages isn't really appealing to me anymore. So I decided to just go through a guide and see what I could learn from this and the process and the specific cypher.<br/><br/>

        So this type of cypher uses a stream cypher as opposed to a block cypher. You can imagine that block cyphers encode messages in blocks or many characters at a time, whereas streams encode 1 character at a time. <br/><br/>
        So, thinking about what we've seen so far, the Vignere cypher has to encode one character at a time because it encodes based on a key that cycles around. <br/><br/>
        Apparently it is not uncommon with streams that given our plaintext and our key, we perform and xor on the bytes and the produced value becomes our ciphertext. <br/><br/>

        Okay scratch that again, as I was reading through the walkthrough I thought it made sense and then I tried to explain it and it was clear it did not make sense. But as I was going through I figured it out so it makes sense in my head, but I got to where they got to in a different (arguably more intuitive way).<br/><br/>
        So they give us an example of plaintext, cyphertext and a key and I assume they use the encoding we have to encode the plaintext
        the pattern that ends up happening is u take the plaintext and keytext, and map them character by character to numbers so, A -&#62; 1, B -&#62; 2, C -&#62; 3, etc. if you do that, then add up the values, so the first character of the plaintext, as a number, added with the first character of the keytext, as a number, and if you overflow 26 (out of the alphabet) you just modulo it. Then, you subtract 1 from the sum and turn it back into a character that will be the cipher text<br/><br/>
        So, knowing that if I run the encoded binary executable on a string of A's (plaintext), what's going to happen is I'm going to have my keytext (as a number) + 1 (for the A) - 1 = keytext<br/><br/>
        So I can find the keytext<br/><br/>
      </div>
      <img src={Kryp6_1} alt="" />
      <br /><br />
      <div>
        now using this makeshift formula of <br/>
        plaintext + keytext - 1 = cyphertext <br/>
        and if rearrange for plaintext I have that my <br/>
        plaintext = cyphertext + 1 - keytext<br/><br/>
        here cyphertext is:<br/>
        PNUKLYLWRQKGKBE<br/><br/>
        keytext is:<br/>
        EICTDGYIYZKTHNSIRFXYCPFUEOCKRNEICTDGYIYZKTHNSIRFXYCPFUEOCKRNEICTDGYIYZKTHNSIRFXYCPFUEOCKRNEICTDGYIYZ<br/><br/>
        which can be simplified to just <br/>
        EICTDGYIYZKTHNSIR<br/>
        to match the number of letters in our cypher text.<br/><br/>
        So our plaintext will be:<br/>
        LFSRISNOTRANDOM<br/>
        which is our final password<br/><br/>
        yea so I dont know if I misinterpreted wrong but it makes more sense to me when I don't follow the walkthroughs ive seen<br/>
        They did very similar things, especially testing the encoding with the long string of A's, but either they didnt explain why, or it didnt make sense to me when I went to play around with it. and neither of them used the given example. 
      </div>
    </div>
  );
};


const KryptonEnd = () => {
  return (
    <div className="main-information">
      <div>
        COMPLETED.<br/><br/>
        Here are references to things I used throughout this:<br/><br/>
        Level 1: <a href="https://www.dcode.fr/shift-cipher">Website to decode shift cypher</a><br/>
        Level 3: <a href=" https://askubuntu.com/questions/593383/how-to-count-occurrences-of-each-character#:~:text=Do%20a%20for%20loop%20for,instances%2C%20and%20print%20the%20result.&text=This%20will%20count%20all%20ANSI,does%20not%20use%20ignore%20case">Script to count occurrences of letters, I modified later</a><br/>
        <a href="https://www.guballa.de/substitution-solver">Substitution Solver</a><br/>
        <a href="https://www.guballa.de/substitution-solver">Vigenère Solver</a><br/>
        Level 6: Walkthroughs mentioned - a <a href="https://axcheron.github.io/writeups/otw/krypton/">website</a> and a <a href="https://www.youtube.com/watch?v=uMIJoJehXwk">video</a>.<br/><br/>

        Would not really recommend this wargame. It's like aalriiiight but it was kind of boring. It ended up mostly being search up a decoder online and just chuck it in. I think if anything, the theory behind codes and cyphers is a lot more interesting. Tb to MATH3411. The last level was quite fun though, even though I was mentally checked out at this point, ended (haha cause its the end haha) up being a lot more refreshing than the others. 
      </div>
    </div>
  );
};


//=================================================================================================================
// NATAS
//=================================================================================================================

const Natas0 = () => {
  return (
    <div className="main-information">
      <HTMLComment text="Level 7: 3d636d627735534d744d4464684e324c6e31576176597a59324d57596c52444f685a575a6b5a574f3051324e6a56474d3451544e323879636c4e58596c78575a793969596a46324d784d54596b527a4e6952444d7a63444f344d474f6c52444e31597a4c7a5233596c7032627942334c743932597541486368465762703557597534475a6a39794c364d486330524861" />  
      Level 0:<br/><br/>
      Very easy, read the html to find the password (flag)<br/>
      pw: g9D9cREhslqBKtcA2uocGHPfMZVzeFK6
    </div>
  );
};

const Natas1 = () => {
  return (
    <div className="main-information">
      Level 1:<br/><br/>
      There are other ways to open the html, e.g. f12 or view page source. This is akin to blacklisting, which we know is bad. Don't blaclist.<br/>
      pw: h4ubbcXrWqsTo7GGnnUMLppXbOogfBZ7
    </div>
  );
};

const Natas2 = () => {
  return (
    <div className="main-information">
      Level 2:<br/><br/>
      Looking through the html, there is an image source "files/pixel.png". Clicking on this redirects to the current url + "files/pixel.png", removing the pixel.png reveals a file directory and inside it contains a txt file with the pw :D<br/>
      pw: G6ctbMJ5Nb4cbFwhpMPSvxGHhQ7I6W8Q
    </div>
  );
};

const Natas3 = () => {
  return (
    <div className="main-information">
      Level 3:<br/><br/>
      I really had no idea to do this so I started searching up things like where I can learn things that would basically help me in solving these ctfs and a lot of pages are recommending using a walkthrough to fill in gaps in knowledge (as well as other things). So, taking a glimpse at this level the first thing they did was to check the "robots.txt" file. I have never heard of this so that just seems more impossible to solve this blindly. Upon further research, it seems that some websites use a "robots.txt" file to basically better filter what search engine crawlers can access. From there it was just a matter of looking through the robots.txt file, then looking through the file that was "disabled" and in that<br/>
      pw: tKOcJIbzM4lTs8hbCmzn5Zr4434fGZQm 
    </div>
  );
};

const Natas4 = () => {
  return (
    <div className="main-information">
      <div>
        Level 4:<br/><br/>
        So, I did normal stuff. I played around with the html and looked through the robots.txt file just in case (although I doubt theyd test it twice). And I really couldnt find a way to make it seem like I came from natas5. I even tried actually loading up natas5 and then going to natas4 but alas that didnt work because I couldnt log in obviously. So, after frustrations I consulted a walkthrough. It showed that theres such a thing as a referer. Basically which website referred us to the current website. I presume this information is important for many reasons. Off the top of my head if I was a website itd just be good information to know who was referring people to my website (they would be my friends). Upon further research it seems it is used for analytics, logging, optimized caching, and a lot more. In all honesty it does seem like important information. BUT BACK TO THE QUESTION AT HAND. It seems we can use a chrome extension or something similar to artifically set up our referer. So, downloading the first recommended "referer control" I set it up so the natas4 website will always think we are coming from natas5
      </div>
      <br/>
      <img src={Natas4_1} alt="" />
      <br/><br/>
      <div>
        and this gives us our result "Z0NsrtIkJoKALBCLi5eqFfcRN82Au2oD"
      </div>
    </div>
  );
};

const Natas5 = () => {
  return (
    <div className="main-information">
      <div>
        Level 5:<br/><br/>
        Okay so I remember from when I did 6080, most websites check whether ur logged in and keep u logged in when u refresh through COOKIES 🍪
        So I quickly went back to another website to compare the cookies with our website
        this is what it shows for a previous website
      </div>
      <br/>
      <img src={Natas5_1} alt="" />
      <br/><br/>
      <div>
        And this was what it showed for our current website
      </div>
      <img src={Natas5_2} alt="" />
      <br/><br/>
      <div>
        So I just edited that "loggedin" value to 1, to hopefully mean true and refreshed the page and TADA!<br/>
        flag found "fOIvE0MDtPTgRhqmmvvAOt2EfXR6uQgR"
      </div>
    </div>
  );
};

const Natas6 = () => {
  return (
    <div className="main-information">
      <div>
        Level 6:<br/><br/>
        For this they give some source code that looks different to the source code you would get if you clicked view page source
        Namely it has this extra bit of code
      </div>
      <br/>
      <img src={Natas6_1} alt="" />
      <br/><br/>
      <div>
        After playing around with the POST request stuff for TOOOOO long, trying to see if I could do almost like an SQLi or some stupid equality check that might trick the system I decided to fall back on some of the earlier techniques
        namely, theres a folder that we include, lets have a look inside there
        and it would seem that the password is in there IONWEQNHIOQENOIHNQEOHNAOUINHQE (this was mild frustration not the password, the actual password is below) 
      </div>
      <img src={Natas6_2} alt="" />
      <br/><br/>
      <div>
        pasting this as our password we get that the flag is "jmxSiH3SP6Sonf8dv66ng8v1cIEdjXWr"
      </div>
    </div>
  );
};

const Natas7 = () => {
  return (
    <div className="main-information">
      <div>
        Level 7:<br/><br/>
        Okay this was a quick one, the page shows two links to a home page and an about page (relatively standard with websites)
        I scanned through the html for the default page that loaded, the home page, and the about page and all three gave the same hint
      </div>
      <br/>
      <img src={Natas7_1} alt="" />
      <br/><br/>
      <div>
        When you click on the home and about page the url takes on the form 
        "http://natas7.natas.labs.overthewire.org/index.php?page=home"
        the most natural thing to do would be to make the page="/etc/...", the page they suggested for us to check and wouldn't you know we find<br/> 
        the flag "a6bZCNYwdKqN5cGP11ZdtPg0iImQQhAB"
      </div>
    </div>
  );
};

const Natas8 = () => {
  return (
    <div className="main-information">
      <div>
        Level 8:<br/><br/>
      </div>
      <img src={Natas8_1} alt="" />
      <br/><br/>
      <div>
        So for this one, I tried to first reverse engineer it myself, using linux commands and web applications and what have you. But ummm, yea so that didn't work sadly. At this point it's getting kinda late and I'm tired, but it is clear to me that all I have to do is reverse these steps and I'll get the password out. Since this is php and I'm not too familiar with the language I just searched up how to reverse engineer each of the functions. And it turns out they're all very intuitive and in-built into the language. So I searched up an online php writing thingy and put in the reversing functions and BOOM secret found.
      </div>
      <br/>
      <img src={Natas8_2} alt="" />
      <br/><br/>
      <div>
        Inputting the secret gave us the flag "Sda6t0vkOPkM8YeOZkAGVhFoaplvlJFd"
      </div>
    </div>
  );
};

const Natas9 = () => {
  return (
    <div className="main-information">
      <div>
        Level 9:<br/><br/>
        Looking through this I got SOOOOO excited because I was like OH OH I understand this code, if put something in its going to look through this dictionary.txt file, and match everything in it. So, I'll be smart and just open up this file by appending /dictionary.txt to our url
        Then I tried actually typing something in the search bar, and to my dismay it displays everything it matches so turns out that wasnt it at all
        My next stroke of genius was that it seems the past few levels have all been to do with php functions and stuff, and ive learnt my lesson from the earlier leviathan levels, when in doubt search up what the function does. so I did. apparently the function passthru behaves very similarly to the function exec(), in which I can basically execute shell commands
        this got me very excited &#62;:&#40;
        from here I tried to treat it very similar to SQLi I just finished off the statement, and then ran a new command right after it
        For reference heres the code
      </div>
      <img src={Natas9_1} alt="" />
      <br/><br/>
      <div>
        and heres wat I inputted
      </div>
      <br/>
      <img src={Natas9_2} alt="" />
      <br/><br/>
      <div>
        when everything runs it should look like<br/>
        `passthru("grep -i tetwqDst dictionary.txt; ls; dictionary.txt")``;<br/>
        so itll run the grep as per usual, and I chose something that would match nothing as to not clutter the output
        then I ran ls
        the output I got was
      </div>
      <br/>
      <img src={Natas9_3} alt="" />
      <br/><br/>
      <div>
        VERY INTERESTING
        &#62;:&#40;&#40;&#40;&#40;
        I know dictionary was in our folder already since I opened it
        and it makes sense that the other two are there
        from here I treated it very similar to the leviathan ones, from one of the earlier natas levels and a lot of the other wargames
        I knew that there was a folder called /etc/ and in here usually contained a directory that contained the passwords
        so after a bunch of queries testing and looking around the folder space my final query was<br/>
        "tesqgqwt dictionary.txt; cat /etc/natas_webpass/natas10;"<br/>
        and this gave me the flag "D44EcsFkLxPIkAAKLosx8z3hxX1Z4MCE"<br/><br/>
        note: of course I tried checking the next level passwords just to be cheeky but they were probably permission blocked
        oh well :/
      </div>
    </div>
  );
};

const Natas10 = () => {
  return (
    <div className="main-information">
      <div>
        Level 10:<br/><br/>
        They banned us from using pipes (|), ampersands (&) and semicolons (;), basically anything that can be used to chain commands together<br/>
        but thats fine<br/>
        I can just grep a value and throw in the absolute path from the root directory no problem<br/>
        and because this will come before dictionary on the chance we cant grep more than one file it wont matter anyways<br/>
        ill be honest initially I started by using `*` as my character, as in match everything but that kept printing out the source code for some reason<br/>
        I have no idea why<br/>
        weird<br/>
        okay I just realised `*` doesnt mean match everything<br/>
        oops<br/>
        it means match the previous thing 0 or more times<br/>
        okay that makes more sense<br/>
        wat I actually meant was `.`<br/>
        🤦
        so anyways yea, this is what I queried <br/>
        ". /etc/natas_webpass/natas11"<br/>
        as in match any character in my file<br/>
        and this produced the flag "1KFqoJXi6hRaPluAmk8ESDW4fSysRoIg"<br/><br/>
        another example of why blacklisting is bad<br/>
        (it just keeps coming up throughout this whole course and I love it so much)
      </div>
    </div>
  );
};

const Natas11 = () => {
  return (
    <div className="main-information">
      <div>
        Level 11:<br/><br/>
        Okay, so this one took me a long time. But I am VERY happy I managed to solve it :DD. To start, they gave us some source code again. And I'm noticing at this point it seems to just be exploiting php, or not really, more like just understanding php code? Anyways source code:
      </div>
      <br/>
      <img src={Natas11_1} alt="" />
      <br/><br/>
      <div>
        The thing that took me a while was just understanding the code, mainly because my brain saw a lot of lines of code and didn't want to solve it. But let's break it down.<br/>
        3 functions:<br/>
        encrypting function, the only important thing to know is that xor is reversible. a xor b = c, wherever you move the a's and b's and c' around in the equation will always make the equation true (pretty sure?).<br/>
        load data function, this is the chunky one. Basically if we have a cookie value and after all the encoding it matches the form of a colour code, hash followed by 6 numbers, then we will reveal the password. If none of these are true, then we are just going to save the default value that was inputted.<br/>
        save data function, given an input of an array, we're going to encode it and save it as our cookie value.<br/><br/>

        With that out of thee way, the first place we want to start is figuring out the key for the encryption. What we notice is that we already have an example of the encryption happening, since they tell us what the default input is and we can see what the cookie value is by inspecting our page as we've done previously. 
        The process we have is default value (which is the array thingy at the top) -&#62; (json encoding) -&#62; (xor) -&#62; (base64 encoding) -&#62; cookie value. So, at the point of the xor we are doing (json_encoding of our array thingy) xor secret = (cookie decoded with base64). As we mentioned we can swap these around, so lets perform an xor between the two things we have to get out our secret. 
      </div>
      <br/>
      <img src={Natas11_2} alt="" />
      <br/><br/>
      <div>
        We observe from this that our secret is "KNHL", since it just seems to repeat and we don't really care about that, since the encrypting function takes the modulus of our string size anyone, which does that automatic repeating. Now, all we have to do is reverse this process so that given some input, we get a encoded cookie which tells us that we can see the password. Admittedly, this part of reversing also took me a while but I got there in the end, you can see me playing around with the different values :p.
      </div>
      <br/>
      <img src={Natas11_3} alt="" />
      <div>
        And finally, password found "YWqo0pjpcXzSIl5NMAVxg12QxeC1w9QG"!!! :D
      </div>
      <br/><br/>
    </div>
  );
};


const Natas12 = () => {
  return (
    <div className="main-information">
      <div>
        Level 12:<br/><br/>
        Okay this level was actually really cool. I had a look through the source code again and I got the gist of what it did. I read through all the functions it called and found that it's basically just you upload a file and it's going to try to move your file to a random path. That alone didn't seem very exploitable.  
      </div>
      <br/>
      <img src={Natas11_1} alt="" />
      <br/><br/>
      <div>
        So, I read through a brief walkthrough and it showed that you can basically inject php code into the website by impersonating as a jpg file. WHICH I THOUGHT WAS QUITE COOL. The idea itself is nothing overly complicated and it probably 99/100 times would not work in real life, but it sort of starts to move into ways you *could* gain control or information from someone's system :D.<br/><br/>

        Anyways, so what I did was make a file just with notepad that contained this one line:<br/>
        `"&#60;?php echo system("cat /etc/natas_webpass/natas13"); ?&#62;"``<br/>
        and then saved it as a jpg file. I then uploaded this file to the website and changed the html so that it know its a php file.<br/><br/>

        A quick before
      </div>
      <br/>
      <img src={Natas11_1} alt="" />
      <br/><br/>
      <div>
        and after
      </div>
      <br/>
      <img src={Natas11_1} alt="" />
      <br/><br/>
      <div>
        From there, opening the file runs the code and prints out the password "lW3jYRI02ZKDBb8VtQBU1f6eDRo6WEj9" for me :D.
      </div>
    </div>
  );
};

const Natas13 = () => {
  return (
    <div className="main-information">
      <div>
        Level 13:<br/><br/>
        Very, very similar idea to the last one, except this time they specify that our file "must" be of an image type. Looking at the source code it is mostly the same except for an extra function call "exif_imagetype". Reading through the documentation it seems that each image file has a few starting bytes, almost like a header, which the function looks for to determine if it is of an image type. So, all we have to do is add those few characters at the start and easy, should work. <br/><br/>

        As I was doing this I ran into a lot of trouble trying to add this extra character, I have no idea why. The website kept on outputting that my file exceeded the maximum size even though it very clearly didn't. I didn't get it. Searching it up, apparently it's easier to just put the gif signature (GIF87a) at the start since it's basically all ASCII. So, that's what I did. My payload was:<br/><br/>

        `GIF87a&#60;?php echo system("cat /etc/natas_webpass/natas14"); ?&#62;`<br/><br/>
        
        and after running the same steps as the previous level, I got the password "aqPazSJBmrmU7UQJv17MHk1PGC4DxZMEP".
      </div>
      <br/>
      <img src={Natas11_1} alt="" />
      <br/><br/>
    </div>
  );
};

const Natas14 = () => {
  return (
    <div className="main-information">
      <div>
        Level 14:<br/><br/>
        HOLYYYYYY SQLi I LOVE SQLi. Very standard question, just login with no restrictions. The payload I used was `" OR "1" = "1"#`. Nothing too crazy, if the next few levels are also SQLi, I'll be mildly happy :&#40;. And yeah that's basically all for this. <br/>
        Password is "TTkaI7AWG4iDERztBcEyKV7kRXH1EZRB".
      </div>
    </div>
  );
};


const Natas15 = () => {
  return (
    <div className="main-information">
      <div>
        Level 15:<br/><br/>
        For this level, it's carrying on with the SQLi which is great! Before anything else, the source code:
      </div>
    <br/>
    <img src={Natas15_1} alt="" />
    <br/><br/>
    <div>
      It's given how the database looks, and it only allows us to check if a user exists in the database. But of course we can extend this as we like. We can assume similar to earlier that there will be a user Natas16 (the next level guy) in the database and their password is the flag we're looking for. It seems that we basically have to do a brute force approach to see what the guys password is. Because quite frankly I'm not very bothered to write up a script that brute force tests everything I'm just going to search this up. The idea needed to solve this I'm fine with though, and I know roughly how the script will look. We can basically do some regex to build up the password. Here's the script used:
    </div>
    <br/>
    <img src={Natas15_2} alt="" />
    <br/><br/>
    <div>
      And this is how it looks as the password gets slowly built up.
    </div>
    <br/>
    <img src={Natas15_3} alt="" />
    <br/><br/>
    <div>
      By the end the password is "TRD7iZrd5gATjj9PkPEuaOlfEjHqj32V". 
    </div>
    </div>
  );
};

const NatasEnd = () => {
  return (
    <div className="main-information">
      <div>
        Okay so I didn't have time to finish this, mainly due to a lack of time, but this wargame was quite enjoyable!<br/><br/>
        
        Here are the references I used throughout this:<br/><br/>

        Level 3: <a href="https://medium.com/overthewire-natas-writeup-by-jsinix/overthewire-natas-level-2-level-3-5fec7f95d9b3">Walkthrough</a> used. And lots of random researching about robots.txt files. Not too relevant to reference, since I didn't really use them it was mostly just for my own understanding.<br/>
        Level 4: <a href="https://mcpa.github.io/natas/wargame/web/overthewire/2015/09/28/natas04/">Walkthrough</a> used. Very similar to the previous, also did research about referers. The purpose of having them as a feature of websites and direct benefits of them. Mostly just for my own understanding.<br/>
        Used this as my <a href="https://www.w3schools.com/php/phptryit.asp?filename=tryphp_syntax">php editor</a>, whenever I had to run some quick php code.<br/>
        Level 12: <a href="https://www.abatchy.com/2016/11/natas-level-12">Walkthrough</a> used to show me how to inject php code. (I loved this)<br/>
        Level 15: <a href="https://www.abatchy.com/2016/11/natas-level-14-and-15">Python script</a> used to brute force check what the password is. 
        <br/><br/>

        I really enjoyed this wargame. I feel like they're so much to cover with it, and so much to learn. The concepts themselves are very interesting and there was a lot of new things for me to learn. Would <i><b>highly</b></i> recommend giving this a try. The difficulty is quite low so I feel like a lot of people would be able to do it. And since it's to do with websites and stuff you don't really need any coding experience, at least up until some of the later stuff in which it's somewhat doable to learn. If I had more time I definitely would've continued with this wargame, probably to completion.
        <br/>
        <br/>

        This wargame has my approval!!! :DD
      </div>
    </div>
  );
};