"use client";

import { useState } from "react";
import Image from "next/image";

type PropertyGalleryProps = {
  images: string[];
  title: string;
};

export default function PropertyGallery({
  images,
  title,
}: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(
    images[0]
  );

  return (
    <div className="space-y-4">
      <div className="relative h-[500px] overflow-hidden rounded-3xl">
        <Image
          src={selectedImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`relative h-24 overflow-hidden rounded-xl border-2 transition ${
              selectedImage === image
                ? "border-yellow-500"
                : "border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}