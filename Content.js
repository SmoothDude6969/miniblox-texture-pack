let diamondblocktexture = [
  "file:///C:/Users/Ale/Desktop/diamond_block.png",
];

const imgs = document.getElementsByTagName("img");

for (image of imgs) {
  const index = Math.floor(Math.random() * diamond_block.png.length);
  image.src = diamond_block.png[index];
}
