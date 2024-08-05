import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

export function CarouselWithContent({ content }) {
  return (
    <Carousel className="rounded-xl">
      {content.map((item, index) => (
        <div key={index} className="relative h-full w-full">
          <Image
            src={item.img}
            alt={`image ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {item.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {item.synopsis}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size
                ="lg" color="white">
                  Watch Now!
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}