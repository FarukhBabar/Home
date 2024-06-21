import express from "express"
import { Free, DAta, Delitem, PalletDAta,Cont,LoundryDAta,LoundryFree,LoundryDelitem,Loundrysingl,IroningDAta,IroningFree,IroningDelitem,Ironingsingl,AirersFree,Airerssingl,AirersDelitem,AirersDAta,TablewearDAta,Tablewearsingl,TablewearDelitem,TablewearFree,DisposibleDAta,DisposibleDelitem,Disposiblesingl,DisposibleFree,Drisingle,ShowheadDAta,ShowheadDelitem,Showheadsingl,ShowheadFree,Bathacesssingl,BathacessDelitem,BathacessFree,BathacessDAta,Bathmatessingl,BathmatesDAta,BathmatesFree,BathmatesDelitem,ShowerDAta,ShowerFree,ShowerDelitem,Sowersingl,MirorDAta,MirrorrFree,Mirrorrsingl,MirrorDelitem,BathdeDAta,BathdeDelitem,Bathromdesingl ,BathdeFree, Electricalsingle,delcont ,newsingle,Foodssinglepage, palletsing,Bathromsingl,Lightersingle, PalletFree ,ElectricalDAta , BathDelitem, BathDAta, BathFree,SmokinDAta, SmokinFree, SmokinDelitem, ElectricalDelitem,ElectricalFree ,PalletDelitem, NewDAta, NewFree, NewDelitem, FoodDAta, FoodFree, FoodDelitem, DriDAta, DriFree, DriDelitem, LighterDAta, LighterFree, LighterDelitem } from "../Controller/Gettingdata.js"
import { BatteriesDAta,FirstaidDAta,FirstaidFree,FirstaidDelitem,Firstaidsingl,StvDelitem, BatteriesDelitem, ObsticalDAta,ObsticalDelitem , ObsticalFree , Obsticalsingl, BatteriesFree , Batteriessingl,PhoneDAta,PhoneDelitem,PhoneFree,Phonesingl, ElectricFree, ElectricDAta, ElectricDelitem, Electricsingl, ApronsDAta, ApronsFree, ApronsDelitem, Apronssingl, BeddingDAta, BeddingFree, BeddingDelitem, Beddingsingl, ClothingDAta, ClothingFree, ClothingDelitem, Clothingsingl, FreshnerDAta, FreshnerFree, FreshnerDelitem, Freshnersingl, AkonobolDAta, AkonobolFree, AkonobolDelitem, Akonobolsingl, ClockDAta, ClockFree, ClockDelitem, Clocksingl, CameraDAta, CameraFree, Camerasingl, CameraDelitem, DigitalDAta, DigitalFree, DigitalDelitem, Digitalsingl, CookwareDAta, CookwareFree, CookwareDelitem, Cookwaresingl, CrockeryDAta, CrockeryFree, CrockeryDelitem, Crockerysingl, DinnerDAta, DinnerFree, DinnerDelitem, Dinnersingl, RentokilDAta, RentokilFree, Rentokilsingl, RentokilDelitem, StvDAta, StvFree, Stvsingl, CottonDAta, CottonDelitem, Cottonsingl, CottonFree, BabyDAta, BabyFree, BabyDelitem, Babysingl, FreshnFree, FreshnDAta, FreshnDelitem, Freshnsingl, CarDAta, CarFree, CarDelitem, Carsingl, BleechDAta, BleechFree, BleechDelitem, Bleechsingl, BakewareDAta, BakewareFree, BakewareDelitem, Bakewaresingl, BarewareDAta, BarewareFree, BarewareDelitem, Barewaresingl, BirdsDAta, BirdsFree, BirdsDelitem, Birdssingl, CatDAta, CatFree, CatDelitem, Catsingl, BabeyDAta, BabeyFree, BabeyDelitem, Babeysingl, KidssDAta, KidssDelitem, Kidsssingl, KidssFree, BBqDAta, BBqFree, BBqDelitem, BBqsingl, BirdcareDAta, BirdcareFree, BirdcareDelitem, Birdcaresingl, BaloonDAta, BaloonFree, BaloonDelitem, Baloonsingl, PumpsFree, PumpsDelitem, Pumpssingl, PumpsDAta, BannerDAta, BannerFree, BannerDelitem, Bannersingl, CrystalDAta, CrystalFree, CrystalDelitem, Crystalsingl, CakesDAta, CakesFree, Cakessingl, CakesDelitem, FurnitureDAta, FurnitureFree, FurnitureDelitem, Furnituresingl, MatesDAta, MatesFree, MatesDelitem, Matessingl, CandelDAta, CandelFree, CandelDelitem, Candelsingl, STDAta, STFree, STDelitem, STsingl, FoodconDAta, FoodconFree, FoodconDelitem, Foodconsingl, kidsplasDAta, kidsplasFree, kidsplasDelitem, kidsplassingl, SportsDAta, SportsFree, SportsDelitem, Sportssingl, FlaskDAta, FlaskFree, FlaskDelitem, Flasksingl, ArtcraftFree, ArtcraftDAta, ArtcraftDelitem, Artcraftsingl, BooksDAta, BooksFree, BooksDelitem, Bookssingl, BrushwareDAta, BrushwareFree, BrushwareDelitem, Brushwaresingl, DusterDAta, DusterFree, DusterDelitem, Dustersingl, ArtificalDAta, ArtificalFree, ArtificalDelitem, Artificalsingl, BouquetsDAta, BouquetsFree, BouquetsDelitem, Bouquetssingl } from "../Controller/Gettingsecond.js";

