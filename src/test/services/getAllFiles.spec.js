import { getAllFiles } from "../../services/files//filesServices";
import { http, BACK_URL } from "../../config/httpService";

jest.mock("axios");

describe("getAllFiles Service", () => {
  it("should return a list of files on success", async () => {
    const mockData = [
      "test1.csv",
      "test2.csv",
      "test3.csv",
      "test18.csv",
      "test4.csv",
      "test5.csv",
      "test6.csv",
      "test9.csv",
      "test15.csv",
    ];

    http.get.mockResolvedValue({ data: mockData });

    const result = await getAllFiles();

    expect(result).toEqual(mockData);
    expect(http.get).toHaveBeenCalledWith(`${BACK_URL}/files/list`);
  });

  it("should log an error message on failure", async () => {
    console.error = jest.fn();

    const mockError = new Error("Network Error");
    http.get.mockRejectedValue(mockError);

    const result = await getAllFiles();

    expect(result).toBeUndefined();
    expect(console.error).toHaveBeenCalledWith(
      `Error get all files services: ${mockError}`
    );
  });
});
