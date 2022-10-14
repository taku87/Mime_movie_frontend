export const SetSampleVideo = (thumbnail :string) => {
  const thumbnail_filename = thumbnail["thumbnail"]
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/thumbnail/${thumbnail_filename}`} width="100%" />
    </>
  );
}

export default SetSampleVideo;

