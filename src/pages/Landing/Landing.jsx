import './Landing.css'
import greenPotion from '../../Assets/smallIcons/greenPotion.png'
import heart from '../../Assets/smallIcons/heart.png'
import purpleGem from '../../Assets/smallIcons/purpleGem.png'
import chicken from '../../Assets/smallIcons/chicken.png'
import skull from '../../Assets/smallIcons/key.png'
import redPotion from '../../Assets/smallIcons/redPotion.png'
import joyStick from '../../Assets/smallIcons/joyStick.png'

const Landing = props => {

  
  return (
   
   <main className= 'about-card'>
      <h1 className='about-header'> Looking for group? You just found one.</h1>
      <div className='icons'>
       
        <img className='icon' src={greenPotion} alt="greenPotion"/>
        <img className='icon' src={heart} alt="heart"/>
        <img className='icon' src={purpleGem} alt="greenPotion"/>
        <img className='icon' src={joyStick} alt="heart"/>
        <img className='icon' src={chicken} alt="heart"/>
        <img className='icon' src={skull} alt="greenPotion"/>
        <img className='icon' src={redPotion} alt="heart"/>

      </div>
      {props.user && 
      <p className='about-body'>
       
<p>
These days finding friends online is as easy as joining a Discord server, following a Twitter hashtag, or being an active chatter on your favorite Twitch streams. Finding friends as an adult IRL? A little more complicated. 
</p>
That's where we come in. LFG is a community-based web app for sharing your favorite games and nerdy opinions online and finding folks near you who agree. Start your own chat server and invite people you met at your new favorite local game store (did we mention you can also search for your new favorite local game store?)

Now that you know each other a little better, maybe you want to find a cool restaurant or bar to host a meetup. Search by state, city, even zip code if you wanna get super specific.

<p>Of course, for people to show up you have to let them know something's happening. Head over to the events page to scan for things going on near you. Find MTG card swaps, D&D sessions, Mario Party tournaments, or a happy hour where you debate the tier list of Fast and Furious films. None of those sound like quite what you're looking for? Post your own event to invite people to enjoy that hyper-niche indie game you can't stop playing.
    </p>  </p>
      
      }
      
    </main>
  )
}

export default Landing
