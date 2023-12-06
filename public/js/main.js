const request1 = [1,2,3,4,5,6,7,8];
const request2 = [1,2,3,4,5,6,7,8];
const queueAudio = [];
queueAudio.push(request1);
queueAudio.push(request2);
queueAudio.push(request2);
queueAudio.push(request2);
queueAudio.push(request2);
// queueAudio.forEach(function(item, index) {
//     console.log(print_r(item));
// });
// queueAudio.shift();
// for(let i = 0; i <= queueAudio.length; i++){
//     queueAudio.shift();
//     if(queueAudio.length > 0){
//         queueAudio.shift();
//         i--;
//     }
// }
while (queueAudio.length > 0) {
    queueAudio.shift(); // Buang elemen pertama
    if (queueAudio.length > 0) {
      queueAudio.shift(); // Buang elemen kedua jika masih ada
    }
  }

console.log(queueAudio.length);