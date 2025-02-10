const PreloadImages = (imageUrls: string[]) => {
  const promises = imageUrls.map(
    (url) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
      })
  );
  return Promise.all(promises);
};

export default PreloadImages;

  

  