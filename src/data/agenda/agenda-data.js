export const agendaData = {
	buttons: {
		day1: {
			text: "Day 1",
			class: "secondary small",
			type: "trigger",
			url: "/",
		},
		day2: {
			text: "Day 2",
			class: "secondary small",
			type: "trigger",
			url: "/",
		},
		link: {
			text: "Details",
			class: "withIcon small",
			type: "internal",
		},
	},

	// Colors taken from Tailwind CSS color 500 palettes  --> https://tailwindcss.com/docs/customizing-colors
	themes: [
		{
			id: "rollups",
			trackLabel: "ROLLUPS",
			color: "#ef4444",
		},
		{
			id: "data-availability",
			trackLabel: "DATA AVAILABILITY",
			color: "#3b82f6",
		},
		{
			id: "zk",
			trackLabel: "ZK",
			color: "#22c55e",
		},
		{
			id: "infrastructure",
			trackLabel: "INFRASTRUCTURE",
			color: "#f97316",
		},
		{
			id: "shared-seq",
			trackLabel: "SHARED SEQ",
			color: "#a855f7",
		},
		{
			id: "raas",
			trackLabel: "RAAS",
			color: "#ec4899",
		},
		{
			id: "modular-interop",
			trackLabel: "MODULAR INTEROP",
			color: "#14b8a6",
		},
		{
			id: "modular-cosmos",
			trackLabel: "MODULAR COSMOS",
			color: "#eab308",
		},
		{
			id: "pbs-day",
			trackLabel: "PBS.DAY",
			color: "#6b7280",
		},
		{
			id: "developer",
			trackLabel: "DEVELOPER",
			color: "#6366f1",
		},
		{
			id: "gaming",
			trackLabel: "GAMING",
			color: "#d946ef",
		},
		{
			id: "zk-apps",
			trackLabel: "ZK APPS",
			color: "#06b6d4",
		},
		{
			id: "cosmos-celestia",
			trackLabel: "COMOS + CELESTIA",
			color: "#84cc16",
		},
	],
	day1: {
		title: "Day 1",
		subtitle: "Modularism > Maximalism",
		zkText: "ZK Track is curated by ZKValidator",
		text: "Join us for a two-day event to learn from the visionary builders at the forefront of the modular blockchain revolution.",
		date: "Paris | July 21 2023",
		buttons: {
			text: "Get your tickets",
			class: "primary",
			type: "external",
			url: "https://lu.ma/79ay90fe",
		},

		stage1: [
			{
				title: "Opening words",
				date: "2023. July 21",
				time: "10:00",
				speakers: "Balder Bomans",
				theme: "rollups",
			},
			{
				title: "World Engine: Horizontally Scaling Rollups With Shards",
				date: "2023. July 21",
				time: "10:10",
				speakers: "Scott Sunarto",
				theme: "rollups",
			},
			{
				title: "Anoma ❤️  Celestia: Privacy-preserving runtime rollups with efficient DA sampling",
				date: "2023. July 21",
				time: "10:30",
				speakers: "Chris Goes",
				theme: "rollups",
			},
			{
				title: "Fireside chat with Sandeep of Polygon",
				date: "2023. July 21",
				time: "10:55",
				speakers: "Moderator: Mo | Panelist: Sandeep Naiwal",
				theme: "rollups",
			},
			{
				title: "Avail: Architecture and Use Cases",
				date: "2023. July 21",
				time: "11:20",
				speakers: "Anurag Arjun",
				theme: "data-availability",
			},
			{
				title: "Modular State of the Union ",
				date: "2023. July 21",
				time: "11:40",
				speakers: "Mustafa Al-Bassam",
				theme: "data-availability",
			},
			{
				title: "Data Availability Panel",
				date: "2023. July 21",
				time: "12:05",
				speakers: "Moderator: Bartek Kiepuszewski | Panelists: Anurag Arjun, Mustafa Al-Bassam",
				theme: "data-availability",
			},
			{
				title: "Light nodes are not just a meme",
				date: "2023. July 21",
				time: "12:45",
				speakers: "Nick White",
				theme: "data-availability",
			},
			{
				title: "DA as broadband",
				date: "2023. July 21",
				time: "13:10",
				speakers: "Alex Evans",
				theme: "data-availability",
			},
			{
				title: "Lunch Break",
				date: "2023. July 21",
				time: "13:30",
				speakers: "",
				theme: "",
			},
			{
				title: "ZKPOLITIK: Coprocessing & Collaboration",
				date: "2023. July 21",
				time: "14:30",
				speakers: "Brian Retford",
				theme: "zk",
			},
			{
				title: "Write Code, NOT Circuits",
				date: "2023. July 21",
				time: "14:50",
				speakers: "Zac Williamson",
				theme: "zk",
			},
			{
				title: "Shielded Transactions Are Rollups",
				date: "2023. July 21",
				time: "15:10",
				speakers: "Henry de Valence",
				theme: "zk",
			},
			{
				title: "Modular ZK Systems Panel",
				date: "2023. July 21",
				time: "15:30",
				speakers: "Moderator: Anna Rose | Panelists: Nicolas Mohnblatt, Benedikt Bunz, Zac Williamson, Chris Goes",
				theme: "zk",
			},
			{
				title: "Break",
				date: "2023. July 21",
				time: "16:10",
				speakers: "",
				theme: "zk",
			},
			{
				title: "Aggregation is all you need",
				date: "2023. July 21",
				time: "16:30",
				speakers: "Uma Roy",
				theme: "zk",
			},
			{
				title: "Axiom: The first ZK coprocessor scaling data-rich applications on Ethereum",
				date: "2023. July 21",
				time: "16:50",
				speakers: "Yi Sun",
				theme: "zk",
			},
			{
				title: "Modular ZK Architecture Panel",
				date: "2023. July 21",
				time: "17:10",
				speakers: "Moderator: Tracy | Panelists: Uma Roy, Yi Sun, Ismael Hishon-Rezaizadeh",
				theme: "zk",
			},
			{
				title: "Fireside Chat with Mustafa and Mike",
				date: "2023. July 21",
				time: "17:40",
				speakers: "Mustafa Al-Bassam, Mike Ippolito",
				theme: "",
			},
			{
				title: "Happy Hour",
				date: "2023. July 21",
				time: "18:30",
				speakers: "",
				theme: "",
			},
		],
		stage2: [
			{
				title: "The economics of modular blockchains",
				date: "2023. July 21",
				time: "10:10",
				speakers: "lzrs",
				theme: "infrastructure",
			},
			{
				title: "More sovereignty, more security",
				date: "2023. July 21",
				time: "10:30",
				speakers: "Andres Monty",
				theme: "infrastructure",
			},
			{
				title: "What we Search for: Search Engines in an era of Modular Existence",
				date: "2023. July 21",
				time: "10:50",
				speakers: "Bunny",
				theme: "infrastructure",
			},
			{
				title: "Developer Infrastructure Panel",
				date: "2023. July 21",
				time: "11:10",
				theme: "infrastructure",
				speakers: "Moderator: Stephy | Panelists: Bunny, Jordan Oroshiba, lzrs, Josh Stein",
			},
			{
				title: "Bringing Security to Your Cosmos Chain with Ledger",
				date: "2023. July 21",
				time: "11:50",
				speakers: "Nicolas Consigny",
				theme: "infrastructure",
			},
			{
				title: "Mo Chains 'Mo Problems",
				date: "2023. July 21",
				time: "12:10",
				speakers: "Aditi Sriram",
				theme: "infrastructure",
			},
			{
				title: "Investing in Modular Infrastructure",
				date: "2023. July 21",
				time: "12:30",
				speakers: "Moderator: Joe Coll | Panelists: Calvin Poon, Juri Stricker, Mathijs van Esch",
				theme: "infrastructure",
			},
			{
				title: "Build it like Lego: The Modular Economy",
				date: "2023. July 21",
				time: "13:10",
				speakers: "Arjun Kalsy",
				theme: "infrastructure",
			},
			{
				title: "Lunch Break",
				date: "2023. July 21",
				time: "13:30",
				speakers: "",
				theme: "infrastructure",
			},
			{
				title: "Dumb blockchains require smart solutions (shared sequencing in the modular stack)",
				date: "2023. July 21",
				time: "14:30",
				speakers: "Ben Fisch",
				theme: "shared-seq",
			},
			{
				title: "Astria: Speedrunning the Endgame",
				date: "2023. July 21",
				time: "14:50",
				speakers: "Josh Bowen",
				theme: "shared-seq",
			},
			{
				title: "Shared Sequencer Panel",
				date: "2023. July 21",
				time: "15:10",
				speakers: "Moderator: Evan Forbes | Panelists: Josh Bowen, Ben Fisch, Connor O'Hara",
				theme: "shared-seq",
			},
			{
				title: "Rollups-as-a-Service Are Going To Zero",
				date: "2023. July 21",
				time: "15:50",
				speakers: "Neel Somani",
				theme: "raas",
			},
			{
				title: "Caldera: OP stack x Celestia rollups",
				date: "2023. July 21",
				time: "16:10",
				theme: "raas",
				speakers: "Matt Katz",
			},
			{
				title: "Rollup-as-a-Service Panel",
				date: "2023. July 21",
				time: "16:30",
				speakers: "Moderator: Tracy Wang | Panelists: Matt Katz, Neel Somani, YQ, Kautuk",
				theme: "raas",
			},
			{
				title: "Relayers in the Modular World",
				date: "2023. July 21",
				time: "17:10",
				speakers: "Jim Chang",
				theme: "modular-interop",
			},
			{
				title: "Hyperlane: modular blockchains and permissionless interoperability",
				date: "2023. July 21",
				time: "17:30",
				speakers: "Jon Kol",
				theme: "modular-interop",
			},
			{
				title: "Bridging Panel",
				date: "2023. July 21",
				time: "17:50",
				speakers: "Moderator: Mads Mathiessen | Panelists: Georgios Vlachos, Fig, Bo Du, Richard Adjei",
				theme: "modular-interop",
			},
			{
				title: "Happy Hour",
				date: "2023. July 21",
				time: "18:30",
				speakers: "",
				theme: "",
			},
		],
		stage3: [
			{
				title: "Argus Gaming Workshop",
				date: "2023. July 21",
				time: "11:30",
				speakers: "Argus",
				theme: "",
			},
			{
				title: "Curio Gaming Workshop",
				date: "2023. July 21",
				time: "12:30",
				speakers: "Curio",
				theme: "",
			},
			{
				title: "Anoma Workshop",
				date: "2023. July 21",
				time: "14:30",
				speakers: "Anoma",
				theme: "",
			},
			{
				title: "Astria Workshop",
				date: "2023. July 21",
				time: "16:30",
				speakers: "Astria",
				theme: "",
			},
		],
	},
	day2: {
		title: "Day 2",
		subtitle: "Modularism > Maximalism",
		zkText: "PBS.day is co-created with Flashbots",
		text: "Modular Summit's PBS.day: Keeping Crypto Decentralized is co-created by Flashbots, bringing together leading researchers such as Vitalik Buterin, Jon Charbonneau, Tarun Chitra, and more. Join us on July 21 at 2:00pm at Modular Summit as we navigate through the PBS design space from the elegant PEPC proposal to the latest version of the enshrined PBS (ePBS) design PTC.",
		gameText: "Gaming track is curated by Argus",
		date: "Paris | July 22 2023",
		buttons: {
			text: "Get your tickets",
			class: "primary",
			type: "external",
			url: "https://lu.ma/79ay90fe",
		},
		stage1: [
			{
				title: "Shielded Data Availability on Celestia",
				date: "2023. July 22",
				time: "10:00",
				theme: "modular-cosmos",
				speakers: "Adrian Brink",
			},
			{
				title: "Many chains, One Transaction: Democratizing Great Modular UX",
				date: "2023. July 22",
				time: "10:20",
				speakers: "Barry Plunkett",
				theme: "modular-cosmos",
			},
			{
				title: "Panel: Rollups on Bitcoin",
				date: "2023. July 22",
				time: "10:35",
				speakers: "Moderator: Eric Wall | Panelists: Sunny Aggarwal, Connor O'Hara, Cem Özer",
				theme: "modular-cosmos",
			},
			{
				title: "Modularity in Monetary Design",
				date: "2023. July 22",
				time: "11:20",
				speakers: "Ethan Buchman",
				theme: "modular-cosmos",
			},
			{
				title: "Celestia architecture: the present and a glimpse into the future",
				date: "2023. July 22",
				time: "11:35",
				speakers: "Ismail Khoffi",
				theme: "modular-cosmos",
			},
			{
				title: "Mesh Security",
				date: "2023. July 22",
				time: "11:55",
				speakers: "Sunny Aggarwal",
				theme: "modular-cosmos",
			},
			{
				title: "Panel: Cosmos goes modular - Internet of Modular Blockchains",
				date: "2023. July 22",
				time: "12:15",
				speakers: "Moderator: David Feiock | Panelist: Ethan Buchman, Zaki Manian, Ismail Khoffi, Jack Zampolin",
				theme: "modular-cosmos",
			},
			{
				title: "Lunch",
				date: "2023. July 22",
				time: "13:00",
				speakers: "",
				theme: "",
			},
			{
				title: "Modularity, PBS and MEV - Freedom from the Bitcoin Mind Prison",
				date: "2023. July 22",
				time: "14:00",
				speakers: "Zaki Manian",
				theme: "pbs-day",
			},
			{
				title: "Towards a Theory of MEV, Part II: Uncertainty",
				date: "2023. July 22",
				time: "14:20",
				speakers: "Tarun Chitra",
				theme: "pbs-day",
			},
			{
				title: "SUAVE - Turning Zero-Sum to Positive-Sum Game",
				date: "2023. July 22",
				time: "14:40",
				speakers: "Robert Miller",
				theme: "pbs-day",
			},
			{
				title: "Current State on Orderflow, Block Building & the Latency Game",
				date: "2023. July 22",
				time: "15:00",
				speakers: "Danning Sui",
				theme: "pbs-day",
			},
			{
				title: "Builders and More Advanced Forms of Aggregation",
				date: "2023. July 22",
				time: "15:15",
				speakers: "Vitalik Buterin",
				theme: "pbs-day",
			},
			{
				title: "Ethereum PBS R&D Roadmap",
				date: "2023. July 22",
				time: "15:45",
				speakers: "Mike Neuder",
				theme: "pbs-day",
			},
			{
				title: "PBS on L2s",
				date: "2023. July 22",
				time: "16:00",
				speakers: "Georgios Konstantopoulos",
				theme: "pbs-day",
			},
			{
				title: "PBS-ifying Rollups: Prover-Sequencer Separation",
				date: "2023. July 22",
				time: "16:15",
				speakers: "Toghrul Maharramov",
				theme: "pbs-day",
			},
			{
				title: "PBS across the layers - from L1 to L1000",
				date: "2023. July 22",
				time: "16:30",
				speakers: "Patrick McCorrey",
				theme: "pbs-day",
			},
			{
				title: "MEV-Garden: Cross-domain Markets with PBS and SUAVE",
				date: "2023. July 22",
				time: "16:45",
				speakers: "Tomasz Stanczak",
				theme: "pbs-day",
			},
			{
				title: "Design Trade-offs in Proposals for Sequencer Decentralization",
				date: "2023. July 22",
				time: "17:00",
				speakers: "Joe Andrews",
				theme: "pbs-day",
			},
			{
				title: "PBS on Shared Sequencing Layers and PBS design for Responsive Consensus Protocol",
				date: "2023. July 22",
				time: "17:15",
				speakers: "Ben Fisch",
				theme: "pbs-day",
			},
			{
				title: "Exploring MEV Capture in Modular Systems",
				date: "2023. July 22",
				time: "17:30",
				speakers: "Evan Forbes",
				theme: "pbs-day",
			},
			{
				title: "Reminscences of a Rollup Operator",
				date: "2023. July 22",
				time: "17:45",
				speakers: "Jon Charbonneau",
				theme: "pbs-day",
			},
			{
				title: "PBS Guild: An Open Treasure Map to Keep Crypto Decentralized",
				date: "2023. July 22",
				time: "18:00",
				theme: "pbs-day",
				speakers: "Tina Zhen",
			},
			{
				title: "The End Game",
				date: "2023. July 22",
				time: "18:15",
				speakers: "Mustafa Al-Bassam, Anatoly Yakovenko, Tarun Chitra",
				theme: "pbs-day",
			},
			{
				title: "Happy Hour",
				date: "2023. July 22",
				time: "19:00",
				speakers: "",
				theme: "",
			},
		],
		stage2: [
			{
				title: "Rollkit: Unleashing the Power of Open Interfaces",
				date: "2023. July 22",
				time: "10:10",
				speakers: "NashQ",
				theme: "developer",
			},
			{
				title: "Modular Devrel Panel: Build Whatever",
				date: "2023. July 22",
				time: "10:30",
				speakers: "Moderator: David Phelps | Panelists: Camila Ramos, Yaz Khoury, Henri Lieutaud, Tina Haibodi",
				theme: "developer",
			},
			{
				title: "Dark Forest V2 + Future of onchain games",
				date: "2023. July 22",
				time: "11:10",
				speakers: "Scott Sunarto",
				theme: "gaming",
			},
			{
				title: "Gaming builders and investors fireside chat",
				date: "2023. July 22",
				time: "11:35",
				speakers: "Moderator: Scott Sunarto | Panelists: Morris Hsieh, Breck Stodghill, David Brillembourgh",
				theme: "gaming",
			},
			{
				title: "Shared sequencing for gamers & smol brains",
				date: "2023. July 22",
				time: "12:20",
				speakers: "Norswap",
				theme: "gaming",
			},
			{
				title: "Lessons in Hyperscaling Onchain games - Web2 meets Web3",
				date: "2023. July 22",
				time: "12:40",
				speakers: "Yijia Chen",
				theme: "gaming",
			},
			{
				title: "Lunch",
				date: "2023. July 22",
				time: "13:00",
				speakers: "",
				theme: "",
			},
			{
				title: "Fireside chat with zk Sync",
				date: "2023. July 22",
				time: "14:00",
				speakers: "Moderator: Adriana Hamacher | Panelists: Alex Gluchowski",
				theme: "zk-apps",
			},
			{
				title: "Manta Pacific: The Celestium for EVM-Native ZK Applications",
				date: "2023. July 22",
				time: "14:20",
				speakers: "Kenny Li",
				theme: "zk-apps",
			},
			{
				title: "Zero-Knowledge Proofs for Modular State Composability",
				date: "2023. July 22",
				time: "14:40",
				speakers: "Ismael Hishon-Rezaizadeh",
				theme: "zk-apps",
			},
			{
				title: "ZK ML Panel",
				date: "2023. July 22",
				time: "15:00",
				speakers: "Moderator: Eshita Nandini | Panelists: Niraj Pant, Ben Fielding, Lakshman Sankar, Daniel Shorr",
				theme: "zk-apps",
			},
			{
				title: "eIBC: IBC in a new Dymension",
				date: "2023. July 22",
				time: "15:40",
				speakers: "Yishay",
				theme: "cosmos-celestia",
			},
			{
				title: "Modular IBC Patterns",
				date: "2023. July 22",
				time: "16:00",
				speakers: "Jack Zampolin",
				theme: "cosmos-celestia",
			},
			{
				title: "Bitcoin Staking: Unlocking 21M Bitcoins to Secure the Decentralised Economy",
				date: "2023. July 22",
				time: "16:20",
				speakers: "David Tse",
				theme: "cosmos-celestia",
			},
			{
				title: "Cosmos Panel: Infrastructure",
				date: "2023. July 22",
				time: "16:40",
				speakers: "Moderator: Thyborg | Panelists: Marko Bar, Sean Braithwaite, Barry Plunkett, Jack Zampolin",
				theme: "cosmos-celestia",
			},
			{
				title: "Securing Connected Liquidity for Modular Blockchains",
				date: "2023. July 22",
				speakers: "Yeongin Lee",
				time: "17:20",
				theme: "cosmos-celestia",
			},
			{
				title: "Cosmos Panel: Applications",
				date: "2023. July 22",
				time: "17:40",
				theme: "cosmos-celestia",
				speakers: "Moderator: Zion Thomas | Panelists: Albert Chon, Yeongin Lee, Jelena Djuric, Dev Bear, Dan Lynch",
			},
			{
				title: "Berachain: Polaris",
				date: "2023. July 22",
				time: "18:20",
				speakers: "Dev Bear",
			},
			{
				title: "Happy Hour",
				date: "2023. July 22",
				time: "19:00",
				speakers: "",
				theme: "",
			},
		],
		stage3: [
			{
				title: "Celestia Light Node Tutorial ✨",
				date: "2023. July 22",
				time: "10:00",
				theme: "",
				speakers: "Diego Ferrer and Josh Stein",
			},
			{
				title: "OP Stack Rollup Workshop 🟣",
				date: "2023. July 22",
				time: "11:00",
				theme: "",
				speakers: "Matt Katz, Diego Ferrer, Josh Stein",
			},
			{
				title: "Rollkit Workshop",
				date: "2023. July 22",
				time: "12:00",
				speakers: "Rollkit",
				theme: "",
			},
			{
				title: "Altlayer Workshop",
				date: "2023. July 22",
				time: "12:45",
				speakers: "Altlayer",
			},
			{
				title: "Sovereign SDK Workshop",
				date: "2023. July 22",
				time: "14:30",
				speakers: "Sovereign Labs",
				theme: "",
			},
			{
				title: "Modular Hacker House Demos",
				date: "2023. July 22",
				time: "16:00",
				speakers: "Argus and Celestia Labs",
				theme: "",
			},
		],
	},
};
