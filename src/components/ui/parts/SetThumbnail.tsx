type ThumbnailProps ={
thumbnail: string;
}

export const SetThumbnail = (thumbnail :ThumbnailProps) => {
  const thumbnail_filename = thumbnail["thumbnail"]
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/thumbnail/${thumbnail_filename}`} alt="thumbnail" width="100%" />
    </>
  );
}

export default SetThumbnail;

