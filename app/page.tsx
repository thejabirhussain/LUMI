import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamicComponent from "next/dynamic";

export const dynamic = "force-dynamic";

const Chat = dynamicComponent(() => import("@/components/Chat"), {
  ssr: false,
});

export default async function Page() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error('Unable to get access token');
  }

  return (
    <div className={"grow flex flex-col"}>
      <Chat accessToken={accessToken} />
    </div>
  );
}
