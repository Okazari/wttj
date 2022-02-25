import { setupServer } from "msw/node";
import mockOrganisation from "./mockOrganization";

const mockServer = setupServer(mockOrganisation);

export default mockServer;
