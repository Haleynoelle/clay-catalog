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
    <main className="flex min-h-screen flex-col items-center p-10">
      <div className='grid gap-8 lg:grid-cols-2 p-10'>
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
      <div className='grid grid-rows-1 lg:w-full'>
            <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="lg:w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
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
      </div>
    </main>
  );
}
