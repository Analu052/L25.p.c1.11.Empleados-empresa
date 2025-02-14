export default class Cl_empresa {
    constructor(){
        this.contE=0;
        this.contM=0;
        this.contH=0;
    }

    procesarEmpleado(emp){
        this.contE++;

        if(emp.sexo=='F'){
            this.contM++;
    }
        if(emp.sexo=='M'){
            this.contH++;
    }
    }
    porcM(){
        return this.contM/this.contE*100;
    }
    cantH(){
        return this.contH;
    }
}