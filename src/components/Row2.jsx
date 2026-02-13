import React from 'react'
import FallingHearts from './FallingHearts'

function Row2({ onScrollToRow3, bgMusicRef }) {
  return (
  <div className="relative overflow-hidden">
  <FallingHearts />

  <section className="min-h-screen flex items-center justify-center bg-[#FDE2E4] px-6 text-center">
    <div className="max-w-2xl">
    <h1 className="font-serif text-2xl leading-relaxed text-gray-800">
        

        <span className="block mt-2">
          Roses are red, <br />
          I'll keep this concise, <br />
          You could say no… <br />
          But that wouldn't be wise.
        </span>
      </h1>

      <button
        onClick={onScrollToRow3}
        className="mt-8 px-6 py-3 rounded-full bg-pink-400 text-white animate-bounce hover:bg-pink-500 transition"
      >
        ↓
      </button>
    </div>
  </section>
</div>

  )
}

export default Row2