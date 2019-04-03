import { testTime } from "./TestTime";

class Str {
    @testTime
    func(str){
        let newStr:string="";
            while (str.length > 3) {
                newStr = ',' + str.slice(-3) + newStr;
                str = str.slice(0, str.length - 3);
            }
            if (str) { newStr = str + newStr; }
            return newStr;
    }
    @testTime
    func2(str){
        let newStr:string="";
        for(let i=0;i<Math.ceil(str.length/3);i++){
            if(i==Math.ceil(str.length/3)-1){
                newStr=newStr + str.slice(i*3,(i+1)*3);
                break;
            }
            newStr=newStr + str.slice(i*3,(i+1)*3) + ",";
        }
        return newStr;
    }
}
export default new Str()