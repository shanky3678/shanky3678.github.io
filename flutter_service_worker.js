'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ff13d9b878701a3a842ee0c5b681514c",
".git/config": "326ae2365afcfdcf522604f5a22de2a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "65da84f910c6e002fedc474c75b08202",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ab9520ca6bb5020e2154e47bd766fdb",
".git/logs/refs/heads/main": "f2a2d1f92a476bc2e476b2e47c8e77fe",
".git/logs/refs/remotes/origin/main": "7f3eba06a381251c070ccc94ad18e6c1",
".git/objects/03/316e5cd1d4751c58c29ee403a22be6cdb07fcf": "3e27778f558763e45edda51d09562dac",
".git/objects/03/8259d9958ec86d143ce98a530ec657c4906ba5": "8a1d342c824e5beeb0aa08efdd072b41",
".git/objects/03/df23e29ad059d88e559d48bf5e2717870455f3": "934ebb274fc2f2e9b29376ff87743112",
".git/objects/07/8eae32b1dc59d52886d48ac42b997cdacdb3c6": "0e78539701a82466adb0165f8d20d006",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/0a/eaeb473e4b90cb8f5cfaf300362ab1f0a60665": "22c410e7a261e543914d4ab1be8a189b",
".git/objects/0d/0b7fd8fdc30b076bf243433b313dc5bb4f019a": "fc3fd55435db05e9c023a55601de1c8b",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/01225eb9ca94e52a95fe683b8cae6286d458b5": "73f720a01e1d26e56d18b6606cd72c46",
".git/objects/0f/cdd46f57adefeffd06b40aeba9d27bbdeba7d8": "09440042859bc552c8d6911b72c729f2",
".git/objects/17/7f659aa649fbb4ba6761ae0e745b170adf7a54": "0aff8f7a6e757a30635276ef18bb6152",
".git/objects/1a/8fe6413935ea635921bc35151bd3ea69c22e88": "19e60f5bc6222b1b9323c8f1c22f3eab",
".git/objects/1a/fcf4f6e3dcb8fcf871e71eec87c8e651cf9776": "d07b8fa412a32231a57142ad815ed713",
".git/objects/1c/6d9c9b62f1851ca6a454fc3455bb924b77b4be": "1c8843ec5841b577c0d6c088bbaa06ef",
".git/objects/1c/7fca523b68ec915846074f47d77d60cdc7c8fc": "00121e885fada9aa9cdce695a515366a",
".git/objects/1d/bae4be3a27249b0cab0c107325cc979b0c456e": "e710958e5531e6fad7e912ca135683fb",
".git/objects/1d/fdf610e9fbdf628c7e42d4eaab0d21c946bdc4": "8639157c260f0e9c61841af7c4ab0a4d",
".git/objects/22/12b4b10fe576ede1122f18923b2aa3c61b22e6": "976a84c6e3f25d82bbf2086e1c60cd69",
".git/objects/22/a66eac19c33c8dfe58da61425a5d4e1a925314": "9ad13871bf45cdc27fc618802aa0fe39",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/8453a731fe0c175a85174693defc0cf46ea849": "bd99a7e85e13bafd9a92af278121664c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/9ab8280f93d9985c754d693f9d0f493ace9b24": "677c291ef0ce246ba7181ee65fd862da",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/2360cb345d51295c9c986b4bd8caf214e2c248": "e237621c3b05cbafc8899a3810b31da9",
".git/objects/2c/c1698a5ecc8892955c09f242a75190878b96a2": "141f51d62c65c837fd890dc4620775d6",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/4e639b01fec8bc8f6eba255c384e9e76f3f745": "5e4c75d05e9247033db5a5c8abcc7ac1",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/30/c364c16b6e291a1caeae5af0b48c6dde09adbc": "3331708e4fd73d53df4e541c55705c77",
".git/objects/34/828303b7ebe0430f3904bf12021f8ab8477a8b": "44e9044bfd8c147ddb14ea19c5eec30b",
".git/objects/36/f93b4c3f94cea2fdb3d173c255efcc3df5dbed": "d385580a26aa32475568401448410add",
".git/objects/38/7ce3d0b56f9434f458f424d9022a95bce4a388": "93be57fcee059ea1b42ed00d03d9fb36",
".git/objects/39/44df4bcc5cdfdfb644e0c3e439280cac7ec69e": "cb62d6bd1d9b7adb02942f4dedc77edf",
".git/objects/47/ec5e56d8dfe1568b4e31c3f60ce2773f8961c3": "ed629d3ba3b7c6fbd1a27e29bc386a62",
".git/objects/49/2bbc07baa2a68b2edbb27948eca1294b9d7024": "3ec9a3d8c3d413e9dcc6a6a8095ca151",
".git/objects/4a/040d053504a62506a54186004f2b312975e37b": "79d12268999aed6b277c388041c9cd5a",
".git/objects/4c/3e2471ce187ab976cb53ebfb372c16854c347c": "d6a3716fe4ddac9c3cd03850633671bc",
".git/objects/4d/0c4a8925092f6c8ec0062b771c3f0262c65498": "8cd8ce8de60059b41834666ba61eb217",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/1f18d4568cb5504f58df54e530cace87590397": "6e3c8c5d5339f33efefa7dcbfb1991a2",
".git/objects/51/288e7696692914a9dd145307ec40bcbb2a5c15": "889a6f7c15d2a4f7160da96d2359c480",
".git/objects/51/904f27059e5029f92adb1b9a20331f3073852d": "61c74ac9b132519ba902918c31d04cb6",
".git/objects/51/a8df591b09ff9b863318f62682d3a4e1af8cc7": "c09a36c70dd2fa06b6612968699a0120",
".git/objects/56/360dbc56dd3d8f443cf0c63a63051d27054303": "cfedb8f6f55ef4a3d47cbfa91e70fc13",
".git/objects/5c/fbae1e414394d37f4b9e665ffba2852e7ac138": "eff1a99b44cd3e31fba44b70349430d8",
".git/objects/5d/f258bdbfd1edd2c76898b9842f40432f22508d": "bc5e5d361a8e33d7004d12696982c2df",
".git/objects/61/1943c59a60b76c9a4815055eda4dd56fa8f513": "fcf81c1326235cff10013ead90305931",
".git/objects/61/25401ce154ceecb8f7bc3a9602c14f405a94fe": "2b8141025e72859d6f41b0cd5d0919c9",
".git/objects/61/4620aab3b945950b74207de98c42fd4ec353b5": "0b2efeeb6109fb6b69e5d1a953f70c39",
".git/objects/62/4604467e9c059a4d865023fb3d7deb3bfe5999": "263c141491183950f7a1d5249009e88d",
".git/objects/68/214df23de23ae9f6b5ae8af3ad99edc2416173": "0a6b19d272d319e6bdc402b0c7c4f822",
".git/objects/69/37953cc28957d54eff031211d3584569d8990d": "9353e3709d193d328b5ff3da224a2404",
".git/objects/69/460be760a21580c63358fc81d43713b29a1112": "e079318760bea68bf4c56b8533a7871a",
".git/objects/6a/cc6f94048e14e799869628cdc842fb457e770d": "0f0869cdfc3586b64c50b18e13a51b68",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6d/5d65048581e2b1a3526942f892866f7ee26fec": "fc6719b161df1a5fc1643310c1db5593",
".git/objects/70/7e99d7bac5143fe506ea5d42789fce8e25760e": "f1e6526426e2147a728c45f3e4ca25c7",
".git/objects/71/0d1693c3bb457b7377eeaec32880a1b007af9b": "91eb2972e1419a37ffa9c1a3d03226ff",
".git/objects/74/5dee627540c0ca42d25aa1f7ba6ec1fa5f2b46": "02480c36622c96e3d2f13db3e0bdecf8",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/ef4252fb1953517ef81d625c482735c55ff0d2": "86b6f896a94fa639d1187c37380db94e",
".git/objects/77/e58760cbcba27e78c6739607c83aa56f55f9ed": "e3a854772bddd6793f54067b2b9bea5b",
".git/objects/79/18e307941ee4119f02b4a4a7b39b533949893c": "7ca7ed10932957a95209ef30a2f00e9a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/7a2bdb95b8328d9e6e4faba7d3b155cbfb7819": "d9215d6993f2bbfec64dfeb8c2f31845",
".git/objects/7e/3d21a36437cc8a03c7c5ce534b63e5d0ceb994": "9d0030782c33b18c1b0df0d90f0b18b9",
".git/objects/7f/945b5d48b24296e86eccc8b544953e6373d00a": "d31e0dc1adcf0bd684a4824cd72ff447",
".git/objects/83/ac3760e9a3f9f3ed9997163d00beeff5f73346": "fd8d2282ce8768f2a3921e641964dea1",
".git/objects/84/20bbc43f83d949c2229822c12d2c7e957b35bd": "c46c738c91bcfe1cdd155466cfb2070f",
".git/objects/86/72d20ed55cac6eaaf1897467ff5437d9532dc9": "37f7eb2c893a02bd68330753aaf0a6d8",
".git/objects/87/1d9cdca85f48ed908804384a0277be15375ae1": "1bd18d0a3edf718c4c5a880afd663fd9",
".git/objects/88/1443c36a1d0c7efa56418c1471a18a4a48e440": "8d4c72e7f9ffed52d5175cabec963b12",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c7d9a86547fc67946462d02c8aaf380f75e97c": "344ca30a816936e8fb7154843c032fc3",
".git/objects/89/dd6749fc1c375730509b6bf283e60fd3a1b38f": "6c8f3012083caaeda76bf9044e4deef4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5e21602c0430d1af76cf634cfa73ac55daf4d8": "3339c4966f9e53c51a05721e61a463c5",
".git/objects/8e/c81e8bb1046b657ebb0d42bdd5f121b27d0bcf": "a404ff8a8d0b042a0d88ece97c3aae17",
".git/objects/8f/b5f9a74527892ee237b92b572e41356d2313c8": "06c9b9db6321c006af1a41abdd6d17a9",
".git/objects/90/2a9cf2a36d71d285a41166d2c931a8b8b38850": "c0a00dbcfcaaade47ede10c1b1912bea",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/92/01f9c334c835330fb95fba802dbf7f1fab6713": "eedca21bdc9ea858b36426014ac41130",
".git/objects/92/0520937fe20f4d86242b65d61fa615a12bd2b4": "f0b6076635eb6e8d5543461e67d0c1c8",
".git/objects/92/a1305baeed00230fd920b4e2bbe6884a3fcb83": "5837c549fb99bc48cb7489696c6521d5",
".git/objects/93/632fba005a7de74cb827d4313b9d38dce57c65": "306ecd58a406fc084b2ca9be6ba25d6d",
".git/objects/94/0342527ac279bb2bf5db9d3d096e9e2f6d4b97": "de8770f7c9f6a1fd90a1c0ca7d3cb2a1",
".git/objects/94/26aa6d4478264508501ecb34aeafae35da6494": "6ac8107a92ab1387c0b3707aca3fcebc",
".git/objects/97/b3a69e798fa2736da2910a17ea19534268a1c5": "8bfbac4af00932cf1eb3f5520d5b5e9d",
".git/objects/98/8dcffe84724d6127df05da66535a19f2e8fc47": "25fcf62ae8e830a5404f6134d3282171",
".git/objects/98/944d26004d74e217ce6a6da30b4179661cdbd5": "d09e08e54e33cc95aaf90b9affaf8190",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/eb86467f144af1c151fb83e5bfbfc8bdc18b57": "88893be023fe41d4a86993ef2c6a8717",
".git/objects/9d/70865b094d6c61cacc05daeed5daee0669c7a3": "0810cd08995d0d56a45926f070a1b1a2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ab6bf71b987168f8e342253d43c31180af84e5": "40072984cf975ade4ac22fa514f89d40",
".git/objects/a2/12c95091771ed3c289394d08aedeaaafc59e86": "70f923b40e687c7ebbaa0ad186e6ebf6",
".git/objects/a5/0f63296359183a79aec747244fa1185c27b860": "a7456215e69f7f5f9349266360b2a3f8",
".git/objects/a5/7b2e999045a185f28ba211643f8d4535057e30": "018219273c065162f9d3d7b8d5dafdb2",
".git/objects/a7/02b3fb9a48f63259d083f313172a15bdee2df8": "b36dd011ebd5101d77c6959ab902898d",
".git/objects/a7/7b15ece6d2005baa877bb268605bcdb8d22adb": "76da9e5e6d4307cc7dd98ba83631d3a4",
".git/objects/a8/089d48ac0bbf7b90af30f1cea43b9380fb2e44": "546f38590ab792acd29a0df054b71924",
".git/objects/aa/7cc029082ba129b8a7ecbac0e7d3a396466c51": "f03c79c10e0f4c2bf6eca1bb511eb632",
".git/objects/ac/75f42877752b7e2ebe1b625c2c8d72741db10e": "75c00d0eb1a20a05029c0bb630a73290",
".git/objects/ac/e13bb98e3dbd12be7f65226d329996f7d8aac1": "8a94acfec5529eb7db769e7de1ae7688",
".git/objects/b4/10b27caebb09c22a561dd9508864829157f3ad": "699dca89003630940a63c7f80b9655c1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/52216cb0d66362360dfba633047107a4b18186": "bf3687527819272c7bb057996734f59c",
".git/objects/bd/6f3b02e5978c69a85ca0a071c8808d7ca11e56": "33097d26ca9af917b2f82a89a88251ad",
".git/objects/bd/cce9bb876c91b19586f8240d63b8082fd9cdfe": "9a26198a4672f8ce7fe026db5bfc17db",
".git/objects/bf/310849c93749131f16834b839a0e0a8d76cbba": "97a955a456905549c65c75ce1eb96546",
".git/objects/bf/7d9257a4e113ff824fc5eaea2cd64cfe48cab4": "73f565104845037c88c50641f7d96474",
".git/objects/c1/bb0d46325c1824008b666cf1ec9f765105ef47": "569f66e3f16b26b1425b2f5e30acf9ad",
".git/objects/c8/0435aa53621fa8f56c2db9636bdbe1a98f1efb": "071dea0ad6a1d8cb8bf29f5080bf0e5d",
".git/objects/cb/32c6d2f05f2628c57ae38401b33293a8ceddf1": "cffbd861ad5de245d3d06bd7fecebec4",
".git/objects/cb/8167638ba7f661f37c3f16bcf9b17d65c40302": "25b12e3064ddc0f6e6f94597abe00924",
".git/objects/cc/5798a0f3eb6693577974cd1420bedadb427ea5": "85e6910ff85ee9fc8df508708259bcd8",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/e49a3c79f1efc60eb572df04267a638f95c153": "385b625d6e14a641af001266cc3d1659",
".git/objects/d2/c98974d43ca850c80569a3bc8937b4a1f0e0a0": "e3b691544c0ce292bd2b0bcd586bfdfb",
".git/objects/d2/e92a6818cd0b93caa07c6424e792cfae72b22f": "939d36282ddc3eb596d9ce71bb4591eb",
".git/objects/d4/1437b99e62455d3c377a693c1eca5ba8505b7f": "9553e03344b770ad0280f1679afc6930",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e867576001e5f941ec581ac8f903743ce3535c": "c762cd33868feb6d4b4791a2048b0ccb",
".git/objects/d7/03d961d7d8b893e558b6bad911e0774ea7b6d0": "e0d8f29bcd81021d4c0562a1bfadb810",
".git/objects/d9/a054b674d54d8fa8d94764798841324f328037": "d75c7c634ec2c91eb9ca2ae308766082",
".git/objects/dc/5792e019531e72bdc23aa7c4bdd4b0d8de4698": "bbad001fcedc472544718fe1d4c438e2",
".git/objects/dd/2a4e6165cab8f270522b166cca5930657d42e5": "c0475392f225ec8a53c0b5b51715310e",
".git/objects/dd/e0d42502e4bfba5848d130cde9c76b8be6017f": "ab6d80b56d5a7c8ebe96c4534798028d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/fff0551445879c4fcd7cc4659b5d2339a58162": "2dfc38710ef4348fd3ac9d82df7f0201",
".git/objects/e0/1fc60522c59410c95a5187ea79d82af4affca2": "e004386c2eea62306f8af1b123218ede",
".git/objects/e3/9297ceca5da9bb53be893739dedca35ebc6ad5": "e3e931dc9050417fdacb22f474e3af89",
".git/objects/e3/aade74f327e2b0cb2bf93ad191194e38913955": "fd32483143f84b402705bf651cdec122",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/7dc947b27fc1cd27dfa8b8cdda9f9e1efe4ee2": "1bce6928cb7f6fd5789497effb1dce37",
".git/objects/ed/9e95a7b17240e8cebefb3c1ea91c37e944785d": "e1c4515e5a4491c9b7b1e62ecd4a48c3",
".git/objects/f0/6f88c0811baedfa6bff22741228cfe63236bc2": "7ae564415a90347f256c2ab9b8798a68",
".git/objects/f1/37c402a309dd257347034e90b47c73fccacd4f": "6502bb22db32b6899ebd1dacfb194e16",
".git/objects/f6/08f761ed14bbd1a763a61f642c8d5e447eadad": "b480364655a2a8afdacc7c8989e0e4d7",
".git/objects/f6/b73e6401586ded3474bb2d4e0a86a76dfac4b0": "5831ec3e0e1a75a84fe5160af0948bdc",
".git/objects/f7/573445df119d32848d7a308108d243c42d78b2": "d2f2dbf200bb431c6cfd7700635e5df4",
".git/objects/f7/ce7ba76c136cd93528ac7b4101fa28f4d44393": "a4f35317d4a9fc141dbfc104882e0b99",
".git/objects/f8/63b6033d500ebe974c51ec479e5ca2fbf3e41b": "605df5f9a09c8732ba6d1de344f6a965",
".git/objects/f9/6733217ae4bda17747b23eb83ecafa4fe6d9e6": "aa49405d7f2c935a020a2187c1feddfe",
".git/objects/f9/acfb9add617e2d7a300a4bb9f1162f19fbe8db": "0146e01f93875c1ff3b92f71106cb50c",
".git/objects/fa/3ad37dc37fe84e0e82120625f144e6795a1e79": "7da442f80ddf7432849104f74f6697db",
".git/objects/fa/91732c9ca1ac0e8e0c0316cce2c2447ffcc768": "63f9fe610b025667b4eab2eed61751bc",
".git/objects/fa/e5fdc7497f907edf5b82ae9be26b94880caaf3": "610a20f3486b5d83934258553816475f",
".git/refs/heads/main": "7ed6b350fee1da67f4b08de6e353e591",
".git/refs/remotes/origin/main": "7ed6b350fee1da67f4b08de6e353e591",
"assets/AssetManifest.json": "6de4804faf0f255a6bdac6c5baaf4f94",
"assets/assets/images/3d1.png": "443f1fd7498f1e4ea29d8bcf20374db2",
"assets/assets/images/3d1.svg": "5efaa549ac15e87ee3437f568d2fa0b6",
"assets/assets/images/404.json": "0306cb9c22346d7e5076e34f6839f7cf",
"assets/assets/images/cat.svg": "d87ab360ac1f5610836d9780b85c63c3",
"assets/assets/images/cupcakepreview.png": "62ca31ce32ebaa94c4cada828d32f975",
"assets/assets/images/facebook.png": "01afaa697e7c758f5f469689813e88ba",
"assets/assets/images/file_icon.png": "8370aed58ce896502bf486afa4b2165c",
"assets/assets/images/gameImage.png": "446d38b6bd24f406ebf05f8f0c2d347f",
"assets/assets/images/get_paid.png": "9387f186f68f96ed4099bd52e7accc47",
"assets/assets/images/gift_banner.png": "e2584bb65cd10243cce1b8484d372d34",
"assets/assets/images/instagram.png": "96d5e245016c21de0b3a1694f8e61f4a",
"assets/assets/images/intro.png": "fa55dcb2146d871a1afbbe6a49c39a2a",
"assets/assets/images/logo.png": "499f7ecc2921707953f8f085459b3077",
"assets/assets/images/logo2.png": "5b43b3263025d34c12da15bd85b7bb2b",
"assets/assets/images/logo_watermark.png": "b095e505a118664b2fc80e647bb618df",
"assets/assets/images/Mask%2520Group.png": "1928cc7e14f4ca21beba0f7d12a09175",
"assets/assets/images/message_logo.png": "8b4cb83162aa92ec19c48da981ad1f23",
"assets/assets/images/new_stream.png": "99c494a5d156de6f048041752da75015",
"assets/assets/images/no_message.png": "b18d1af93aaa0b67913ff3b058a49577",
"assets/assets/images/no_notification.png": "5cba4c7cdbab832532ff7b487c512df3",
"assets/assets/images/person.svg": "e0364df45cc5b3f0f2f235ab14add9bb",
"assets/assets/images/profile_background.png": "b8fb45fd6582a1f414f976a51f85536f",
"assets/assets/images/profile_background.svg": "7526a4131ec9c5de266215dd56ff83bd",
"assets/assets/images/rank1.png": "344d8ad947dbb17773f751792c9a8a2e",
"assets/assets/images/rank2.png": "9cd76e7f00b810646c884e0c7d54eb45",
"assets/assets/images/rank3.png": "ad20a907e953e4fd23005dbbfa2a929d",
"assets/assets/images/rectangle.svg": "a33c49365e7b81008266b87ecf48383c",
"assets/assets/images/snapshot_profile.png": "2f7b91d43b78568844a5e74d4cb79705",
"assets/assets/images/step1.png": "38b96c04550a2a20d6e5282e20f90fef",
"assets/assets/images/step2.png": "dd4d4c0a80a39316a8c685faf0ba2f3a",
"assets/assets/images/step3.png": "e435f78ccd30a63ecbdbc795966e958f",
"assets/assets/images/step4.png": "a18a81c949b6824038115d62d457d213",
"assets/assets/images/twitter.png": "91cd58ddbe5aeee50838fc29f2f9ec1c",
"assets/assets/images/Vector.png": "ab75c7b15db884cb7fb74e7ab7533f91",
"assets/assets/images/verification_in_progress.png": "2603bd896526b4cb41e63c2a9fa94be0",
"assets/assets/images/website_image1.png": "0cb00f1ea2e04ecd15f1fdb6a8891f31",
"assets/assets/images/website_image2.png": "efa1cd7cfd9232ca6dc2c0ef43e62fc1",
"assets/assets/images/website_image3.png": "e9fdb553be0edd248838f739f434ac86",
"assets/assets/images/website_image4.png": "18281da6eda98de73988a9f28f493070",
"assets/assets/images/website_image5.png": "278ed5bd7f31949ddbb75732dc892069",
"assets/assets/images/website_image6.png": "b6398f7bda4ade03070126274ee3a687",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "6ef22aa0d4f9d1edc01faf9c9c79ab33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/shaders/ink_sparkle.frag": "766c8cc582887d79fd06bb0d7caf09e0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a83c1005aaf4709dea27071e6cfbe133",
"/": "a83c1005aaf4709dea27071e6cfbe133",
"main.dart.js": "e5c585f21afc150c4e723bcd1ba7fe72",
"manifest.json": "3c32ce71df2afb901b24f5e5bdf0c374",
"version.json": "9e1a62f678557824a4785b98fb8cd1e1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
