/**
 * NOTORIUN TECNOLOGIA EM SOFTWARE LTDA - 2022
 *
 *
 */

import { resourceLimits } from 'worker_threads';

/**
 * NOTORIUN TECNOLOGIA EM SOFTWARE LTDA - 2022
 *
 * Roger B Scardua
 *
 * Modulo para validacao e formatacao de padroes brasileiro
 *
 */

// https://github.com/VitorLuizC/brazilian-values/tree/master/src
// https://github.com/brazanation/go-documents
// https://github.com/namio/BRADocs4Py/tree/master/bradocs4py



/**
 * @typedef  {Object} IBraziliaParttern - Base para os padroes brasileiros.
 * @property {number} lenDigits Numeros de digitos
 * @prop {number} lenDigitsVerify Quantidade de digitos do numero verificador
 * @prop {string} ValidatorRegex Expressao Regex de validacao
 * @prop {string} FormatterRegex
 *
 */

export interface IBraziliaParttern {
  lenDigits?: number;
  lenDigitsVerify?: number;
  ValidatorRegex: string;
  FormatterRegex: string;
}


export const isCpf = (d:IBraziliaParttern) => {
  return d

}

