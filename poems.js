// Veera's poems.
// Shape: { title, text, audio: "assets/file" | null, reader: string | null }
// Whitespace in text is significant: newlines AND indentation are preserved
// as-is (rendered with white-space: pre-wrap).
const POEMS = [
  {
    title: "Pidellä",
    text: `Anna tämän pidellä
Kun aallot lyövät kasvojesi rantaan
Kun maanjäristys
Siirtää elämäsi vuoret tomuksi
Kun aurinko pimenee
Tulivuoren purkaessa tuhonsa
Kun tuskan laavat polttavat kyläsi vehreillä rinteillä
Jättäen jälkeensä
Vain mustan kuoleman kuoren

Anna minun pidellä sinua

Sillä pidellä sinua täytyy
Jonkun valon
     liekin puhaltaa
Puhaltaa

Hengitä kanssani
Hengitän kanssasi

Anna Elämän pidellä sinua sylissään

Me pitelemme

Me selviämme

Me elämme jälleen

Kuoleman kuoren alta lopulta
Puskee vihreää`,
    audio: null,
    reader: null,
  },
  {
    title: "Jos kuitenkin uskon",
    text: `Että tämä maa kantaa
Tämä syli pysyy avoinna
Nämä kädet koskettavat hellyydellä
Kieli vielä puhuu pehmeitä sanoja

Jos kuitenkin uskon niin
Vaikka vanhat lorut ja taiat yrittävät napata kiinni
Iskeä väliin

Sotkee katseet ja sanat ja tavut ja tarinat

Jos kuitenkin uskon niin

Pidäthän minusta kiinni?`,
    audio: null,
    reader: null,
  },
  {
    title: "Hitaasti, mutta varmasti",
    text: `He kypsyvät
Metsän sylissä
Sammalpeitteellä
Varpujen nokassa
Auringon hivelemänä
Sadepisaroiden pesemänä`,
    audio: null,
    reader: null,
  },
  {
    title: "Alitajunta tekee töitään",
    text: `kysymättä mitään lupaa mieleltä.

Raksuttaa menemään
Pitäen kirjaa päivistä ja tunneista
Suukoista ja hymyistä
Mitaten ja mitaten

Ja muistaen kaiken.

Ohjenuorana joku typerä kivunvälttelyjärjestelmä`,
    audio: null,
    reader: null,
  },
  {
    title: "Finding it",
    text: `Losing it
Finding it again

Like the tidal wave

Maybe the world just keeps spinning like this
With no end

Finding it
Losing it
Again and again

Like the aurora
Or frosty breath of a dragon queen

Found it
Lost it
Found again
And again`,
    audio: null,
    reader: null,
  },
  {
    title: "Huomen on tänään",
    text: `Huomen on tänään
huomen on huomennakin
Ja sitten
Ja sitten
Ja taas
Ja taas

Kunnes saatiin tarpeeksi huomenia
Alkaa ennen
Silloin
Joskus
Huokaus
Lapsuuden huuto korvissa

Eikä enää ole huomen
On vain eilen ja silloin ja aika jolloin sähkölinjat olivat suurinta hauskaa runkojen vilistessä ohi

Eikä nämä, jotka nyt puhuvat koko suunsa täyvveltä ävviä
Edes tiedä
Miltä näyttää mäntymetsän edessä luikerteleva musta puhelu`,
    audio: null,
    reader: null,
  },
  {
    title: "Sanat",
    text: `kuin varpusparvi keväällä
tai no
ihan sama mikä   vuodenaika
kaartavat kiertävät varpustellen
kauessa lähemmäs

    ylös ja alas
                    sivuttain

korvani vieressä sanat
heliseviä kieloja
väreitä pystyyn nousseissa karvoissa

ja aina välillä pääskysen iloinen kiljaisu
ötökän perässä heitetty kiepaus

kesä

kaikesta kaikesta kaikesta suurin

kesä`,
    audio: null,
    reader: null,
  },
  {
    title: "Puut",
    text: `Puut ovat vielä täällä
Ja sade
Kivisten seinien kimallus
Tai kalsea kalma

Kimallus

Kylmä tai sokaiseva

Puut ja niiden kukat

Kaikki muu muuttuu mutta
Askelten kolina kadulla

Ihmisen marssi ajassa

Puut
Puut ovat vielä täällä

Isot isämme
Ääriään myötä täynnä olleet äitimme

Loppuun tihkuttu
Virkattu
Leivottu
Tuuditettu
Äitimme

He ovat poissa

Mutta puut
Puut ovat vielä täällä`,
    audio: null,
    reader: null,
  },
  {
    title: "jos saisi",
    text: `käpertyä aamukahviin
papujen pyörteeseen
hetken istua hiljaa
ja kuunnella,
kun muu maailma herää aamuun
ikkunan takana
aurinko kutittelee jäätyneitä lehtiä
kulta ja hopea hihittelevät
ikkunan takana
minä painan huuleni kupin reunaan
ja hengitän tätäkin päivää alkavaksi

hyvää huomenta`,
    audio: null,
    reader: null,
  },
  {
    title: "Kun maa on kuollut",
    text: `Eikä kukaan enää hengitä elämää

Kun puut seisovat riisuttuina

Tummia

alastomia
           vartaloita taivasta vasten

Kun värit ovat valuneet maan poveen

Kun maa itse
on jäässä

Kun eläimet ovat piiloissaan
Ja linnut lentäneet etelään

Herää taivas eloon
Koko täyteen loistoonsa

Maalaa eteesi väriloiston,
joka tyynnyttää kaiken

rauhaan

Jonka pelkäsit olevan kadotusta

Mutta kaikki se kauneus
Saa sielusi lauluun

Se herää hiljaa
Pehmeään lauluun keväästä

Jonka voimin lepäät tämän talven

Sillä

Kun maa on kuollut
Eikä kukaan enää hengitä elämää

Herää taivas eloon
Koko täyteen loistoonsa
Maalaten eteesi sinut`,
    audio: "assets/kun-maa-on-kuollut.mp3",
    reader: "Teemu Mäkinen",
  },
];
