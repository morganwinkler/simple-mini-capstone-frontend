// imports PhotoIndex
import { PhotosIndex } from "./PhotosIndex"

export function Content() {
    return (
      <div>
        {/* makes PhotosIndex a child component of content */}
        <PhotosIndex />
      </div>
    )
  }