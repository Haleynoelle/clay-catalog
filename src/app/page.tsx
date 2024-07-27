import Link from 'next/link';
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:w-full">
      <header className="relative z-10 grid grid-flow-col left-0 top-0 grid-rows-1 grid-cols-6 p-4 pt-8 lg:p-4 bg-transparent w-full">
          <div className="col-start-1 col-span-3">
          <a className="p-4 font-bold" href="/">Clay Catalog</a>
          <a className="p-4" href="#">Resources</a>
          <a className="p-4" href="/user/profile">My Profile (temporary nav link)</a>
          </div>
          <div className="col-start-5 col-span-2 justify-self-end">
          <a className="p-2 text-porcelain" href="/login">Login</a>
          <a className="p-2 text-porcelain" href="/register">Create Account</a>
          </div>
        </header>
      <div className='grid lg:grid-cols-2 left-0 top-0 absolute'>
        <section className="text-center lg:mb-0 lg:w-full lg:max-w-5xl">
        <Image
          src="/images/heroimg.jpg" 
          width={800}
          height={800}
          alt="Hero Image of Stacked Clay"
          className=""
          />
        </section>
        <div className="bg-pine text-4xl mb-32 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-center flex flex-col justify-center items-center p-8">
        <h2 className='text-porcelain'>A designated space for you to organize your ceramic projects</h2>
        <Link
          href="/register"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold text-porcelain">
            Create Your Account{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="text-center text-cornflower lg:text-center max-w-[40ch] text-balance text-sm opacity-90">
            Start building your clay catalog with as much or as little detail as you choose.
          </p>
        </Link>
      </div>
      </div>
      {/* <div className='grid grid-rows-1 lg:w-full'>
            <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="lg:w-full"
          >
            <CarouselContent>
              {Array.from({ length: 2 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardHeader>
                      <CardTitle>Project Name</CardTitle>
                      <CardDescription>
                        Status
                      </CardDescription>
                      </CardHeader>
                      <Image className='rounded-md md:basis-1/2 lg:basis-2/3'
                        src="/images/hero-image.jpg" 
                        width={100}
                        height={100}
                        alt="Hero Image of Stacked Clay"
                        />
                      <CardContent>
                        clay type, firing, glaze, measurements
                        </CardContent>
                      <CardFooter>
                        <p></p>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
      </div> */}
        <footer className="absolute bottom-0 left-0 lg:w-full bg-porcelain lg:size-auto lg:bg-none lg:p-4">
          <div className="grid grid-cols-3">
            <p>&copy; 2024 Clay Catalog</p>
            <div className="grid grid-rows-4">
              <p>General</p>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Terms & Privacy</a>
            </div>
            <div className="grid grid-rows-3">
              <p>Social</p>
              <a href="#">Reddit</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </footer>
    </main>
  );
}
