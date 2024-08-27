import { BACK_URL, http } from "../../config/httpService";

/**
 * Obtiene la lista de todos los archivos desde el servidor.
 *
 * Realiza una solicitud GET a la URL `${BACK_URL}/files/list` para recuperar la lista de archivos.
 *
 * @async
 * @function
 * @returns {Promise<Object[]>} Una promesa que resuelve con la lista de archivos.
 * @throws {Error} Si ocurre un error durante la solicitud.
 */
export const getAllFiles = async () => {
  try {
    const response = await http.get(`${BACK_URL}/files/list`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Error get all files services: ${error}`);
  }
};

/**
 * Obtiene los datos formateados de los archivos en caso de no recibir el argumento fileName.
 * Si recibe fileName hace una busqueda de la data cruda de un archivo en especifico.
 *
 * @async
 * @function
 * @param {string} [fileName] - Nombre del archivo para obtener los datos formateados.
 * @returns {Promise<Object>} Una promesa que resuelve con los datos formateados del archivo.
 * @throws {Error} Si ocurre un error durante la solicitud.
 */
export const getFormattedDataFiles = async (fileName = "") => {
  try {
    const response = await http.get(`${BACK_URL}/files/data`, {
      params: { fileName },
    });
    console.log("Formatted data: ", response);
    return response.data;
  } catch (error) {
    console.error(`Error to get formatted data files: ${error}`);
  }
};
