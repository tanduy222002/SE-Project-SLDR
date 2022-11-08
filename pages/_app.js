import "../styles/globals.css";
import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: 0, y: 100 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
};

const mapsList = {
    1: {
        mapId: 1,
        mapArtist: "Chaos City Niigata",
        mapTitle: "Ebicha no Shashin-ki",
        mapCoverURL: "/static/maps/1.png",
        mapDifficulties: {
            easy: {
                mapCategory: "EASY",
                mapDifficulty: "5",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            advanced: {
                mapCategory: "ADVANCED",
                mapDifficulty: "9",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            expert: {
                mapCategory: "EXPERT",
                mapDifficulty: "12",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            master: {
                mapCategory: "MASTER",
                mapDifficulty: "13+",
                notesCount: 0,
                holdsCount: 0,
                bpm: "132",
            },
        },
    },
    2: {
        mapId: 2,
        mapArtist: "*wakadori",
        mapTitle: "Night Theater",
        mapCoverURL: "/static/maps/2.jpg",
        mapDifficulties: {
            easy: {
                mapCategory: "EASY",
                mapDifficulty: "5",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            advanced: {
                mapCategory: "ADVANCED",
                mapDifficulty: "9",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            expert: {
                mapCategory: "EXPERT",
                mapDifficulty: "12",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            master: {
                mapCategory: "MASTER",
                mapDifficulty: "13+",
                notesCount: 502,
                holdsCount: 230,
                bpm: "151",
            },
        },
    },
    3: {
        mapId: 3,
        mapArtist: "KINEMA106",
        mapTitle: "N.M.W",
        mapCoverURL: "/static/maps/3.jpg",
        mapDifficulties: {
            easy: {
                mapCategory: "EASY",
                mapDifficulty: "5",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            advanced: {
                mapCategory: "ADVANCED",
                mapDifficulty: "9",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            expert: {
                mapCategory: "EXPERT",
                mapDifficulty: "12",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            master: {
                mapCategory: "MASTER",
                mapDifficulty: "14+",
                notesCount: 728,
                holdsCount: 396,
                bpm: "140",
            },
        },
    },
    4: {
        mapId: 4,
        mapArtist: "Frums",
        mapTitle: "Thinker Walker Dreamer Scatter",
        mapCoverURL: "/static/maps/4.jpg",
        mapDifficulties: {
            easy: {
                mapCategory: "EASY",
                mapDifficulty: "5",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            advanced: {
                mapCategory: "ADVANCED",
                mapDifficulty: "9",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            expert: {
                mapCategory: "EXPERT",
                mapDifficulty: "12",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            master: {
                mapCategory: "MASTER",
                mapDifficulty: "15",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
        },
    },
    5: {
        mapId: 5,
        mapArtist: "HiTECH NINJA vs Cranky.",
        mapTitle: "BREaK! BREaK! BREaK!",
        mapCoverURL: "/static/maps/5.jpg",
        mapDifficulties: {
            easy: {
                mapCategory: "EASY",
                mapDifficulty: "5",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            advanced: {
                mapCategory: "ADVANCED",
                mapDifficulty: "9",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            expert: {
                mapCategory: "EXPERT",
                mapDifficulty: "12",
                notesCount: 1113,
                holdsCount: 449,
                bpm: "154",
            },
            master: {
                mapCategory: "MASTER",
                mapDifficulty: "14+",
                notesCount: 600,
                holdsCount: 315,
                bpm: "165",
            },
        },
    },
};

const usersList = {
    8266808: {
        userInfo: {
            userId: 8266808,
            userName: "skill issue",
            userTitle: "Sl:dr World Cup 2029 Champion",
            userRating: 19920,
            userCoverURL: "/static/users/8266808.png",
        },
        statisticDetail: {
            playCount: 1240,
            avgAcc: "98.7270%",
            joinDate: 1881479028,
        },
        pinnedPlay: {
            mapInfo: {
                mapId: 99283,
                mapArtist: "xi (from DiverseSystem)",
                mapTitle: "Mjölnir",
                mapCategory: "MASTER",
                mapDifficulty: "14+",
                mapCoverURL: "/static/maps/99283.jpg",
            },
            playInfo: {
                rank: "SSS",
                accuracy: "100.0120%",
                isAllChain: true,
                isFullFuse: false,
            },
        },
        aboutMe: {
            rawBBCode: `
                [centre]
                [img]https://i.imgur.com/dOXiNlS.png[/img]
                [notice]
                Awawawa Higuchi Madoca
                [/notice]
                [/centre]
                [centre][img]https://fukutotojido.s-ul.eu/FRR8733m[/img][/centre]
                [centre][img]https://trigonoculus.github.io/assets/graphics/cpmc/CPMC-Staff_Try-Z.png[/img][/centre]
                [notice]
                [size=150][b]2022 GOAL[/b][/size]
                [list]
                [*]Have fun
                [*] Nah I can no longer having fun tbh. I'm sad.
                [/list]
                [/notice]
                [notice]
                [b][size=150]TOURNAMENT[/size][/b]
                [box=I'm not quitting]
                [/box]
                [box=Completed]
                [list]
                [*][b][color=#ff6984]osu! World Cup 2020[/color][/b] - VN Team - [b][color=#5c5c5c]DNQ (42/48)[/color][/b]
                [*][b][color=#516c9c]osu! World League[/color][/b] - VN Team A - [b][color=#ffc524]Final (Abandoned Tournament by Host)[/color][/b]
                [*][b][color=#ff6984]osu! World Cup 2021[/color][/b] - VN Team - [b][color=#5c5c5c]DNQ (39/48)[/color][/b]
                [*][b][color=#fc4952]Reimu's Disgusting Draft Cup[/color][/b] - TryZ Supremacy - [b][color=#ffc524]Final (#5-6)[/color][/b]
                [*][b][color=#ffc247]4 digit World Cup[/color][/b] - VN Team - [b][color=#5c5c5c]DNQ (39/52)[/color][/b]
                [*][b][color=#47ff72]Broccoli Cup 2[/color][/b] - 6 Shades of Skadi - [b][color=#91d5ff]RO16[/color][/b]
                [*][b]Hippo Cup 5[/b] - Folontilo - [b][color=#5c5c5c]Group Stage[/color][/b]
                [*][b][color=#ff5978]The Perrenial 2022[/color][/b] - khum - [b][color=#5c5c5c]DNQ[/color][/b]
                [*][b]World Blitz osu! Championship[/b] - GiaiPhongMienNam - [b][color=#91d5ff]RO16[/color][/b]
                [*][b][color=#eb372a]Corsace OPEN 2022[/color][/b] - u la troi - [b][color=#5c5c5c]DNQ (48/99)[/color][/b]
                [*][b][color=#71b9f5]Giga Woopers Kup[/color][/b] - adu cung ghe - [b][color=#71f5a1]Quarter-Final[/color][/b]
                [*][b][color=#71f5a1]Tam Huyet Tournament 3[/color][/b] - PANADOL XXXTRA - [b][color=#71f5a1]Quarter-Final[/color][/b]
                [/list]
                [/box]
                [/notice]
                `,
        },
        playHistory: [
            {
                mapInfo: {
                    mapId: 1,
                    mapArtist: "Chaos City Niigata",
                    mapTitle: "Ebicha no Shashin-ki",
                    mapCategory: "MASTER",
                    mapDifficulty: "13+",
                    mapCoverURL: "/static/maps/1.png",
                },
                playInfo: {
                    playDate: 1879842420,
                    rank: "SSS",
                    accuracy: "100.0120%",
                    hitDetail: {
                        crit_perfect: 620,
                        perfect: 60,
                        great: 42,
                        ok: 3,
                        no: 0,
                    },
                    isAllChain: true,
                    isFullFuse: false,
                },
            },
            {
                mapInfo: {
                    mapId: 2,
                    mapArtist: "*wakadori",
                    mapTitle: "Night Theater",
                    mapCategory: "MASTER",
                    mapDifficulty: "13+",
                    mapCoverURL: "/static/maps/2.jpg",
                },
                playInfo: {
                    playDate: 1879842420,
                    rank: "SSS",
                    accuracy: "100.0120%",
                    hitDetail: {
                        crit_perfect: 620,
                        perfect: 60,
                        great: 42,
                        ok: 3,
                        no: 0,
                    },
                    isAllChain: true,
                    isFullFuse: true,
                },
            },
            {
                mapInfo: {
                    mapId: 3,
                    mapArtist: "KINEMA106",
                    mapTitle: "N.M.W",
                    mapCategory: "MASTER",
                    mapDifficulty: "14+",
                    mapCoverURL: "/static/maps/3.jpg",
                },
                playInfo: {
                    playDate: 1879842420,
                    rank: "SSS",
                    accuracy: "100.0120%",
                    hitDetail: {
                        crit_perfect: 620,
                        perfect: 60,
                        great: 42,
                        ok: 3,
                        no: 0,
                    },
                    isAllChain: true,
                    isFullFuse: true,
                },
            },
            {
                mapInfo: {
                    mapId: 4,
                    mapArtist: "Frums",
                    mapTitle: "Thinker Walker Dreamer Scatter",
                    mapCategory: "MASTER",
                    mapDifficulty: "15",
                    mapCoverURL: "/static/maps/4.jpg",
                },
                playInfo: {
                    playDate: 1879842420,
                    rank: "SSS",
                    accuracy: "100.0120%",
                    hitDetail: {
                        crit_perfect: 620,
                        perfect: 60,
                        great: 42,
                        ok: 3,
                        no: 0,
                    },
                    isAllChain: true,
                    isFullFuse: true,
                },
            },
            {
                mapInfo: {
                    mapId: 5,
                    mapArtist: "HiTECH NINJA vs Cranky.",
                    mapTitle: "BREaK! BREaK! BREaK!",
                    mapCategory: "MASTER",
                    mapDifficulty: "14+",
                    mapCoverURL: "/static/maps/5.jpg",
                },
                playInfo: {
                    playDate: 1879842420,
                    rank: "SSS",
                    accuracy: "100.0120%",
                    hitDetail: {
                        crit_perfect: 620,
                        perfect: 60,
                        great: 42,
                        ok: 3,
                        no: 0,
                    },
                    isAllChain: true,
                    isFullFuse: true,
                },
            },
        ],
    },
    1: {
        userInfo: {
            userId: 10274874,
            userName: "top 10 thanh hoa vn",
            userTitle: "Sl:dr World Cup 2029 Champion",
            userRating: 22010,
            userCoverURL: "/static/users/1.png"
        },
        statisticDetail: {
            playCount: 2345,
            avgAcc: "99.0727%",
            joinDate: 1881479028,
        },
        pinnedPlay: {
            mapInfo: {
                mapId: 6,
                mapArtist: "positive MAD-crew",
                mapTitle: "Mynarco Addiction",
                mapCategory: "MASTER",
                mapDifficulty: "13",
                mapCoverURL: "/static/maps/6.png",
            },
            playInfo: {
                rank: "SSS",
                accuracy: "100.0120%",
                isAllChain: true,
                isFullFuse: false,
            },
        },
        aboutMe: {
            rawBBCode: `
            [centre]
            [b][size=150][color=#FF0000]TRYING TO ENJOY GAME[/color][/size][/b]
            [size=100][b]PM if you add me so i mutual [/b][/size]
            [/centre]
            
            [centre][url=https://osu.ppy.sh/users/8945565][img]https://i.ibb.co/jTTZ7J4/1.png[/img][/url][url=https://osu.ppy.sh/users/9983282][img]https://i.ibb.co/9mxh8VJ/2.png[/img][/url][url=https://osu.ppy.sh/users/9535497][img]https://i.ibb.co/CzxYYqv/3.png[/img][/url][url=https://osu.ppy.sh/users/10143086][img]https://i.ibb.co/84fYQx5/4.png[/img][/url][url=https://osu.ppy.sh/users/21180395][img]https://i.ibb.co/PmFc5SJ/5.png[/img][/url][url=https://osu.ppy.sh/users/14047619][img]https://i.ibb.co/qmxC241/6.png[/img][/url][url=https://osu.ppy.sh/users/9268713][img]https://i.ibb.co/kX8YFSs/7.png[/img][/url][url=https://osu.ppy.sh/users/6489819][img]https://i.ibb.co/7zGBpn6/8.png[/img][/url][url=https://osu.ppy.sh/users/10274874][img]https://i.ibb.co/f9S9HCy/9.png[/img][/url][url=https://osu.ppy.sh/users/10976903][img]https://i.ibb.co/DKHwPpG/10.png[/img][/url][url=https://osu.ppy.sh/users/7696512][img]https://i.ibb.co/Qv92pvN/11.png[/img][/url][url=https://osu.ppy.sh/users/9448399][img]https://i.ibb.co/KjkL1fh/12.png[/img][/url][url=https://osu.ppy.sh/users/7489700][img]https://i.ibb.co/GsZzhq3/13.png[/img][/url][url=https://osu.ppy.sh/users/8266808][img]https://i.ibb.co/Y7LhfDL/14.png[/img][/url]
            [/centre]
            
                `,
        },
        playHistory: [
            {
                mapInfo: {
                    mapId: 1,
                    mapArtist: "Chaos City Niigata",
                    mapTitle: "Ebicha no Shashin-ki",
                    mapCategory: "MASTER",
                    mapDifficulty: "13+",
                    mapCoverURL: "/static/maps/1.png",
                },
                playInfo: {
                    playDate: 1879842420,
                    rank: "SSS",
                    accuracy: "100.0120%",
                    hitDetail: {
                        crit_perfect: 620,
                        perfect: 60,
                        great: 42,
                        ok: 3,
                        no: 0,
                    },
                    isAllChain: true,
                    isFullFuse: false,
                },
            },
            {
                mapInfo: {
                    mapId: 2,
                    mapArtist: "*wakadori",
                    mapTitle: "Night Theater",
                    mapCategory: "MASTER",
                    mapDifficulty: "13+",
                    mapCoverURL: "/static/maps/2.jpg",
                },
                playInfo: {
                    playDate: 1879842420,
                    rank: "SSS",
                    accuracy: "100.0120%",
                    hitDetail: {
                        crit_perfect: 620,
                        perfect: 60,
                        great: 42,
                        ok: 3,
                        no: 0,
                    },
                    isAllChain: true,
                    isFullFuse: true,
                },
            },
            {
                mapInfo: {
                    mapId: 3,
                    mapArtist: "KINEMA106",
                    mapTitle: "N.M.W",
                    mapCategory: "MASTER",
                    mapDifficulty: "14+",
                    mapCoverURL: "/static/maps/3.jpg",
                },
                playInfo: {
                    playDate: 1879842420,
                    rank: "SSS",
                    accuracy: "100.0120%",
                    hitDetail: {
                        crit_perfect: 620,
                        perfect: 60,
                        great: 42,
                        ok: 3,
                        no: 0,
                    },
                    isAllChain: true,
                    isFullFuse: true,
                },
            },
            {
                mapInfo: {
                    mapId: 4,
                    mapArtist: "Frums",
                    mapTitle: "Thinker Walker Dreamer Scatter",
                    mapCategory: "MASTER",
                    mapDifficulty: "15",
                    mapCoverURL: "/static/maps/4.jpg",
                },
                playInfo: {
                    playDate: 1879842420,
                    rank: "SSS",
                    accuracy: "100.0120%",
                    hitDetail: {
                        crit_perfect: 620,
                        perfect: 60,
                        great: 42,
                        ok: 3,
                        no: 0,
                    },
                    isAllChain: true,
                    isFullFuse: true,
                },
            },
            {
                mapInfo: {
                    mapId: 5,
                    mapArtist: "HiTECH NINJA vs Cranky.",
                    mapTitle: "BREaK! BREaK! BREaK!",
                    mapCategory: "MASTER",
                    mapDifficulty: "14+",
                    mapCoverURL: "/static/maps/5.jpg",
                },
                playInfo: {
                    playDate: 1879842420,
                    rank: "SSS",
                    accuracy: "100.0120%",
                    hitDetail: {
                        crit_perfect: 620,
                        perfect: 60,
                        great: 42,
                        ok: 3,
                        no: 0,
                    },
                    isAllChain: true,
                    isFullFuse: true,
                },
            },
        ],
    },
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Background />
            <Header />
            <div className="AppContainer">
                <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                    <Component {...pageProps} />
                </AnimatePresence>
                <Footer />
            </div>
        </>
    );
}

export default MyApp;
export { variants, mapsList, usersList };
