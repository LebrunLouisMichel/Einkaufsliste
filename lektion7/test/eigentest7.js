import {Gruppe} from "../../js/Gruppe.js"
import {Artikel} from "../../js/Artikel.js"
import {Shopping} from "../../js/Shopping.js"
import artikel from "../../src/model/Artikel.js";


function teste_artikelAuflisten() {
    console.debug("Aufgabe 1 ----------------------");
    console.debug("Artikel auflisten:");

    let saft = new Artikel("saft", 1)
    let wasser = new Artikel("wasser", 2)
    let cola = new Artikel("cola", 3)
    let mehl = new Artikel("Mehl", 4)
    let reis = new Artikel("Reis", 5)
    let banane = new Artikel("Banane", 6)
    let weltmeister = new Artikel("Weltmeister", 7)
    let weizentoast = new Artikel("Weizen Toast", 8)
    let vollkorntoast = new Artikel("Vollkorn Toast", 9)
    let orangensaft = new Artikel("Orangensaft", 10)
    let milch = new Artikel("Milch", 11)
    let gouda = new Artikel("Gouda", 12)
    let tillsitter = new Artikel("Tillsitter", 13)
    let kaffee = new Artikel("Kaffee", 14)
    let margarine = new Artikel("Margarine", 15)
    let olivenloel = new Artikel("Oliven Öl", 16)
    let frittieroel = new Artikel("Frittier Öl 3L", 17)
    let oel = new Artikel("Öl 1L", 18)
    let kakao = new Artikel("Kakao", 19)
    let paprikatk = new Artikel("Paprika TK", 20)
    let hackfleisch = new Artikel("Hackfleisch 500G", 21)
    let bratwurst = new Artikel("Bratwurst 5er TK", 22)
    let schweinefilet = new Artikel("Schweinefilet", 23)
    let kotelett = new Artikel("Koteletts TK", 24)
    let kartoffel = new Artikel("Kartoffeln in ca.kg", 25)
    let zwiebel = new Artikel("Zwiebeln in ca.Kg", 26)
    let tomaten = new Artikel("Tomaten TK", 27)
    let moehren = new Artikel("Möhren TK", 28)
    let erbsen = new Artikel("Erbsen TK", 29)
    let spaghetti = new Artikel("Spaghetti", 30)
    let spirelli = new Artikel("Spirelli", 31)
    let penne = new Artikel("Penne", 32)
    let tortelinischinken = new Artikel("Tortelini Schinken", 33)
    let tortelinispinat = new Artikel("Tortelini Spinat", 34)
    let passiertetomaten = new Artikel("Passierte Tomaten", 35)
    let tomatendose = new Artikel("Tomaten Dose", 36)
    let tomatenmark = new Artikel("Tomatenmark", 37)
    let ketchup = new Artikel("Ketchup", 38)
    let mayo = new Artikel("Mayo", 39)
    let remoulade = new Artikel("Remoulade", 40)
    let senf = new Artikel("Senf", 41)
    let suessauer = new Artikel("Süß Sauer", 42)
    let curryketchup = new Artikel("Curry Ketchup", 43)
    let knoblauchsauce = new Artikel("Knoblauch Sauce", 44)
    let bbcsauce = new Artikel("BBC Sauce", 45)
    let kraeuterbutter = new Artikel("Kräuterbutter", 46)
    let kochsahne = new Artikel("Kochsahne", 47)
    let schlagsahne = new Artikel("Schlagsahne", 48)
    let zucker = new Artikel("Zucker", 49)
    let schokoaufstrich = new Artikel("Schokoaufstrich", 50)
    let marmelade = new Artikel("Marmelade", 51)
    let kaffeefilter = new Artikel("Kaffeefilter Pack", 52)
    let honig = new Artikel("Honig", 53)
    let fenchelhonig = new Artikel("Fenchelhonig", 54)
    let kamillentee = new Artikel("Kamillentee", 55)
    let fencheltee = new Artikel("Fencheltee", 56)
    let pfefferminztee = new Artikel("Pfefferminztee", 57)
    let vanillezucker = new Artikel("Vanillezucker", 58)
    let amarettosirup = new Artikel("Amarettosirup", 59)
    let colasirup = new Artikel("Colasirup", 60)
    let orangensirup = new Artikel("Orangensirup", 61)
    let zitrussirup = new Artikel("Zitrussirup", 62)
    let prinzessbohnen = new Artikel("Prinzessbohnen", 63)
    let chillibohnen = new Artikel("Chillibohnen", 64)
    let weissebohnen = new Artikel("Weiße Bohnen", 65)
    let mandarinen = new Artikel("Mandarinen", 66)
    let apfelmuss = new Artikel("Apfelmuss", 67)
    let schwarzwurzel = new Artikel("Schwarzwurzel", 68)
    let spargel = new Artikel("Spargel", 69)
    let gruenkohl = new Artikel("Grühnkohl", 70)
    let fruehstuecksfleisch = new Artikel("Frühstücksfleisch", 71)
    let birnen = new Artikel("Birnen", 72)
    let aprikosen = new Artikel("Aprikosen", 73)
    let thunfisch = new Artikel("Thunfisch", 74)
    let champignons = new Artikel("Champignons", 75)
    let gurckenganz = new Artikel("Gurken ganz", 76)
    let pickels = new Artikel("Pickels", 77)
    let gurckengeschnitten = new Artikel("Gurcken geschnitten", 78)
    let salz = new Artikel("Salz", 78)
    let meersalz = new Artikel("Meersalz", 80)
    let pfefferweis = new Artikel("Pfeffer Weiß", 81)
    let pfefferfschwarz = new Artikel("Pfeffer Schwarz", 21)
    let pfefferbunt = new Artikel("Pfeffer Bunt", 83)
    let paparikaedelsuess = new Artikel("Paprika edelsüß", 84)
    let paprikarosenscharf = new Artikel("Paprika rosenscharf", 85)
    let muskatnuss = new Artikel("Muskatnuss", 86)
    let cumin = new Artikel("Cumin", 87)
    let thymian = new Artikel("Thymian", 88)
    let oregano = new Artikel("Oregano", 89)
    let basilicum = new Artikel("Basilicum", 90)
    let saucenbinderdunkel = new Artikel("Saucenbinder Dunkel", 91)
    let saucenbinderhell = new Artikel("Saucenbinder Hell", 92)
    let saucenbindercreme = new Artikel("Saucenbinder Creme", 93)
    let hollandaise = new Artikel("Hollandaise", 94)
    let butter = new Artikel("Butter", 95)
    let zitronensaft = new Artikel("Zitronensaft", 96)
    let essigessenz = new Artikel("Essigessenz", 97)
    let tafelessig = new Artikel("Tafelessig", 98)
    let apfelessig = new Artikel("Apfelessig", 99)
    let vanillepudding = new Artikel("Vanillepudding", 100)
    let schokopudding = new Artikel("Schokopudding", 101)
    let bier = new Artikel("Bier",102)
    let rum = new Artikel("Rum",103)
    let malibu = new Artikel("Malibu",104)
    let ananassaft = new Artikel("Ananassaft",105)


    let alkoholfreieGetraenke = new Gruppe("Alkoholfreie Getränke", 1)
    alkoholfreieGetraenke.artikelListe = [saft, wasser, cola, colasirup, orangensirup,zitrussirup,orangensaft,kaffee,kakao,kamillentee,pfefferminztee,fencheltee,amarettosirup,ananassaft]
    alkoholfreieGetraenke.artikelAuflisten(false)

    let obstundGemuese = new Gruppe("Obst und Gemüse", 2)
    obstundGemuese.artikelListe = [banane,paprikatk,kartoffel,zwiebel,tomaten,moehren,erbsen]
    obstundGemuese.artikelAuflisten(false)

    let getreideprodukte = new Gruppe("Getreideprodukte",3)
    getreideprodukte.artikelListe = [mehl,reis,spaghetti,spirelli,penne,tortelinispinat,tortelinischinken,]
    getreideprodukte.artikelAuflisten(false)

    let milchprodukte = new Gruppe("Milchprodukte",4)
    milchprodukte.artikelListe = [milchprodukte,gouda,tillsitter,schlagsahne,kochsahne,kraeuterbutter]
    milchprodukte.artikelAuflisten(false)

    let brot = new Gruppe("Brot",5)
    brot.artikelListe = [weltmeister,vollkorntoast,weizentoast]
    brot.artikelAuflisten(false)

    let essigundco = new Gruppe("Essig & Co",6)
    essigundco.artikelListe = [essigessenz,apfelessig,tafelessig,zitronensaft]
    essigundco.artikelAuflisten(false)

    let saucenunddips = new Gruppe("Saucen & Dips",7)
    saucenunddips.artikelListe = [ketchup,mayo,remoulade,knoblauchsauce,bbcsauce,curryketchup]
    saucenunddips.artikelAuflisten(false)

    let andere = new Gruppe("Andere",8)
    andere.artikelListe = [kaffeefilter]
    andere.artikelAuflisten(false)

    let aufstrich = new Gruppe("Aufstrich",9)
    aufstrich.artikelListe = [schokoaufstrich,marmelade]
    aufstrich.artikelAuflisten(false)

    let fleisch = new Gruppe("Fleisch",10)
    fleisch.artikelListe = [hackfleisch,bratwurst,schweinefilet,kotelett,]
    fleisch.artikelAuflisten(false)

    let alkohol = new Gruppe("Alkoholische Getränke",11)
    alkohol.artikelListe = [bier,rum,malibu]
    alkohol.artikelAuflisten(false)

    let fetteundoele = new Gruppe("Fette und Öle",12)
    fetteundoele.artikelListe = [margarine,frittieroel,olivenloel,oel]
    fetteundoele.artikelAuflisten(false)

    let konserven = new Gruppe("Konserven",13)
    konserven.artikelListe = [passiertetomaten,tomatendose,tomatenmark,prinzessbohnen,chillibohnen,weissebohnen,mandarinen,apfelmuss,schwarzwurzel,spargel,gruenkohl,fruehstuecksfleisch,birnen,aprikosen,thunfisch,champignons,gurckenganz,pickels,gurckengeschnitten]
    konserven.artikelAuflisten(false)

    let gewuerze = new Gruppe("Gewürze",14)
    gewuerze.artikelListe = [salz,meersalz,pfefferweis,pfefferfschwarz,pfefferbunt,paparikaedelsuess,paprikarosenscharf,muskatnuss,cumin,thymian,oregano,basilicum]
    gewuerze.artikelAuflisten(false,)

    let kochundbackhelfer = new Gruppe("Koch und Backhelfer",15)
    kochundbackhelfer.artikelListe = [zucker,saucenbinderdunkel,saucenbinderhell,saucenbindercreme,vanillepudding,schokopudding]
    kochundbackhelfer.artikelAuflisten(false)

}

