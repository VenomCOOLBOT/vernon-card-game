import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="h-96 w-80 border border-foreground flex items-center justify-center flex-col space-y-8 rounded-3xl">
          <h1 className="text-3xl text-center">Vernon's Card Game</h1>
          <p className="px-4 text-base text-center text-muted-foreground">
            I spent way too much time on this...... Play with it I guess. Better
            play it or Da Babe will attack you in the conex box. (i&aposm kidding)
          </p>
          <Link href={"/game"}>
            <Button variant={"outline"} size={"lg"}>
              PLAY
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
