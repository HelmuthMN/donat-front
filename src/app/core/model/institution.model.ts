export interface Institution {
    name: string,
    email: string,
	address: string,
    cep: string,
    url: string,
    image: string,
	phone_number: string
}

export interface InstitutionGet {
    _id: string,
    name: string,
    email: string,
	address: string,
    cep: string,
    url: string,
    image: string,
	phone_number: string
}