//Silly Sentences Game.
let goButton = document.querySelector("#startGo").addEventListener('click', go);
let namesButton = document.querySelector("#names").addEventListener('click', getNames);
let sillyMessages = document.querySelector('#sentencesMessage');

let names = [];

const verbs = ["buys", "rides", "kicks","bites","cuddles","sells","argues with","assists", "attacks", "avoids", "bakes","becomes",
    "borrows", "breaks","builds", "calls","carries","catches", "cleans", "climbs", "collects","cooks","copies", "creates", 
    "dances with", "delivers","describes", "designs","discovers", "discusses", "draws","drops","eats", "escapes", "examines", "expores",
    "feeds", "fights", "finds", "flies", "follows", "freezes", "gets", "handles", "hangs", "hears", "helps", "hides", "hides from",
    "hugs", "imagines", "identifies", "ignores", "invites", "joins", "jumps", "keeps", "kisses", "laughs at", "lifts", 
    "listens to", "looks at", "loses", "makes", "meets", "mentions", "moves", "names", "needs", "notices", "obeys", "observes", "obtains",
    "opens", "orders", "owns", "organizes", "paints", "pays", "picks", "plays", "protects", "pulls", "pushes", "questions", 
    "receives", "recognizes", "remembers", "requests", "returns", "runs from", "sees", "shouts at", "sings with", "sits with",
    "smiles at", "speaks to", "stands with", "studies with", "supports", "swims with", "takes", "talks to", "teaches", 
    "throws", "touches", "turns", "visits", "waits for", "walks with", "wants", "watches", "wins", "wishes for", "writes about",
    "yells at", "zooms in on",
];
//spaces added to accomodate vowels to change a to an with a,e,i,o,and u.
const nouns = [" lion"," bicycle","n aeroplane"," fridge"," walrus", " football",' horse',' rabbit',' spider',' giraffe',
    ' penguin',' dolphin','n octopus',' hamster',
'n ocelot',' walrus',' beaver',' jaguar',' panther',' zebra',' marmot',' parrot',' bobcat',' gazelle',' warthog',
' caribou',' gopher',' badger','n orangutan','n ostrich','n otter',' piranha',' flamingo',' gorilla','n elephant', 
'n alligator', 'n alpaca','n apple','n airport','n artist','n elephant','n engine','n egg', 'n antelope','n armadillo', 
' baboon',' barracuda',' bat',' bison',' boar',' buffalo',
' butterfly',' camel',' capybara',' cat',' caterpillar',' cheetah',' chicken',' chimpanzee',' chinchilla',' cobra',
' cockroach',' cougar',' cow',' coyote',' crab',' crocodile', ' crow',' deer',' dog',' donkey',' dragonfly',' duck',
'n eagle','n eel','n elk','n emu',' falcon',' ferret',' finch',' fish',' fox',' frog',' gazelle',' gecko',' goat',
' goose',' grasshopper',' hare',' hawk',' hedgehog',' heron',' hippopotamus',' hummingbird',' hyena','n ibis',
'n iguana',' jackal',' jellyfish',' kangaroo',' kingfisher',' koala',' kudu',' lemur','  leopard',' lion',' llama',
' lobster',' lynx',' macaw',' manatee',' mandrill',' meerkat',' mole',' monkey',' moose',' mouse',' narwhal',
' newt','n opossum','n owl','n ox',' panda',' peacock',' pelican',' pig',' platypus',' porcupine',' pufferfish',' quail',
' raccoon',' ram',' rat',' reindeer',' rhinoceros',' rooster',' salamander',' scorpion',' seahorse',' seal',' shark',
' sheep',' skunk',' sloth',' snake',' sparrow',' squid',' squirrel',' starfish',' stingray',' swan',' tiger',
' tortoise',' toucan',' tuna',' turkey',' turtle',' vulture',' warthog',' weasel',' wallaby',' whale',
' wolf',' woodpecker',' wombat',' yak', ' ball', ' banana', ' book', ' bottle', 
' cat',' car', ' chair', ' city', ' dog', "doctor", ' door',' farmer', ' fish',' flower',' gift',' hospital','n island',
'n idea',' jacket', ' garden', ' girl', ' glass', ' house', ' hat', ' hospital',' jacket', ' jewel',
' key',' kitchen', ' kite', ' lamp', ' letter', ' library', ' man', ' map',' market', ' mountain', ' necklace', 
' notebook','n ocean', 'n office','n orange',' paper',' pencil', ' picture', ' plant',' question', ' quilt', 
' rabbit', ' radio', ' river', ' school', ' shirt', 
' shoe', ' star', ' table', ' teacher', ' telephone', ' television','n umbrella','n uncle', ' village',' tree',' van', 
' vegetable', ' wall', ' watch', ' window', ' xylophone', ' yacht', ' yard', ' yogurt', ' zoo','n acorn','n actor', 
'n apartment','n arrow', 'n envelope',' balloon', ' bank', 
' beach', ' bridge', ' candle', ' castle', ' cloud', ' dancer', ' desk', ' drum', ' feather', ' fence', 
' flag', ' forest', ' game', ' goat', ' guitar', ' hammer', ' hill', ' hotel','n insect', 'n iron',  ' jungle', 
' jury',' knife', ' ladder', ' leaf',' movie','n onion','n oven',' queue',' rope', ' ship', 'n university','n urn',
' lake', ' moon', ' motorcycle', ' needle', ' nest', ' newspaper', ' park', ' pear', ' pillow', ' pizza',
' robot', ' rock', ' shell', ' suitcase', ' tent', ' ticket', ' towel',' truck', ' vase', ' violin',' x-ray',' yarn',
' viola', ' cello', ' double Bass', ' waterfall', ' wave', ' wheel', ' whistle', ' zipper', ' baby', ' bell', 
' brush', ' bus', ' cage', ' cup', ' dice', ' doll', ' fan', ' fence', ' fork', ' king', ' queen', ' princess', 
' prince', ' phone', ' writer', 'n alarm','n anchor','n ant',' box',' dance',' frog', ];


let sentenceRefresh = document.querySelector('#sentenceRefresh').addEventListener('click', sentenceRefreshEvent);


function getNames(){
    let inputName = document.querySelector('#nameInput').value;
    names.push(inputName);
    document.querySelector('#nameInput').value = '';
}


function go(){
    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    sillyMessages.textContent = randomName + " " + randomVerb + " a" + randomNoun;



}

function sentenceRefreshEvent(){
    names = [];
    sillyMessages.textContent = "Please add names."
}