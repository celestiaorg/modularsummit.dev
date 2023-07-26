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
		livestreams: {
			title: "Watch the recording on YouTube",
			linkLabel: "WATCH NOW",
			stage1: "https://youtube.com/live/lHyQKCVQTPo?feature=share",
			stage2: "https://youtube.com/live/nNGVz-FRjKY?feature=share",
		},
		stage1: [
			{
				title: "Opening words",
				date: "2023. July 21",
				time: "10:00",
				speakers: "Balder Bomans",
				abstract: "",
				theme: "rollups",
				renderLabel: true,
			},
			{
				title: "Modular State of the Union ",
				date: "2023. July 21",
				time: "10:10",
				speakers: "Mustafa Al-Bassam",
				abstract: "",
				theme: "data-availability",
				renderLabel: true,
			},
			{
				title: "World Engine: Horizontally Scaling Rollups With Shards",
				date: "2023. July 21",
				time: "10:40",
				speakers: "Scott Sunarto",
				abstract: "",
				theme: "rollups",
				renderLabel: false,
			},
			{
				title: "Anoma ❤️ Celestia: intent-centric rollups",
				date: "2023. July 21",
				time: "11:00",
				speakers: "Chris Goes",
				abstract: "",
				theme: "rollups",
				renderLabel: true,
			},
			{
				title: "Fireside chat with Sandeep of Polygon",
				date: "2023. July 21",
				time: "11:25",
				speakers: "Moderator: Mo | Panelist: Sandeep Naiwal",
				abstract: "",
				theme: "rollups",
				renderLabel: false,
			},
			{
				title: "Avail: Architecture and Use Cases",
				date: "2023. July 21",
				time: "11:50",
				speakers: "Anurag Arjun",
				abstract: "",
				theme: "data-availability",
				renderLabel: false,
			},
			{
				title: "Data Availability Panel",
				date: "2023. July 21",
				time: "12:10",
				speakers: "Moderator: Bartek Kiepuszewski | Panelists: Anurag Arjun, Mustafa Al-Bassam, Toghrul Maharramov",
				abstract: "",
				theme: "data-availability",
				renderLabel: true,
			},
			{
				title: "Light nodes are not just a meme",
				date: "2023. July 21",
				time: "12:45",
				speakers: "Nick White",
				abstract: "",
				theme: "data-availability",
				renderLabel: false,
			},
			{
				title: "DA as broadband",
				date: "2023. July 21",
				time: "13:10",
				speakers: "Alex Evans",
				abstract: "",
				theme: "data-availability",
				renderLabel: false,
			},
			{
				title: "Lunch Break",
				date: "2023. July 21",
				time: "13:30",
				speakers: "",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "Bonsai: a Verifiable & ZK Computing Platform for a Modular World",
				date: "2023. July 21",
				time: "14:30",
				speakers: "Brian Retford",
				abstract: "Discuss how geenral purpose ZK can enable modular applications",
				theme: "zk",
				renderLabel: false,
			},
			{
				title: "Write Code, NOT Circuits",
				date: "2023. July 21",
				time: "14:50",
				speakers: "Zac Williamson",
				abstract: "Privacy is hard. We describe the abstraction layers and modular technologies required to turn zero-knowledge cryptography into a tool that can empower the next generation of web3 products.",
				theme: "zk",
				renderLabel: false,
			},
			{
				title: "Shielded Transactions Are Rollups",
				date: "2023. July 21",
				time: "15:10",
				speakers: "Henry de Valence",
				abstract: "",
				theme: "zk",
				renderLabel: false,
			},
			{
				title: "Modular ZK Systems Panel",
				date: "2023. July 21",
				time: "15:30",
				speakers: "Moderator: Anna Rose | Panelists: Nicolas Mohnblatt, Benedikt Bunz, Zac Williamson, Chris Goes",
				abstract: "",
				theme: "zk",
				renderLabel: true,
			},
			{
				title: "Break",
				date: "2023. July 21",
				time: "16:10",
				speakers: "",
				abstract: "",
				theme: "zk",
				renderLabel: false,
			},
			{
				title: "Aggregation is all you need",
				date: "2023. July 21",
				time: "16:30",
				speakers: "Uma Roy",
				abstract: "Aggregation is all you need: Combining proof systems to push the limits of ZK",
				theme: "zk",
				renderLabel: false,
			},
			{
				title: "Axiom: The first ZK coprocessor scaling data-rich applications on Ethereum",
				date: "2023. July 21",
				time: "16:50",
				speakers: "Yi Sun",
				abstract: "Scaling data-rich applications on Ethereum with Axiom",
				theme: "zk",
				renderLabel: false,
			},
			{
				title: "Modular ZK Architecture Panel",
				date: "2023. July 21",
				time: "17:10",
				speakers: "Moderator: Tracy | Panelists: Uma Roy, Yi Sun, Ismael Hishon-Rezaizadeh",
				abstract: "",
				theme: "zk",
				renderLabel: false,
			},
			{
				title: "Fireside Chat with Mustafa and Mike",
				date: "2023. July 21",
				time: "17:40",
				speakers: "Mustafa Al-Bassam, Mike Ippolito",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "Happy Hour",
				date: "2023. July 21",
				time: "18:30",
				speakers: "",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
		],
		stage2: [
			{
				title: "The economics of modular blockchains",
				date: "2023. July 21",
				time: "10:10",
				speakers: "lzrs",
				abstract: "",
				theme: "infrastructure",
				renderLabel: false,
			},
			{
				title: "More sovereignty, more security",
				date: "2023. July 21",
				time: "10:30",
				speakers: "Andres Monty",
				abstract: "",
				theme: "infrastructure",
				renderLabel: false,
			},
			{
				title: "What we Search for: Search Engines in an era of Modular Existence",
				date: "2023. July 21",
				time: "10:50",
				speakers: "Bunny",
				abstract: "",
				theme: "infrastructure",
				renderLabel: false,
			},
			{
				title: "Developer Infrastructure Panel",
				date: "2023. July 21",
				time: "11:10",
				speakers: "Moderator: Stephy | Panelists: Bunny, Jordan Oroshiba, lzrs, Josh Stein",
				abstract: "",
				theme: "infrastructure",
				renderLabel: false,
			},
			{
				title: "Bringing Security to Your Cosmos Chain with Ledger",
				date: "2023. July 21",
				time: "11:50",
				speakers: "Nicolas Consigny",
				abstract: "",
				theme: "infrastructure",
				renderLabel: true,
			},
			{
				title: "Mo Chains 'Mo Problems",
				date: "2023. July 21",
				time: "12:10",
				speakers: "Aditi Sriram",
				abstract: "",
				theme: "infrastructure",
				renderLabel: false,
			},
			{
				title: "Investing in Modular Infrastructure",
				date: "2023. July 21",
				time: "12:30",
				speakers: "Moderator: Joe Coll | Panelists: Calvin Poon, Juri Stricker, Mathijs van Esch",
				abstract: "",
				theme: "infrastructure",
				renderLabel: false,
			},
			{
				title: "Build it like Lego: The Modular Economy",
				date: "2023. July 21",
				time: "13:10",
				speakers: "Arjun Kalsy",
				abstract: "",
				theme: "infrastructure",
				renderLabel: false,
			},
			{
				title: "Lunch Break",
				date: "2023. July 21",
				time: "13:30",
				speakers: "",
				abstract: "",
				theme: "infrastructure",
				renderLabel: false,
			},
			{
				title: "Dumb blockchains require smart solutions (shared sequencing in the modular stack)",
				date: "2023. July 21",
				time: "14:30",
				speakers: "Ben Fisch",
				abstract: "Rollups are horizontally scaling the application layer of Ethereum. But as computation is sharded across different rollups, the interoperability of applications running on these rollups becomes fragmented, significantly impacting user utility. Moreover, today rollups are operated by centralized servers that decide on which transactions to include and in what order. Fragmented interoperability and sequencing centralization are some of the biggest challenges facing rollups today as they undermine the core value-propositions of Ethereum. Shared decentralized (dumb) sequencing layers have the potential to improve the overall decentralization and interoperability of Ethereum’s rollup-centric future, but also create critical challenges that require creative solutions.",
				theme: "shared-seq",
				renderLabel: false,
			},
			{
				title: "Astria: Speedrunning the Endgame",
				date: "2023. July 21",
				time: "14:50",
				speakers: "Josh Bowen",
				abstract: "Josh Bowen, presents Astria's view of the modular blockchain endgame",
				theme: "shared-seq",
				renderLabel: true,
			},
			{
				title: "Shared Sequencer Panel",
				date: "2023. July 21",
				time: "15:10",
				speakers: "Moderator: Evan Forbes | Panelists: Josh Bowen, Ben Fisch, Connor O'Hara",
				abstract: "",
				theme: "shared-seq",
				renderLabel: false,
			},
			{
				title: "Rollups-as-a-Service Are Going To Zero",
				date: "2023. July 21",
				time: "15:50",
				speakers: "Neel Somani",
				abstract: "In this talk, Neel Somani (CEO of Eclipse) explores the economic and technical constraints on app-specific rollups as they exist today.",
				theme: "raas",
				renderLabel: false,
			},
			{
				title: "Caldera: OP stack x Celestia rollups",
				date: "2023. July 21",
				time: "16:10",
				theme: "raas",
				abstract: "",
				speakers: "Matt Katz",
				renderLabel: true,
			},
			{
				title: "Rollup-as-a-Service Panel",
				date: "2023. July 21",
				time: "16:30",
				speakers: "Moderator: Tracy Wang | Panelists: Matt Katz, Neel Somani, YQ, Kautuk",
				abstract: "",
				theme: "raas",
				renderLabel: false,
			},
			{
				title: "Relayers in the Modular World",
				date: "2023. July 21",
				time: "17:10",
				speakers: "Jim Chang",
				abstract: "",
				theme: "modular-interop",
				renderLabel: false,
			},
			{
				title: "Hyperlane: modular blockchains and permissionless interoperability",
				date: "2023. July 21",
				time: "17:30",
				speakers: "Jon Kol",
				abstract: "",
				theme: "modular-interop",
				renderLabel: true,
			},
			{
				title: "Bridging Panel",
				date: "2023. July 21",
				time: "17:50",
				speakers: "Moderator: Mads Mathiessen | Panelists: Georgios Vlachos, Fig, Bo Du, Richard Adjei",
				abstract: "",
				theme: "modular-interop",
				renderLabel: false,
			},
			{
				title: "Happy Hour",
				date: "2023. July 21",
				time: "18:30",
				speakers: "",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
		],
		stage3: [
			{
				title: "Sovereign SDK Workshop",
				date: "2023. July 21",
				time: "10:30",
				speakers: "Sovereign Labs",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "Argus Gaming Workshop",
				date: "2023. July 21",
				time: "11:30",
				speakers: "Argus",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "Curio Gaming Workshop",
				date: "2023. July 21",
				time: "12:30",
				speakers: "Curio",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "Anoma Workshop",
				date: "2023. July 21",
				time: "14:30",
				speakers: "Anoma",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "Astria Workshop",
				date: "2023. July 21",
				time: "16:30",
				speakers: "Astria",
				abstract: "",
				theme: "",
				renderLabel: false,
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
		livestreams: {
			title: "Watch the recording on YouTube",
			linkLabel: "WATCH NOW",
			stage1: "https://youtube.com/live/WYH7n4M016A?feature=share",
			stage2: "https://youtube.com/live/iSaN8poAmr4?feature=share",
		},
		stage1: [
			{
				title: "Shielded Data Availability on Celestia",
				date: "2023. July 22",
				time: "10:00",
				speakers: "Adrian Brink",
				abstract: "",
				theme: "modular-cosmos",
				renderLabel: false,
			},
			{
				title: "Many chains, One Transaction: Democratizing Great Modular UX",
				date: "2023. July 22",
				time: "10:20",
				speakers: "Maghnus Mareneck",
				abstract: "",
				theme: "modular-cosmos",
				renderLabel: false,
			},
			{
				title: "Panel: Rollups on Bitcoin",
				date: "2023. July 22",
				time: "10:35",
				speakers: "Moderator: Eric Wall | Panelists: Sunny Aggarwal, Connor O'Hara, Cem Özer, John Light",
				abstract: "",
				theme: "modular-cosmos",
				renderLabel: false,
			},
			{
				title: "Modularity in Monetary Design",
				date: "2023. July 22",
				time: "11:15",
				speakers: "Ethan Buchman",
				abstract: "",
				theme: "modular-cosmos",
				renderLabel: true,
			},
			{
				title: "Celestia architecture: the present and a glimpse into the future",
				date: "2023. July 22",
				time: "11:35",
				speakers: "Ismail Khoffi",
				abstract: "",
				theme: "modular-cosmos",
				renderLabel: false,
			},
			{
				title: "Mesh Security",
				date: "2023. July 22",
				time: "11:55",
				speakers: "Sunny Aggarwal",
				abstract: "",
				theme: "modular-cosmos",
				renderLabel: false,
			},
			{
				title: "Panel: Cosmos goes modular - Internet of Modular Blockchains",
				date: "2023. July 22",
				time: "12:15",
				speakers: "Moderator: David Feiock | Panelist: Ethan Buchman, Zaki Manian, Ismail Khoffi, Jack Zampolin",
				abstract: "",
				theme: "modular-cosmos",
				renderLabel: false,
			},
			{
				title: "Lunch",
				date: "2023. July 22",
				time: "13:00",
				speakers: "",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
      {
				title: "Towards a Theory of MEV, Part II: Uncertainty",
				date: "2023. July 22",
				time: "14:00",
				speakers: "Tarun Chitra",
				abstract: "",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "Modularity, PBS and MEV - Freedom from the Bitcoin Mind Prison",
				date: "2023. July 22",
				time: "14:25",
				speakers: "Zaki Manian",
				abstract: "",
				theme: "pbs-day",
				renderLabel: false,
			},
      {
				title: "Current State on Orderflow, Block Building & the Latency Game",
				date: "2023. July 22",
				time: "14:40",
				speakers: "Danning Sui",
				abstract: "",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "SUAVE - Turning Zero-Sum to Positive-Sum Game",
				date: "2023. July 22",
				time: "14:55",
				speakers: "Robert Miller",
				abstract: "",
				theme: "pbs-day",
				renderLabel: false,
			},
      {
				title: "Ethereum PBS R&D Roadmap",
				date: "2023. July 22",
				time: "15:15",
				speakers: "Mike Neuder",
				abstract: "",
				theme: "pbs-day",
				renderLabel: false,
			},

			{
				title: "Builders and More Advanced Forms of Aggregation",
				date: "2023. July 22",
				time: "15:40",
				speakers: "Vitalik Buterin",
				abstract: "As the Ethereum ecosystem starts taking scalability, privacy and account security more seriously, we start seeing the need for more advanced forms of \"aggregation\" when combining user operations into a block. So far, this has started to include ERC-4337 bundling with its aggregate signature feature, but in the future such aggregation will include proofs of L2 state, a single recursive SNARK replacing many application-layer SNARKs, and perhaps even state update proof bundling across different L2s. This will add more load to the builder ecosystem. I will talk about what kinds of aggregation we may end up seeing, and the challenges in creating standardized open mempools or maximally decentralized markets for performing this type of aggregation.",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "PBS on L2s",
				date: "2023. July 22",
				time: "16:05",
				speakers: "Georgios Konstantopoulos",
				abstract: "",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "PBS-ifying Rollups: Prover-Sequencer Separation",
				date: "2023. July 22",
				time: "16:20",
				speakers: "Toghrul Maharramov",
				abstract: "",
				theme: "pbs-day",
				renderLabel: true,
			},
			{
				title: "PBS across the layers - from L1 to L1000",
				date: "2023. July 22",
				time: "16:35",
				speakers: "Patrick McCorrey",
				abstract: "",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "MEV-Garden: Cross-domain Markets with PBS and SUAVE",
				date: "2023. July 22",
				time: "16:50",
				speakers: "Tomasz Stanczak",
				abstract: "",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "Design Trade-offs in Proposals for Sequencer Decentralization",
				date: "2023. July 22",
				time: "17:05",
				speakers: "Joe Andrews",
				abstract: "",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "PBS on Shared Sequencing Layers and PBS design for Responsive Consensus Protocol",
				date: "2023. July 22",
				time: "17:20",
				speakers: "Ben Fisch",
				abstract: "In a shared sequencer layer for L2 rollups, proposer-builder separation can be leveraged to achieve strong interoperability of applications across rollups with economic safety. The second part of the talk focusses on PBS design in a decentralized sequencing layer that uses a responsive consensus protocol for fast-finality and thus has no fixed block time. It has some advantages and also presents some unique challenges.",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "Exploring MEV Capture in Modular Systems",
				date: "2023. July 22",
				time: "17:35",
				speakers: "Evan Forbes",
				abstract: "Breaking the proposer monopoly for more sovereign MEV capture.",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "Endgame: Proof of Governance",
				date: "2023. July 22",
				time: "17:50",
				speakers: "Jon Charbonneau",
				abstract: "The endgame for rollup sequencer decentralization.",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "PBS Guild: An Open Treasure Map to Keep Crypto Decentralized",
				date: "2023. July 22",
				time: "18:05",
				abstract: "",
				speakers: "Tina Zhen",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "The End Game",
				date: "2023. July 22",
				time: "18:15",
				speakers: "Mustafa Al-Bassam, Anatoly Yakovenko, Tarun Chitra",
				abstract: "",
				theme: "pbs-day",
				renderLabel: false,
			},
			{
				title: "Happy Hour",
				date: "2023. July 22",
				time: "19:00",
				speakers: "",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
		],
		stage2: [
			{
				title: "Rollkit: Unleashing the Power of Open Interfaces",
				date: "2023. July 22",
				time: "10:10",
				speakers: "NashQ",
				abstract: "",
				theme: "developer",
				renderLabel: true,
			},
			{
				title: "Modular Devrel Panel: Build Whatever",
				date: "2023. July 22",
				time: "10:30",
				speakers: "Moderator: David Phelps | Panelists: Camila Ramos, Yaz Khoury, Henri Lieutaud, Daniel Helm",
				abstract: "",
				theme: "developer",
				renderLabel: false,
			},
			{
				title: "The Intergame Thesis: Endgame for Onchain Games",
				date: "2023. July 22",
				time: "11:10",
				speakers: "Scott Sunarto",
				abstract: "",
				theme: "gaming",
				renderLabel: false,
			},
			{
				title: "Gaming builders and investors fireside chat",
				date: "2023. July 22",
				time: "11:35",
				speakers: "Moderator: David Zhou | Panelists: Morris Hsieh, Breck Stodghill, David Brillembourgh",
				abstract: "",
				theme: "gaming",
				renderLabel: true,
			},
			{
				title: "Shared sequencing for gamers & smol brains",
				date: "2023. July 22",
				time: "12:20",
				speakers: "Norswap",
				abstract: "Why every on-chain games wants to be a rollup, why decentralized sequencing is particular important in that context, and a review of possible designs.",
				theme: "gaming",
				renderLabel: false,
			},
			{
				title: "Lessons in Hyperscaling Onchain games - Web2 meets Web3",
				date: "2023. July 22",
				time: "12:40",
				speakers: "Yijia Chen",
				abstract: "Keystone, our sovereign rollup-based onchain game engine, and the novel experiences the onchain games building on top can enable.",
				theme: "gaming",
				renderLabel: false,
			},
			{
				title: "Lunch",
				date: "2023. July 22",
				time: "13:00",
				speakers: "",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "Fireside chat with zk Sync",
				date: "2023. July 22",
				time: "14:00",
				speakers: "Moderator: Adriana Hamacher | Panelists: Alex Gluchowski",
				abstract: "",
				theme: "zk-apps",
				renderLabel: false,
			},
			{
				title: "Manta Pacific: The Celestium for EVM-Native ZK Applications",
				date: "2023. July 22",
				time: "14:20",
				speakers: "Kenny Li",
				abstract: "",
				theme: "zk-apps",
				renderLabel: false,
			},
			{
				title: "Zero-Knowledge Proofs for Modular State Composability",
				date: "2023. July 22",
				time: "14:40",
				speakers: "Ismael Hishon-Rezaizadeh",
				abstract: "The fragmentation of state across modular rollups creates a veritable data lake of historical state. ZK MapReduce is a proprietary proof construction, designed by Lagrange Labs, that is optimized for generating large scale batch storage proofs concurrently with data parallel computation. In this talk, we’ll explore how verifiable big data scale computation intersects with the modular ecosystem to create new forms of composability of data between chains.",
				theme: "zk-apps",
				renderLabel: true,
			},
			{
				title: "Novel Applications of ZK",
				date: "2023. July 22",
				time: "15:00",
				speakers: "Moderator: Eshita Nandini | Panelists: Niraj Pant, Harry Grieve, Lakshman Sankar, Daniel Shorr",
				abstract: "",
				theme: "zk-apps",
				renderLabel: false,
			},
			{
				title: "eIBC: IBC in a new Dymension",
				date: "2023. July 22",
				time: "15:40",
				speakers: "Yishay",
				abstract: "",
				theme: "cosmos-celestia",
				renderLabel: false,
			},
			{
				title: "Modular IBC Patterns",
				date: "2023. July 22",
				time: "16:00",
				speakers: "Jack Zampolin",
				abstract: "",
				theme: "cosmos-celestia",
				renderLabel: false,
			},
			{
				title: "Bitcoin Staking: Unlocking 21M Bitcoins to Secure the Decentralised Economy",
				date: "2023. July 22",
				time: "16:20",
				speakers: "David Tse",
				abstract: "",
				theme: "cosmos-celestia",
				renderLabel: true,
			},
			{
				title: "Cosmos Panel: Infrastructure",
				date: "2023. July 22",
				time: "16:40",
				speakers: "Moderator: Thyborg | Panelists: Marko Bar, Sean Braithwaite, Maghnus Mareneck, Jack Zampolin",
				abstract: "",
				theme: "cosmos-celestia",
				renderLabel: false,
			},
			{
				title: "Securing Connected Liquidity for Modular Blockchains",
				date: "2023. July 22",
				time: "17:20",
				speakers: "Yeongin Lee",
				abstract: "The importance of securing connected liquidity.",
				theme: "cosmos-celestia",
				renderLabel: false,
			},
			{
				title: "Cosmos Panel: Applications",
				date: "2023. July 22",
				time: "17:40",
				speakers: "Moderator: Walt Smith | Panelists: Albert Chon, Yeongin Lee, Jelena Djuric, Dev Bear, Dan Lynch",
				abstract: "",
				theme: "cosmos-celestia",
				renderLabel: false,
			},
			{
				title: "Berachain: Polaris EVM Framework",
				date: "2023. July 22",
				time: "18:20",
				speakers: "Dev Bear",
				abstract: "",
				theme:"cosmos-celestia",
				renderLabel: false,
			},
			{
				title: "Happy Hour",
				date: "2023. July 22",
				time: "19:00",
				speakers: "",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
		],
		stage3: [
			{
				title: "Celestia Light Node Tutorial ✨",
				date: "2023. July 22",
				time: "10:00",
				speakers: "Celestia Labs",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "OP Stack Rollup Workshop 🟣",
				date: "2023. July 22",
				time: "11:00",
				speakers: "Caldera & Celestia Labs",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "Rollkit & Polaris Workshop",
				date: "2023. July 22",
				time: "12:00",
				speakers: "Rollkit and Berachain",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "Altlayer Workshop",
				date: "2023. July 22",
				time: "12:45",
				speakers: "Altlayer",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
			{
				title: "Modular Hacker House Demos",
				date: "2023. July 22",
				time: "16:00",
				speakers: "Argus and Celestia Labs",
				abstract: "",
				theme: "",
				renderLabel: false,
			},
		],
	},
};
