import Black from '../shared/button-black/black'
import './header.css'

export default function Header() {
  return <>
    <div className="mediaHeader">
      <img src="src/assets/Logo (2).png" alt="" />

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

    </div>

    <div className="header">
      <div className="headerLogoSide">
        <img src="src/assets/Logo.png" alt="" />
        <p>Discover</p>
        <p>creators</p>
        <p>Sell</p>
        <p>stats</p>
      </div>

      <div className="headerOtherSide">
        <input type="text" placeholder='Search Art Work / Creator' />
        <Black text='Connect Wallet'></Black>
      </div>
    </div>
  </>
}