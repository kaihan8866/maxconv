// 获取当前脚本的完整 URL
const currentScriptURL = document.currentScript.src;

// 提取 baseURL (到最后一个'/'之前的部分)
const baseURL = currentScriptURL.substring(0, currentScriptURL.lastIndexOf('/'));

$(document).ready(function() {
  var img = $(".ajOqPE5L>img");
  console.log(img);
  img.replaceWith("<div class=\"hore-img\"></div>"); 
});




const AdContent = {
  // 角度一：“日常的斗争”
  "日常斗争瓶盖": {
    ".article--title b": `"La lucha con un simple frasco fue mi primera señal de alerta", revela Ana, la mujer que venció a la artrosis tras quedar en silla de ruedas.`,
    ".ajOqPE5L h2": `Descubre los 4 ingredientes naturales que un médico de Barcelona le recomendó para reconstruir sus articulaciones y poner fin a la frustración diaria.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-1.png\" />'
  },
  "日常斗争合页": {
    ".article--title b": `"Ese 'chirrido' en tus rodillas es tu cartílago gritando por ayuda", advierte el traumatólogo Dr. Valero. "Ignorarlo es el camino directo a la silla de ruedas".`,
    ".ajOqPE5L h2": `Descubre los 4 ingredientes naturales que están ayudando a miles de españoles a "lubricar" sus articulaciones y silenciar para siempre esa alarmante señal de aviso.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-2.png\" />'
  },
  "日常斗争绳结": {
    ".article--title b": `"La sensación de 'nudo' en la espalda fue como empezó todo", confiesa Ana Câșlari. "Dos años después, no podía ni levantarme de la cama y acabé en una silla de ruedas".`,
    ".ajOqPE5L h2": `Pero se negó a la cirugía y encontró la solución en 4 ingredientes naturales que "desataron" sus articulaciones y le permitieron volver a caminar libremente.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1-3.png\" />'
  },

  // 角度二：“重获自由”
  "重获自由晨窗": {
    ".article--title b": `"Hoy abro la ventana y sonrío", dice Ana, "pero hace menos de un año, mis mañanas empezaban en la oscuridad de una silla de ruedas, sin esperanza alguna".`,
    ".ajOqPE5L h2": `Su vida dio un vuelco gracias a 4 ingredientes naturales que le permitieron escapar de la pesadilla de la artrosis. Descubre su increíble historia de superación.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-1.png\" />'
  },
  "重获自由花园门": {
    ".article--title b": `"Mi casa se había convertido en mi prisión", relata Ana, la mujer que pasó de estar confinada en su hogar a desbloquear una nueva vida sin límites gracias a un método revolucionario.`,
    ".ajOqPE5L h2": `No aceptó la cirugía. Su secreto fue una fórmula de 4 ingredientes naturales que restauró sus articulaciones y le devolvió la llave de su propia libertad.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-2.png\" />'
  },
  "重获自由远足靴": {
    ".article--title b": `"Hoy disfruto de esta vista", diría Ana, "pero hace un año, el simple hecho de caminar de la cama al baño era mi Everest, y acabé derrotada en una silla de ruedas".`,
    ".ajOqPE5L h2": `Ella se negó a aceptar ese destino y recuperó su libertad de movimiento con una fórmula de 4 ingredientes naturales que le permitió dejar la silla atrás y volver a la naturaleza.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2-3.png\" />'
  },

  // 角度三：“被窃取的爱好”
  "被窃取的爱好-园艺": {
    ".article--title b": `La artrosis primero le robó su jardín, luego su capacidad para caminar. La historia de Ana Câșlari es una advertencia de lo que sucede cuando ignoramos las primeras señales.`,
    ".ajOqPE5L h2": `Pero su negativa a rendirse la llevó a descubrir una fórmula de 4 ingredientes naturales que no solo le devolvió su jardín, sino su vida entera. Conoce su secreto.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-1.png\" />'
  },
  "被窃取的爱好-舞鞋": {
    ".article--title b": `"Cuando dejé de bailar, sentí que una parte de mí moría", confiesa Ana. "Pero el golpe final fue cuando mi marido me abandonó al verme en una silla de ruedas".`,
    ".ajOqPE5L h2": `Sola y traicionada, encontró la fuerza para luchar y descubrió una fórmula de 4 ingredientes naturales que le permitió no solo volver a caminar, sino a sentirse ella misma otra vez.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-2.png\" />'
  },
  "被窃取的爱好-旅途": {
    ".article--title b": `"Mi último viaje fue de mi dormitorio a una silla de ruedas", relata con crudeza Ana Câșlari. "Todos mis sueños y planes quedaron destrozados por la artrosis".`,
    ".ajOqPE5L h2": `Pero en su momento más oscuro, descubrió una solución natural de 4 ingredientes que le devolvió el control de su cuerpo y la libertad para volver a soñar con el mapa del mundo.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3-3.png\" />'
  },
  "MGID-合页": {
    ".article--title b": `EXCLUSIVA: El "sonido" de bisagra oxidada en sus rodillas es el primer síntoma del rápido deterioro del cartílago, revela un estudio de Barcelona.`,
    ".ajOqPE5L h2": `Miles de personas ya están utilizando este método de 4 ingredientes naturales para silenciar el "chirrido" y evitar la silla de ruedas.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/1.png\" />'
  },
  // 创意 #2: 拧不开的瓶盖
  "MGID-瓶盖": {
    ".article--title b": `Si abrir una botella ya es una lucha, podría estar ignorando la "epidemia silenciosa" que conduce a la inmovilidad total, advierten especialistas.`,
    ".ajOqPE5L h2": `Descubra la fórmula natural de 4 ingredientes que las farmacias no quieren que conozca para recuperar la fuerza perdida en semanas.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/2.png\" />'
  },
  // 创意 #3: 难解的绳结
  "MGID-绳结": {
    ".article--title b": `La sensación de "nudo" en la espalda que ignora por la mañana es la misma que postró a Ana Câșlari en una silla de ruedas.`,
    ".ajOqPE5L h2": `Su increíble recuperación se debió a un truco de 4 ingredientes naturales que "desata" las articulaciones y que los médicos corruptos odian.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/3.png\" />'
  },
  // 创意 #4: 蒙尘的园艺工具
  "MGID-园艺": {
    ".article--title b": `ADVERTENCIA MÉDICA: El estudio que vincula el abandono de hobbies como la jardinería con una probabilidad del 85% de acabar en silla de ruedas en 2 años.`,
    ".ajOqPE5L h2": `Pero el mismo estudio reveló un método de 4 ingredientes naturales que puede revertir este pronóstico y devolverle la alegría de su jardín.`,
    ".hore-img": '<img style="width: 100%; height: auto; display: block;" src=\"' + baseURL + '\/images\/4.png\" />'
  }
};
