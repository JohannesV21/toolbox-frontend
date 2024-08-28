import useFiles from "../../utils/hooks/useGetAllFiles";
import { getAllFiles } from "../../services/files/filesServices";
import { renderHook } from "@testing-library/react";

// Mocks
jest.mock("../../services/files/filesServices");

describe("useFiles", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initially set loading to true and error to null", () => {
    const { result } = renderHook(() => useFiles());
    expect(result.current.listFiles).toEqual([]);
    expect(result.current.listFilesLoading).toBe(true);
    expect(result.current.listFilesError).toBe(null);
  });

  it("should handle successful data fetch", async () => {
    const mockData = ["file1.csv", "file2.csv"];
    getAllFiles.mockResolvedValue(mockData);

    const { result, waitFor } = renderHook(() => useFiles());

    await waitFor(() => !result.current.listFilesLoading);

    expect(result.current.listFiles).toEqual(mockData);
    expect(result.current.listFilesLoading).toBe(false);
    expect(result.current.listFilesError).toBe(null);
  });

  it("should handle failed data fetch", async () => {
    const mockError = new Error("Network Error");
    getAllFiles.mockRejectedValue(mockError);

    const { result, waitFor } = renderHook(() => useFiles());

    await waitFor(() => !result.current.listFilesLoading);

    expect(result.current.listFiles).toEqual([]);
    expect(result.current.listFilesLoading).toBe(false);
    expect(result.current.listFilesError).toBe(
      `Error al obtener archivos: ${mockError.message}`
    );
  });

  it("should handle empty response data", async () => {
    getAllFiles.mockResolvedValue(null);

    const { result, waitFor } = renderHook(() => useFiles());

    await waitFor(() => !result.current.listFilesLoading);

    expect(result.current.listFiles).toEqual([]);
    expect(result.current.listFilesLoading).toBe(false);
    expect(result.current.listFilesError).toBe(
      "No se pudieron obtener los archivos"
    );
  });
});
