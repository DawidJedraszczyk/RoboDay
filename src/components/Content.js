export const EVENT_NAME = "ROBODAY";
export const EVENT_NAME_FIRST_HALF = "ROBO";
export const EVENT_NAME_SECOND_HALF = "DAY";
export const MENU_OPTIONS = [
  "HARMONOGRAM",
  "WARSZTATY",
  "PARTNERZY",
  "KONTAKT",
];

export const CATCH_PHRASE_MIDDLE = "Poznaj świat robotów!";
export const CATCH_PHRASE_SMALL =
  "Możliwość POZNANia świata automatyzacji, zapoznania się z Politechniką Poznańską i wiele więcej...";

export const SCHEDULE_HEADER = "HARMONOGRAM ROBODAY";
export const SCHEDULE_HEADER_CATCH_PHRASE = "PRAWDŹ CO ZAPLANOWALIŚMY";

export const SCHEDULE_EVENTS = [
  {
    id: "first-event",
    hour: "10:00",
    description: "Przyjazd gości",
    list: [
      "Otwarcie eventu",
      "Prelekcja 'O studiowaniu na WiiT'",
      "Rozpoczęcie wycieczek",
    ],
  },
  {
    id: "first-event",
    hour: "11:00",
    description: "",
    list: [
      "Prelekcja 'Języki Programowania'",
      "Prelekcja 'Nasz robot'",
      "Rozpoczęcie wyścigów Line Followerów",
    ],
  },
  {
    id: "second-event",
    hour: "12:00",
    description: "",
    list: [
      "Prelekcje przygotowane przez studentów",
      "Konkursy drużynowe i indywidualne",
    ],
  },
  {
    id: "third-event",
    hour: "13:00",
    description: "",
    list: [
      "Zakończenie wyścigów Line Followerów",
      "Ogłoszenie wyników oraz rozdanie nagrów",
    ],
  },
  {
    id: "fourth-event",
    hour: "14:00",
    description: "Zakończenie RoboDay2023",
    list: [],
  },
];

export const WORKSHOPS_HEADER = "WARSZTATY I KONKURSY";
export const WORKSHOPS_HEADER_CATCH_PHRASE = "CZEKAJĄ NA WAS";
export const WORKSHOPS_LIST = [
  {
    logo: "assembly-logo.png",
    h3: "Assembly 8051",
    text: "Zapoznanie się z podstawami języka Assembly 8051 oraz stworzenie swojego pierwszego programu.",
  },
  {
    logo: "Opengl-logo.png",
    h3: "OpenGl",
    text: "Stworzenie swoich pierwszych grafik 3D. Efekty Waszej pracy będą od razu widoczne na ekranie!",
  },
  {
    logo: "Python-logo.png",
    h3: "Hackowanie",
    text: "Poznaj tajniki hackowania i dowiedz się, jak się chronić przed atakami hakerskimi w internecie.",
  },
];
export const AWARDS_HEADER = "NAGRODY DO WYGRANIA W KONKURSACH";
export const FIRST_AWARD = "Arduino Uno";
export const SECOND_AWARD = "Miernik uniwersalny";
