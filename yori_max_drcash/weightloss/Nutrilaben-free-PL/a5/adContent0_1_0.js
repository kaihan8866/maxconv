// 获取当前脚本的完整 URL
const currentScriptURL = document.currentScript.src;

// 提取 baseURL (到最后一个'/'之前的部分)
const baseURL = currentScriptURL.substring(0, currentScriptURL.lastIndexOf('/'));

$(document).ready(function() {
    const current = $('.inL_837661');
    current.prev().remove();
    current.next().remove();
    current.remove();
    console.log("remove inL_837661");
});

const AdContent = {
    "灵感瞬间-1": {
        ".wrapper .title": "MEDIA SĄ ZSZOKOWANE! Zapiski z tego zeszytu to przełom w walce z nadwagą. Studentka z Krakowa stworzyła unikalną ziołową formułę, która pomaga schudnąć 8-15 kg miesięcznie bez diety i ćwiczeń!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-1.png\" />'
      },
    "灵感瞬间-2": {
        ".wrapper .title": "OTO SEKRET PŁASKIEGO BRZUCHA: Studentka z Krakowa w swojej kuchni połączyła 2 składniki, które rozbijają komórki tłuszczowe w 48 godzin. Koncerny farmaceutyczne nie chcą, żebyś o tym wiedział!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-1.png\" />'
    },
    "灵感瞬间-3": {
        ".wrapper .title": "TO WŁAŚNIE CHCĄ UKRYĆ: Prosta, 2-składnikowa formuła z zeszytu studentki, która pozwala schudnąć 8-15 kg miesięcznie bez diety i ćwiczeń. Zobacz, dlaczego jest tak skuteczna!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-1.png\" />'
    },
    "故事起点-1": {
        ".wrapper .title": "PAMIĘTASZ TO UCZUCIE BEZSILNOŚCI? Studentka z Krakowa zamieniła je w przełomową formułę, która pomaga schudnąć 8-15 kg miesięcznie bez diety i ćwiczeń. Zobacz, jak to zrobiła!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-2.png\" />'
    },
    "故事起点-2": {
        ".wrapper .title": "TO OSTATNIE TAKIE ZDJĘCIE, JAKIE SOBIE ZROBIŁA: 3 miesiące później, dzięki swojej unikalnej ziołowej formule, ważyła 15 kg mniej. Teraz jej metoda jest dostępna dla każdego, ale koncerny chcą ją zablokować!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-2.png\" />'
    },
    "故事起点-3": {
        ".wrapper .title": "JEŚLI CZUJESZ, ŻE TO JUŻ KONIEC WALKI, ZOBACZ TO: Studentka z Krakowa znalazła wyjście z tej samej sytuacji. Stworzyła unikalną ziołową formułę, która pomaga schudnąć 8-15 kg miesięcznie bez diety i ćwiczeń!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-2.png\" />'
    },
    "本土骄傲-1": {
        ".wrapper .title": "TEN KRAKOWSKI SEKRET JEST JUŻ DOSTĘPNY! Studentka stworzyła unikalną ziołową formułę, która pomaga schudnąć 8-15 kg miesięcznie. Firmy farmaceutyczne próbowały to zablokować!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-3.png\" />'
    },
    "本土骄傲-2": {
        ".wrapper .title": "OTO ODKRYCIE, O KTÓRYM MÓWI CAŁA POLSKA: Studentka z Krakowa znalazła sposób, by schudnąć 8-15 kg miesięcznie bez diety i ćwiczeń. Zobacz jej unikalną ziołową formułę!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-3.png\" />'
    },
    "本土骄傲-3": {
        ".wrapper .title": "NOWA METODA Z KRAKOWA POZWALA SCHUDNĄĆ 8-15 KG W MIESIĄC: Studentka opracowała unikalną ziołową formułę, która działa nawet, gdy śpisz. Koncerny farmaceutyczne nie chcą, żebyś o tym wiedział!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-3.png\" />'
    },
    "神秘成分-1": {
        ".wrapper .title": "TO WŁAŚNIE TEN SKŁADNIK ZMIENIA WSZYSTKO: Studentka z Krakowa odkryła, że ekstrakt z karczocha w odpowiednich proporcjach resetuje metabolizm i pozwala schudnąć 8-15 kg miesięcznie bez diety!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-1.png\" />'
    },
    "神秘成分-2": {
        ".wrapper .title": "KLUCZ DO PŁASKIEGO BRZUCHA ZNALEZIONY W KRAKOWIE: Studentka odkryła, że prosty ekstrakt z tej popularnej rośliny zmusza organizm do spalania tłuszczu 24/7. Firmy farmaceutyczne są wściekłe!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-1.png\" />'
    },
    "神秘成分-3": {
        ".wrapper .title": "SEKRET ZNANY OD WIEKÓW, TERAZ ODKRYTY NA NOWO: Studentka z Krakowa stworzyła unikalną formułę opartą na ekstrakie z karczocha, która pomaga schudnąć 8-15 kg miesięcznie. To zagrożenie dla drogich i nieskutecznych diet.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-1.png\" />'
    },
    "幕后黑手-1": {
        "tit.wrapper .titlele": "OTO DLACZEGO ONI NIE CHCĄ, ŻEBYŚ O TYM WIEDZIAŁA: Prosta i tania formuła studentki z Krakowa pozwala schudnąć 8-15 kg miesięcznie, co zagraża ich miliardowym zyskom ze sprzedaży drogich leków!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-2.png\" />'
    },
    "幕后黑手-2": {
        ".wrapper .title": "TO WŁAŚNIE UKRYWAJĄ PRZED TOBĄ FIRMY FARMACEUTYCNE: Studentka z Krakowa stworzyła unikalną ziołową formułę, która pozwala schudnąć 8-15 kg miesięcznie bez diety i ćwiczeń. Jest zbyt skuteczna, by pozwolili jej wejść na rynek.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-2.png\" />'
    },
    "幕后黑手-3": {
        ".wrapper .title": "TEN SEKRET MOŻE ZNISZCZYĆ RYNEK DIET: Studentka z Krakowa odkryła, jak schudnąć 8-15 kg miesięcznie bez głodówki i ćwiczeń. Dlatego wielkie koncerny farmaceutyczne robią wszystko, by zablokować jej odkrycie.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-2.png\" />'
    },
    "颠覆规则-1": {
        ".wrapper .title": "OTO PRAWDZIWY POWÓD, DLACZEGO NIE CHUDNIESZ: To nie brak silnej woli, a spowolniony metabolizm. Studentka z Krakowa stworzyła ziołową formułę, która resetuje go do trybu spalania tłuszczu w 48 godzin!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-3.png\" />'
    },
    "颠覆规则-2": {
        ".wrapper .title": "POWÓD, DLA KTÓREGO MĘCZYSZ SIĘ BEZ EFEKTÓW, JEST PROSTY: Dieta i ćwiczenia nie naprawiają metabolizmu. Zobacz, jak prosta ziołowa formuła studentki z Krakowa robi to za Ciebie, pozwalając chudnąć bez wysiłku.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-3.png\" />'
    },
    "颠覆规则-3": {
        ".wrapper .title": "TEN LEPSZY SPOSÓB JEST JUŻ DOSTĘPNY DLA CIEBIE: Studentka z Krakowa udowodniła, że można schudnąć 8-15 kg miesięcznie bez diety i ćwiczeń. Jej unikalna ziołowa formuła stała się hitem, którego boją się koncerny farmaceutyczne.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-3.png\" />'
    },
    "量化成功-1": {
        ".wrapper .title": "OTO SPOSÓB NA -12 CM W TALII W 30 DNI, KTÓRY ZSZOKOWAŁ DIETETYKÓW: Studentka z Krakowa stworzyła unikalną ziołową formułę, która spala tłuszcz z brzucha i pozwala chudnąć 8-15 kg miesięcznie bez diety i ćwiczeń.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-1.png\" />'
    },
    "量化成功-2": {
        ".wrapper .title": "TAK, TO UCZUCIE JEST TERAZ MOŻLIWE DLA KAŻDEGO: Zobacz, jak unikalna ziołowa formuła studentki z Krakowa pomaga kobietom w całej Polsce tracić centymetry w talii i chudnąć 8-15 kg miesięcznie bez wysiłku.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-1.png\" />'
    },
    "量化成功-3": {
        ".wrapper .title": "OTO POLSKA METODA, DZIĘKI KTÓREJ TRACISZ 1 CM Z BRZUCHA CO 3 DNI: Studentka z Krakowa opracowała przełomową, ziołową formułę, która resetuje metabolizm. Koncerny farmaceutyczne nie chcą, żebyś o tym wiedział!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-1.png\" />'
    },
    "解锁自由-1": {
        ".wrapper .title": "TAK, TO MOŻLIWE! Zobacz, jak unikalna ziołowa formuła studentki z Krakowa pozwala jeść ulubione potrawy i chudnąć 8-15 kg miesięcznie, resetując metabolizm do trybu spalania tłuszczu.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-2.png\" />'
    },
    "解锁自由-2": {
        ".wrapper .title": "SEKRET KOBIET, KTÓRE JEDZĄ WSZYSTKO I NIE TYJĄ, ZOSTAŁ ODKRYTY: To nie geny, a aktywny metabolizm. Studentka z Krakowa stworzyła formułę, która go reaktywuje i pozwala spalać kalorie zamiast je magazynować.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-2.png\" />'
    },
    "解锁自由-3": {
        ".wrapper .title": "OD DZIŚ MOŻESZ JEŚĆ TO, CO KOCHASZ! Studentka z Krakowa opracowała przełomową, ziołową formułę, która przyspiesza metabolizm tak bardzo, że możesz chudnąć 8-15 kg miesięcznie bez rezygnowania z przyjemności.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-2.png\" />'
    },
    "衣橱惊喜-1": {
        ".wrapper .title": "PRZYPOMNIJ SOBIE TO UCZUCIE! Studentka z Krakowa stworzyła unikalną ziołową formułę, która resetuje metabolizm i pozwala wrócić do dawnej figury, jedząc to, co kochasz.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-3.png\" />'
    },
    "衣橱惊喜-2": {
        ".wrapper .title": "OTO METODA, DZIĘKI KTÓREJ TWOJE STARE UBRANIA BĘDĄ JAK NOWE: Zapomnij o dietach. Unikalna ziołowa formuła studentki z Krakowa pozwala schudnąć 8-15 kg miesięcznie i znów cieszyć się całą swoją szafą.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-3.png\" />'
    },
    "衣橱惊喜-3": {
        ".wrapper .title": "JAK TO MOŻLIWE, ŻE SUKIENKA SPRZED 10 LAT ZNÓW PASUJE? To nie magia, to nauka. Studentka z Krakowa odkryła, jak reaktywować \"młodzieńczy\" metabolizm i chudnąć bez wysiłku. Firmy farmaceutyczne są wściekłe.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-3.png\" />'
    },
    "黄金标准-1": {
        ".wrapper .title": "OTO SEKRET UTRATY 35 KG, KTÓREGO NIE ZNAJĄ DIETETYCY: Studentka z Krakowa stworzyła unikalną ziołową formułę, która pozwala chudnąć 8-15 kg miesięcznie bez względu na to, co jesz.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4-1.png\" />'
    },
    "黄金标准-2": {
        ".wrapper .title": "TAK WŁAŚNIE PRZECHODZI SIĘ Z ROZMIARU XXL NA S W 3 MIESIĄCE: To nie dieta, a nauka. Oparta na ziołach formuła studentki z Krakowa resetuje metabolizm i spala tłuszcz 24/7.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4-1.png\" />'
    },
    "黄金标准-3": {
        ".wrapper .title": "OTO HISTORIA DRUGIEJ POŁOWY JEJ CIAŁA: Zniknęła w 3 miesiące dzięki unikalnej ziołowej formule studentki z Krakowa. Zobacz, jak działa ta metoda, której boją się koncerny farmaceutyczne.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4-1.png\" />'
    },
    "手中过去-1": {
        ".wrapper .title": "OTO HISTORIA ZMIANY, KTÓRA ZSZOKOWAŁA JEJ ZNAJOMYCH: To nie dieta, a unikalna ziołowa formuła studentki z Krakowa pozwoliła jej zostawić stare życie za sobą i schudnąć 8-15 kg miesięcznie.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4-2.png\" />'
    },
    "手中过去-2": {
        ".wrapper .title": "TAK, TO TA SAMA OSOBA. TO SIŁA KRAKOWSKIEJ METODY: Studentka z Krakowa stworzyła formułę, która resetuje metabolizm i pozwala osiągnąć przemianę, o której inni mogą tylko marzyć. Zobacz, jak to działa.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4-2.png\" />'
    },
    "手中过去-3": {
        ".wrapper .title": "ZMIEŃ SWOJE ZDJĘCIE \"PRZED\" W HISTORIĘ DZIĘKI TEJ METODZIE: Unikalna ziołowa formuła studentki z Krakowa to przełom w walce z nadwagą. Pomogła już tysiącom, teraz może pomóc i Tobie.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4-2.png\" />'
    },
    "情感转变-1": {
        ".wrapper .title": "HISTORIA ZAPISANA NA TEJ TWARZY JEST PROSTA: To nie zmiana diety, a reset metabolizmu. Studentka z Krakowa odkryła ziołową formułę, która pozwala odzyskać nie tylko figurę, ale i radość życia.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4-3.png\" />'
    },
    "情感转变-2": {
        ".wrapper .title": "TYLKO JEDNA RZECZ DZIELI TE DWA ŻYCIA: Unikalna ziołowa formuła studentki z Krakowa, która resetuje metabolizm i pozwala schudnąć 8-15 kg miesięcznie, jedząc to, co kochasz. To ona jest powodem tej przemiany.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4-3.png\" />'
    },
    "情感转变-3": {
        ".wrapper .title": "OTO EFEKT RESETU METABOLIZMU, KTÓREGO BOJĄ SIĘ FIRMY FARMACEUTYCZNE: Studentka z Krakowa stworzyła unikalną ziołową formułę, która pozwala przejść od \"przed\" do \"po\" w mniej niż 3 miesiące, bez diety i ćwiczeń.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4-3.png\" />'
    },
    "吃蛋糕的女性": {
        ".wrapper .title": "TAK, TO MOŻLIWE! Zobacz, jak unikalna ziołowa formuła studentki z Krakowa pozwala jeść ulubione potrawy i chudnąć 8-15 kg miesięcznie, resetując metabolizm do trybu spalania tłuszczu.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1.png\" />'
    },
    "衣橱惊喜": {
        ".wrapper .title": "PRZYPOMNIJ SOBIE TO UCZUCie! Studentka z Krakowa stworzyła unikalną ziołową formułę, która resetuje metabolizm i pozwala wrócić do dawnej figury, jedząc to, co kochasz.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2.png\" />'
    },
    "故事起点": {
        ".wrapper .title": "JEŚLI CZUJESZ, ŻE TO JUŻ KONIEC WALKI, ZOBACZ TO: Studentka z Krakowa znalazła wyjście z tej samej sytuacji. Stworzyła unikalną ziołową formułę, która pomaga schudnąć 8-15 kg miesięcznie bez diety i ćwiczeń!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3.png\" />'
    },
    "在厨房研究的学生": {
        ".wrapper .title": "MEDIA SĄ ZSZOKOWANE! Zapiski z tego zeszytu to przełom w walce z nadwagą. Studentka z Krakowa stworzyła unikalną ziołową formułę, która pomaga schudnąć 8-15 kg miesięcznie bez diety i ćwiczeń!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4.png\" />'
    },
    "跑步机被打叉": {
        ".wrapper .title": "OTO PRAWDZIWY POWÓD, DLACZEGO NIE CHUDNIESZ: To nie brak silnej woli, a spowolniony metabolizm. Studentka z Krakowa stworzyła ziołową formułę, która resetuje go do trybu spalania tłuszczu w 48 godzin!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/5.png\" />'
    },
    "朝鲜蓟与胶囊": {
        ".wrapper .title": "SEKRET ZNANY OD WIEKÓW, TERAZ ODKRYTY NA NOWO: Studentka z Krakowa stworzyła unikalną formułę opartą na ekstrakie z karczocha, która pomaga schudnąć 8-15 kg miesięcznie. To zagrożenie dla drogich i nieskutecznych diet.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/6.png\" />'
    },
    "克拉科夫地图与瓶子": {
        ".wrapper .title": "OTO ODKRYCIE, O KTÓRYM MÓWI CAŁA POLSKA: Studentka z Krakowa znalazła sposób, by schudnąć 8-15 kg miesięcznie bez diety i ćwiczeń. Zobacz jej unikalną ziołową formułę!",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/7.png\" />'
    },
    "内在重启": {
        ".wrapper .title": "SEKRET PRAWDZIWEJ PRZEMIANY ZACZYNA SIĘ WEWNĄTRZ: Studentka z Krakowa odkryła, jak naturalnie \"obudzić\" metabolizm, by zaczął pracować na Twoją korzyść, spalając tłuszcz 24/7.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/8.png\" />'
    },
    "她们的秘密": {
        ".wrapper .title": "OTO SEKRET, KTÓRYM POLKI DZIELĄ SIĘ SZEPTEM: To nie drogie zabiegi, a prosta, 2-składnikowa formuła studentki z Krakowa. Zobacz, dlaczego jest tak skuteczna i jak tysiące kobiet już z niej skorzystało.",
        ".alstep54_sglCGFT6q": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/9.png\" />'
    }
};