import { CandelesDAta, CandelesFree, Candelessingl, CarpoDAta, CarpoFree, Carposingl, CraftpoDAta, CraftpoDelitem, CraftpoFree, Craftposingl, DisposiblDAta, DisposiblDelitem, DisposiblFree, Disposiblsingl, DiytoolsDAta, DiytoolsDelitem, DiytoolsFree, Diytoolssingl, FoodpoDAta, FoodpoDelitem, FoodpoFree, Foodposingl, HoiseryDAta, HoiseryDelitem, HoiseryFree, Hoiserysingl, HouseholdclDAta, HouseholdclDelitem, HouseholdclFree, Householdclsingl, HouseholdprDAta, HouseholdprDelitem, HouseholdprFree, Householdprsingl, KitchenwearpDAta, KitchenwearpDelitem, KitchenwearpFree, Kitchenwearpsingl, LightergasDAta, LightergasDelitem, LightergasFree, Lightergassingl, LoundryironDAta, LoundryironDelitem, LoundryironFree, Loundryironsingl, PestconDAta, PestconDelitem, PestconFree, Pestconsingl, PotoyDAta, PotoyDelitem, PotoyFree, Potoysingl, ReadingDAta, ReadingDelitem, ReadingFree, Readingsingl, ShoeDAta, ShoeDelitem, ShoeFree, Shoesingl, StationeyDAta, StationeyDelitem, StationeyFree, Stationeysingl } from "../Controller/Pondlinegetting.js";
import { BagslDAta, BagslDelitem, BagslFree, Bagslsingl, BasketstDAta, BasketstDelitem, BasketstFree, Basketstsingl, GlovesDAta, GlovesDelitem, GlovesFree, Glovessingl, LuggageDAta, LuggageDelitem, LuggageFree, Luggagesingl, MopsDAta, MopsDelitem, MopsFree, Mopssingl, SpongeDAta, SpongeDelitem, SpongeFree, Spongesingl } from "../Controller/cleaningmatterial/Cleaninggetting.js";
import { BarrientDAta, BarrientDelitem, BarrientFree, Barrientsingl, BartolinDAta, BartolinDelitem, BartolinFree, Bartolinsingl, BirbrandFree, BirdbrandDAta, BirdbrandDelitem, Birdbrandsingl, BlackDAta, BlackDelitem, BlackFree, Blacksingl, BonitDAta, BonitDelitem, BonitFree, Bonitsingl, BostikDAta, BostikDelitem, BostikFree, Bostiksingl, BriwaxDAta, BriwaxDelitem, BriwaxFree, Briwaxsingl, BrookDAta, BrookDelitem, BrookFree, Brooksingl, CarplanDAta, CarplanDelitem, CarplanFree, Carplansingl, CarproDAta, CarproDelitem, CarproFree, Carprosingl, ChomisDAta, ChomisDelitem, ChomisFree, Chomissingl, CommandDAta, CommandDelitem, CommandFree, Commandsingl, CoralDAta, CoralDelitem, CoralFree, Coralsingl, CrownDAta, CrownDelitem, CrownFree, Crownsingl, DarperDAta, DarperDelitem, DarperFree, Darpersingl, DektonDAta, DektonDelitem, DektonFree, Dektonsingl, DemsumDAta, DemsumDelitem, DemsumFree, Demsumsingl, EdcoDAta, EdcoDelitem, EdcoFree, Edcosingl, EverDAta, EverDelitem, EverFree, Eversingl, ExitexDAta, ExitexDelitem, ExitexFree, Exitexsingl, FitDAta, FitDelitem, FitFree, Fitsingl, GasDAta, GasDelitem, GasFree, Gassingl, GlobalDAta, GlobalDelitem, GlobalFree, Globalsingl, GorilaDAta, GorilaDelitem, GorilaFree, Gorilasingl, HagesanDAta, HagesanDelitem, HagesanFree, Hagesansingl, HardwareDAta, HardwareDelitem, HardwareFree, Hardwaresingl, HarrisDAta, HarrisDelitem, HarrisFree, Harrissingl, HilkaAta, HilkaDelitem, HilkaFree, Hilkasingl, HumnrolDAta, HumnrolDelitem, HumnrolFree, Humnrolsingl, JbwelDAta, JbwelDelitem, JbwelFree, Jbwelsingl, KilrockDAta, KilrockDelitem, KilrockFree, Kilrocksingl, LadderDAta, LadderDelitem, LadderFree, Laddersingl, LocktileDAta, LocktileDelitem, LocktileFree, Locktilesingl } from "../Controller/Diy/Diygeeting.js";
import { LynwoodDAta, LynwoodDelitem, LynwoodFree, Lynwoodsingl, OxfordDAta, OxfordDelitem, OxfordFree, Oxfordsingl, PestcoDAta, PestcoDelitem, PestcoFree, Pestcontsingl, PlasplugDAta, PlasplugDelitem, PlasplugFree, Plasplugsingl, PrimacarDAta, PrimacarDelitem, PrimacarFree, Primacarsingl, RolsonDAta, RolsonDelitem, RolsonFree, Rolsonsingl, RonsealDAta, RonsealDelitem, RonsealFree, Ronsealsingl, RustinsDAta, RustinsDelitem, RustinsFree, Rustinssingl, SecrupDAta, SecrupDelitem, SecrupFree, Secrupsingl, SecuritDAta, SecuritDelitem, SecuritFree, Securitsingl, ShortageDAta, ShortageDelitem, ShortageFree, Shortagesingl, SoudalDAta, SoudalDelitem, SoudalFree, Soudalsingl, StarpackDAta, StarpackDelitem, StarpackFree, Starpacksingl, SterlingDAta, SterlingDelitem, SterlingFree, Sterlingsingl, tableauDAta, tableauDelitem, tableauFree, tableausingl } from "../Controller/Diy/Diygettingto.js";
import { Rolsonsiglget } from "../Controller/Diy/Diypostto.js";

