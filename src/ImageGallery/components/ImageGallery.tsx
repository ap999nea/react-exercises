import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselImage } from "./CarouselImage";

type Props = {
  images: { id: string; src: string }[];
};

export const ImageGallery = ({ images }: Props) => {
  return (
    <div className="px-8">
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
              <CarouselImage imageSrc={image.src} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
