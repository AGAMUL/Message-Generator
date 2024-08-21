console.log("Welcome to my rap message generator.");

const phrase1 = ["Yellow diamonds in the watch, this sh- cost a lot", "Young rebel, Young Money, nothin' you could tell me",
 "I was runnin' through the 6 with my woes"];
const phrase2 = ["Skate and smoke and ride", "Rari matte black and I got a Bentley with me", "Virgil got a Patek on my wrist going nuts"];
const phrase3 = ["Ain't compromisin', half a million on the coupe", "Drippin' in it, I be spillin' in it, new designer gear bicoastal",
 "I was on top when that sh meant a lot"];

const randomNumGenerator = () => {
    return Math.floor(Math.random() * 3)
}

const rapMessageGenerator = () => {
    let arr = [];
    arr.push(phrase1[randomNumGenerator()]);
    arr.push(phrase2[randomNumGenerator()]);
    arr.push(phrase3[randomNumGenerator()]);

    return `${arr[0]}, ${arr[1]}, ${arr[2]}`;
 }

 console.log(rapMessageGenerator());

//  if (phrase1[randomNumGenerator()] === 0){
//     const firstVerse = phrase1[0];
//     const secondVerse = phrase1.filter(verse => {
//         return phrase2[2];
//     });
//     const thirdVerse = phrase2.filter(verse => {
//         return phrase3[2];
//     });
//     arr.push(firstVerse, secondVerse, thirdVerse);
// } else if (phrase1[randomNumGenerator()] === 1){

// } else if (phrase1[randomNumGenerator()] === 2){

// }

// return `${arr[0]}, ${arr[1]}, ${arr[2]}`;