const router = express.Router()

router.get("/user", DAta)
router.get("/userlist", Cont)
router.delete('/deluser/:id' , delcont)
router.get("/freedelivery", Free)
router.delete("/userid/:id", Delitem)
router.get("/paletuser", PalletDAta)
router.get("/paletfreedelivery", PalletFree)
router.delete("/paletuserid/:id", PalletDelitem)
router.get('/palletsingle/:id' , palletsing)

router.get("/newuser", NewDAta)
router.get("/newfreedelivery", NewFree)
router.delete("/newuserid/:id", NewDelitem)
router.get('/newarrsingle/:id' , newsingle)

router.get("/fooduser", FoodDAta)
router.get("/foodfreedelivery", FoodFree)
router.delete("/fooduserid/:id", FoodDelitem)
router.get('/foodssingle/:id' , Foodssinglepage)

router.get("/driuser", DriDAta)
router.get("/drifreedelivery", DriFree)
router.delete("/driuserid/:id", DriDelitem)
router.get("/drifreedeliverysingle/:id", Drisingle)

router.get("/liguser", LighterDAta)
router.get("/lighfreedelivery", LighterFree)
router.delete("/lighuserid/:id", LighterDelitem)
router.get("/lightersingalepage/:id" ,Lightersingle)

router.get("/eleuser", ElectricalDAta)
router.get("/elefreedelivery", ElectricalFree)
router.delete("/eleuserid/:id", ElectricalDelitem)
router.get("/elefreedelivery/:id", Electricalsingle)

router.get("/Smokuser", SmokinDAta)
router.get("/Smokfreedelivery", SmokinFree)
router.delete("/Smokuserid/:id", SmokinDelitem)

router.get("/bathuser", BathDAta)
router.get("/bathfreedelivery", BathFree)
router.delete("/bathuserid/:id", BathDelitem)
router.get('/bathroomsingle/:id' , Bathromsingl)

router.get("/bathdeuser",BathdeDAta)
router.get("/bathdefreedelivery",BathdeFree)
router.delete("/bathdeuserid/:id",BathdeDelitem)
router.get('/bathroomdesingle/:id' ,Bathromdesingl)


router.get("/mirroruser",MirorDAta)
router.get("/mirrorfreedelivery",MirrorrFree)
router.delete("/mirroruserid/:id",MirrorDelitem)
router.get('/mirrorsingle/:id' ,Mirrorrsingl)

router.get("/showeruser",ShowerDAta)
router.get("/showerfreedelivery",ShowerFree)
router.delete("/showeruserid/:id",ShowerDelitem)
router.get('/showersingle/:id' ,Sowersingl)

router.get("/bathmatesuser",BathmatesDAta)
router.get("/bathmatesfreedelivery",BathmatesFree)
router.delete("/bathmatesuserid/:id",BathmatesDelitem)
router.get('/bathmatessingle/:id' ,Bathmatessingl)

router.get("/bathacessuser",BathacessDAta)
router.get("/bathacessfreedelivery",BathacessFree)
router.delete("/bathacessuserid/:id",BathacessDelitem)
router.get('/bathacesssingle/:id' ,Bathacesssingl)

router.get("/showheaduser",ShowheadDAta)
router.get("/showheadfreedelivery",ShowheadFree)
router.delete("/showheaduserid/:id",ShowheadDelitem)
router.get('/showheadsingle/:id' ,Showheadsingl)

router.get("/disposibleuser",DisposibleDAta)
router.get("/disposiblefreedelivery",DisposibleFree)
router.delete("/disposibleuserid/:id",DisposibleDelitem)
router.get('/disposiblesingle/:id' ,Disposiblesingl)

router.get("/Tablewearuser",TablewearDAta)
router.get("/Tablewearfreedelivery",TablewearFree)
router.delete("/Tablewearuserid/:id",TablewearDelitem)
router.get('/Tablewearsingle/:id' ,Tablewearsingl)

router.get("/Airersuser",AirersDAta)
router.get("/Airersfreedelivery",AirersFree)
router.delete("/Airersuserid/:id",AirersDelitem)
router.get('/Airerssingle/:id' ,Airerssingl)

router.get("/ironinguser",IroningDAta)
router.get("/ironingfreedelivery",IroningFree)
router.delete("/ironinguserid/:id",IroningDelitem)
router.get('/ironingsingle/:id' ,Ironingsingl)

router.get("/Loundryuser",LoundryDAta)
router.get("/Loundryfreedelivery",LoundryFree)
router.delete("/Loundryuserid/:id",LoundryDelitem)
router.get('/Loundrysingle/:id' ,Loundrysingl)

router.get("/Batteriesuser",BatteriesDAta)
router.get("/Batteriesfreedelivery",BatteriesFree)
router.delete("/Batteriesuserid/:id",BatteriesDelitem)
router.get('/Batteriessingle/:id' ,Batteriessingl)

router.get("/Phoneuser",PhoneDAta)
router.get("/Phonefreedelivery",PhoneFree)
router.delete("/Phoneuserid/:id",PhoneDelitem)
router.get('/Phonesingle/:id' ,Phonesingl)

router.get("/Obsticaluser",ObsticalDAta)
router.get("/Obsticalfreedelivery",ObsticalFree)
router.delete("/Obsticaluserid/:id",ObsticalDelitem)
router.get('/Obsticalsingle/:id' ,Obsticalsingl)

router.get("/Electricuser",ElectricDAta)
router.get("/Electricfreedelivery",ElectricFree)
router.delete("/Electricuserid/:id",ElectricDelitem)
router.get('/Electricsingle/:id' ,Electricsingl)

