import Image from "next/image";

export default function Home() {
  return (
    <div style={{'background':'lightgray', 'display':'flex'}} className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div style={{'width':'45%', 'border':'1px solid red', 'marginRight':'20px', 'marginLeft':'10px', 'padding':'30px'}}>
        <h1>Muhammad Faisal</h1>
        <p>I am new Nextjs Developer in Governor Sindh IT Program.</p>
        <p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p><p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p><p>My Qualification is Under Post Graduates</p>
        <p>My Qualification is Under Post Graduates</p>
      </div>
      <div style={{'width':'50%', 'border':'1px solid yellow'}}>
      <img
            aria-hidden
            src="https://w0.peakpx.com/wallpaper/792/236/HD-wallpaper-faisal-golden-name-arabic-calligraphy-faisal-name-quotes-touch-thumbnail.jpg"
            alt="File icon"
            width={800}
            height={716}
          />
      </div>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
