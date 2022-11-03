export default class CalculateService {


    static calclulate(str = '') {
        try {
            const mathOperations = ['+', '*', '%', '.', '/']

            if (!str) {
                return { result: '' }
            }

            str = str.replaceAll(',', '.').replaceAll('x', '*')

            if (mathOperations.includes(str[0]) || mathOperations.includes(str[str.length - 1])) {
                return { error: 'Invalid input' }
            }

            // if (str.includes('%')) {
            //     console.log(str);

            //     const index = str.indexOf('%')

            //     let i=index;
            //     while(+str[i]!==NaN){
            //         i--;
            //     }

            //     let j=index;
            //     while(+str[j]!==NaN){
            //         j++;
            //     }

            //     const first=str.slice(i,index)
            //     const second=str.slice(index,j)
            //     console.log(first);
            //     console.log(second);
            // }

            return { result: eval(str) }
        } catch (e) {
            return { error: 'Invalid input' }
        }
    }
}