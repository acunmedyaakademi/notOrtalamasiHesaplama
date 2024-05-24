let vize1 = Number(prompt("1.vize notunuzu giriniz:"));
let vize2 = Number(prompt("2.vize notunuzu giriniz::"));
let final = Number(prompt("Final notunuzu giriniz:"));

let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;

if (ortalama >= 90) {
  alert("Tebrikler, notunuz: " + ortalama + " " + "Harf notunuz:AA");
} else if (ortalama >= 80) {
  alert("Pekiyi, notunuz: " + ortalama + " " + "Harf notunuz:BA");
} else if (ortalama >= 70) {
  alert("İyi, notunuz: " + ortalama + " " + "Harf notunuz:BB");
} else if (ortalama >= 60) {
  alert("Orta, notunuz: " + ortalama + " " + "Harf notunuz:CB");
} else if (ortalama >= 50) {
  alert("Geçer, notunuz: " + ortalama + " " + "Harf notunuz:CC");
} else if (ortalama >= 40) {
  alert("Koşullu Geçer, notunuz: " + ortalama + " " + "Harf notunuz:DC");
} else if (ortalama >= 30) {
  alert("Koşullu Geçer, notunuz: " + ortalama + " " + "Harf notunuz:DD");
} else {
  alert("Başarısız, notunuz: " + ortalama);
}
