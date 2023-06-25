// Returns a sample image URL type 'string'
const sampleImgGenerator = (size) => {
  const seed = Math.random();
  return `https://picsum.photos/seed/${seed}/${size}`;
}

export default sampleImgGenerator;