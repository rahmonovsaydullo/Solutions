
const expect = (val) => {
    return {
        toBe: (arg1) => {
            if (arg1 === val) return true
            throw  "Not Equal"
        },

        notToBe: (arg1) => {
            if (arg1 !== val) return true
            throw  "Not Equal"
        }
    }
};



