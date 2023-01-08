

abstract class Country { 

    Name:string
    IndependenceDay:string
    papulation:number
    papulationGrowthRate:number
    religon:string
    Nature="Human"
    private _personalData:String
   private _leader:String

    constructor(  Name:string,
        IndependenceDay:string,
        papulation:number,
        papulationGrowthRate:number,
        religon:string,
         _personalData:String,
         _leader:String,) {
            this.Name=Name;                         // created a Basic country class,all country have must these basic thing                                                    
        this.IndependenceDay=IndependenceDay                    
            this.papulation=papulation;
            this.papulationGrowthRate=papulationGrowthRate
            this.religon=religon
          this._personalData=_personalData
          this._leader=_leader
    }
    get personaldata():String{
        return this._personalData
    }

    set leader(newleaer:string){
        this._leader=newleaer
    }
    abstract papulationGroth():number

    Cloths():string{

        return "Decent Cloths"
    }
}



    class OIC extends Country{

    constructor(     
        Name:string,
        IndependenceDay:string,
        papulation:number,
        papulationGrowthRate:number,
        religon="islam",
        personalData:string,
        leader:String 
    
           ){

            super(Name,IndependenceDay,papulation,papulationGrowthRate,religon,personalData,leader)
        
    }

    papulationGroth(): number {
        return this.papulation=this.papulation*(this.papulationGrowthRate/100+1)
    }
    Cloths(): string {
        return "Shalware Qamiz"
    }

    }


    let  country1=new OIC("Pakisatn","14 August 1947",231000000,1.8,"ISLAM","Pakistan private Data"," khan")

    country1.leader="Imran Khan"
    country1.papulationGroth()
    
    console.log(country1.Cloths());
    console.log(country1);
    

    let  country2=new OIC("india","15 August 1947",14000000000,0.8,"Hindu","India private Data"," Modi")

    country2.papulationGroth()
    
    console.log(country2.Cloths());
    console.log(country2);
    
    
   
    
    