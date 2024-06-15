import NavigationMenuDemo from "@/components/Navbar";
import { getGithubUser } from "@/lib/github";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Suspense } from 'react';
import { CardsSkeleton } from "@/components/ui/skeletons";
import { CardDemo } from "@/components/cardDemo";




export default async function Page() {
  const getGitH = await getGithubUser();
  const githubName = getGitH.name;
  const githubAvatar = getGitH.avatar_url;
  return (
    <>
      <NavigationMenuDemo />
      <main className="font-bold w-full  relative">
        <div className="flex flex-col gap-10 items-center justify-center h-full">
          <h1 className="text-6xl">Adding dark mode switcher</h1>
          <h2 className="text-4xl">
            using{" "}
            <span className="rounded p-2 bg-muted-foreground text-white">shadcn</span>
          </h2>
          <Suspense>
            <h1 className="text-6xl">{githubName}</h1>
            <Avatar>
              <AvatarImage src={githubAvatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Suspense>
          <div className="flex flex-col  lg:flex-row gap-4 sm:gap-6 md:gap-10 ...">
            <Suspense fallback={<CardsSkeleton />}>
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 items-center justify-center w-full h-full">
                <CardDemo />
              </div>
            </Suspense>
            <Suspense fallback={<CardsSkeleton />}>
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 items-center justify-center w-full h-full">
                <CardDemo />
              </div>
            </Suspense>
            <Suspense fallback={<CardsSkeleton />}>
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 items-center justify-center w-full h-full">
                <CardDemo />
              </div>
            </Suspense>
          </div>
          <div className="container mx-auto px-4">
          </div>
        </div>

      </main>
    </>
  )

}