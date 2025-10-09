// 获取当前脚本的完整 URL
const currentScriptURL = document.currentScript.src;

// 提取 baseURL (到最后一个'/'之前的部分)
const baseURL = currentScriptURL.substring(0, currentScriptURL.lastIndexOf('/'));


const AdContent = {
  "园艺之乐": {
    ".h2_1": "<span class=\"c-yellow\">Quei \"Piccoli Fastidi\" Hanno un Nome: Artrite e Artrosi.</span><br>Finalmente, la soluzione italiana con ingredienti 100% naturali, studiata per eliminare il dolore e restituirti la libertà di fare ciò che ami.",
    ".lh1-25": "Lo spray Hondro Sol è la tua arma contro artrite e artrosi.",
    "header>.container": '<img src=\"' + baseURL + '\"/1-1.png />'
  },
  "分岔的路口": {
    ".h2_1": "<span class=\"c-yellow\">Non Lasciare Che il Dolore Articolare Vi Faccia Prendere Strade Diverse.</span><br>La nostra formula naturale è il supporto ideale per le coppie che si rifiutano di lasciare che i fastidi fisici rallentino il loro cammino insieme.",
    ".lh1-25": "Lo spray Hondro Sol è la tua arma contro artrite e artrosi.",
    "header>.container": '<img src=\"' + baseURL + '\"/1-2.png />'
  },
  "被偷走的时光": {
    ".h2_1": "<span class=\"c-yellow\">L'Artrite ti Sta Rubando i Momenti Migliori? Riprenditili.</span><br>La nostra formula naturale è progettata per ridarti la mobilità e la libertà dal dolore necessarie per non perdere mai più un singolo, prezioso momento con i tuoi nipoti.",
    ".lh1-25": "Lo spray Hondro Sol è la tua arma contro artrite e artrosi.",
    "header>.container": '<img src=\"' + baseURL + '\"/1-3.png />'
  },
  "温柔的战士": {
    ".h2_1": "<span class=\"c-yellow\">Questo Fiore è il Peggior Nemico del Tuo Dolore Articolare.</span><br>Scopri come l'estratto puro di Arnica Montana, al centro della nostra formula, agisce come un potente antinfiammatorio naturale per darti un sollievo rapido e duraturo.",
    ".lh1-25": "Lo spray Hondro Sol è la tua arma contro artrite e artrosi.",
    "header>.container": '<img src=\"' + baseURL + '\"/2-1.png />'
  },
  "协同效应的力量": {
    ".h2_1": "<span class=\"c-yellow\">Perché le Creme all'Arnica Comuni Spesso Falliscono? Perché Manca Questo.</span><br>La nostra formula sinergica combatte il dolore su 3 fronti: elimina l'infiammazione (Arnica), ripristina la cartilagine (Boswellia) e dona sollievo immediato (Cipresso).",
    ".lh1-25": "Lo spray Hondro Sol è la tua arma contro artrite e artrosi.",
    "header>.container": '<img src=\"' + baseURL + '\"/2-2.png />'
  },
  "强大的答案": {
    ".h2_1": "<span class=\"c-yellow\">La Tua Artrosi è Ostinata? La Nostra Formula lo è di Più.</span><br>Sfruttando la potenza degli estratti alpini, abbiamo creato una soluzione naturale progettata per combattere l'infiammazione cronica e il dolore persistente.",
    ".lh1-25": "Lo spray Hondro Sol è la tua arma contro artrite e artrosi.",
    "header>.container": '<img src=\"' + baseURL + '\"/2-3.png />'
  },
  "智能对策": {
    ".h2_1": "<span class=\"c-yellow\">Non È Solo Più Comodo. È Infinitamente Più Efficace.</span><br>La nostra formula in spray, grazie agli oli essenziali, penetra in profondità fino alla capsula articolare, a differenza delle creme che agiscono solo in superficie.",
    ".lh1-25": "Lo spray Hondro Sol è la tua arma contro artrite e artrosi.",
    "header>.container": '<img src=\"' + baseURL + '\"/3-1.png />'
  },
  "问题根源": {
    ".h2_1": "<span class=\"c-yellow\">La Radice del Problema è una Sola: la Cartilagine Danneggiata.</span><br>A differenza dei comuni antidolorifici, la nostra formula brevettata agisce dall'interno per rigenerare i tessuti e eliminare l'infiammazione.",
    ".lh1-25": "Lo spray Hondro Sol è la tua arma contro artrite e artrosi.",
    "header>.container": '<img src=\"' + baseURL + '\"/3-2.png />'
  },
  "意式从容": {
    ".h2_1": "<span class=\"c-yellow\">Quel \"Compromesso\" si Chiama Dolore Articolare. È Ora di Rifiutarlo.</span><br>Ecco la formula italiana brevettata, con attivi 100% naturali, progettata per eliminare l'infiammazione e restituirti la libertà di un'eleganza senza sforzo.",
    ".lh1-25": "Lo spray Hondro Sol è la tua arma contro artrite e artrosi.",
    "header>.container": '<img src=\"' + baseURL + '\"/3-3.png />'
  }
};