router.get("/Firstaiduser",FirstaidDAta)
router.get("/Firstaidfreedelivery",FirstaidFree)
router.delete("/Firstaiduserid/:id",FirstaidDelitem)
router.get('/Firstaidsingle/:id' ,Firstaidsingl)

router.get("/Apronsuser",ApronsDAta)
router.get("/Apronsfreedelivery",ApronsFree)
router.delete("/Apronsuserid/:id",ApronsDelitem)
router.get('/Apronssingle/:id' ,Apronssingl)

router.get("/Beddinguser",BeddingDAta)
router.get("/Beddingfreedelivery",BeddingFree)
router.delete("/Beddinguserid/:id",BeddingDelitem)
router.get('/Beddingsingle/:id' ,Beddingsingl)

router.get("/Clothinguser", ClothingDAta)
router.get("/Clothingfreedelivery",ClothingFree)
router.delete("/Clothinguserid/:id",ClothingDelitem)
router.get('/Clothingsingle/:id' ,Clothingsingl)

router.get("/Freshneruser", FreshnerDAta)
router.get("/Freshnerfreedelivery",FreshnerFree)
router.delete("/Freshneruserid/:id",FreshnerDelitem)
router.get('/Freshnersingle/:id' ,Freshnersingl)

router.get("/Akonoboluser", AkonobolDAta)
router.get("/Akonobolfreedelivery",AkonobolFree)
router.delete("/Akonoboluserid/:id",AkonobolDelitem)
router.get('/Akonobolsingle/:id' ,Akonobolsingl)

router.get("/Clockuser", ClockDAta)
router.get("/Clockfreedelivery",ClockFree)
router.delete("/Clockuserid/:id",ClockDelitem)
router.get('/Clocksingle/:id' ,Clocksingl)

router.get("/camerauser", CameraDAta)
router.get("/camerafreedelivery",CameraFree)
router.delete("/camerauserid/:id",CameraDelitem)
router.get('/camerasingle/:id' ,Camerasingl)

router.get("/digitaluser", DigitalDAta)
router.get("/digitalfreedelivery",DigitalFree)
router.delete("/digitaluserid/:id",DigitalDelitem)
router.get('/digitalsingle/:id' ,Digitalsingl)

router.get("/Cookwareuser", CookwareDAta)
router.get("/Cookwarefreedelivery",CookwareFree)
router.delete("/Cookwareuserid/:id",CookwareDelitem)
router.get('/Cookwaresingle/:id' ,Cookwaresingl)

router.get("/Crockeryuser", CrockeryDAta)
router.get("/Crockeryfreedelivery",CrockeryFree)
router.delete("/Crockeryuserid/:id",CrockeryDelitem)
router.get('/Crockerysingle/:id' ,Crockerysingl)

router.get("/Crockeryuser", CrockeryDAta)
router.get("/Crockeryfreedelivery",CrockeryFree)
router.delete("/Crockeryuserid/:id",CrockeryDelitem)
router.get('/Crockerysingle/:id' ,Crockerysingl)

router.get("/dinneruser", DinnerDAta)
router.get("/dinnerfreedelivery",DinnerFree)
router.delete("/dinneruserid/:id",DinnerDelitem)
router.get('/dinnersingle/:id' ,Dinnersingl)

router.get("/rentokiluser", RentokilDAta)
router.get("/rentokilfreedelivery",RentokilFree)
router.delete("/rentokiluserid/:id",RentokilDelitem)
router.get('/rentokilsingle/:id' ,Rentokilsingl)

router.get("/stvuser", StvDAta)
router.get("/stvfreedelivery",StvFree)
router.delete("/stvuserid/:id", StvDelitem)
router.get('/stvsingle/:id' ,Stvsingl)

router.get("/stvuser", StvDAta)
router.get("/stvfreedelivery",StvFree)
router.delete("/stvuserid/:id", StvDelitem)
router.get('/stvsingle/:id' ,Stvsingl)

router.get("/cottonuser", CottonDAta)
router.get("/cottonfreedelivery", CottonFree)
router.delete("/cottonuserid/:id", CottonDelitem)
router.get('/cottonsingle/:id' ,Cottonsingl)

router.get("/babyuser", BabyDAta)
router.get("/babyfreedelivery", BabyFree)
router.delete("/babyuserid/:id", BabyDelitem)
router.get('/babysingle/:id' ,Babysingl)

router.get("/freshnuser", FreshnDAta)
router.get("/freshnfreedelivery", FreshnFree)
router.delete("/freshnuserid/:id", FreshnDelitem)
router.get('/freshnsingle/:id' ,Freshnsingl)

router.get("/caruser", CarDAta)
router.get("/carfreedelivery", CarFree)
router.delete("/caruserid/:id", CarDelitem)
router.get('/carsingle/:id' ,Carsingl)

router.get("/bleechuser", BleechDAta)
router.get("/bleechfreedelivery", BleechFree)
router.delete("/bleechuserid/:id", BleechDelitem)
router.get('/bleechsingle/:id' ,Bleechsingl)

router.get("/bakewareuser", BakewareDAta)
router.get("/bakewarefreedelivery", BakewareFree)
router.delete("/bakewareuserid/:id", BakewareDelitem)
router.get('/bakewaresingle/:id' , Bakewaresingl)

router.get("/barewareuser", BarewareDAta)
router.get("/barewarefreedelivery", BarewareFree)
router.delete("/barewareuserid/:id", BarewareDelitem)
router.get('/barewaresingle/:id' , Barewaresingl)

router.get("/birdsuser", BirdsDAta)
router.get("/birdsfreedelivery", BirdsFree)
router.delete("/birdsuserid/:id", BirdsDelitem)
router.get('/birdssingle/:id' , Birdssingl)

