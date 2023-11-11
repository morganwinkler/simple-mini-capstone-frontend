// imports PhotoIndex
import { PhotosIndex } from "./PhotosIndex"

export function Content() {
  // create passholder data to be passes to child component aka index 
  const photos = [
    {
      id: 1,
      name: "Photo 1",
      url: "https://plus.unsplash.com/premium_photo-1699555730779-032e7b5bd0e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      id: 2,
      name: "Photo 2",
      url: "https://plus.unsplash.com/premium_photo-1699555730779-032e7b5bd0e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      name: "Photo 3",
      url: "https://plus.unsplash.com/premium_photo-1699555730779-032e7b5bd0e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
    },
  ];


    return (
      <div>
        {/* makes PhotosIndex a child component of content */}
        {/* defines props to child component */}
        <PhotosIndex photos={photos}/>
      </div>
    )
  }