import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className='grid gap-8 lg:grid-cols-2'>
        <section className="text-center lg:mb-0 lg:w-full lg:max-w-5xl">
        <Image className='rounded-md'
          src="/images/hero-image.jpg" 
          width={800}
          height={800}
          alt="Hero Image of Stacked Clay"
          />
        </section>
        <div className="mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-center flex flex-col items-center">
        <h2>A designated space for you to organize your ceramic projects</h2>
        <Link
          href="/register"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Create Your Account{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="text-center lg:text-center max-w-[40ch] text-balance text-sm opacity-50">
            Start building your ceramics catalog with as much or as little detail as you choose.
          </p>
        </Link>
      </div>
      </div>
    </main>
  );
}
