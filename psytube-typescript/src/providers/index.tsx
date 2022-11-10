import { iChildren } from "../interfaces";
import { VideoProvider } from "./video";

function Providers({ children }: iChildren) {
  return <VideoProvider>{children}</VideoProvider>;
}

export default Providers;
