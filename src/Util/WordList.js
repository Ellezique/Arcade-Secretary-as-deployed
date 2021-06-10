import faker from "faker"
export default function generate(number=30){
    return new Array(number)
    .fill()
    .map(() => faker.random.word().toLowerCase())
}