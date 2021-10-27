
const personDataLog = ({firstname = 'john', lastname = 'doe', age = '33'} = {}) => {
    return `My name is ${firstname} ${lastname}. I'm ${age} years old.`
}
