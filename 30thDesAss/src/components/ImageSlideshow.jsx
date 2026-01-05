import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ImageSlideshow() {
  const images = [
    "https://via.placeholder.com/400x200?text=Image+1",
    "https://via.placeholder.com/400x200?text=Image+2",
    "https://via.placeholder.com/400x200?text=Image+3",
  ];

  const [index, setIndex] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-center">
        <img src={images[index]} className="rounded mx-auto" />

        <div className="flex justify-between">
          <Button onClick={() => setIndex((index + images.length - 1) % images.length)}>
            Previous
          </Button>
          <Button onClick={() => setIndex((index + 1) % images.length)}>
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
