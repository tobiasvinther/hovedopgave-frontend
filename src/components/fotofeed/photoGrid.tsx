import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

interface Image {
  url: string;
}

export default function PhotoGrid({ birdId }: any) {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    console.log("Fetching images with id:", birdId);
    fetchImages();
  }, [birdId]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  async function fetchImages() {
    try {
      const response = await fetch(
        "http://localhost:8080/api/images/" + birdId
      ); //HARDCODED ID PT
      const data = await response.json();
      console.log("Data", data);
      const imageList: Image[] = [];
      data.forEach(function (image: any) {
        const urlString: string = image.path.replaceAll("\\", "/");
        const imageUrl = { url: "http://localhost:8080/" + urlString };
        imageList.push(imageUrl);
      });
      setImages(imageList);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  }

  return (
    <Box sx={{ overflowY: "auto" }}>
      <ImageList variant="masonry" cols={6} gap={8}>
        {images.map((item) => (
          <ImageListItem key={item.url}>
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              //alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
