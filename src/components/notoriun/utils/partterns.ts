/**
 * NOTORIUN TECNOLOGIA EM SOFTWARE LTDA - 2022
 *
 *
 *
 *
*/

/**
 * Pattern to match formatted CEP (99999-999) or 8 numbers.
 */
 export const CEP_PATTERN = /^(\d{8}|\d{2}\.?\d{3}\-\d{3})$/;

/**
 * Pattern to match formatted CNPJ (99.999.999/9999-99) or 14 numbers.
 */
 export const CNPJ_PATTERN = /^(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2})$/;

 /**
 * Pattern to match formatted CPF (999.999.999-99) or 11 numbers.
 */
export const CPF_PATTERN = /^(\d{11}|\d{3}\.\d{3}\.\d{3}\-\d{2})$/;

/**
 * Pattern for common brazilian telephone number formats, optionally with DDI,
 * DDD and the ninth digit.
 */
export const PHONE_PATTERN = /^(\+55)? ?\(?(\d{2})?\)? ?9? ?\d{4}[-| ]?\d{4}$/;

/**
 * Parttern for brazilian cnh
 */
export const CNH_PARTTERN = /^([\d]{11})$/;

/**
 * Pattern to match formatted CEP (99999-999) or 8 numbers.
 */
 export const CEP_PARTTERN = /^(\d{8}|\d{2}\.?\d{3}\-\d{3})$/;
