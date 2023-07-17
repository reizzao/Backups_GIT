
type Cliente = ClienteFisico | ClienteJuridico
type ClienteType = "juridico" | "fisico"

interface AccountClienteRepository {
  items?: Cliente[]
  create: (cliente: Cliente, repo?: AccountClienteRepository) => Promise<Cliente>
  list: (repo?: AccountClienteRepository) => Promise<Cliente[]>
}

interface ClienteFisico {
  ID?: string
  primeiroNome: string
  sobrenome: string
  cpf: string
  email: string
  type: ClienteType
}

interface ClienteJuridico {
  ID?: string
  nomeFantasia: string
  cnpj: string
  email: string
  type: ClienteType
}

export type {
  Cliente,
  AccountClienteRepository,
  ClienteFisico,
  ClienteJuridico,
}