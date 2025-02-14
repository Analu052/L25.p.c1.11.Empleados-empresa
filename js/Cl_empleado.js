export default class Cl_empleado{
    constructor(n,s){
        this.nom=n;
        this.sexo=s;
    }
    setNom(n){
        this.nom=n;
    }
    getNom(){
        return this.nom;
    }
    setSexo(s){
        this.sexo=s;
    }
    getSexo(){
        return this.sexo;
    }
}