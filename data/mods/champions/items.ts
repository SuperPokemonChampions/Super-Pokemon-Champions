export const Items: import('../../../sim/dex-items').ModdedItemDataTable = {
	shellbell: {
		inherit: true,
		onAfterMoveSecondarySelf: undefined,
		onAfterMove(source, target, move) {
			if (move.totalDamage && !source.forceSwitchFlag) this.heal(move.totalDamage / 6, source);
		},
	},
	abilityshield: {
		inherit: true,
		isNonstandard: null,
	},
	abomasite: {
		inherit: true,
		isNonstandard: null,
	},
	absolite: {
		inherit: true,
		isNonstandard: null,
	},
	absolitez: {
		inherit: true,
		isNonstandard: null,
	},
	absorbbulb: {
		inherit: true,
		isNonstandard: null,
	},
	adamantcrystal: {
		inherit: true,
		isNonstandard: null,
	},
	adamantorb: {
		inherit: true,
		isNonstandard: null,
	},
	adrenalineorb: {
		inherit: true,
		isNonstandard: null,
	},
	aerodactylite: {
		inherit: true,
		isNonstandard: null,
	},
	aggronite: {
		inherit: true,
		isNonstandard: null,
	},
	aguavberry: {
		inherit: true,
		isNonstandard: null,
	},
	airballoon: {
		inherit: true,
		isNonstandard: null,
	},
	alakazite: {
		inherit: true,
		isNonstandard: null,
	},
	aloraichiumz: {
		inherit: true,
		isNonstandard: null,
	},
	altarianite: {
		inherit: true,
		isNonstandard: null,
	},
	ampharosite: {
		inherit: true,
		isNonstandard: null,
	},
	apicotberry: {
		inherit: true,
		isNonstandard: null,
	},
	armorfossil: {
		inherit: true,
		isNonstandard: null,
	},
	assaultvest: {
		inherit: true,
		isNonstandard: null,
	},
	audinite: {
		inherit: true,
		isNonstandard: null,
	},
	auspiciousarmor: {
		inherit: true,
		isNonstandard: null,
	},
	banettite: {
		inherit: true,
		isNonstandard: null,
	},
	barbaracite: {
		inherit: true,
		isNonstandard: null,
	},
	baxcalibrite: {
		inherit: true,
		isNonstandard: null,
	},
	beastball: {
		inherit: true,
		isNonstandard: null,
	},
	beedrillite: {
		inherit: true,
		isNonstandard: null,
	},
	belueberry: {
		inherit: true,
		isNonstandard: null,
	},
	berry: {
		inherit: true,
		isNonstandard: null,
	},
	berryjuice: {
		inherit: true,
		isNonstandard: null,
	},
	berrysweet: {
		inherit: true,
		isNonstandard: null,
	},
	berserkgene: {
		inherit: true,
		isNonstandard: null,
	},
	bignugget: {
		inherit: true,
		isNonstandard: null,
	},
	bigroot: {
		inherit: true,
		isNonstandard: null,
	},
	bindingband: {
		inherit: true,
		isNonstandard: null,
	},
	bitterberry: {
		inherit: true,
		isNonstandard: null,
	},
	blacksludge: {
		inherit: true,
		isNonstandard: null,
	},
	blastoisinite: {
		inherit: true,
		isNonstandard: null,
	},
	blazikenite: {
		inherit: true,
		isNonstandard: null,
	},
	blueorb: {
		inherit: true,
		isNonstandard: null,
	},
	blukberry: {
		inherit: true,
		isNonstandard: null,
	},
	blunderpolicy: {
		inherit: true,
		isNonstandard: null,
	},
	boosterenergy: {
		inherit: true,
		isNonstandard: null,
	},
	bottlecap: {
		inherit: true,
		isNonstandard: null,
	},
	buggem: {
		inherit: true,
		isNonstandard: null,
	},
	buginiumz: {
		inherit: true,
		isNonstandard: null,
	},
	bugmemory: {
		inherit: true,
		isNonstandard: null,
	},
	burndrive: {
		inherit: true,
		isNonstandard: null,
	},
	burntberry: {
		inherit: true,
		isNonstandard: null,
	},
	cameruptite: {
		inherit: true,
		isNonstandard: null,
	},
	cellbattery: {
		inherit: true,
		isNonstandard: null,
	},
	chandelurite: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditex: {
		inherit: true,
		isNonstandard: null,
	},
	charizarditey: {
		inherit: true,
		isNonstandard: null,
	},
	cherishball: {
		inherit: true,
		isNonstandard: null,
	},
	chesnaughtite: {
		inherit: true,
		isNonstandard: null,
	},
	chilldrive: {
		inherit: true,
		isNonstandard: null,
	},
	chimechite: {
		inherit: true,
		isNonstandard: null,
	},
	chippedpot: {
		inherit: true,
		isNonstandard: null,
	},
	choiceband: {
		inherit: true,
		isNonstandard: null,
	},
	choicespecs: {
		inherit: true,
		isNonstandard: null,
	},
	clawfossil: {
		inherit: true,
		isNonstandard: null,
	},
	clearamulet: {
		inherit: true,
		isNonstandard: null,
	},
	clefablite: {
		inherit: true,
		isNonstandard: null,
	},
	cloversweet: {
		inherit: true,
		isNonstandard: null,
	},
	cornerstonemask: {
		inherit: true,
		isNonstandard: null,
	},
	cornnberry: {
		inherit: true,
		isNonstandard: null,
	},
	coverfossil: {
		inherit: true,
		isNonstandard: null,
	},
	covertcloak: {
		inherit: true,
		isNonstandard: null,
	},
	crabominite: {
		inherit: true,
		isNonstandard: null,
	},
	crackedpot: {
		inherit: true,
		isNonstandard: null,
	},
	crucibellite: {
		inherit: true,
		isNonstandard: null,
	},
	custapberry: {
		inherit: true,
		isNonstandard: null,
	},
	damprock: {
		inherit: true,
		isNonstandard: null,
	},
	darkgem: {
		inherit: true,
		isNonstandard: null,
	},
	darkiniumz: {
		inherit: true,
		isNonstandard: null,
	},
	darkmemory: {
		inherit: true,
		isNonstandard: null,
	},
	darkranite: {
		inherit: true,
		isNonstandard: null,
	},
	dawnstone: {
		inherit: true,
		isNonstandard: null,
	},
	decidiumz: {
		inherit: true,
		isNonstandard: null,
	},
	deepseascale: {
		inherit: true,
		isNonstandard: null,
	},
	deepseatooth: {
		inherit: true,
		isNonstandard: null,
	},
	delphoxite: {
		inherit: true,
		isNonstandard: null,
	},
	destinyknot: {
		inherit: true,
		isNonstandard: null,
	},
	diancite: {
		inherit: true,
		isNonstandard: null,
	},
	diveball: {
		inherit: true,
		isNonstandard: null,
	},
	domefossil: {
		inherit: true,
		isNonstandard: null,
	},
	dousedrive: {
		inherit: true,
		isNonstandard: null,
	},
	dracoplate: {
		inherit: true,
		isNonstandard: null,
	},
	dragalgite: {
		inherit: true,
		isNonstandard: null,
	},
	dragongem: {
		inherit: true,
		isNonstandard: null,
	},
	dragoninite: {
		inherit: true,
		isNonstandard: null,
	},
	dragoniumz: {
		inherit: true,
		isNonstandard: null,
	},
	dragonmemory: {
		inherit: true,
		isNonstandard: null,
	},
	dragonscale: {
		inherit: true,
		isNonstandard: null,
	},
	drampanite: {
		inherit: true,
		isNonstandard: null,
	},
	dreadplate: {
		inherit: true,
		isNonstandard: null,
	},
	dreamball: {
		inherit: true,
		isNonstandard: null,
	},
	dubiousdisc: {
		inherit: true,
		isNonstandard: null,
	},
	durinberry: {
		inherit: true,
		isNonstandard: null,
	},
	duskball: {
		inherit: true,
		isNonstandard: null,
	},
	duskstone: {
		inherit: true,
		isNonstandard: null,
	},
	earthplate: {
		inherit: true,
		isNonstandard: null,
	},
	eelektrossite: {
		inherit: true,
		isNonstandard: null,
	},
	eeviumz: {
		inherit: true,
		isNonstandard: null,
	},
	ejectbutton: {
		inherit: true,
		isNonstandard: null,
	},
	ejectpack: {
		inherit: true,
		isNonstandard: null,
	},
	electirizer: {
		inherit: true,
		isNonstandard: null,
	},
	electricgem: {
		inherit: true,
		isNonstandard: null,
	},
	electricmemory: {
		inherit: true,
		isNonstandard: null,
	},
	electricseed: {
		inherit: true,
		isNonstandard: null,
	},
	electriumz: {
		inherit: true,
		isNonstandard: null,
	},
	emboarite: {
		inherit: true,
		isNonstandard: null,
	},
	enigmaberry: {
		inherit: true,
		isNonstandard: null,
	},
	eviolite: {
		inherit: true,
		isNonstandard: null,
	},
	excadrite: {
		inherit: true,
		isNonstandard: null,
	},
	expertbelt: {
		inherit: true,
		isNonstandard: null,
	},
	fairiumz: {
		inherit: true,
		isNonstandard: null,
	},
	fairygem: {
		inherit: true,
		isNonstandard: null,
	},
	fairymemory: {
		inherit: true,
		isNonstandard: null,
	},
	falinksite: {
		inherit: true,
		isNonstandard: null,
	},
	fastball: {
		inherit: true,
		isNonstandard: null,
	},
	feraligite: {
		inherit: true,
		isNonstandard: null,
	},
	fightinggem: {
		inherit: true,
		isNonstandard: null,
	},
	fightingmemory: {
		inherit: true,
		isNonstandard: null,
	},
	fightiniumz: {
		inherit: true,
		isNonstandard: null,
	},
	figyberry: {
		inherit: true,
		isNonstandard: null,
	},
	firegem: {
		inherit: true,
		isNonstandard: null,
	},
	firememory: {
		inherit: true,
		isNonstandard: null,
	},
	firestone: {
		inherit: true,
		isNonstandard: null,
	},
	firiumz: {
		inherit: true,
		isNonstandard: null,
	},
	fistplate: {
		inherit: true,
		isNonstandard: null,
	},
	flameorb: {
		inherit: true,
		isNonstandard: null,
	},
	flameplate: {
		inherit: true,
		isNonstandard: null,
	},
	floatstone: {
		inherit: true,
		isNonstandard: null,
	},
	floettite: {
		inherit: true,
		isNonstandard: null,
	},
	flowersweet: {
		inherit: true,
		isNonstandard: null,
	},
	flyinggem: {
		inherit: true,
		isNonstandard: null,
	},
	flyingmemory: {
		inherit: true,
		isNonstandard: null,
	},
	flyiniumz: {
		inherit: true,
		isNonstandard: null,
	},
	fossilizedbird: {
		inherit: true,
		isNonstandard: null,
	},
	fossilizeddino: {
		inherit: true,
		isNonstandard: null,
	},
	fossilizeddrake: {
		inherit: true,
		isNonstandard: null,
	},
	fossilizedfish: {
		inherit: true,
		isNonstandard: null,
	},
	friendball: {
		inherit: true,
		isNonstandard: null,
	},
	froslassite: {
		inherit: true,
		isNonstandard: null,
	},
	fullincense: {
		inherit: true,
		isNonstandard: null,
	},
	galaricacuff: {
		inherit: true,
		isNonstandard: null,
	},
	galaricawreath: {
		inherit: true,
		isNonstandard: null,
	},
	galladite: {
		inherit: true,
		isNonstandard: null,
	},
	ganlonberry: {
		inherit: true,
		isNonstandard: null,
	},
	garchompite: {
		inherit: true,
		isNonstandard: null,
	},
	garchompitez: {
		inherit: true,
		isNonstandard: null,
	},
	gardevoirite: {
		inherit: true,
		isNonstandard: null,
	},
	gengarite: {
		inherit: true,
		isNonstandard: null,
	},
	ghostgem: {
		inherit: true,
		isNonstandard: null,
	},
	ghostiumz: {
		inherit: true,
		isNonstandard: null,
	},
	ghostmemory: {
		inherit: true,
		isNonstandard: null,
	},
	glalitite: {
		inherit: true,
		isNonstandard: null,
	},
	glimmoranite: {
		inherit: true,
		isNonstandard: null,
	},
	goldberry: {
		inherit: true,
		isNonstandard: null,
	},
	goldbottlecap: {
		inherit: true,
		isNonstandard: null,
	},
	golisopite: {
		inherit: true,
		isNonstandard: null,
	},
	golurkite: {
		inherit: true,
		isNonstandard: null,
	},
	grassgem: {
		inherit: true,
		isNonstandard: null,
	},
	grassiumz: {
		inherit: true,
		isNonstandard: null,
	},
	grassmemory: {
		inherit: true,
		isNonstandard: null,
	},
	grassyseed: {
		inherit: true,
		isNonstandard: null,
	},
	greatball: {
		inherit: true,
		isNonstandard: null,
	},
	greninjite: {
		inherit: true,
		isNonstandard: null,
	},
	grepaberry: {
		inherit: true,
		isNonstandard: null,
	},
	gripclaw: {
		inherit: true,
		isNonstandard: null,
	},
	griseouscore: {
		inherit: true,
		isNonstandard: null,
	},
	griseousorb: {
		inherit: true,
		isNonstandard: null,
	},
	groundgem: {
		inherit: true,
		isNonstandard: null,
	},
	groundiumz: {
		inherit: true,
		isNonstandard: null,
	},
	groundmemory: {
		inherit: true,
		isNonstandard: null,
	},
	gyaradosite: {
		inherit: true,
		isNonstandard: null,
	},
	hawluchanite: {
		inherit: true,
		isNonstandard: null,
	},
	healball: {
		inherit: true,
		isNonstandard: null,
	},
	hearthflamemask: {
		inherit: true,
		isNonstandard: null,
	},
	heatranite: {
		inherit: true,
		isNonstandard: null,
	},
	heatrock: {
		inherit: true,
		isNonstandard: null,
	},
	heavyball: {
		inherit: true,
		isNonstandard: null,
	},
	heavydutyboots: {
		inherit: true,
		isNonstandard: null,
	},
	helixfossil: {
		inherit: true,
		isNonstandard: null,
	},
	heracronite: {
		inherit: true,
		isNonstandard: null,
	},
	hondewberry: {
		inherit: true,
		isNonstandard: null,
	},
	houndoominite: {
		inherit: true,
		isNonstandard: null,
	},
	iapapaberry: {
		inherit: true,
		isNonstandard: null,
	},
	iceberry: {
		inherit: true,
		isNonstandard: null,
	},
	icegem: {
		inherit: true,
		isNonstandard: null,
	},
	icememory: {
		inherit: true,
		isNonstandard: null,
	},
	icestone: {
		inherit: true,
		isNonstandard: null,
	},
	icicleplate: {
		inherit: true,
		isNonstandard: null,
	},
	iciumz: {
		inherit: true,
		isNonstandard: null,
	},
	icyrock: {
		inherit: true,
		isNonstandard: null,
	},
	inciniumz: {
		inherit: true,
		isNonstandard: null,
	},
	insectplate: {
		inherit: true,
		isNonstandard: null,
	},
	ironball: {
		inherit: true,
		isNonstandard: null,
	},
	ironplate: {
		inherit: true,
		isNonstandard: null,
	},
	jabocaberry: {
		inherit: true,
		isNonstandard: null,
	},
	jawfossil: {
		inherit: true,
		isNonstandard: null,
	},
	kangaskhanite: {
		inherit: true,
		isNonstandard: null,
	},
	keeberry: {
		inherit: true,
		isNonstandard: null,
	},
	kelpsyberry: {
		inherit: true,
		isNonstandard: null,
	},
	kommoniumz: {
		inherit: true,
		isNonstandard: null,
	},
	laggingtail: {
		inherit: true,
		isNonstandard: null,
	},
	lansatberry: {
		inherit: true,
		isNonstandard: null,
	},
	latiasite: {
		inherit: true,
		isNonstandard: null,
	},
	latiosite: {
		inherit: true,
		isNonstandard: null,
	},
	laxincense: {
		inherit: true,
		isNonstandard: null,
	},
	leafstone: {
		inherit: true,
		isNonstandard: null,
	},
	leek: {
		inherit: true,
		isNonstandard: null,
	},
	levelball: {
		inherit: true,
		isNonstandard: null,
	},
	liechiberry: {
		inherit: true,
		isNonstandard: null,
	},
	lifeorb: {
		inherit: true,
		isNonstandard: null,
	},
	lightclay: {
		inherit: true,
		isNonstandard: null,
	},
	loadeddice: {
		inherit: true,
		isNonstandard: null,
	},
	lopunnite: {
		inherit: true,
		isNonstandard: null,
	},
	loveball: {
		inherit: true,
		isNonstandard: null,
	},
	lovesweet: {
		inherit: true,
		isNonstandard: null,
	},
	lucarionite: {
		inherit: true,
		isNonstandard: null,
	},
	lucarionitez: {
		inherit: true,
		isNonstandard: null,
	},
	luckypunch: {
		inherit: true,
		isNonstandard: null,
	},
	luminousmoss: {
		inherit: true,
		isNonstandard: null,
	},
	lunaliumz: {
		inherit: true,
		isNonstandard: null,
	},
	lureball: {
		inherit: true,
		isNonstandard: null,
	},
	lustrousglobe: {
		inherit: true,
		isNonstandard: null,
	},
	lustrousorb: {
		inherit: true,
		isNonstandard: null,
	},
	luxuryball: {
		inherit: true,
		isNonstandard: null,
	},
	lycaniumz: {
		inherit: true,
		isNonstandard: null,
	},
	machobrace: {
		inherit: true,
		isNonstandard: null,
	},
	magearnite: {
		inherit: true,
		isNonstandard: null,
	},
	magmarizer: {
		inherit: true,
		isNonstandard: null,
	},
	magoberry: {
		inherit: true,
		isNonstandard: null,
	},
	magostberry: {
		inherit: true,
		isNonstandard: null,
	},
	mail: {
		inherit: true,
		isNonstandard: null,
	},
	malamarite: {
		inherit: true,
		isNonstandard: null,
	},
	maliciousarmor: {
		inherit: true,
		isNonstandard: null,
	},
	manectite: {
		inherit: true,
		isNonstandard: null,
	},
	marangaberry: {
		inherit: true,
		isNonstandard: null,
	},
	marshadiumz: {
		inherit: true,
		isNonstandard: null,
	},
	masterball: {
		inherit: true,
		isNonstandard: null,
	},
	masterpieceteacup: {
		inherit: true,
		isNonstandard: null,
	},
	mawilite: {
		inherit: true,
		isNonstandard: null,
	},
	meadowplate: {
		inherit: true,
		isNonstandard: null,
	},
	medichamite: {
		inherit: true,
		isNonstandard: null,
	},
	meganiumite: {
		inherit: true,
		isNonstandard: null,
	},
	meowsticite: {
		inherit: true,
		isNonstandard: null,
	},
	metagrossite: {
		inherit: true,
		isNonstandard: null,
	},
	metalalloy: {
		inherit: true,
		isNonstandard: null,
	},
	metalpowder: {
		inherit: true,
		isNonstandard: null,
	},
	metronome: {
		inherit: true,
		isNonstandard: null,
	},
	mewniumz: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitex: {
		inherit: true,
		isNonstandard: null,
	},
	mewtwonitey: {
		inherit: true,
		isNonstandard: null,
	},
	micleberry: {
		inherit: true,
		isNonstandard: null,
	},
	mimikiumz: {
		inherit: true,
		isNonstandard: null,
	},
	mindplate: {
		inherit: true,
		isNonstandard: null,
	},
	mintberry: {
		inherit: true,
		isNonstandard: null,
	},
	miracleberry: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorherb: {
		inherit: true,
		isNonstandard: null,
	},
	mistyseed: {
		inherit: true,
		isNonstandard: null,
	},
	moonball: {
		inherit: true,
		isNonstandard: null,
	},
	moonstone: {
		inherit: true,
		isNonstandard: null,
	},
	muscleband: {
		inherit: true,
		isNonstandard: null,
	},
	mysteryberry: {
		inherit: true,
		isNonstandard: null,
	},
	nanabberry: {
		inherit: true,
		isNonstandard: null,
	},
	nestball: {
		inherit: true,
		isNonstandard: null,
	},
	netball: {
		inherit: true,
		isNonstandard: null,
	},
	nomelberry: {
		inherit: true,
		isNonstandard: null,
	},
	normalgem: {
		inherit: true,
		isNonstandard: null,
	},
	normaliumz: {
		inherit: true,
		isNonstandard: null,
	},
	oddincense: {
		inherit: true,
		isNonstandard: null,
	},
	oldamber: {
		inherit: true,
		isNonstandard: null,
	},
	ovalstone: {
		inherit: true,
		isNonstandard: null,
	},
	pamtreberry: {
		inherit: true,
		isNonstandard: null,
	},
	parkball: {
		inherit: true,
		isNonstandard: null,
	},
	petayaberry: {
		inherit: true,
		isNonstandard: null,
	},
	pidgeotite: {
		inherit: true,
		isNonstandard: null,
	},
	pikaniumz: {
		inherit: true,
		isNonstandard: null,
	},
	pikashuniumz: {
		inherit: true,
		isNonstandard: null,
	},
	pinapberry: {
		inherit: true,
		isNonstandard: null,
	},
	pinkbow: {
		inherit: true,
		isNonstandard: null,
	},
	pinsirite: {
		inherit: true,
		isNonstandard: null,
	},
	pixieplate: {
		inherit: true,
		isNonstandard: null,
	},
	plumefossil: {
		inherit: true,
		isNonstandard: null,
	},
	poisongem: {
		inherit: true,
		isNonstandard: null,
	},
	poisoniumz: {
		inherit: true,
		isNonstandard: null,
	},
	poisonmemory: {
		inherit: true,
		isNonstandard: null,
	},
	pokeball: {
		inherit: true,
		isNonstandard: null,
	},
	polkadotbow: {
		inherit: true,
		isNonstandard: null,
	},
	pomegberry: {
		inherit: true,
		isNonstandard: null,
	},
	poweranklet: {
		inherit: true,
		isNonstandard: null,
	},
	powerband: {
		inherit: true,
		isNonstandard: null,
	},
	powerbelt: {
		inherit: true,
		isNonstandard: null,
	},
	powerbracer: {
		inherit: true,
		isNonstandard: null,
	},
	powerherb: {
		inherit: true,
		isNonstandard: null,
	},
	powerlens: {
		inherit: true,
		isNonstandard: null,
	},
	powerweight: {
		inherit: true,
		isNonstandard: null,
	},
	premierball: {
		inherit: true,
		isNonstandard: null,
	},
	prettyfeather: {
		inherit: true,
		isNonstandard: null,
	},
	primariumz: {
		inherit: true,
		isNonstandard: null,
	},
	prismscale: {
		inherit: true,
		isNonstandard: null,
	},
	protectivepads: {
		inherit: true,
		isNonstandard: null,
	},
	protector: {
		inherit: true,
		isNonstandard: null,
	},
	przcureberry: {
		inherit: true,
		isNonstandard: null,
	},
	psncureberry: {
		inherit: true,
		isNonstandard: null,
	},
	psychicgem: {
		inherit: true,
		isNonstandard: null,
	},
	psychicmemory: {
		inherit: true,
		isNonstandard: null,
	},
	psychicseed: {
		inherit: true,
		isNonstandard: null,
	},
	psychiumz: {
		inherit: true,
		isNonstandard: null,
	},
	punchingglove: {
		inherit: true,
		isNonstandard: null,
	},
	pyroarite: {
		inherit: true,
		isNonstandard: null,
	},
	qualotberry: {
		inherit: true,
		isNonstandard: null,
	},
	quickball: {
		inherit: true,
		isNonstandard: null,
	},
	quickpowder: {
		inherit: true,
		isNonstandard: null,
	},
	rabutaberry: {
		inherit: true,
		isNonstandard: null,
	},
	raichunitex: {
		inherit: true,
		isNonstandard: null,
	},
	raichunitey: {
		inherit: true,
		isNonstandard: null,
	},
	rarebone: {
		inherit: true,
		isNonstandard: null,
	},
	razorclaw: {
		inherit: true,
		isNonstandard: null,
	},
	razorfang: {
		inherit: true,
		isNonstandard: null,
	},
	razzberry: {
		inherit: true,
		isNonstandard: null,
	},
	reapercloth: {
		inherit: true,
		isNonstandard: null,
	},
	redcard: {
		inherit: true,
		isNonstandard: null,
	},
	redorb: {
		inherit: true,
		isNonstandard: null,
	},
	repeatball: {
		inherit: true,
		isNonstandard: null,
	},
	ribbonsweet: {
		inherit: true,
		isNonstandard: null,
	},
	ringtarget: {
		inherit: true,
		isNonstandard: null,
	},
	rockgem: {
		inherit: true,
		isNonstandard: null,
	},
	rockincense: {
		inherit: true,
		isNonstandard: null,
	},
	rockiumz: {
		inherit: true,
		isNonstandard: null,
	},
	rockmemory: {
		inherit: true,
		isNonstandard: null,
	},
	rockyhelmet: {
		inherit: true,
		isNonstandard: null,
	},
	roomservice: {
		inherit: true,
		isNonstandard: null,
	},
	rootfossil: {
		inherit: true,
		isNonstandard: null,
	},
	roseincense: {
		inherit: true,
		isNonstandard: null,
	},
	rowapberry: {
		inherit: true,
		isNonstandard: null,
	},
	rustedshield: {
		inherit: true,
		isNonstandard: null,
	},
	rustedsword: {
		inherit: true,
		isNonstandard: null,
	},
	sablenite: {
		inherit: true,
		isNonstandard: null,
	},
	sachet: {
		inherit: true,
		isNonstandard: null,
	},
	safariball: {
		inherit: true,
		isNonstandard: null,
	},
	safetygoggles: {
		inherit: true,
		isNonstandard: null,
	},
	sailfossil: {
		inherit: true,
		isNonstandard: null,
	},
	salacberry: {
		inherit: true,
		isNonstandard: null,
	},
	salamencite: {
		inherit: true,
		isNonstandard: null,
	},
	sceptilite: {
		inherit: true,
		isNonstandard: null,
	},
	scizorite: {
		inherit: true,
		isNonstandard: null,
	},
	scolipite: {
		inherit: true,
		isNonstandard: null,
	},
	scovillainite: {
		inherit: true,
		isNonstandard: null,
	},
	scraftinite: {
		inherit: true,
		isNonstandard: null,
	},
	seaincense: {
		inherit: true,
		isNonstandard: null,
	},
	sharpedonite: {
		inherit: true,
		isNonstandard: null,
	},
	shedshell: {
		inherit: true,
		isNonstandard: null,
	},
	shinystone: {
		inherit: true,
		isNonstandard: null,
	},
	shockdrive: {
		inherit: true,
		isNonstandard: null,
	},
	skarmorite: {
		inherit: true,
		isNonstandard: null,
	},
	skullfossil: {
		inherit: true,
		isNonstandard: null,
	},
	skyplate: {
		inherit: true,
		isNonstandard: null,
	},
	slowbronite: {
		inherit: true,
		isNonstandard: null,
		shortDesc: "If held by a Slowbro (not Galarian Slowbro), this item allows it to Mega Evolve.",
	},
	smoothrock: {
		inherit: true,
		isNonstandard: null,
	},
	snorliumz: {
		inherit: true,
		isNonstandard: null,
	},
	snowball: {
		inherit: true,
		isNonstandard: null,
	},
	solganiumz: {
		inherit: true,
		isNonstandard: null,
	},
	souldew: {
		inherit: true,
		isNonstandard: null,
	},
	spelltag: {
		inherit: true,
		isNonstandard: null,
	},
	spelonberry: {
		inherit: true,
		isNonstandard: null,
	},
	splashplate: {
		inherit: true,
		isNonstandard: null,
	},
	spookyplate: {
		inherit: true,
		isNonstandard: null,
	},
	sportball: {
		inherit: true,
		isNonstandard: null,
	},
	staraptite: {
		inherit: true,
		isNonstandard: null,
	},
	starfberry: {
		inherit: true,
		isNonstandard: null,
	},
	starminite: {
		inherit: true,
		isNonstandard: null,
	},
	starsweet: {
		inherit: true,
		isNonstandard: null,
	},
	steelgem: {
		inherit: true,
		isNonstandard: null,
	},
	steeliumz: {
		inherit: true,
		isNonstandard: null,
	},
	steelixite: {
		inherit: true,
		isNonstandard: null,
	},
	steelmemory: {
		inherit: true,
		isNonstandard: null,
	},
	stick: {
		inherit: true,
		isNonstandard: null,
	},
	stickybarb: {
		inherit: true,
		isNonstandard: null,
	},
	stoneplate: {
		inherit: true,
		isNonstandard: null,
	},
	strangeball: {
		inherit: true,
		isNonstandard: null,
	},
	strawberrysweet: {
		inherit: true,
		isNonstandard: null,
	},
	sunstone: {
		inherit: true,
		isNonstandard: null,
	},
	swampertite: {
		inherit: true,
		isNonstandard: null,
	},
	sweetapple: {
		inherit: true,
		isNonstandard: null,
	},
	syrupyapple: {
		inherit: true,
		isNonstandard: null,
	},
	tamatoberry: {
		inherit: true,
		isNonstandard: null,
	},
	tapuniumz: {
		inherit: true,
		isNonstandard: null,
	},
	tartapple: {
		inherit: true,
		isNonstandard: null,
	},
	tatsugirinite: {
		inherit: true,
		isNonstandard: null,
	},
	terrainextender: {
		inherit: true,
		isNonstandard: null,
	},
	thickclub: {
		inherit: true,
		isNonstandard: null,
	},
	throatspray: {
		inherit: true,
		isNonstandard: null,
	},
	thunderstone: {
		inherit: true,
		isNonstandard: null,
	},
	timerball: {
		inherit: true,
		isNonstandard: null,
	},
	toxicorb: {
		inherit: true,
		isNonstandard: null,
	},
	toxicplate: {
		inherit: true,
		isNonstandard: null,
	},
	tr00: {
		inherit: true,
		isNonstandard: null,
	},
	tr01: {
		inherit: true,
		isNonstandard: null,
	},
	tr02: {
		inherit: true,
		isNonstandard: null,
	},
	tr03: {
		inherit: true,
		isNonstandard: null,
	},
	tr04: {
		inherit: true,
		isNonstandard: null,
	},
	tr05: {
		inherit: true,
		isNonstandard: null,
	},
	tr06: {
		inherit: true,
		isNonstandard: null,
	},
	tr07: {
		inherit: true,
		isNonstandard: null,
	},
	tr08: {
		inherit: true,
		isNonstandard: null,
	},
	tr09: {
		inherit: true,
		isNonstandard: null,
	},
	tr10: {
		inherit: true,
		isNonstandard: null,
	},
	tr11: {
		inherit: true,
		isNonstandard: null,
	},
	tr12: {
		inherit: true,
		isNonstandard: null,
	},
	tr13: {
		inherit: true,
		isNonstandard: null,
	},
	tr14: {
		inherit: true,
		isNonstandard: null,
	},
	tr15: {
		inherit: true,
		isNonstandard: null,
	},
	tr16: {
		inherit: true,
		isNonstandard: null,
	},
	tr17: {
		inherit: true,
		isNonstandard: null,
	},
	tr18: {
		inherit: true,
		isNonstandard: null,
	},
	tr19: {
		inherit: true,
		isNonstandard: null,
	},
	tr20: {
		inherit: true,
		isNonstandard: null,
	},
	tr21: {
		inherit: true,
		isNonstandard: null,
	},
	tr22: {
		inherit: true,
		isNonstandard: null,
	},
	tr23: {
		inherit: true,
		isNonstandard: null,
	},
	tr24: {
		inherit: true,
		isNonstandard: null,
	},
	tr25: {
		inherit: true,
		isNonstandard: null,
	},
	tr26: {
		inherit: true,
		isNonstandard: null,
	},
	tr27: {
		inherit: true,
		isNonstandard: null,
	},
	tr28: {
		inherit: true,
		isNonstandard: null,
	},
	tr29: {
		inherit: true,
		isNonstandard: null,
	},
	tr30: {
		inherit: true,
		isNonstandard: null,
	},
	tr31: {
		inherit: true,
		isNonstandard: null,
	},
	tr32: {
		inherit: true,
		isNonstandard: null,
	},
	tr33: {
		inherit: true,
		isNonstandard: null,
	},
	tr34: {
		inherit: true,
		isNonstandard: null,
	},
	tr35: {
		inherit: true,
		isNonstandard: null,
	},
	tr36: {
		inherit: true,
		isNonstandard: null,
	},
	tr37: {
		inherit: true,
		isNonstandard: null,
	},
	tr38: {
		inherit: true,
		isNonstandard: null,
	},
	tr39: {
		inherit: true,
		isNonstandard: null,
	},
	tr40: {
		inherit: true,
		isNonstandard: null,
	},
	tr41: {
		inherit: true,
		isNonstandard: null,
	},
	tr42: {
		inherit: true,
		isNonstandard: null,
	},
	tr43: {
		inherit: true,
		isNonstandard: null,
	},
	tr44: {
		inherit: true,
		isNonstandard: null,
	},
	tr45: {
		inherit: true,
		isNonstandard: null,
	},
	tr46: {
		inherit: true,
		isNonstandard: null,
	},
	tr47: {
		inherit: true,
		isNonstandard: null,
	},
	tr48: {
		inherit: true,
		isNonstandard: null,
	},
	tr49: {
		inherit: true,
		isNonstandard: null,
	},
	tr50: {
		inherit: true,
		isNonstandard: null,
	},
	tr51: {
		inherit: true,
		isNonstandard: null,
	},
	tr52: {
		inherit: true,
		isNonstandard: null,
	},
	tr53: {
		inherit: true,
		isNonstandard: null,
	},
	tr54: {
		inherit: true,
		isNonstandard: null,
	},
	tr55: {
		inherit: true,
		isNonstandard: null,
	},
	tr56: {
		inherit: true,
		isNonstandard: null,
	},
	tr57: {
		inherit: true,
		isNonstandard: null,
	},
	tr58: {
		inherit: true,
		isNonstandard: null,
	},
	tr59: {
		inherit: true,
		isNonstandard: null,
	},
	tr60: {
		inherit: true,
		isNonstandard: null,
	},
	tr61: {
		inherit: true,
		isNonstandard: null,
	},
	tr62: {
		inherit: true,
		isNonstandard: null,
	},
	tr63: {
		inherit: true,
		isNonstandard: null,
	},
	tr64: {
		inherit: true,
		isNonstandard: null,
	},
	tr65: {
		inherit: true,
		isNonstandard: null,
	},
	tr66: {
		inherit: true,
		isNonstandard: null,
	},
	tr67: {
		inherit: true,
		isNonstandard: null,
	},
	tr68: {
		inherit: true,
		isNonstandard: null,
	},
	tr69: {
		inherit: true,
		isNonstandard: null,
	},
	tr70: {
		inherit: true,
		isNonstandard: null,
	},
	tr71: {
		inherit: true,
		isNonstandard: null,
	},
	tr72: {
		inherit: true,
		isNonstandard: null,
	},
	tr73: {
		inherit: true,
		isNonstandard: null,
	},
	tr74: {
		inherit: true,
		isNonstandard: null,
	},
	tr75: {
		inherit: true,
		isNonstandard: null,
	},
	tr76: {
		inherit: true,
		isNonstandard: null,
	},
	tr77: {
		inherit: true,
		isNonstandard: null,
	},
	tr78: {
		inherit: true,
		isNonstandard: null,
	},
	tr79: {
		inherit: true,
		isNonstandard: null,
	},
	tr80: {
		inherit: true,
		isNonstandard: null,
	},
	tr81: {
		inherit: true,
		isNonstandard: null,
	},
	tr82: {
		inherit: true,
		isNonstandard: null,
	},
	tr83: {
		inherit: true,
		isNonstandard: null,
	},
	tr84: {
		inherit: true,
		isNonstandard: null,
	},
	tr85: {
		inherit: true,
		isNonstandard: null,
	},
	tr86: {
		inherit: true,
		isNonstandard: null,
	},
	tr87: {
		inherit: true,
		isNonstandard: null,
	},
	tr88: {
		inherit: true,
		isNonstandard: null,
	},
	tr89: {
		inherit: true,
		isNonstandard: null,
	},
	tr90: {
		inherit: true,
		isNonstandard: null,
	},
	tr91: {
		inherit: true,
		isNonstandard: null,
	},
	tr92: {
		inherit: true,
		isNonstandard: null,
	},
	tr93: {
		inherit: true,
		isNonstandard: null,
	},
	tr94: {
		inherit: true,
		isNonstandard: null,
	},
	tr95: {
		inherit: true,
		isNonstandard: null,
	},
	tr96: {
		inherit: true,
		isNonstandard: null,
	},
	tr97: {
		inherit: true,
		isNonstandard: null,
	},
	tr98: {
		inherit: true,
		isNonstandard: null,
	},
	tr99: {
		inherit: true,
		isNonstandard: null,
	},
	tyranitarite: {
		inherit: true,
		isNonstandard: null,
	},
	ultraball: {
		inherit: true,
		isNonstandard: null,
	},
	ultranecroziumz: {
		inherit: true,
		isNonstandard: null,
	},
	unremarkableteacup: {
		inherit: true,
		isNonstandard: null,
	},
	upgrade: {
		inherit: true,
		isNonstandard: null,
	},
	utilityumbrella: {
		inherit: true,
		isNonstandard: null,
	},
	venusaurite: {
		inherit: true,
		isNonstandard: null,
	},
	victreebelite: {
		inherit: true,
		isNonstandard: null,
	},
	vilevial: {
		inherit: true,
		isNonstandard: null,
	},
	watergem: {
		inherit: true,
		isNonstandard: null,
	},
	wateriumz: {
		inherit: true,
		isNonstandard: null,
	},
	watermemory: {
		inherit: true,
		isNonstandard: null,
	},
	waterstone: {
		inherit: true,
		isNonstandard: null,
	},
	watmelberry: {
		inherit: true,
		isNonstandard: null,
	},
	waveincense: {
		inherit: true,
		isNonstandard: null,
	},
	weaknesspolicy: {
		inherit: true,
		isNonstandard: null,
	},
	wellspringmask: {
		inherit: true,
		isNonstandard: null,
	},
	wepearberry: {
		inherit: true,
		isNonstandard: null,
	},
	whippeddream: {
		inherit: true,
		isNonstandard: null,
	},
	whiteherb: {
		inherit: true,
		onAnyAfterMove() {
			// Desync: proceed from Parting Shot's point of view
			this.queue.insertChoice({
				choice: 'event',
				event: 'WhiteHerb',
				order: 99, // before switches
				pokemon: this.effectState.target,
			});
		},
		onWhiteHerb(pokemon) {
			((this.effect as any).onStart as (p: Pokemon) => void).call(this, this.effectState.target);
		},
	},
	widelens: {
		inherit: true,
		isNonstandard: null,
	},
	wikiberry: {
		inherit: true,
		isNonstandard: null,
	},
	wiseglasses: {
		inherit: true,
		isNonstandard: null,
	},
	zapplate: {
		inherit: true,
		isNonstandard: null,
	},
	zeraorite: {
		inherit: true,
		isNonstandard: null,
	},
	zoomlens: {
		inherit: true,
		isNonstandard: null,
	},
	zygardite: {
		inherit: true,
		isNonstandard: null,
	},
};