function teste_gruppeFinden() {
    console.debug("Aufgabe 2 ----------------------");
    console.debug("Gruppe finden:");

    let einkaufen = new Shopping()
    einkaufen.gruppeHinzufuegen("Obst & Gemüse")
    einkaufen.gruppeHinzufuegen("Getreideprodukte")
    einkaufen.gruppeHinzufuegen("Milchprodukte")
    einkaufen.gruppeHinzufuegen("Brot")
    einkaufen.gruppeHinzufuegen("Essig & co")
    einkaufen.gruppeHinzufuegen("Saucen & Dips")
    einkaufen.gruppeHinzufuegen("Andere")
    einkaufen.gruppeHinzufuegen("Aufstrich")
    einkaufen.gruppeHinzufuegen("Fleisch")
    einkaufen.gruppeHinzufuegen("Alkoholische Getränke")
    einkaufen.gruppeHinzufuegen("Fette und Öle")
    einkaufen.gruppeHinzufuegen("Konserven")
    einkaufen.gruppeHinzufuegen("Gewürze")
    einkaufen.gruppeHinzufuegen("Koch & Backhelfer")


    // ToDo: füge ab hier deinen Code ein
    let gruppe1 = einkaufen.gruppeFinden("Obst & Gemüse")
    console.debug("gruppe1:",)

    let gruppe2 = einkaufen.gruppeFinden("Getreideprodukte")
    console.debug("gruppe2: ", gruppe2)

    let gruppe3 = einkaufen.gruppeFinden("Milchprodukte")
    console.debug("gruppe3: ", gruppe3)

    let gruppe4 = einkaufen.gruppeFinden("Brot")
    console.debug("gruppe4:", gruppe4)

    let gruppe5 = einkaufen.gruppeFinden("Essig & co")
    console.debug("gruppe5:", gruppe5)

    let gruppe6 = einkaufen.gruppeFinden("Saucen & Dips")
    console.debug("gruppe6:", gruppe6)

    let gruppe7 = einkaufen.gruppeFinden("Andere")
    console.debug("gruppe7:", gruppe7)

    let gruppe8 = einkaufen.gruppeFinden("Aufstrich")
    console.debug("gruppe8:", gruppe8)

    let gruppe9 = einkaufen.gruppeFinden("Fleisch")
    console.debug("gruppe9:", gruppe9)

    let gruppe10 = einkaufen.gruppeFinden("Alkoholische Getränke")
    console.debug("gruppe10:", gruppe10)

    let gruppe11 = einkaufen.gruppeFinden("Fette und Öle")
    console.debug("gruppe11:", gruppe11)

    let gruppe12 = einkaufen.gruppeFinden("Konserven")
    console.debug("gruppe12:", gruppe12)

    let gruppe13 = einkaufen.gruppeFinden("Gewürze")
    console.debug("gruppe13:", gruppe13)

    let gruppe14 = einkaufen.gruppeFinden("Koch & Backhelfer")
    console.debug("gruppe14:", gruppe14)

}

function main() {
    console.debug("[Lektion 7] ============================")
    teste_artikelAuflisten()
    teste_gruppeFinden()

}

main()

