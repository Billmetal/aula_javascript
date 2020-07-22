// Symbols

const uniqueId = Symbol("Hello");

// Well know symbols

const arr = [1,2,3,4];

console.log(arr[Symbol.iterator]().next());

const it = arr[Symbol.iterator]();
const str = "Digital Innovation One";

for(let value of str){
    console.log(value);
}

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());

