import "@testing-library/jest-dom";
import "whatwg-fetch";
import mockServer from "core/tests/mockServer";

beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());
