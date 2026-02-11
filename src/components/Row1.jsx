import React from 'react'
import FallingHearts from './FallingHearts'

function Row1({ onScrollToRow2 }) {
  return (
  <div className="relative overflow-hidden">
  <FallingHearts />

  <section className="min-h-screen flex items-center justify-center bg-[#FDE2E4] px-6 text-center">
    <div className="max-w-2xl">
    <h1 className="font-serif text-2xl leading-relaxed text-gray-800">
        <span className="block mb-3 text-pink-700 tracking-wide">
          Hii,
        </span>

        <span className="block">
          I'd love to go star gazing with you someday,
        </span>

        <span className="block mt-2">
          but I'm afraid I'd just end up staring at the one <em>closest</em> to me.
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