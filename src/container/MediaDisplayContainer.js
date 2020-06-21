import React from "react";
import MediumGridComponent from "../components/MediumGridComponent";

class MediaDisplayContainer extends React.Component {

    state = {
        media: [
            {
                "aliases": [
                    "Star Wars: The Clone Wars (2008)"
                ],
                "banner": "/banners/graphical/83268-g9.jpg",
                "firstAired": "2008-8-10",
                "id": 83268,
                "image": "/banners/posters/83268-12.jpg",
                "network": "YouTube",
                "overview": "As The Clone Wars sweep through the galaxy, the heroic Jedi Knights struggle to maintain order and restore peace. More and more systems are falling prey to the forces of the dark side as the Galactic Republic slips further and further under the sway of the Separatists and their never-ending droid army.",
                "poster": "/banners/posters/83268-12.jpg",
                "seriesName": "Star Wars: The Clone Wars",
                "slug": "star-wars-the-clone-wars",
                "status": "Ended"
            },
            {
                "aliases": [
                    "Star Wars Ewoks",
                    "The All New Ewoks",
                    "Star Wars: Ewoks",
                    "Star Wars Animated Adventure: Ewoks"
                ],
                "banner": "/banners/graphical/73697-g3.jpg",
                "firstAired": "1984-11-25",
                "id": 73697,
                "image": "/banners/posters/73697-2.jpg",
                "network": "ABC (US)",
                "overview": "On the forest moon of Endor, tucked into a tiny village known as Bright Tree, a band of furry creatures named the Ewoks live in huts high up in the trees. Of the many creatures that live in the forest, the friendliest are Wicket, a young scout, and his friends Princess Kneesaa, Latara, Teebo, and Paploo. They live in a world filled with magical creatures. Some are good friends to the Ewoks, others are troublesome. When any of the Ewoks gets into a scrape, they all band together to help each other out.",
                "poster": "/banners/posters/73697-2.jpg",
                "seriesName": "Star Wars: Ewoks",
                "slug": "ewoks",
                "status": "Ended"
            },
            {
                "aliases": [],
                "banner": "/banners/graphical/17291-g.jpg",
                "firstAired": "2003-11-7",
                "id": 72244,
                "image": "/banners/posters/72244-1.jpg",
                "network": "Cartoon Network",
                "overview": "Star Wars: Clone Wars picks up where the theatrical feature Star Wars: Episode II: Attack of the Clones left off as an epic civil war pits the Republic against the separatist movement led by the Dark Side of the Force's mastermind Darth Sidious.",
                "poster": "/banners/posters/72244-1.jpg",
                "seriesName": "Star Wars: Clone Wars",
                "slug": "star-wars-clone-wars",
                "status": "Ended"
            },
            {
                "aliases": [
                    "Star Wars Animated Adventures: Droids",
                    "Star Wars: Droids"
                ],
                "banner": "/banners/graphical/70399-g2.jpg",
                "firstAired": "1978-11-17",
                "id": 70399,
                "image": "/banners/posters/70399-3.jpg",
                "network": "ABC (US)",
                "overview": "Long before their famous adventures with the Rebel Alliance, R2-D2 and C-3PO were assigned to many different masters by the Intergalactic Droid Agency.\r\nIn this animated series, the droids encounter many unforgettable people: greedy villains set on conquering planets, terrible space pirates, and brave heroes. Flying to different planets with their new master Jann Tosh and cargo pilot Jessica Meade, R2-D2 and C-3PO become heroes that will do anything to help their friends triumph over villainy.",
                "poster": "/banners/posters/70399-3.jpg",
                "seriesName": "Star Wars: Droids",
                "slug": "droids",
                "status": "Ended"
            },
            {
                "aliases": [],
                "banner": "",
                "firstAired": "2020-6-10",
                "id": 373220,
                "image": "/banners/series/373220/posters/62015270.jpg",
                "network": "YouTube",
                "overview": "Star Wars: Jedi Temple Challenge, an exciting new Disney+ game show set in a galaxy far, far away, will test young contestants’ abilities in the core Jedi principles of strength, knowledge, and bravery as they face thrilling and fun obstacles in an attempt to achieve the rank of Jedi Knight! From lightsabers to hyperspace, the Force, and the dark side, Jedi Temple Challenge transports viewers and contestants into the Star Wars galaxy like never before.",
                "poster": "/banners/series/373220/posters/62015270.jpg",
                "seriesName": "Star Wars: Jedi Temple Challenge",
                "slug": "star-wars-jedi-temple-challenge",
                "status": "Upcoming"
            },
            {
                "aliases": [],
                "banner": "",
                "firstAired": "2019-8-9",
                "id": 368962,
                "image": "/banners/posters/5d81a08172677.jpg",
                "network": "YouTube",
                "overview": "Star Wars Roll Out is a series of whimsical animated shorts featuring new adventures in a charming and unique animation style. Join Rey, Chewbacca, BB-8, the porgs, and other favorite characters from a galaxy far, far away, in a bright and colorful art style perfect for children and adults!",
                "poster": "/banners/posters/5d81a08172677.jpg",
                "seriesName": "Star Wars Roll Out",
                "slug": "star-wars-roll-out",
                "status": "Continuing"
            },
            {
                "aliases": [],
                "banner": "/banners/graphical/5c3d44e567f11.jpg",
                "firstAired": "2016-8-30",
                "id": 358145,
                "image": "/banners/posters/5c3d44d8ad114.jpg",
                "network": "YouTube",
                "overview": "A stop motion animated Star Wars series, created by fans and Lucasfilm, to introduce the new Rogue One action figures from Tongal. The shorts follow the Rogue One character's adventures throughout the galaxy as they battle the Empire.",
                "poster": "/banners/posters/5c3d44d8ad114.jpg",
                "seriesName": "Star Wars: Go Rogue",
                "slug": "star-wars-go-rogue",
                "status": "Ended"
            },
            {
                "aliases": [],
                "banner": "/banners/graphical/5bff11d286c3c.jpg",
                "firstAired": "2018-11-30",
                "id": 356114,
                "image": "/banners/posters/5bff0a16276b6.jpg",
                "network": "YouTube",
                "overview": "Star Wars Galaxy of Adventures is a series of animated shorts celebrating the characters and stories of a galaxy far, far away, featuring a bright and colorful art style, exciting action, and insight into the saga's greatest themes!",
                "poster": "/banners/posters/5bff0a16276b6.jpg",
                "seriesName": "Star Wars Galaxy of Adventures",
                "slug": "star-wars-galaxy-of-adventures",
                "status": "Continuing"
            },
            {
                "aliases": [],
                "banner": null,
                "firstAired": "2018-12-21",
                "id": 352104,
                "image": "/banners/images/missing/series.jpg",
                "network": "YouTube",
                "poster": null,
                "seriesName": "Star Wars Theory",
                "slug": "star-wars-theory",
                "status": "Continuing"
            },
            {
                "aliases": [],
                "banner": "/banners/graphical/5bba39983d11d.jpg",
                "firstAired": "2018-10-7",
                "id": 351575,
                "image": "/banners/posters/5dac314cec5e9.jpg",
                "network": "Disney Channel",
                "overview": "Kazuda Xiono, a young pilot for the Resistance, is tasked with a top secret mission to investigate the First Order, a growing threat in the galaxy.",
                "poster": "/banners/posters/5dac314cec5e9.jpg",
                "seriesName": "Star Wars Resistance",
                "slug": "star-wars-resistance",
                "status": "Ended"
            },
            {
                "aliases": [],
                "banner": null,
                "firstAired": null,
                "id": 339440,
                "image": "/banners/images/missing/series.jpg",
                "network": null,
                "poster": null,
                "seriesName": "Star Wars: A végzet ereje",
                "slug": "339440",
                "status": "Ended"
            },
            {
                "aliases": [],
                "banner": "/banners/graphical/336932-g.jpg",
                "firstAired": "2016-8-24",
                "id": 336932,
                "image": "/banners/posters/336932-2.jpg",
                "network": "YouTube",
                "poster": "/banners/posters/336932-2.jpg",
                "seriesName": "(Star Wars) Absolute",
                "slug": "336932",
                "status": "Continuing"
            },
            {
                "aliases": [
                    "BB-8 Blip"
                ],
                "banner": "",
                "firstAired": "2017-5-3",
                "id": 334444,
                "image": "/banners/posters/334444-2.jpg",
                "network": "YouTube",
                "overview": "Star Wars Blips is a series of animated YouTube short videos produced by Star Wars YouTube channel featuring BB-8 and often R2-D2 or Chewbacca.",
                "poster": "/banners/posters/334444-2.jpg",
                "seriesName": "Star Wars Blips",
                "slug": "star-wars-blips",
                "status": "Ended"
            },
            {
                "aliases": [],
                "banner": "/banners/graphical/330710-g.jpg",
                "firstAired": "2017-4-12",
                "id": 330710,
                "image": "/banners/posters/330710-2.jpg",
                "network": "YouTube",
                "overview": "Star Wars Forces of Destiny is a new initiative celebrating the inspiring stories of iconic heroes from a galaxy far, far away.... An exciting, new series of animated shorts that remain true to the Star Wars universe will show how choices both big and small ultimately shape the destinies of beloved characters. \r\n\r\nFans will be excited to discover that talent from across Star Wars films and animated TV series reprise their roles for the Forces of Destiny shorts: Daisy Ridley as Rey, Felicity Jones as Jyn Erso, Tiya Sircar as Sabine Wren, Ashley Eckstein as Ahsoka Tano, John Boyega as Finn, Lupita Nyong’o as Maz Kanata and more.",
                "poster": "/banners/posters/330710-2.jpg",
                "seriesName": "Star Wars: Forces of Destiny",
                "slug": "star-wars-forces-of-destiny",
                "status": "Ended"
            },
            {
                "aliases": [],
                "banner": null,
                "firstAired": null,
                "id": 327185,
                "image": "/banners/posters/327185-1.jpg",
                "network": null,
                "overview": "A comedic look at some of our favorite characters' more mundane moments during the rise of the Empire.\r\n\r\nStar Wars Detours is a cancelled American computer-animated comic science fiction television series produced by Lucasfilm Animation in collaboration with Robot Chicken creators Seth Green and Matthew Senreich.",
                "poster": null,
                "seriesName": "Star Wars: Detours",
                "slug": "star-wars-detours",
                "status": "Ended"
            },
            {
                "aliases": [],
                "banner": null,
                "firstAired": "2006-10-1",
                "id": 301773,
                "image": "/banners/posters/301773-1.jpg",
                "network": "Dailymotion",
                "poster": null,
                "seriesName": "Star Wars Déconne",
                "slug": "301773",
                "status": "Ended"
            }
        ],
        searchTitle: ''
    };


    constructor(props) {
        super(props);

        //this.tvdbClient = new TVDBClient();
        const TVDB = require('node-tvdb');
        this.tvdb = new TVDB('e5094420c444a38c3b46f926de91dde3');

    }

    componentDidMount = () => {
    };

    componentDidUpdate = (prevProps, prevState, snapshot) => {
    };

    render = () =>
        <MediumGridComponent
            media={this.state.media}/>
}

export default MediaDisplayContainer
