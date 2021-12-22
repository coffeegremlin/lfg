import './Landing.module.css'

const Landing = props => {

  
  return (
   
   <main className= 'about-card'>
      <h1 className='about-header'> Looking for group? You just found one.</h1>
      {props.user && 
      <p className='about-body'>
       

These days finding friends online is as easy as joining a Discord server, following a Twitter hashtag, or being an active chatter on your favorite Twitch streams. Finding friends as an adult IRL? A little more complicated. 

That's where we come in. LFG is a community-based web app for sharing your favorite games and nerdy opinions online and finding folks near you who agree. Start your own chat server and invite people you met at your new favorite local game store (did we mention you can also search for your new favorite local game store?)

Now that you know each other a little better, maybe you want to find a cool restaurant or bar to host a meetup. Search by state, city, even zip code if you wanna get super specific.

Of course, for people to show up you have to let them know something's happening. Head over to the events page to scan for things going on near you. Find MTG card swaps, D&D sessions, Mario Party tournaments, or a happy hour where you debate the tier list of Fast and Furious films. None of those sound like quite what you're looking for? Post your own event to invite people to enjoy that hyper-niche indie game you can't stop playing.
      </p>
      
      }
      
    </main>
  )
}

export default Landing