router.get("/catuser", CatDAta)
router.get("/catfreedelivery", CatFree)
router.delete("/catuserid/:id", CatDelitem)
router.get('/catsingle/:id' , Catsingl)

router.get("/babeyuser", BabeyDAta)
router.get("/babeyfreedelivery", BabeyFree)
router.delete("/babeyuserid/:id", BabeyDelitem)
router.get('/babeysingle/:id' , Babeysingl)

router.get("/kidsuser", KidssDAta)
router.get("/kidsfreedelivery", KidssFree)
router.delete("/kidsuserid/:id",KidssDelitem)
router.get('/kidssingle/:id' , Kidsssingl)

router.get("/bbquser", BBqDAta)
router.get("/bbqfreedelivery", BBqFree)
router.delete("/bbquserid/:id",BBqDelitem)
router.get('/bbqsingle/:id' , BBqsingl)

router.get("/birdcareuser", BirdcareDAta)
router.get("/birdcarefreedelivery", BirdcareFree)
router.delete("/birdcareuserid/:id",BirdcareDelitem)
router.get('/birdcaresingle/:id' , Birdcaresingl)

router.get("/baloonuser", BaloonDAta)
router.get("/baloonfreedelivery", BaloonFree)
router.delete("/baloonuserid/:id",BaloonDelitem)
router.get('/baloonsingle/:id' , Baloonsingl)

router.get("/pumpsuser", PumpsDAta)
router.get("/pumpsfreedelivery", PumpsFree)
router.delete("/pumpsuserid/:id", PumpsDelitem)
router.get('/pumpssingle/:id' , Pumpssingl)

router.get("/banneruser", BannerDAta)
router.get("/bannerfreedelivery", BannerFree)
router.delete("/banneruserid/:id", BannerDelitem)
router.get('/bannersingle/:id' , Bannersingl)

router.get("/crystaluser", CrystalDAta)
router.get("/crystalfreedelivery", CrystalFree)
router.delete("/crystaluserid/:id", CrystalDelitem)
router.get('/crystalsingle/:id' , Crystalsingl)

router.get("/cakesuser", CakesDAta)
router.get("/cakesfreedelivery", CakesFree)
router.delete("/cakesuserid/:id", CakesDelitem)
router.get('/cakessingle/:id' , Cakessingl)

router.get("/furnitureuser", FurnitureDAta)
router.get("/furniturefreedelivery", FurnitureFree)
router.delete("/furnitureuserid/:id", FurnitureDelitem)
router.get('/furnituresingle/:id' , Furnituresingl)

router.get("/matesuser", MatesDAta)
router.get("/matesfreedelivery", MatesFree)
router.delete("/matesuserid/:id", MatesDelitem)
router.get('/matessingle/:id' , Matessingl)

router.get("/candeluser", CandelDAta)
router.get("/candelfreedelivery", CandelFree)
router.delete("/candeluserid/:id", CandelDelitem)
router.get('/candelsingle/:id' , Candelsingl)

router.get("/stuser", STDAta)
router.get("/stfreedelivery", STFree)
router.delete("/stuserid/:id", STDelitem)
router.get('/stsingle/:id' , STsingl)

router.get("/stuser", STDAta)
router.get("/stfreedelivery", STFree)
router.delete("/stuserid/:id", STDelitem)
router.get('/stsingle/:id' , STsingl)

router.get("/foodconuser", FoodconDAta)
router.get("/foodconfreedelivery", FoodconFree)
router.delete("/foodconuserid/:id", FoodconDelitem)
router.get('/foodconsingle/:id' , Foodconsingl)

router.get("/kidsplasuser", kidsplasDAta)
router.get("/kidsplasfreedelivery",kidsplasFree)
router.delete("/kidsplasuserid/:id", kidsplasDelitem)
router.get('/kidsplassingle/:id' , kidsplassingl)

router.get("/sportuser", SportsDAta)
router.get("/sportfreedelivery",SportsFree)
router.delete("/sportuserid/:id", SportsDelitem)
router.get('/sportsingle/:id' , Sportssingl)

router.get("/flaskuser", FlaskDAta)
router.get("/flaskfreedelivery",FlaskFree)
router.delete("/flaskuserid/:id", FlaskDelitem)
router.get('/flasksingle/:id' , Flasksingl)

router.get("/artcraftuser", ArtcraftDAta)
router.get("/artcraftfreedelivery",ArtcraftFree)
router.delete("/artcraftuserid/:id", ArtcraftDelitem)
router.get('/artcraftsingle/:id' , Artcraftsingl)

router.get("/booksuser", BooksDAta)
router.get("/booksfreedelivery",BooksFree)
router.delete("/booksuserid/:id", BooksDelitem)
router.get('/bookssingle/:id' , Bookssingl)

router.get("/brushwareuser", BrushwareDAta)
router.get("/brushwarefreedelivery",BrushwareFree)
router.delete("/brushwareuserid/:id", BrushwareDelitem)
router.get('/brushwaresingle/:id' , Brushwaresingl)

router.get("/dusteruser", DusterDAta)
router.get("/dusterfreedelivery",DusterFree)
router.delete("/dusteruserid/:id", DusterDelitem)
router.get('/dustersingle/:id' , Dustersingl)

router.get("/artificaluser", ArtificalDAta)
router.get("/artificalfreedelivery",ArtificalFree)
router.delete("/artificaluserid/:id", ArtificalDelitem)
router.get('/artificalsingle/:id' , Artificalsingl)

router.get("/diytoolsuser", DiytoolsDAta)
router.get("/diytoolsfreedelivery",DiytoolsFree)
router.delete("/diytoolsuserid/:id", DiytoolsDelitem)
router.get('/diytoolssingle/:id' , Diytoolssingl)

