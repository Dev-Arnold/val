import React from 'react'
import FallingHearts from './FallingHearts'

function Row1({ onScrollToRow2 }) {
  return (
  <div className="relative overflow-hidden">
  <FallingHearts />

  <section className="min-h-screen flex items-center justify-center bg-[#FDE2E4] px-6 text-center">
    <div className="max-w-2xl">
    <h1 className="font-serif text-2xl leading-relaxed text-gray-800">
        <span className="block mb-6 text-pink-700 tracking-wide">
          Dearest Gentle Reader,
        </span>

        <span className="block">
          The season has only just begun, and already my composure is quite
          ruined — entirely by you.
        </span>


        <span className="block mt-2">
         And I'd love to go stargazing with you someday... <br /> but I have a feeling I'd end up staring at the one closest to me.
        </span>
      </h1>

      <button
        onClick={onScrollToRow2}
        className="mt-8 px-6 py-3 rounded-full bg-pink-400 text-white animate-bounce hover:bg-pink-500 transition"
      >
        ↓
      </button>
    </div>
  </section>
</div>

  )
}

export default Row1