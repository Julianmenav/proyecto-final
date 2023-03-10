import { useEffect, useState } from "react";



export default function usePicture(picture, liked){
  const [id, setId] = useState(picture.id);
  const [like, setLike] = useState(liked);
  const [likeCount, setLikeCount] = useState(picture.like_count);

  useEffect(() => {
    setId(picture.id)
    setLike(liked)
    setLikeCount(picture.like_count)

  }, [picture])
  

  const likePicture = (e) => {
      axios.post(route("picture.like", { picture_id: id }));

      like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
      setLike(!like);
  };

  const deletePicture = () => {
      axios.delete(route("picture.destroy", { picture_id: id }));
  };

  return {id, like, likeCount, likePicture, deletePicture}
}