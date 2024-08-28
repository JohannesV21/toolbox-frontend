import { getFormattedDataFiles } from "../../services/files/filesServices.js";
import { http, BACK_URL } from "../../config/httpService";

jest.mock("axios");

describe("getFormattedDataFiles Service", () => {
  let consoleErrorSpy;

  beforeEach(() => {
    // Espiar console.error antes de cada prueba
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    // Restaurar console.error después de cada prueba
    consoleErrorSpy.mockRestore();
  });

  it("should handle 404 error when fileName does not exist", async () => {
    const mockErrorResponse = {
      response: {
        status: 404,
        data: {
          error: "Server Error",
          message: "SYS-ERR - Not Found",
        },
      },
    };

    const fileName = "nonexistent.csv";
    http.get.mockRejectedValue(mockErrorResponse);

    const result = await getFormattedDataFiles(fileName);

    expect(result).toBeUndefined(); // Espera que el resultado sea indefinido debido al error
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `Error to get formatted data files: ${mockErrorResponse}`
    );
    expect(http.get).toHaveBeenCalledWith(`${BACK_URL}/files/data`, {
      params: { fileName },
    });
  });

  it("should return formatted data when no fileName is provided", async () => {
    const mockData = [
      {
        file: "test2.csv",
        lines: [
          {
            text: "jXi",
            number: 428042,
            hex: "4ac77da647e7fb2c89dae1a3217b5496",
          },
        ],
      },
      {
        file: "test3.csv",
        lines: [
          {
            text: "NUjIHdEePSWWERGJxfKiDBNn",
            number: 4086,
            hex: "a7a18d8ca21a890f3b07415cfeaed653",
          },
          {
            text: "rIZYam",
            number: 8604902,
            hex: "3107aa8f91c93481e965505df27425ba",
          },
        ],
      },
    ];

    http.get.mockResolvedValue({ data: mockData });

    const result = await getFormattedDataFiles();

    expect(result).toEqual(mockData);
    expect(http.get).toHaveBeenCalledWith(`${BACK_URL}/files/data`, {
      params: { fileName: "" },
    });
  });

  it("should return raw data when a specific fileName is provided", async () => {
    const mockRawData = `file,text,number,hex
    test6.csv,CbTzu
    test6.csv,OhEN,4847611o,5ebfa9e61970cb6108aa24d48932b8e1
    test6.csv,eOINZKSD,66o,591472c37b0d83cb02f6af4f8932f766
    test6.csv,kaiNy,2927o,9e4b4adbed6c628a7892c025386a97a3
    test6.csv,FVQjuqdwKBfaFVwyxAKVw,17o,8cd258d39684f81facafab279ffa154c
    test6.csv,TLSWPmlGt,6o,4f981846cb1f69ef8f0bedc82639945d
    test6.csv,DXpicGhhWboXtWyttH,9252o,469c25ed0b44e2071ac89e3d7dc0436d
    test6.csv,uqxiLRJlgn,379565o,27cf1399e67f890d8756c80227bcdb72
    test6.csv,sJUNYRCmckJw,93011o,01ea910d9a029c3e6ebba23e13369f52,,
    test6.csv,DzbTv
    test6.csv,Jlhh,26614882944487703008534004721384o,b8e478620daf259365e1f6ad8d0aa76e
    test6.csv,rMG,209490o,0b4dd421ef26c370f962b38151fcea40`;

    const fileName = "test6.csv";
    http.get.mockResolvedValue({ data: mockRawData });

    const result = await getFormattedDataFiles(fileName);

    expect(result).toEqual(mockRawData); // Verifica que se recibe la data cruda
    expect(http.get).toHaveBeenCalledWith(`${BACK_URL}/files/data`, {
      params: { fileName },
    });
  });

  it("should log an error message on failure", async () => {
    console.error = jest.fn();

    const mockError = new Error("Network Error");
    http.get.mockRejectedValue(mockError);

    const result = await getFormattedDataFiles();

    expect(result).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(
      `Error to get formatted data files: ${mockError}`
    );
  });
});
