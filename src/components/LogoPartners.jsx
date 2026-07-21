"use client";

export default function LogoPartners() {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-8 opacity-45 hover:opacity-80 transition-opacity grayscale hover:grayscale-0">
          
          {/* 1. The Nature Conservancy */}
          <div className="flex items-center gap-2 text-gray-700">
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
            </svg>
            <div className="text-xs font-semibold leading-tight font-serif italic tracking-wide">
              The Nature <br />
              <span className="font-sans not-italic text-[10px] font-normal uppercase tracking-widest text-gray-500">
                Conservancy
              </span>
            </div>
          </div>

          {/* 2. Smithsonian Channel */}
          <div className="flex items-center gap-2 text-gray-800">
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <div className="text-sm font-semibold tracking-tight font-serif">
              Smithsonian <br />
              <span className="font-sans text-[10px] font-medium tracking-widest uppercase text-gray-500">
                CHANNEL
              </span>
            </div>
          </div>

          {/* 3. unicef */}
          <div className="flex items-center gap-1.5 text-gray-800">
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <span className="text-xl font-bold tracking-tighter font-sans lower">
              unicef
            </span>
          </div>

          {/* 4. hoag. */}
          <div className="text-xl font-extrabold tracking-tight font-serif text-gray-800">
            hoag<span className="text-orange-500">.</span>
          </div>

          {/* 5. Feeding America */}
          <div className="flex items-center gap-2 text-gray-800">
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L4 9v12h16V9l-8-6zm0 2.25l6 4.5v9.75H6V9.75l6-4.5z" />
            </svg>
            <div className="text-xs font-bold uppercase tracking-wider font-sans leading-tight">
              FEEDING <br />
              <span className="font-normal text-[10px] text-gray-500">AMERICA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

