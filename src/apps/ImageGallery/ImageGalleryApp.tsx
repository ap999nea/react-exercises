import { useState } from "react";
import { v4 as guid } from "uuid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageGallery } from "./components/ImageGallery";

const images = [
  {
    id: guid(),
    src: "landscape1.avif",
    tags: ["water", "winter"],
  },
  {
    id: guid(),
    src: "landscape2.jpg",
    tags: ["summer"],
  },
  {
    id: guid(),
    src: "landscape3.jpg",
    tags: ["water", "mountains"],
  },
  {
    id: guid(),
    src: "landscape4.jpg",
    tags: ["winter"],
  },
  {
    id: guid(),
    src: "landscape5.avif",
    tags: ["summer"],
  },
  {
    id: guid(),
    src: "landscape6.jpg",
    tags: ["spring"],
  },
  {
    id: guid(),
    src: "landscape7.avif",
    tags: ["winter"],
  },
];

const ImageGalleryApp = () => {
  const [filter, setFilter] = useState<string>("");
  const [filteredImages, setFilteredImages] = useState(images);

  const resetFilter = () => {
    setFilteredImages(images);
    setFilter("");
  };

  const filterImages = () => {
    setFilteredImages(images.filter((image) => image.tags.includes(filter)));
  };

  return (
    <div className="w-5/6 md:w-4/6 flex flex-col gap-6 h-full">
      <h1 className="text-3xl font-bold">Image Gallery</h1>
      <Card className="flex flex-col gap-4">
        <h2 className="font-semibold text-xl">Filter by tags:</h2>
        <form className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
          <div className="flex gap-4 items-center">
            <label className="font-bold" htmlFor="todo">
              Filter:
            </label>
            <input
              className="border p-2 rounded-md"
              type="text"
              id="todo"
              name="todo"
              placeholder="Type here..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" disabled={!filter} onClick={resetFilter}>
              Reset filter
            </Button>
            <Button type="button" disabled={!filter} onClick={filterImages}>
              Filter by tag
            </Button>
          </div>
        </form>
      </Card>
      <ImageGallery images={filteredImages} />
    </div>
  );
};

export default ImageGalleryApp;