router.get("/bouquetuser", BouquetsDAta)
router.get("/bouquetfreedelivery",BouquetsFree)
router.delete("/bouquetuserid/:id", BouquetsDelitem)
router.get('/bouquetsingle/:id' , Bouquetssingl)

router.get("/disposibluser", DisposiblDAta )
router.get("/disposiblfreedelivery",DisposiblFree)
router.delete("/disposibluserid/:id", DisposiblDelitem)
router.get('/disposiblsingle/:id' , Disposiblsingl)

router.get("/craftuser", CraftpoDAta )
router.get("/craftfreedelivery", CraftpoFree)
router.delete("/craftuserid/:id", CraftpoDelitem)
router.get('/craftsingle/:id' , Craftposingl)

router.get("/carpouser", CarpoDAta )
router.get("/carpofreedelivery", CarpoFree)
router.delete("/carpouserid/:id", CarDelitem)
router.get('/carposingle/:id' , Carposingl)

router.get("/candelesuser", CandelesDAta )
router.get("/candelesfreedelivery", CandelesFree)
router.delete("/candelesuserid/:id", CandelesFree)
router.get('/candelessingle/:id' , Candelessingl)

router.get("/foodpouser", FoodpoDAta )
router.get("/foodpofreedelivery", FoodpoFree)
router.delete("/foodpouserid/:id", FoodpoDelitem)
router.get('/foodposingle/:id' , Foodposingl)

router.get("/shoeuser", ShoeDAta )
router.get("/shoefreedelivery", ShoeFree)
router.delete("/shoeuserid/:id", ShoeDelitem)
router.get('/shoesingle/:id' , Shoesingl)

router.get("/stationuser", StationeyDAta )
router.get("/stationfreedelivery", StationeyFree)
router.delete("/stationuserid/:id", StationeyDelitem)
router.get('/stationsingle/:id' , Stationeysingl)

router.get("/potoyuser", PotoyDAta )
router.get("/potoyfreedelivery", PotoyFree)
router.delete("/potoyuserid/:id", PotoyDelitem)
router.get('/potoysingle/:id' , Potoysingl)

router.get("/pestconuser", PestconDAta )
router.get("/pestconfreedelivery", PestconFree)
router.delete("/pestconuserid/:id", PestconDelitem)
router.get('/pestconsingle/:id' , Pestconsingl)

router.get("/lightergasuser", LightergasDAta )
router.get("/lightergasfreedelivery", LightergasFree)
router.delete("/lightergasuserid/:id", LightergasDelitem)
router.get('/lightergassingle/:id' , Lightergassingl)

router.get("/londryironuser", LoundryironDAta )
router.get("/londryironfreedelivery", LoundryironFree)
router.delete("/londryironuserid/:id", LoundryironDelitem)
router.get('/londryironsingle/:id' , Loundryironsingl)

router.get("/kitchenpounduser", KitchenwearpDAta )
router.get("/kitchenpoundfreedelivery", KitchenwearpFree)
router.delete("/kitchenpounduserid/:id", KitchenwearpDelitem)
router.get('/kitchenpoundsingle/:id' , Kitchenwearpsingl)

router.get("/hoiserypuser", HoiseryDAta )
router.get("/hoiserypfreedelivery", HoiseryFree)
router.delete("/hoiserypuserid/:id", HoiseryDelitem)
router.get('/hoiserypsingle/:id' , Hoiserysingl)

router.get("/householcluser", HouseholdclDAta )
router.get("/householclfreedelivery", HouseholdclFree)
router.delete("/householcluserid/:id", HouseholdclDelitem)
router.get('/householclsingle/:id' , Householdclsingl)

router.get("/householdpruser", HouseholdprDAta )
router.get("/householdprfreedelivery", HouseholdprFree)
router.delete("/householdpruserid/:id", HouseholdprDelitem)
router.get('/householdprsingle/:id' , Householdprsingl)

router.get("/readinguser", ReadingDAta )
router.get("/readingfreedelivery", ReadingFree)
router.delete("/readinguserid/:id", ReadingDelitem)
router.get('/readingsingle/:id' , Readingsingl)

router.get("/glovesuser", GlovesDAta )
router.get("/glovesfreedelivery", GlovesFree)
router.delete("/glovesuserid/:id", GlovesDelitem)
router.get('/glovessingle/:id' , Glovessingl)

router.get("/mopsuser", MopsDAta )
router.get("/mopsfreedelivery", MopsFree)
router.delete("/mopsuserid/:id", MopsDelitem)
router.get('/mopssingle/:id' , Mopssingl)

router.get("/spongeuser", SpongeDAta )
router.get("/spongefreedelivery", SpongeFree)
router.delete("/spongeuserid/:id", SpongeDelitem)
router.get('/spongesingle/:id' , Spongesingl)

router.get("/bagsluser", BagslDAta)
router.get("/bagslfreedelivery", BagslFree)
router.delete("/bagsluserid/:id", BagslDelitem)
router.get('/bagslsingle/:id' , Bagslsingl)

router.get("/barrientuser", BarrientDAta )
router.get("/barrientfreedelivery", BarrientFree)
router.delete("/barrientuserid/:id", BarrientDelitem)
router.get('/barrientsingle/:id' , Barrientsingl)

router.get("/barrientuser", BarrientDAta )
router.get("/barrientfreedelivery", BarrientFree)
router.delete("/barrientuserid/:id", BarrientDelitem)
router.get('/barrientsingle/:id' , Barrientsingl)

router.get("/bartolinuser", BartolinDAta )
router.get("/bartolinfreedelivery", BartolinFree)
router.delete("/bartolinuserid/:id", BartolinDelitem)
router.get('/bartolinsingle/:id' , Bartolinsingl)

