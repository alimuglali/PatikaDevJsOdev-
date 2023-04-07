let userName = document.querySelector(`#name`);
userName.innerHTML = prompt(`Lütfen isminizi giriniz`);

let myClock = document.querySelector(`#myClock`);

function tarihSaat() {
    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const gun = new Date();
    let day = weekday[gun.getDay()];  // gün tanımlaması yapıldı


    var date = new Date().toLocaleTimeString(`tr-TR`);  // gün ay yıl saat 
    myClock.innerHTML = `${date +` `+ day}`
}

setInterval(tarihSaat, 1000); // saniyenin sürekli artması sağlandı

