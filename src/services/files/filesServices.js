import { BACK_URL, http } from "../../config/httpService";

export const getAllFiles = async () => {
  try {
    const response = await http.get(`${BACK_URL}/files/list`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(`Error get all files services: ${error}`);
  }
};

export const getFormattedDataFiles = async (fileName = "test9.csv") => {
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
