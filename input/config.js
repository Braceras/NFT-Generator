const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "This is an NFT made by the coolest generative code.";
const baseImageUri = "https://hashlips/nft";
const startEditionFrom = 1;
const endEditionAt = 10;
const editionSize = 10;
const raceWeights = [
  {
    value: "skull",
    from: 1,
    to: editionSize,
  },
];

const races = {
  skull: {
    name: "Skull",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Background 1",
            path: `${dir}/1-background/background1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Background 2",
            path: `${dir}/1-background/background2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Background 3",
            path: `${dir}/1-background/background3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Background 4",
            path: `${dir}/1-background/background4.png`,
            weight: 100,
          },
          {
            id: 4,
            name: "Background 5",
            path: `${dir}/1-background/background5.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Neck",
        elements: [
          {
            id: 0,
            name: "Cuello 1",
            path: `${dir}/2-neck/Cuello1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Cuello 2",
            path: `${dir}/2-neck/Cuello2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Cuello 3",
            path: `${dir}/2-neck/Cuello3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Cuello 4",
            path: `${dir}/2-neck/Cuello4.png`,
            weight: 100,
          },
          {
            id: 4,
            name: "Cuello 5",
            path: `${dir}/2-neck/Cuello5.png`,
            weight: 100,
          },
          {
            id: 5,
            name: "Cuello 6",
            path: `${dir}/2-neck/Cuello6.png`,
            weight: 100,
          },
          {
            id: 6,
            name: "Cuello 7",
            path: `${dir}/2-neck/Cuello7.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Objects",
        elements: [
          {
            id: 0,
            name: "Object 1",
            path: `${dir}/3-objects/object1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Object 2",
            path: `${dir}/3-objects/object2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Object 3",
            path: `${dir}/3-objects/object3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Object 4",
            path: `${dir}/3-objects/object4.png`,
            weight: 100,
          },
          {
            id: 4,
            name: "Object 5",
            path: `${dir}/3-objects/object5.png`,
            weight: 100,
          },
          {
            id: 5,
            name: "Object 6",
            path: `${dir}/3-objects/object6.png`,
            weight: 100,
          },
          {
            id: 6,
            name: "Object 7",
            path: `${dir}/3-objects/object7.png`,
            weight: 100,
          },
          {
            id: 7,
            name: "Object 8",
            path: `${dir}/3-objects/object8.png`,
            weight: 100,
          },
          {
            id: 8,
            name: "Object 9",
            path: `${dir}/3-objects/object9.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Shadows",
        elements: [
          {
            id: 0,
            name: "Brillo Fuego",
            path: `${dir}/4-shadows/brilloFuego.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Shadow 1",
            path: `${dir}/4-shadows/shadow1.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Shadow 2",
            path: `${dir}/4-shadows/shadow2.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Shadow 3",
            path: `${dir}/4-shadows/shadow3.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Race",
        elements: [
          {
            id: 0,
            name: "Skin 1",
            path: `${dir}/5-skin/skin1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Skin 2",
            path: `${dir}/5-skin/skin2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Skin 3",
            path: `${dir}/5-skin/skin3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Skin 4",
            path: `${dir}/5-skin/skin4.png`,
            weight: 100,
          },
          {
            id: 4,
            name: "Skin 5",
            path: `${dir}/5-skin/skin5.png`,
            weight: 100,
          },
          {
            id: 5,
            name: "Skin 6",
            path: `${dir}/5-skin/skin6.png`,
            weight: 100,
          },
          {
            id: 6,
            name: "Skin 7",
            path: `${dir}/5-skin/skin7.png`,
            weight: 100,
          },
          {
            id: 7,
            name: "Skin 8",
            path: `${dir}/5-skin/skin8.png`,
            weight: 100,
          },
          {
            id: 8,
            name: "Skin 9",
            path: `${dir}/5-skin/skin9.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Skins Texturizadas",
        elements: [
          {
            id: 0,
            name: "Skin Text 1",
            path: `${dir}/6-skinText/skinText1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Skin Text 2",
            path: `${dir}/6-skinText/skinText2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Skin Text 3",
            path: `${dir}/6-skinText/skinText3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Skin Text 4",
            path: `${dir}/6-skinText/skinText4.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eye Left",
        elements: [
          {
            id: 0,
            name: "Eye Left 1",
            path: `${dir}/7-EyeLeft/eyeleft1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Eye Left 2",
            path: `${dir}/7-EyeLeft/eyeleft2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Eye Left 3",
            path: `${dir}/7-EyeLeft/eyeleft3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Eye Left 4",
            path: `${dir}/7-EyeLeft/eyeleft4.png`,
            weight: 100,
          },
          {
            id: 4,
            name: "Eye Left 5",
            path: `${dir}/7-EyeLeft/eyeleft5.png`,
            weight: 100,
          },
          {
            id: 5,
            name: "Eye Left 6",
            path: `${dir}/7-EyeLeft/eyeleft6.png`,
            weight: 100,
          },
          {
            id: 6,
            name: "Eye Left 7",
            path: `${dir}/7-EyeLeft/eyeleft7.png`,
            weight: 100,
          },
          {
            id: 7,
            name: "Eye Left 8",
            path: `${dir}/7-EyeLeft/eyeleft8.png`,
            weight: 100,
          },
          {
            id: 8,
            name: "Eye Left 9",
            path: `${dir}/7-EyeLeft/eyeleft9.png`,
            weight: 100,
          },
          {
            id: 9,
            name: "Eye Left 10",
            path: `${dir}/7-EyeLeft/eyeleft10.png`,
            weight: 100,
          },
          {
            id: 10,
            name: "Eye Left 11",
            path: `${dir}/7-EyeLeft/eyeleft11.png`,
            weight: 100,
          },
          {
            id: 11,
            name: "Eye Left 12",
            path: `${dir}/7-EyeLeft/eyeleft12.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eye Right",
        elements: [
          {
            id: 0,
            name: "Eye Right 1",
            path: `${dir}/8-EyeRight/eyeright1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Eye Right 2",
            path: `${dir}/8-EyeRight/eyeright2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Eye Right 3",
            path: `${dir}/8-EyeRight/eyeright3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Eye Right 4",
            path: `${dir}/8-EyeRight/eyeright4.png`,
            weight: 100,
          },
          {
            id: 4,
            name: "Eye Right 5",
            path: `${dir}/8-EyeRight/eyeright5.png`,
            weight: 100,
          },
          {
            id: 5,
            name: "Eye Right 6",
            path: `${dir}/8-EyeRight/eyeright6.png`,
            weight: 100,
          },
          {
            id: 6,
            name: "Eye Right 7",
            path: `${dir}/8-EyeRight/eyeright7.png`,
            weight: 100,
          },
          {
            id: 7,
            name: "Eye Right 8",
            path: `${dir}/8-EyeRight/eyeright8.png`,
            weight: 100,
          },
          {
            id: 8,
            name: "Eye Right 9",
            path: `${dir}/8-EyeRight/eyeright9.png`,
            weight: 100,
          },
          {
            id: 9,
            name: "Eye Right 10",
            path: `${dir}/8-EyeRight/eyeright10.png`,
            weight: 100,
          },
          {
            id: 10,
            name: "Eye Right 11",
            path: `${dir}/8-EyeRight/eyeright11.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Manchas",
        elements: [
          {
            id: 0,
            name: "Mancha 1",
            path: `${dir}/9-manchas/mancha1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Mancha 2",
            path: `${dir}/9-manchas/mancha2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Mancha 3",
            path: `${dir}/9-manchas/mancha3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Mancha 4",
            path: `${dir}/9-manchas/mancha4.png`,
            weight: 100,
          },
          {
            id: 4,
            name: "Mancha 5",
            path: `${dir}/9-manchas/mancha5.png`,
            weight: 100,
          },
          {
            id: 5,
            name: "Mancha 6",
            path: `${dir}/9-manchas/mancha6.png`,
            weight: 100,
          },
          {
            id: 6,
            name: "Mancha 7",
            path: `${dir}/9-manchas/mancha7.png`,
            weight: 100,
          },
          {
            id: 7,
            name: "Mancha 8",
            path: `${dir}/9-manchas/mancha8.png`,
            weight: 100,
          },
          {
            id: 8,
            name: "Mancha 9",
            path: `${dir}/9-manchas/mancha9.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Estampillas ONE",
        elements: [
          {
            id: 0,
            name: "Estampilla 1",
            path: `${dir}/10-Estampillas1/estampilla1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Estampilla 2",
            path: `${dir}/10-Estampillas1/estampilla2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Estampilla 3",
            path: `${dir}/10-Estampillas1/estampilla3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Estampilla 4",
            path: `${dir}/10-Estampillas1/estampillas4.png`,
            weight: 100,
          },
          {
            id: 4,
            name: "Estampilla 5",
            path: `${dir}/10-Estampillas1/estampillas5.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
