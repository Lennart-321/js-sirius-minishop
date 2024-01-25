// 1. Byt namn på första hoodien från Ash till Potato.
let h3_1 = document.querySelector(".art-1 h3");
h3_1.innerHTML = "Potato";

// 2. Byt namn på Home till Start.
let menuItemNodeList2 = document.querySelectorAll("header a, footer a");
menuItemNodeList2.forEach(a => {
    if (a.innerText === "Home") {
        a.innerText = "Start";
    }
});

// 3. Byt namn på Contact till Mail Us.
menuItemNodeList2.forEach(a => {
    if (a.innerText === "Contact") {
        a.innerText = "Mail Us";
    }
});

// 4. Byt ut informationen om Sinus Hoodie - Fire.
let h3_4 = null;
document.querySelectorAll("main article h3").forEach(h => {
    if (h.innerText === "Fire")
        h3_4 = h;
});
let info4 = h3_4?.parentElement.querySelector("p");
if (info4) info4.innerText = "REPLACED INFORMATION.";

// 5. Byt bakgrundsfärg och text på en knapp.
let nextHood5 = h3_4?.parentElement.nextElementSibling;
let but5 = nextHood5?.querySelector("button");
if (but5) {
    but5.style.backgroundColor = "red";
    but5.innerText = "don't " + but5.innerText;
}

// 6. Byt bakgrundsfärg på någon av produkterna.
let firstHood6 = h3_4?.parentElement.parentElement.children[0];
let fig6 = firstHood6.querySelector("figure");
fig6.style.backgroundColor = "#444";

// 7. Byt ut adressen på sidan.
let addrP7 = document.querySelector("footer article > p");
let newAddrLines7 = ["Årstaängsvägen 9", "117 43 Stockholm"];
for (let i = 1, rplIx = 0; rplIx < newAddrLines7.length && i < addrP7.childNodes.length; i++) {
    if (addrP7.childNodes[i] instanceof Text) {
        addrP7.replaceChild(new Text(newAddrLines7[rplIx++]), addrP7.childNodes[i]);
    }
}

// 8. Byt färg på samtliga <p>.
let pNodeList8 = document.querySelectorAll("p");
pNodeList8.forEach(p => p.style.color = "green");

// 9. Ändra text på samtliga knappar till add to cart.
let buttonNodeList9 = document.querySelectorAll("button");
buttonNodeList9.forEach(b => b.innerText = "add to cart");

// 10. Lägg till classen active på menyalternativet home.
let firstMenuItems10 = [
    document.querySelector("header nav").children[0],
    document.querySelector("footer article > a")];
console.log(firstMenuItems10);
firstMenuItems10.forEach(a => a.classList.add("active"));

// 11. Ta bort classen logo på logotypen.
//document.querySelector(".logo")?.classList.remove("logo");

// 12. Lägg till ett nytt menyalternativ.
let menu12 = document.querySelector("header nav");
menu12.insertAdjacentHTML("afterbegin", '<a href="#">New menu alt</a>')

// 13. Lägg till en ny produkt med följande info.
let articleList13 = document.querySelector("main");
articleList13.insertAdjacentHTML("beforeend",
`<article class="art-4">
<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
<h2>Sinus Hoodie</h2>
<h3>Forest</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
<button>buy</button>
</article >`);

// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
document.querySelector(".logo").addEventListener("click", () => console.log("found you!"));

// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
document.querySelector("main").addEventListener("click", e => {
    let trgParent = e.target;
    while (trgParent && trgParent.tagName != "ARTICLE") {
        trgParent = trgParent.parentElement;
    }
    if (trgParent) {
        console.log(`Hi, Im article ${trgParent.querySelector("h3")?.innerText}`);
    }
});
