// Mock the module
jest.mock("../app/dashboard/vault/findUserTrips", () => ({
    __esModule: true,
    default: jest.fn().mockResolvedValue([{ trip: "mock" }])
  }));
  
  import findUserTrips from "../app/dashboard/vault/findUserTrips";
  
  describe("findUserTrips mock", () => {
    test("mock returns expected data", async () => {
      const data = await findUserTrips();
      expect(data).toEqual([{ trip: "mock" }]);
    });
  });
  