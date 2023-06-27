// deno-lint-ignore-file no-unused-vars
/**
 * @sequencia 01/replicas EXTERNAS :: traz os imports reais { Uniques *** Deps_Modular_ImportMapJSON }
 * @description entityFeatureDeps - #Unique  #Replicas -> leva os links para o _RootDependencias
 * @unique fonteUnica para mudar os links reais de dependências: [ internas e externas ]
 * @tasksExternal -> <importa aqui os artefatosExternos -> replique com alias <as> e use o alias na app.>
 */

// dateMomentRZ ============================================================
export { superDateTS as SuperDateTS } from "/home/rzj/..gitAll/SuperLibsRZ/SuperDateTS/main.ts";

// // devToolsRZ ============================================================
export { log as Log } from "https://raw.githubusercontent.com/rzjprogramador/SuperDevToolsTS/feature/RZ_Libs_devTools/main.ts";

// // appUserRZ ============================================================
export type {
  ILoggPersonModel as IMakeILoggPersonModel,
  ILoggUserType as IMakeILoggUserType,
} from "/home/rzj/..gitAll/SuperLibsRZ/SuperAppUserTS/src/main.ts";

// // objectValuesFN ============================================================
// REPLICA DE TODOS objectValuesFN ->
export { superValidateTS as SuperValidateTS } from "/home/rzj/..gitAll/SuperLibsRZ/SuperValidatesTS/src/main.ts";

