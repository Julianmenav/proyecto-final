import { router, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";



export default function usePicture(picture, liked, saved){
  const authUser = usePage().props.auth.user;

  const [id, setId] = useState(picture.id);
  const [like, setLike] = useState(liked);
  const [save, setSave] = useState(saved)
  const [likeCount, setLikeCount] = useState(picture.like_count);

  useEffect(() => {
    setId(picture.id)
    setLike(liked)
    setSave(saved)
    setLikeCount(picture.like_count)

  }, [picture])
  

  const likePicture = (e) => {
      if(!authUser) return router.get(route('login'))

      axios.post(route("picture.like", { picture_id: id }));

      like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
      setLike(!like);
  };

  const savePicture = (e) => {
      if(!authUser) return router.get(route('login'))

      axios.post(route("picture.save", { picture_id: id }));

      setSave(!save);
  };

  const deletePicture = () => {
      axios.delete(route("picture.delete", { picture_id: id }));
  };

  return {id, like, likeCount, save, likePicture, deletePicture, savePicture}
}