import troll from '../images/troll.png';

export default function Header() {
  return (
    <header>
      <div className='logo'>
        <img src={troll} alt='' className='troll' />
        <h3 className='title'>Meme Generator</h3>
      </div>
      <h6 className='title-project'>React Course - Project 3</h6>
    </header>
  );
}