router.get("/birdbranduser", BirdbrandDAta )
router.get("/birdbrandfreedelivery", BirbrandFree)
router.delete("/birdbranduserid/:id", BirdbrandDelitem)
router.get('/birdbrandsingle/:id' , Birdbrandsingl)

router.get("/blackuser", BlackDAta )
router.get("/blackfreedelivery", BlackFree)
router.delete("/blackuserid/:id", BlackDelitem)
router.get('/blacksingle/:id' , Blacksingl)

router.get("/bonituser", BonitDAta )
router.get("/bonitfreedelivery", BonitFree)
router.delete("/bonituserid/:id", BonitDelitem)
router.get('/bonitsingle/:id' , Bonitsingl)

router.get("/bascktuser", BasketstDAta )
router.get("/bascktfreedelivery", BasketstFree)
router.delete("/bascktuserid/:id", BasketstDelitem)
router.get('/bascktsingle/:id' , Basketstsingl)

router.get("/luggageuser", LuggageDAta )
router.get("/luggagefreedelivery", LuggageFree)
router.delete("/luggageuserid/:id", LuggageDelitem)
router.get('/luggagesingle/:id' , Luggagesingl)

router.get("/bostikuser", BostikDAta )
router.get("/bostikfreedelivery", BostikFree)
router.delete("/bostikuserid/:id", BostikDelitem)
router.get('/bostiksingle/:id' , Bostiksingl)

router.get("/briwaxuser", BriwaxDAta )
router.get("/briwaxfreedelivery", BriwaxFree)
router.delete("/briwaxuserid/:id", BriwaxDelitem)
router.get('/briwaxsingle/:id' , Briwaxsingl)

router.get("/brookuser", BrookDAta )
router.get("/brookfreedelivery", BrookFree)
router.delete("/brookuserid/:id", BrookDelitem)
router.get('/brooksingle/:id' , Brooksingl)

router.get("/carprouser", CarproDAta )
router.get("/carprofreedelivery", CarproFree)
router.delete("/carprouserid/:id", CarproDelitem)
router.get('/carprosingle/:id' , Carprosingl)

router.get("/carplanuser", CarplanDAta )
router.get("/carplanfreedelivery", CarplanFree)
router.delete("/carplanuserid/:id", CarplanDelitem)
router.get('/carplansingle/:id' , Carplansingl)

router.get("/chomisuser", ChomisDAta )
router.get("/chomisfreedelivery", ChomisFree)
router.delete("/chomisuserid/:id", ChomisDelitem)
router.get('/chomissingle/:id' , Chomissingl)

router.get("/commanduser", CommandDAta )
router.get("/commandfreedelivery", CommandFree)
router.delete("/commanduserid/:id", CommandDelitem)
router.get('/commandsingle/:id' , Commandsingl)

router.get("/coraluser", CoralDAta )
router.get("/coralfreedelivery", CoralFree)
router.delete("/coraluserid/:id", CoralDelitem)
router.get('/coralsingle/:id' , Coralsingl)

router.get("/crownuser", CrownDAta )
router.get("/crownfreedelivery", CrownFree)
router.delete("/crownuserid/:id", CrownDelitem)
router.get('/crownsingle/:id' , Crownsingl)

router.get("/dektonuser", DektonDAta )
router.get("/dektonfreedelivery", DektonFree)
router.delete("/dektonuserid/:id", DektonDelitem)
router.get('/dektonsingle/:id' , Dektonsingl)

router.get("/demsumuser", DemsumDAta )
router.get("/demsumfreedelivery", DemsumFree)
router.delete("/demsumuserid/:id", DemsumDelitem)
router.get('/demsumsingle/:id' , Demsumsingl)

router.get("/darperuser", DarperDAta )
router.get("/darperfreedelivery", DarperFree)
router.delete("/darperuserid/:id", DarperDelitem)
router.get('/darpersingle/:id' , Darpersingl)

router.get("/edcouser", EdcoDAta )
router.get("/edcofreedelivery", EdcoFree)
router.delete("/edcouserid/:id", EdcoDelitem)
router.get('/edcosingle/:id' , Edcosingl)

router.get("/everuser", EverDAta )
router.get("/everfreedelivery", EverFree)
router.delete("/everuserid/:id", EverDelitem)
router.get('/eversingle/:id' , Eversingl)

router.get("/exitexuser", ExitexDAta )
router.get("/exitexfreedelivery", ExitexFree)
router.delete("/exitexuserid/:id", ExitexDelitem)
router.get('/exitexsingle/:id' , Exitexsingl)

router.get("/exitexuser", ExitexDAta )
router.get("/exitexfreedelivery", ExitexFree)
router.delete("/exitexuserid/:id", ExitexDelitem)
router.get('/exitexsingle/:id' , Exitexsingl)

router.get("/fituser", FitDAta )
router.get("/fitfreedelivery", FitFree)
router.delete("/fituserid/:id", FitDelitem)
router.get('/fitsingle/:id' , Fitsingl)

router.get("/globaluser", GlobalDAta )
router.get("/globalfreedelivery", GlobalFree)
router.delete("/globaluserid/:id", GlobalDelitem)
router.get('/globalsingle/:id' , Globalsingl)

router.get("/gassysuser", GasDAta )
router.get("/gassysfreedelivery", GasFree)
router.delete("/gassysuserid/:id", GasDelitem)
router.get('/gassyssingle/:id' , Gassingl)

router.get("/gorilauser", GorilaDAta )
router.get("/gorilafreedelivery", GorilaFree)
router.delete("/gorilauserid/:id", GorilaDelitem)
router.get('/gorilasingle/:id' , Gorilasingl)

