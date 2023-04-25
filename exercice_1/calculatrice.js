module.exports = class Calculatrice {
    add(a,b){
        return (a+b);
    }
    min(a,b){
        return (a-b);
    }
    mu(a,b){
        return(a*b);
    }
    div(a,b){
        if(b==0){
            return('division par 0 impossible')
        }else{
            return(a/b);
        }
    }
    avg(tab=[]){
        if(tab.length == 0){
            return 0;
        }else{
            let sum = 0;
            for (let i = 0; i < tab.length; i++) {
                sum += tab[i];
            }
            return sum/tab.length;
        }
    }
}