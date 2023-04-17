const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

const logoImg = document.getElementById("logo-img");
logoImg.src = siteContent.images[`logo-img`];

const navItems = document.getElementsByTagName("nav")[0].children;
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i+1}`];
}

const yazi=document.querySelector("h1");
yazi.textContent=siteContent.cta[`h1`]
const buton=document.querySelector("button");
buton.textContent=siteContent.cta[`button`];

document.getElementById("cta-img").src=siteContent.images[`cta-img`];



const ozelliklerH4 = siteContent["ana-içerik"]["özellikler-h4"];
const ozelliklerH4Element = document.querySelector('.top-content .text-content:nth-child(1) h4');
ozelliklerH4Element.textContent = ozelliklerH4;
const özellikleriçerik= siteContent["ana-içerik"]["özellikler-içerik"];
const ozelliklerP=document.querySelector('.top-content .text-content:nth-child(1) p');
ozelliklerP.textContent=özellikleriçerik;

const hakkimizdaH4 = siteContent["ana-içerik"]["hakkımızda-h4"];
const hakkimizdaH4Element = document.querySelector('.top-content .text-content:nth-child(2) h4');
hakkimizdaH4Element.textContent = hakkimizdaH4;

const hakkimizdaicerik =siteContent["ana-içerik"]["hakkımızda-içerik"];
const hakkimizdaP=document.querySelector('.top-content .text-content:nth-child(2) p');
hakkimizdaP.textContent=hakkimizdaicerik;




document.getElementById("middle-img").src=siteContent.images[`accent-img`];





const servislerH4Yazisi=siteContent["ana-içerik"]["servisler-h4"];
const servislerh4konumu=document.querySelector('.bottom-content .text-content:nth-child(1) h4');
servislerh4konumu.textContent=servislerH4Yazisi;

const servislerPYazisi=siteContent["ana-içerik"]["servisler-içeriği"];
const servislerPKonumu= document.querySelector('.bottom-content .text-content:nth-child(1) p');
servislerPKonumu.textContent=servislerPYazisi;



const ürünlerH4Yazisi=siteContent["ana-içerik"]["ürünler-h4"];
const ürünlerh4konumu=document.querySelector('.bottom-content .text-content:nth-child(2) h4');
ürünlerh4konumu.textContent=ürünlerH4Yazisi; 

const ürünlerPYazisi=siteContent["ana-içerik"]["ürünler-içeriği"];
const ürünlerPKonumu= document.querySelector('.bottom-content .text-content:nth-child(2) p');
ürünlerPKonumu.textContent=ürünlerPYazisi;

const vizyonH4Yazisi=siteContent["ana-içerik"]["vizyon-h4"];
const vizyonh4konumu=document.querySelector('.bottom-content .text-content:nth-child(3) h4');
vizyonh4konumu.textContent=vizyonH4Yazisi; 

const vizyonPYazisi=siteContent["ana-içerik"]["vizyon-içeriği"];
const vizyonPKonumu= document.querySelector('.bottom-content .text-content:nth-child(3) p');
vizyonPKonumu.textContent=vizyonPYazisi;

const conttactH4Konumu=document.querySelector('.contact h4');
conttactH4Konumu.textContent=siteContent["iletisim"]["iletişim-h4"];

const conttactp1Konumu=document.querySelector('.contact p:nth-of-type(1)');
conttactp1Konumu.textContent=siteContent["iletisim"]["adres"];

const conttactp2Konumu=document.querySelector('.contact p:nth-of-type(2)');
conttactp2Konumu.textContent=siteContent["iletisim"]["telefon"];

const conttactp3Konumu=document.querySelector('.contact p:nth-of-type(3)');
conttactp3Konumu.textContent=siteContent["iletisim"]["email"];

const footerLinks = document.getElementsByTagName('footer')[0].querySelectorAll('a');
footerLinks[0].textContent = siteContent["footer"]["copyright"];
