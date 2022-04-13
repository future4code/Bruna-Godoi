const person: (name: string, birthDate: string) => string = (name, birthDate) => {
    const splitBirthDate: string[] = birthDate.split("/")

    const day: string = splitBirthDate[0]
    const month: string = splitBirthDate[1]
    const year: string = splitBirthDate[2]

    const text = `Olá me chamo ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}`

    return text
}
console.log(person("Bruna", "05/12/1994"));