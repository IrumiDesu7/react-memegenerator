import { useState } from 'react';
import memesData from '../memesData';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    imgUrl: '',
  });

  function getMemeUrl() {
    setMeme((prevMeme) => ({
      ...prevMeme,
      imgUrl: memesData.data.memes[Math.floor(Math.random() * 100) + 1].url,
    }));
  }

  return (
    <main>
      <form className='meme-form'>
        <input type='text' name='top' id='top' placeholder='Shut up' />
        <input
          type='text'
          name='bottom'
          id='bottom'
          placeholder='and take my money'
        />
        <button type='button' onClick={getMemeUrl} id='submitBtn'>
          Get a new meme🌄
        </button>
      </form>
      <div className='imageContainer'>
        {meme.imgUrl !== '' && (
          <img className='meme-img' src={meme.imgUrl} alt='Funny meme' />
        )}
      </div>
    </main>
  );
}
