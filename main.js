class Country {
    Name;
    IndependenceDay;
    papulation;
    papulationGrowthRate;
    religon;
    Nature = "Human";
    _personalData;
    _leader;
    constructor(Name, IndependenceDay, papulation, papulationGrowthRate, religon, _personalData, _leader) {
        this.Name = Name; // created a Basic country class,all country have must these basic thing                                                    
        this.IndependenceDay = IndependenceDay;
        this.papulation = papulation;
        this.papulationGrowthRate = papulationGrowthRate;
        this.religon = religon;
        this._personalData = _personalData;
        this._leader = _leader;
    }
    get personaldata() {
        return this._personalData;
    }
    set leader(newleaer) {
        this._leader = newleaer;
    }
    Cloths() {
        return "Decent Cloths";
    }
}
class OIC extends Country {
    constructor(Name, IndependenceDay, papulation, papulationGrowthRate, religon = "islam", personalData, leader) {
        super(Name, IndependenceDay, papulation, papulationGrowthRate, religon, personalData, leader);
    }
    papulationGroth() {
        return this.papulation = this.papulation * (this.papulationGrowthRate / 100 + 1);
    }
    Cloths() {
        return "Shalware Qamiz";
    }
}
let country1 = new OIC("Pakisatn", "14 August 1947", 231000000, 1.8, "ISLAM", "Pakistan private Data", " khan");
country1.leader = "Imran Khan";
country1.papulationGroth();
console.log(country1.Cloths());
console.log(country1);
let country2 = new OIC("india", "15 August 1947", 14000000000, 0.8, "Hindu", "India private Data", " Modi");
country2.papulationGroth();
console.log(country2.Cloths());
console.log(country2);
export {};
