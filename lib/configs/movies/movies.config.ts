import { dayJS } from "@lib/utils/day-js";
import type { Movie } from "./movies.type";
import { BlackWidowNatashaRomanoff, HulkBruceBanner, IronManTonyStark, WarMachineJamesRodes } from "../characters/characters.config";

export const getMovies = (): Movie[] => movies;

export const getMovie = (id: number): Movie | null => {
  return movies.find((movie) => movie.id === id) ?? null;
};

export const movies: Movie[] = [
  {
    id: 1,
    title: "Iron Man",
    overview: [
      "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who",
      "is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity,",
      "Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with",
      "global implications, he dons his powerful armor and vows to protect the world as Iron Man."
    ].join(" "),
    releasedAt: dayJS("05/02/2008 00:00"),
    runningTime: 126,
    thumbnail: "iron-man.jpg",
    series: "Iron Man",
    directors: ["Jon Favreau"],
    writters: ["Mark Fergus", "Hawk Ostby", "Art Marcum", "Matt Holloway"],
    characters: [IronManTonyStark, WarMachineJamesRodes],
    productionCountries: ["United States", "Canada"],
    trailer: ""
  },
  {
    id: 2,
    title: "The Incredible Hulk",
    overview: [
      "In this new beginning, scientist Bruce Banner desperately hunts for a cure to the gamma radiation that",
      "poisoned his cells and unleashes the unbridled force of rage within him: The Hulk. Living in the shadows--cut",
      "off from a life he knew and the woman he loves, Betty Ross--Banner struggles to avoid the obsessive pursuit",
      "of his nemesis, General Thunderbolt Ross and the military machinery that seeks to capture him and brutally",
      "exploit his power. As all three grapple with the secrets that led to the Hulk's creation, they are confronted",
      "with a monstrous new adversary known as the Abomination, whose destructive strength exceeds even the Hulk's own.",
      "One scientist must make an agonizing final choice: accept a peaceful life as Bruce Banner or find heroism in the",
      "creature he holds inside--The Incredible Hulk."
    ].join(" "),
    releasedAt: dayJS("06/13/2008 00:00"),
    series: "Hulk",
    directors: ["Louis Leterrier"],
    runningTime: 112,
    thumbnail: "the-incredible-hulk.jpg",
    writters: ["Zak Penn"],
    characters: [HulkBruceBanner, IronManTonyStark],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 3,
    title: "Iron Man 2",
    overview: [
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share",
      "his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information",
      "will fall into the wrong hands. With Pepper Potts and \"Rhodey\" Rhodes by his side, Tony must forge new alliances and",
      "confront a powerful new enemy."
    ].join(" "),
    releasedAt: dayJS("05/07/2010 00:00"),
    series: "Iron Man",
    directors: ["Jon Favreau"],
    runningTime: 125,
    thumbnail: "iron-man-2.jpg",
    writters: ["Justin Theroux"],
    characters: [IronManTonyStark, WarMachineJamesRodes, BlackWidowNatashaRomanoff],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 4,
    title: "Thor",
    overview: [
      "As the son of Odin, king of the Norse gods, Thor will soon inherit the throne of Asgard from his aging father. However,",
      "on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the",
      "palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki, Thor's brother, plots",
      "mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat."
    ].join(" "),
    releasedAt: dayJS("05/06/2011 00:00"),
    series: "Thor",
    directors: ["Kenneth Branagh"],
    runningTime: 114,
    thumbnail: "thor.jpg",
    writters: ["Ashley Miller", "Zack Stentz", "Don Payne"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 5,
    title: "Captain America: The First Avenger",
    overview: [
      "Marvel's \"Captain America: The First Avenger\" focuses on the early days of the Marvel Universe when Steve Rogers",
      "volunteers to participate in an experimental program that turns him into the Super Soldier known as Captain America."
    ].join(" "),
    releasedAt: dayJS("07/22/2011 00:00"),
    series: "Captain America",
    directors: ["Joe Johnston"],
    runningTime: 124,
    thumbnail: "captain-america-the-first-avenger.jpg",
    writters: ["Christopher Markus", "Stephen McFeely"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 6,
    title: "The Avengers",
    overview: [
      "Marvel Studios presents in association with Paramount Pictures \"Marvel's The Avengers\"--the super hero team up of a",
      "lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black",
      "Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international",
      "peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster.",
      "Spanning the globe, a daring recruitment effort begins."
    ].join(" "),
    releasedAt: dayJS("05/04/2012 00:00"),
    series: "Avengers",
    directors: ["Joss Whedon"],
    runningTime: 143,
    thumbnail: "the-avengers.jpg",
    writters: ["Joss Whedon"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 7,
    title: "Iron Man 3",
    overview: [
      "Marvel's \"Iron Man 3\" pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds.",
      "When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible.",
      "This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices,",
      "relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to",
      "the question that has secretly haunted him: does the man make the suit or does the suit make the man."
    ].join(" "),
    releasedAt: dayJS("05/03/2013 00:00"),
    series: "Iron Man",
    directors: ["Shane Black"],
    runningTime: 131,
    thumbnail: "iron-man-3.jpg",
    writters: ["Drew Pearce", "Shane Black"],
    characters: [],
    productionCountries: ["United States", "Switzerland", "China"],
    trailer: ""
  },
  {
    id: 8,
    title: "Thor: The Dark World",
    overview: [
      "In the aftermath of Marvel's \"Thor\" and \"Marvel's The Avengers,\" Thor fights to restore order across the cosmos...but an ancient race",
      "led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot",
      "withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him",
      "to sacrifice everything to save us all."
    ].join(" "),
    releasedAt: dayJS("11/08/2013 00:00"),
    series: "Thor",
    directors: ["Alan Taylor"],
    runningTime: 112,
    thumbnail: "thor-the-dark-world.jpg",
    writters: ["Christopher L. Yost", "Christopher Markus", "Stephen McFeely"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 9,
    title: "Captain America: The Winter Soldier",
    overview: [
      "After the cataclysmic events in New York with The Avengers, Marvel's \"Captain America: The Winter Soldier\", finds Steve Rogers, aka",
      "Captain America, living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes",
      "under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow,",
      "Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every",
      "turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon.",
      "However, they soon find themselves up against an unexpected and formidable enemy--the Winter Soldier."
    ].join(" "),
    releasedAt: dayJS("04/04/2014 00:00"),
    series: "Captain America",
    directors: ["Anthony Russo", "Joe Russo"],
    runningTime: 136,
    thumbnail: "captain-america-the-winter-soldier.jpg",
    writters: ["Christopher Markus", "Stephen McFeely"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 10,
    title: "Guardians of the Galaxy",
    overview: [
      "An action-packed, epic space adventure, Marvel's \"Guardians of the Galaxy\", expands the Marvel Cinematic Universe into the cosmos, where",
      "brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a",
      "powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy",
      "truce with a quartet of disparate misfits--Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora;",
      "and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he",
      "must do his best to rally his ragtag rivals for a last, desperate stand--with the galaxy's fate in the balance."
    ].join(" "),
    releasedAt: dayJS("08/01/2014 00:00"),
    series: "Guardians of the Galaxy",
    directors: ["James Gunn"],
    runningTime: 122,
    thumbnail: "guardians-of-the-galaxy.jpg",
    writters: ["James Gunn", "Nicole Perlman"],
    characters: [],
    productionCountries: ["United States", "United Kingdom"],
    trailer: ""
  },
  {
    id: 11,
    title: "Avengers: Age of Ultron",
    overview: [
      "Marvel Studios presents \"Avengers: Age of Ultron\", the epic follow-up to the biggest Super Hero movie of all time. When Tony Stark tries",
      "to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes, including Iron Man, Captain America, Thor,",
      "The Incredible Hulk, Black Widow and Hawkeye, are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous",
      "Ultron emerges, it is up to the Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave",
      "the way for an epic and unique global adventure"
    ].join(" "),
    releasedAt: dayJS("05/01/2015 00:00"),
    series: "Avengers",
    directors: ["Joss Whedon"],
    runningTime: 141,
    thumbnail: "avengers-age-of-ultron.jpg",
    writters: ["Joss Whedon"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 12,
    title: "Ant-Man",
    overview: [
      "The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the big screen for the first time with",
      " Marvel Studios' \"Ant-Man\". Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must",
      "embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation",
      "of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world."
    ].join(" "),
    releasedAt: dayJS("07/17/2015 00:00"),
    series: "Ant-Man",
    directors: ["Peyton Reed"],
    runningTime: 117,
    thumbnail: "ant-man.jpg",
    writters: ["Edgar Wridht", "Joe Cornish", "Adam McKay", "Paul Rudd"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 13,
    title: "Deadpool",
    overview: [
      "Based upon Marvel Comics’ most unconventional anti-hero, DEADPOOL tells the origin story of former Special Forces operative turned mercenary",
      "Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool.",
      "Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life."
    ].join(" "),
    releasedAt: dayJS("02/12/2016 00:00"),
    series: "Deadpool",
    directors: ["Tim Miller"],
    runningTime: 108,
    thumbnail: "deadpool.jpg",
    writters: ["Paul Wernic", "Rhett Reese"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 14,
    title: "Captain America: Civil War",
    overview: [
      "Steve Rogers leads the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving",
      "the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to",
      "oversee and direct the team. The new status quo fractures the Avengers, resulting in two camps—one led by Steve Rogers and his desire for the",
      "Avengers to remain free to defend humanity without government interference, and the other following Tony Stark’s surprising decision to",
      "support government oversight and accountability."
    ].join(" "),
    releasedAt: dayJS("05/06/2016 00:00"),
    series: "Captain America",
    directors: ["Anthony Russo", "Joe Russo"],
    runningTime: 147,
    thumbnail: "captain-america-civil-war.jpg",
    writters: ["Christopher Markus", "Stephen McFeely"],
    characters: [],
    productionCountries: ["United States", "Germany"],
    trailer: ""
  },
  {
    id: 15,
    title: "Doctor Strange",
    overview: [
      "From Marvel Studios comes “Doctor Strange,” the story of world-famous neurosurgeon Dr. Stephen Strange whose life changes forever after a",
      "horrific car accident robs him of the use of his hands. When traditional medicine fails him, he is forced to look for healing, and hope,",
      "in an unlikely place—a mysterious enclave known as Kamar-Taj. Before long Strange—armed with newly acquired magical powers—is forced to",
      "choose whether to return to his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in",
      "existence."
    ].join(" "),
    releasedAt: dayJS("11/04/2016 00:00"),
    series: "Doctor Strange",
    directors: ["Scott Derrickson"],
    runningTime: 115,
    thumbnail: "doctor-strange.jpg",
    writters: ["Jon Spaihts", "Scott Derrickson", "C. Robert Cargill"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 16,
    title: "Guardians of the Galaxy Vol. 2",
    overview: [
      "Set to the backdrop of ‘Awesome Mixtape #2,’ Marvel’s Guardians of the Galaxy Vol. 2 continues the team’s adventures as they traverse the",
      " outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter",
      " Quill’s true parentage. Old foes become new allies and fan-favorite characters from the classic comics will come to our heroes’ aid",
      "as the Marvel cinematic universe continues to expand."
    ].join(" "),
    releasedAt: dayJS("05/05/2017 00:00"),
    series: "Guardians of the Galaxy",
    directors: ["James Gunn"],
    runningTime: 137,
    thumbnail: "guardians-of-the-galaxy-vol-2.jpg",
    writters: ["James Gunn"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 18,
    title: "Spider-Man: Homecoming",
    overview: [
      "A young Peter Parker/Spider-Man (Tom Holland), who made his sensational debut in Captain America: Civil War, begins to navigate his newfound",
      "identity as the web-slinging super hero in Spider-Man: Homecoming. Thrilled by his experience with the Avengers, Peter returns home, where",
      "he lives with his Aunt May (Marisa Tomei), under the watchful eye of his new mentor Tony Stark (Robert Downey, Jr.). Peter tries to fall",
      "back into his normal daily routine—distracted by thoughts of proving himself to be more than just your friendly neighborhood",
      "Spider-Man—but when the Vulture (Michael Keaton) emerges as a new villain, everything that Peter holds most important will be threatened."
    ].join(" "),
    releasedAt: dayJS("07/07/2017 00:00"),
    series: "Spider-Man",
    directors: ["Jon Watts"],
    runningTime: 133,
    thumbnail: "spider-man-homecoming.jpg",
    writters: ["Jonathan Goldstein", "John Francis Daley", "Jon Watts", "Christopher Ford", "Chris McKenna", "Erik Sommers"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 19,
    title: "Thor: Ragnarok",
    overview: [
      "Thor is imprisoned on the other side of the universe without his mighty hammer and finds himself in a race against time to get back to",
      "Asgard to stop Ragnarok—the destruction of his homeworld and the end of Asgardian civilization—at the hands of an all-powerful new",
      "threat, the ruthless Hela. But first he must survive a deadly gladiatorial contest that pits him against his former ally and fellow",
      "Avenger—the Incredible Hulk!"
    ].join(" "),
    releasedAt: dayJS("11/03/2017 00:00"),
    series: "Thor",
    directors: ["Taika Waititi"],
    runningTime: 130,
    thumbnail: "thor-ragnarok.jpg",
    writters: ["Eric Pearson", "Craig Kyle", "Christopher L. Yost"],
    characters: [],
    productionCountries: ["United States", "Australia"],
    trailer: ""
  },
  {
    id: 20,
    title: "Black Panther",
    overview: [
      "Marvel Studios’ “Black Panther” follows T’Challa who, after the death of his father, the King of Wakanda, returns home to the",
      "isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king. But when a",
      "powerful old enemy reappears, T’Challa’s mettle as king—and Black Panther—is tested when he is drawn into a formidable conflict",
      "that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, the young king must rally his",
      "allies and release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life."
    ].join(" "),
    releasedAt: dayJS("02/16/2018 00:00"),
    series: "Black Panther",
    directors: ["Ryan Coogler"],
    runningTime: 134,
    thumbnail: "black-panther.jpg",
    writters: ["Ryan Coogler", "Joe Robert Cole"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 21,
    title: "Avengers: Infinity War",
    overview: [
      "An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel",
      "Studios' \"Avengers: Infinity War\" brings to the screen the ultimate, deadliest showdown of all time. As the Avengers and their",
      "allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from",
      "the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of",
      "unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led",
      "up to this moment - the fate of Earth and existence itself has never been more uncertain."
    ].join(" "),
    releasedAt: dayJS("04/27/2018 00:00"),
    series: "Avengers",
    directors: ["Anthony Russo"],
    runningTime: 149,
    thumbnail: "avengers-infinity-war.jpg",
    writters: ["Christopher Markus", "Stephen McFeely"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 22,
    title: "Deadpool 2",
    overview: [
      "After surviving a near fatal bovine attack, a disfigured cafeteria chef (Wade Wilson) struggles to fulfill his dream of becoming",
      "Mayberry's hottest bartender while also learning to cope with his lost sense of taste. Searching to regain his spice for life,",
      "as well as a flux capacitor, Wade must journey around the world to discover the importance of family, friendship, and",
      "flavor—finding a new taste for adventure and earning the coveted coffee mug title of World's Best Lover."
    ].join(" "),
    releasedAt: dayJS("05/18/2018 00:00"),
    series: "Deadpool",
    directors: ["David Leitch"],
    runningTime: 119,
    thumbnail: "deadpool-2.jpg",
    writters: ["Rhett Rees", "Paul Wernick", "Ryan Reynolds"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 23,
    title: "Ant-Man and the Wasp",
    overview: [
      "From the Marvel Cinematic Universe comes a new chapter featuring heroes with the astonishing ability to shrink: \"Ant-Man and The Wasp.\"",
      "In the aftermath of “Captain America: Civil War,” Scott Lang (Paul Rudd) grapples with the consequences of his choices as both a Super",
      "Hero and a father. As he struggles to rebalance his home life with his responsibilities as Ant-Man, he’s confronted by Hope van Dyne",
      "(Evangeline Lilly) and Dr. Hank Pym (Michael Douglas) with an urgent new mission. Scott must once again put on the suit and learn to",
      "fight alongside The Wasp as the team works together to uncover secrets from their past."
    ].join(" "),
    releasedAt: dayJS("07/06/2018 00:00"),
    series: "Ant-Man",
    directors: ["Peyton Reed"],
    runningTime: 118,
    thumbnail: "ant-man-and-the-wasp.jpg",
    writters: ["Chris McKenna", "Erik Sommers", "Andrew Barrer", "Gabriel Ferrari", "Paul Rudd"],
    characters: [],
    productionCountries: ["United States", "Canada"],
    trailer: ""
  },
  {
    id: 24,
    title: "Captain Marvel",
    overview: [
      "Set in the 1990s, Marvel Studios' \"Captain Marvel\" is an all-new adventure from a previously unseen period in the history of the Marvel",
      "Cinematic Universe that follows the journey of Carol Danvers as she becomes one of the universe's most powerful heroes. While a galactic",
      "war between two alien races reaches Earth, Danvers finds herself and a small cadre of allies at the center of the maelstrom."
    ].join(" "),
    releasedAt: dayJS("03/08/2019 00:00"),
    series: "Captain Marvel",
    directors: ["Anna Boden", "Ryan Fleck"],
    runningTime: 124,
    thumbnail: "captain-marvel.jpg",
    writters: ["Anna Boden", "Ryan Fleck", "Geneva Robertson-Dworet"],
    characters: [],
    productionCountries: ["United States", "Australia"],
    trailer: ""
  },
  {
    id: 25,
    title: "Avengers: Endgame",
    overview: [
      "The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining",
      "Avengers to take one final stand in Marvel Studios' grand conclusion to twenty-two films, \"Avengers: Endgame.\""
    ].join(" "),
    releasedAt: dayJS("04/26/2019 00:00"),
    series: "Avengers",
    directors: ["Anthony Russo", "Joe Russo"],
    runningTime: 181,
    thumbnail: "avengers-endgame.jpg",
    writters: ["Christopher Markus", "Stephen McFeely"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 26,
    title: "Spider-Man: Far From Home",
    overview: [
      "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever."
    ].join(" "),
    releasedAt: dayJS("07/02/2019 00:00"),
    series: "Spider-Man",
    directors: ["Jon Watts"],
    runningTime: 129,
    thumbnail: "spider-man-far-from-home.jpg",
    writters: ["Chris McKenna", "Erik Sommers"],
    characters: [],
    productionCountries: ["United States", "Canada"],
    trailer: ""
  },
  {
    id: 27,
    title: "Black Widow",
    overview: [
      "In Marvel Studios’ action-packed spy thriller “Black Widow,” Natasha Romanoff aka Black Widow confronts the darker parts of her",
      "ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down,",
      "Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger."
    ].join(" "),
    releasedAt: dayJS("07/09/2021 00:00"),
    series: "Black Widow",
    directors: ["Cate Shortland"],
    runningTime: 134,
    thumbnail: "black-widow.jpg",
    writters: ["Eric Pearson"],
    characters: [],
    productionCountries: ["United States", "Marocco", "United Kingdom"],
    trailer: ""
  },
  {
    id: 28,
    title: "Shang-Chi and the Legend of the Ten Rings",
    overview: [
      "Marvel Studios' \"Shang-Chi and The Legend of The Ten Rings\" stars Simu Liu as Shang-Chi, who must confront the past he thought",
      "he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film also stars Tony Leung as Wenwu,",
      "Awkwafina as Shang-Chi's friend Katy and Michelle Yeoh as Jiang Nan, as well as Fala Chen, Meng'er Zhang, Florian Munteanu and Ronny Chieng."
    ].join(" "),
    releasedAt: dayJS("09/03/2021 00:00"),
    series: "Shang-Chi",
    directors: ["Destin Daniel Cretton"],
    runningTime: 132,
    thumbnail: "shang-chi-and-the-legend-of-the-ten-rings.jpg",
    writters: ["David Callaham", "Destin Daniel Cretton", "Andrew Lanham"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 29,
    title: "Eternals",
    overview: [
      "Marvel Studios' Eternals features an exciting new team of Super Heroes in the Marvel Cinematic Universe, ancient aliens who have been",
      "living on Earth in secret for thousands of years. Following the events of Avengers: Endgame, an unexpected tragedy forces them out of",
      "the shadows to reunite against mankind's most ancient enemy, the Deviants."
    ].join(" "),
    releasedAt: dayJS("11/05/2021 00:00"),
    series: "Eternals",
    directors: ["Chloé Zhao"],
    runningTime: 156,
    thumbnail: "eternals.jpg",
    writters: ["Ryan Firpo", "Kaz Firpo"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 30,
    title: "Spider-Man: No Way Home",
    overview: [
      "With Spiderman's identity now revealed, he is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes",
      "of being a superhero. When Peter asks Doctor Strange for help, the stakes become even more dangerous, forcing him to discover what it",
      "really means to be Spiderman."
    ].join(" "),
    releasedAt: dayJS("12/17/2021 00:00"),
    series: "Spider-Man",
    directors: ["Jon Watts"],
    runningTime: 148,
    thumbnail: "spider-man-no-way-home.jpg",
    writters: ["Chris McKenna", "Erik Sommers"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 31,
    title: "Doctor Strange in the Multiverse of Madness",
    overview: [
      "Marvel Studios' \"Doctor Strange in the Multiverse of Madness\"—a thrilling ride through the Multiverse with Doctor Strange, his trusted",
      "friend Wong and Wanda Maximoff, aka Scarlet Witch. \"Doctor Strange in the Multiverse of Madness\" opens in U.S. theaters on May 6, 2022."
    ].join(" "),
    releasedAt: dayJS("05/06/2022 00:00"),
    series: "Doctor Strange",
    directors: ["Sam Raimi"],
    runningTime: 126,
    thumbnail: "doctor-strange-in-the-multiverse-of-madness.jpg",
    writters: ["Michael Waldron"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 32,
    title: "Thor: Love and Thunder",
    overview: [
      "Marvel Studios’ \"Thor: Love and Thunder\" finds the God of Thunder on a journey unlike anything he’s ever faced—one of self-discovery.",
      "But his efforts are interrupted by a galactic killer known as Gorr the God Butcher, who seeks the extinction of the gods. To combat",
      "the threat, Thor enlists the help of King Valkyrie, Korg and ex-girlfriend Jane Foster, who—to Thor’s surprise—inexplicably wields his",
      "magical hammer, Mjolnir, as the Mighty Thor."
    ].join(" "),
    releasedAt: dayJS("07/08/2022 00:00"),
    series: "Thor",
    directors: ["Talka Waititi"],
    runningTime: 119,
    thumbnail: "thor-love-and-thunder.jpg",
    characters: [],
    writters: ["Taika Waititi", "Jennifer Kaytin Robinson"],
    productionCountries: ["United States", "Australia"],
    trailer: ""
  },
  {
    id: 33,
    title: "Black Panther: Wakanda Forever",
    overview: [
      "Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including",
      "Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans",
      "strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia (Lupita Nyong’o) and Everett Ross",
      "(Martin Freeman) and forge a new path for the kingdom of Wakanda."
    ].join(" "),
    releasedAt: dayJS("11/11/2022 00:00"),
    series: "Black Panther",
    directors: ["Ryan Coogler"],
    runningTime: 161,
    thumbnail: "black-panther-wakanda-forever.jpg",
    writters: ["Ryan Coogler"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 34,
    title: "Ant-Man and the Wasp: Quantumania",
    overview: [
      "In the film, which officially kicks off phase 5 of the Marvel Cinematic Universe, Super-Hero partners Scott Lang and Hope Van Dyne return",
      "to continue their adventures as Ant-Man and the Wasp. Together, with Hope's parents Hank Pym and Janet Van Dyne, the family finds",
      "themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond",
      "the limits of what they thought was possible. Jonathan Majors joins the adventure as Kang."
    ].join(" "),
    releasedAt: dayJS("02/17/2023 00:00"),
    series: "Ant-Man",
    directors: ["Peyton Reed"],
    runningTime: 124,
    thumbnail: "ant-man-and-the-wasp-quantumania.jpg",
    writters: ["Jeff Loveness"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 35,
    title: "Guardians of the Galaxy Vol. 3",
    overview: [
      "In Marvel Studios \"Guardians of the Galaxy Vol. 3\" our beloved band of misfits are looking a bit different these days. Peter Quill,",
      "still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own.",
      "A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them."
    ].join(" "),
    releasedAt: dayJS("05/05/2023 00:00"),
    series: "Guardians of the Galaxy",
    directors: ["James Gunn"],
    runningTime: 150,
    thumbnail: "guardians-of-the-galaxy-vol-3.jpg",
    writters: ["James Gunn"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 36,
    title: "The Marvels",
    overview: [
      "Carol Danvers AKA Captain Marvel has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence.",
      "But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole",
      "linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s",
      "estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau."
    ].join(" "),
    releasedAt: dayJS("11/10/2023 00:00"),
    series: "The Marvels",
    directors: ["Nia DaCosta"],
    thumbnail: "the-marvels.jpg",
    writters: ["Megan McDonnell", "Nia DaCosta", "Elissa Karasik", "Zeb Wells"],
    characters: [],
    productionCountries: ["United States"],
    trailer: ""
  },
  {
    id: 37,
    title: "Captain America: New World Order",
    overview: "Marvel Studio's Captain America: New World Order will arrive in theaters on March 05, 2024.",
    releasedAt: dayJS("05/03/2024 00:00"),
    series: "Captain America",
    directors: [],
    thumbnail: "captain-america-new-world-order.jpg",
    characters: [],
    writters: [],
    productionCountries: [],
    trailer: ""
  },
  {
    id: 38,
    title: "Thunderbolts",
    overview: "Marvel Studios' Thunderbolts will arrive in theaters on July 26, 2024.",
    releasedAt: dayJS("07/26/2024 00:00"),
    series: "Thunderbolts",
    directors: [],
    thumbnail: "thunderbolts.jpg",
    characters: [],
    writters: [],
    productionCountries: [],
    trailer: ""
  },
  {
    id: 39,
    title: "Blade",
    overview: [].join(" "),
    releasedAt: dayJS("09/06/2024 00:00"),
    series: "Blade",
    directors: [],
    thumbnail: "blade.jpg",
    characters: [],
    writters: [],
    productionCountries: [],
    trailer: ""
  },
  {
    id: 40,
    title: "Deadpool 3",
    overview: [].join(" "),
    releasedAt: dayJS("11/08/2024 00:00"),
    series: "Deadpool",
    directors: [],
    thumbnail: "deadpool-3.jpg",
    characters: [],
    writters: [],
    productionCountries: [],
    trailer: ""
  },
  {
    id: 41,
    title: "Fantastic Four",
    overview: [].join(" "),
    releasedAt: dayJS("02/14/2025 00:00"),
    series: "Fantastic Four",
    directors: [],
    thumbnail: "fantastic-four.jpg",
    characters: [],
    writters: [],
    productionCountries: [],
    trailer: ""
  },
  {
    id: 42,
    title: "Avengers: The Kang Dynasty",
    overview: [].join(" "),
    releasedAt: dayJS("05/02/2025 00:00"),
    series: "Avengers",
    directors: [],
    thumbnail: "avengers-the-kang-dynasty.jpg",
    characters: [],
    writters: [],
    productionCountries: [],
    trailer: ""
  },
  {
    id: 43,
    title: "Avengers: Secret Wars",
    overview: [].join(" "),
    releasedAt: dayJS("05/01/2026 00:00"),
    series: "Avengers",
    directors: [],
    thumbnail: "avengers-secret-wars.jpg",
    characters: [],
    writters: [],
    productionCountries: [],
    trailer: ""
  }
];