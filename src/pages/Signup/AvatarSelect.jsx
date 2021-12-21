import React from 'react';
import '../../pages/Signup/AvatarSelect.css'

// Avatar assets
import druid from '../../Assets/Avatars/druid.png'
import dwarf from '../../Assets/Avatars/dwarf.png'
import femaledwarf from '../../Assets/Avatars/femaledwarf.png'
import femalegnome from '../../Assets/Avatars/femalegnome.png'
import femalehuman from '../../Assets/Avatars/femalehuman.png'
import femalenelf from '../../Assets/Avatars/femalenelf.png'
import femaleorc from '../../Assets/Avatars/femaleorc.png'
import femaletauren from '../../Assets/Avatars/femaletauren.png'
import femaletroll from '../../Assets/Avatars/femaletroll.png'
import femaleundead from '../../Assets/Avatars/femaleundead.png'
import gnome from '../../Assets/Avatars/gnome.png'
import human from '../../Assets/Avatars/human.png'
import hunter from '../../Assets/Avatars/hunter.png'
import mage from '../../Assets/Avatars/mage.png'
import malfurion from '../../Assets/Avatars/malfurion.png'
import nelf from '../../Assets/Avatars/nelf.png'
import orc from '../../Assets/Avatars/orc.png'
import paladin from '../../Assets/Avatars/paladin.png'
import priestundead from '../../Assets/Avatars/priestundead.png'
import rogue from '../../Assets/Avatars/rogue.png'
import shaman from '../../Assets/Avatars/shaman.png'
import tauren from '../../Assets/Avatars/tauren.png'
import troll from '../../Assets/Avatars/troll.png'
import undead from '../../Assets/Avatars/undead.png'
import warlock from '../../Assets/Avatars/warlock.png'
import warrior from '../../Assets/Avatars/warrior.png'

const AvatarSelect = (props) => {

  return(
    <div className="popup-container">
      <div className="popup-menu">
        <div className="popup-header">
          <h3>Select Your Avatar</h3>
          <button id="close-button" onClick={props.handlePopup}>X</button>
        </div>
        <img src={props.formData.avatar} alt="WoW-avatar"></img>
        <div className="bottom-ui">
          <select onChange={(e) => props.handleChange(e)} name="avatar" value={props.formData.avatar}>
            <option value={druid}></option>
            <option value={hunter}>Hunter</option>
            <option value={paladin}>Paladin</option>
            <option value={rogue}>Rogue</option>
            <option value={mage}>Mage</option>
            <option value={warlock}>Warlock</option>
            <option value={shaman}>Shaman</option>
            <option value={warrior}>Warrior</option>
            <option value={femaledwarf}>Dwarf</option>
            <option value={femalegnome}>Female Gnome</option>
            <option value={femalehuman}>Female Human</option>
            <option value={femalenelf}>Female Elf</option>
            <option value={femaleorc}>Female Orc</option>
            <option value={femaletauren}>Female Tauren</option>
            <option value={femaletroll}>Female Troll</option>
            <option value={femaleundead}>Female Undead</option>
            <option value={dwarf}>Dwarf</option>
            <option value={gnome}>Gnome</option>
            <option value={human}>Human</option>
            <option value={malfurion}>Malfurion</option>
            <option value={nelf}>Elf</option>
            <option value={orc}>Orc</option>
            <option value={priestundead}>Undead Priest</option>
            <option value={undead}>Undead</option>
            <option value={tauren}>Tauren</option>
            <option value={troll}>Troll</option>
          </select>
          <button onClick={props.handlePopup} type="button">Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default AvatarSelect