router.get("/hagsenuser", HagesanDAta )
router.get("/hagsenfreedelivery", HagesanFree)
router.delete("/hagsenuserid/:id", HagesanDelitem)
router.get('/hagsensingle/:id' , Hagesansingl)

router.get("/hardwareuser", HardwareDAta )
router.get("/hardwarefreedelivery", HardwareFree)
router.delete("/hardwareuserid/:id", HardwareDelitem)
router.get('/hardwaresingle/:id' , Hardwaresingl)

router.get("/harrisuser", HarrisDAta )
router.get("/harrisfreedelivery", HarrisFree)
router.delete("/harrisuserid/:id", HarrisDelitem)
router.get('/harrissingle/:id' , Harrissingl)

router.get("/hilkauser", HilkaAta )
router.get("/hilkafreedelivery", HilkaFree)
router.delete("/hilkauserid/:id", HilkaDelitem)
router.get('/hilkasingle/:id' , Hilkasingl)

router.get("/humnroluser", HumnrolDAta )
router.get("/humnrolfreedelivery", HumnrolFree)
router.delete("/humnroluserid/:id", HumnrolDelitem)
router.get('/humnrolsingle/:id' , Humnrolsingl)

router.get("/jbweluser", JbwelDAta )
router.get("/jbwelfreedelivery", JbwelFree)
router.delete("/jbweluserid/:id", JbwelDelitem)
router.get('/jbwelsingle/:id' , Jbwelsingl)

router.get("/kilrockuser", KilrockDAta )
router.get("/kilrockfreedelivery", KilrockFree)
router.delete("/kilrockuserid/:id", KilrockDelitem)
router.get('/kilrocksingle/:id' , Kilrocksingl)

router.get("/ladderuser", LadderDAta )
router.get("/ladderfreedelivery", LadderFree)
router.delete("/ladderuserid/:id", LadderDelitem)
router.get('/laddersingle/:id' , Laddersingl)

router.get("/locktileuser", LocktileDAta )
router.get("/locktilefreedelivery", LocktileFree)
router.delete("/locktileuserid/:id", LocktileDelitem)
router.get('/locktilesingle/:id' , Locktilesingl)

router.get("/lynwooduser", LynwoodDAta )
router.get("/lynwoodfreedelivery", LynwoodFree)
router.delete("/lynwooduserid/:id", LynwoodDelitem)
router.get('/lynwoodsingle/:id' , Lynwoodsingl)

router.get("/oxforduser", OxfordDAta )
router.get("/oxfordfreedelivery", OxfordFree)
router.delete("/oxforduserid/:id", OxfordDelitem)
router.get('/oxfordsingle/:id' , Oxfordsingl)

router.get("/pestcouser", PestcoDAta )
router.get("/pestcofreedelivery", PestcoFree)
router.delete("/pestcouserid/:id", PestcoDelitem)
router.get('/pestcosingle/:id' , Pestcontsingl)

router.get("/plaspluguser", PlasplugDAta )
router.get("/plasplugfreedelivery", PlasplugFree)
router.delete("/plaspluguserid/:id", PlasplugDelitem)
router.get('/plasplugsingle/:id' , Plasplugsingl)

router.get("/primacaruser", PrimacarDAta )
router.get("/primacarfreedelivery", PrimacarFree)
router.delete("/primacaruserid/:id", PrimacarDelitem)
router.get('/primacarsingle/:id' , Primacarsingl)

router.get("/rolsonuser", RolsonDAta )
router.get("/rolsonfreedelivery", RolsonFree)
router.delete("/rolsonuserid/:id", RolsonDelitem)
router.get('/rolsonsingle/:id' , Rolsonsingl)

router.get("/ronsealuser", RonsealDAta )
router.get("/ronsealfreedelivery", RonsealFree)
router.delete("/ronsealuserid/:id", RonsealDelitem)
router.get('/ronsealsingle/:id' , Ronsealsingl)

router.get("/rustinsuser", RustinsDAta )
router.get("/rustinsfreedelivery", RustinsFree)
router.delete("/rustinsuserid/:id", RustinsDelitem)
router.get('/rustinssingle/:id' , Rustinssingl)

router.get("/securituser", SecuritDAta )
router.get("/securitfreedelivery", SecuritFree)
router.delete("/securituserid/:id", SecuritDelitem)
router.get('/securitsingle/:id' , Securitsingl)

router.get("/secupuser", SecrupDAta )
router.get("/secupfreedelivery", SecrupFree)
router.delete("/secupuserid/:id", SecrupDelitem)
router.get('/secupsingle/:id' , Secrupsingl)

router.get("/shortageuser", ShortageDAta )
router.get("/shortagefreedelivery", ShortageFree)
router.delete("/shortageuserid/:id", ShortageDelitem)
router.get('/shortagesingle/:id' , Shortagesingl)

router.get("/soudaluser", SoudalDAta )
router.get("/soudalfreedelivery", SoudalFree)
router.delete("/soudaluserid/:id", SoudalDelitem)
router.get('/soudalsingle/:id' , Soudalsingl)

router.get("/starpackuser", StarpackDAta )
router.get("/starpackfreedelivery", StarpackFree)
router.delete("/starpackuserid/:id", StarpackDelitem)
router.get('/starpacksingle/:id' , Starpacksingl)

router.get("/sterlinguser", SterlingDAta )
router.get("/sterlingfreedelivery", SterlingFree)
router.delete("/sterlinguserid/:id", SterlingDelitem)
router.get('/sterlingsingle/:id' , Sterlingsingl)

router.get("/tableauuser", tableauDAta )
router.get("/tableaufreedelivery", tableauFree)
router.delete("/tableauuserid/:id", tableauDelitem)
router.get('/tableausingle/:id' , tableausingl)





export default router