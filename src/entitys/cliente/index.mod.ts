// -- @cliente

// -- for dataControll
export * from './../cliente/__aux__/admThisModule/index.sub.ts'

// literals: fakes, seeds
export * from './__aux__/literals/index.ts'

// -- repositories
export * from './repositories/type.ts'
export * from './repositories/memory.repo.ts'
export * from './repositories/production.repo.ts'

// -- core : prototype --
export * from '../cliente/core/types.ts'
export * from './../cliente/core/set.ts'
export * from './../cliente/core/prototype.ts'

//  -- ACTIONS
// -- create --
export * from './actions/create/service/save.ts'
export * from './actions/create/service/pipe.ts'
export * from './actions/create/service/create.service.ts'
export * from './actions/create/_controller_/controller.actions.ts'
export * from './actions/create/_controller_/mocks.byTest.ts'

// -- managerCliente
export * from './actions/managerClientes/controller.ts'