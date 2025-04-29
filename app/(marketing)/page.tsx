import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="container pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="text-center flex flex-col items-center gap-4 max-w-[80rem] mx-auto">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium test-sm"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNext.jsで作成されたものです。ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
      >
        <div className="text-center space-y-6 max-w-[56rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術スタックを使ってすくられたWebアプリケーションです。Next.jsAppRouterやContentlayerを利用してマークダウン形式でブログ投稿ができます。
          </p>
        </div>

        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m11.345 2.405l-.303.027c-2.84.256-5.501 1.789-7.187 4.144a9.9 9.9 0 0 0-1.765 4.37c-.08.548-.09.71-.09 1.455s.01.907.09 1.457c.543 3.755 3.216 6.91 6.84 8.079c.65.209 1.334.351 2.112.438c.303.033 1.613.033 1.916 0c1.343-.15 2.48-.481 3.603-1.054c.172-.088.205-.112.182-.131c-.016-.012-.749-.995-1.629-2.184l-1.599-2.16l-2.004-2.965a287 287 0 0 0-2.017-2.963c-.008-.002-.016 1.315-.02 2.924c-.006 2.817-.008 2.93-.043 2.997a.36.36 0 0 1-.172.178c-.063.03-.117.037-.412.037h-.339l-.09-.057a.4.4 0 0 1-.13-.143l-.042-.088l.004-3.919l.006-3.921l.06-.076a.5.5 0 0 1 .145-.12c.08-.039.112-.043.45-.043c.399 0 .465.016.569.13c.03.03 1.114 1.665 2.412 3.633l3.946 5.976l1.583 2.398l.08-.052c.71-.462 1.46-1.118 2.055-1.803a9.95 9.95 0 0 0 2.354-5.111c.08-.55.09-.712.09-1.457c0-.744-.01-.907-.09-1.456c-.543-3.755-3.216-6.91-6.84-8.079a10.5 10.5 0 0 0-2.083-.436c-.187-.02-1.48-.04-1.642-.025m4.094 6.048c.094.047.17.137.197.23c.016.051.02 1.138.016 3.587l-.006 3.515l-.62-.95l-.621-.95V11.33c0-1.652.008-2.58.02-2.625a.4.4 0 0 1 .193-.246c.08-.041.11-.045.416-.045c.29 0 .34.004.405.039"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m11.345 2.405l-.303.027c-2.84.256-5.501 1.789-7.187 4.144a9.9 9.9 0 0 0-1.765 4.37c-.08.548-.09.71-.09 1.455s.01.907.09 1.457c.543 3.755 3.216 6.91 6.84 8.079c.65.209 1.334.351 2.112.438c.303.033 1.613.033 1.916 0c1.343-.15 2.48-.481 3.603-1.054c.172-.088.205-.112.182-.131c-.016-.012-.749-.995-1.629-2.184l-1.599-2.16l-2.004-2.965a287 287 0 0 0-2.017-2.963c-.008-.002-.016 1.315-.02 2.924c-.006 2.817-.008 2.93-.043 2.997a.36.36 0 0 1-.172.178c-.063.03-.117.037-.412.037h-.339l-.09-.057a.4.4 0 0 1-.13-.143l-.042-.088l.004-3.919l.006-3.921l.06-.076a.5.5 0 0 1 .145-.12c.08-.039.112-.043.45-.043c.399 0 .465.016.569.13c.03.03 1.114 1.665 2.412 3.633l3.946 5.976l1.583 2.398l.08-.052c.71-.462 1.46-1.118 2.055-1.803a9.95 9.95 0 0 0 2.354-5.111c.08-.55.09-.712.09-1.457c0-.744-.01-.907-.09-1.456c-.543-3.755-3.216-6.91-6.84-8.079a10.5 10.5 0 0 0-2.083-.436c-.187-.02-1.48-.04-1.642-.025m4.094 6.048c.094.047.17.137.197.23c.016.051.02 1.138.016 3.587l-.006 3.515l-.62-.95l-.621-.95V11.33c0-1.652.008-2.58.02-2.625a.4.4 0 0 1 .193-.246c.08-.041.11-.045.416-.045c.29 0 .34.004.405.039"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m11.345 2.405l-.303.027c-2.84.256-5.501 1.789-7.187 4.144a9.9 9.9 0 0 0-1.765 4.37c-.08.548-.09.71-.09 1.455s.01.907.09 1.457c.543 3.755 3.216 6.91 6.84 8.079c.65.209 1.334.351 2.112.438c.303.033 1.613.033 1.916 0c1.343-.15 2.48-.481 3.603-1.054c.172-.088.205-.112.182-.131c-.016-.012-.749-.995-1.629-2.184l-1.599-2.16l-2.004-2.965a287 287 0 0 0-2.017-2.963c-.008-.002-.016 1.315-.02 2.924c-.006 2.817-.008 2.93-.043 2.997a.36.36 0 0 1-.172.178c-.063.03-.117.037-.412.037h-.339l-.09-.057a.4.4 0 0 1-.13-.143l-.042-.088l.004-3.919l.006-3.921l.06-.076a.5.5 0 0 1 .145-.12c.08-.039.112-.043.45-.043c.399 0 .465.016.569.13c.03.03 1.114 1.665 2.412 3.633l3.946 5.976l1.583 2.398l.08-.052c.71-.462 1.46-1.118 2.055-1.803a9.95 9.95 0 0 0 2.354-5.111c.08-.55.09-.712.09-1.457c0-.744-.01-.907-.09-1.456c-.543-3.755-3.216-6.91-6.84-8.079a10.5 10.5 0 0 0-2.083-.436c-.187-.02-1.48-.04-1.642-.025m4.094 6.048c.094.047.17.137.197.23c.016.051.02 1.138.016 3.587l-.006 3.515l-.62-.95l-.621-.95V11.33c0-1.652.008-2.58.02-2.625a.4.4 0 0 1 .193-.246c.08-.041.11-.045.416-.045c.29 0 .34.004.405.039"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m11.345 2.405l-.303.027c-2.84.256-5.501 1.789-7.187 4.144a9.9 9.9 0 0 0-1.765 4.37c-.08.548-.09.71-.09 1.455s.01.907.09 1.457c.543 3.755 3.216 6.91 6.84 8.079c.65.209 1.334.351 2.112.438c.303.033 1.613.033 1.916 0c1.343-.15 2.48-.481 3.603-1.054c.172-.088.205-.112.182-.131c-.016-.012-.749-.995-1.629-2.184l-1.599-2.16l-2.004-2.965a287 287 0 0 0-2.017-2.963c-.008-.002-.016 1.315-.02 2.924c-.006 2.817-.008 2.93-.043 2.997a.36.36 0 0 1-.172.178c-.063.03-.117.037-.412.037h-.339l-.09-.057a.4.4 0 0 1-.13-.143l-.042-.088l.004-3.919l.006-3.921l.06-.076a.5.5 0 0 1 .145-.12c.08-.039.112-.043.45-.043c.399 0 .465.016.569.13c.03.03 1.114 1.665 2.412 3.633l3.946 5.976l1.583 2.398l.08-.052c.71-.462 1.46-1.118 2.055-1.803a9.95 9.95 0 0 0 2.354-5.111c.08-.55.09-.712.09-1.457c0-.744-.01-.907-.09-1.456c-.543-3.755-3.216-6.91-6.84-8.079a10.5 10.5 0 0 0-2.083-.436c-.187-.02-1.48-.04-1.642-.025m4.094 6.048c.094.047.17.137.197.23c.016.051.02 1.138.016 3.587l-.006 3.515l-.62-.95l-.621-.95V11.33c0-1.652.008-2.58.02-2.625a.4.4 0 0 1 .193-.246c.08-.041.11-.045.416-.045c.29 0 .34.004.405.039"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m11.345 2.405l-.303.027c-2.84.256-5.501 1.789-7.187 4.144a9.9 9.9 0 0 0-1.765 4.37c-.08.548-.09.71-.09 1.455s.01.907.09 1.457c.543 3.755 3.216 6.91 6.84 8.079c.65.209 1.334.351 2.112.438c.303.033 1.613.033 1.916 0c1.343-.15 2.48-.481 3.603-1.054c.172-.088.205-.112.182-.131c-.016-.012-.749-.995-1.629-2.184l-1.599-2.16l-2.004-2.965a287 287 0 0 0-2.017-2.963c-.008-.002-.016 1.315-.02 2.924c-.006 2.817-.008 2.93-.043 2.997a.36.36 0 0 1-.172.178c-.063.03-.117.037-.412.037h-.339l-.09-.057a.4.4 0 0 1-.13-.143l-.042-.088l.004-3.919l.006-3.921l.06-.076a.5.5 0 0 1 .145-.12c.08-.039.112-.043.45-.043c.399 0 .465.016.569.13c.03.03 1.114 1.665 2.412 3.633l3.946 5.976l1.583 2.398l.08-.052c.71-.462 1.46-1.118 2.055-1.803a9.95 9.95 0 0 0 2.354-5.111c.08-.55.09-.712.09-1.457c0-.744-.01-.907-.09-1.456c-.543-3.755-3.216-6.91-6.84-8.079a10.5 10.5 0 0 0-2.083-.436c-.187-.02-1.48-.04-1.642-.025m4.094 6.048c.094.047.17.137.197.23c.016.051.02 1.138.016 3.587l-.006 3.515l-.62-.95l-.621-.95V11.33c0-1.652.008-2.58.02-2.625a.4.4 0 0 1 .193-.246c.08-.041.11-.045.416-.045c.29 0 .34.004.405.039"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-center p-6 h-[180px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m11.345 2.405l-.303.027c-2.84.256-5.501 1.789-7.187 4.144a9.9 9.9 0 0 0-1.765 4.37c-.08.548-.09.71-.09 1.455s.01.907.09 1.457c.543 3.755 3.216 6.91 6.84 8.079c.65.209 1.334.351 2.112.438c.303.033 1.613.033 1.916 0c1.343-.15 2.48-.481 3.603-1.054c.172-.088.205-.112.182-.131c-.016-.012-.749-.995-1.629-2.184l-1.599-2.16l-2.004-2.965a287 287 0 0 0-2.017-2.963c-.008-.002-.016 1.315-.02 2.924c-.006 2.817-.008 2.93-.043 2.997a.36.36 0 0 1-.172.178c-.063.03-.117.037-.412.037h-.339l-.09-.057a.4.4 0 0 1-.13-.143l-.042-.088l.004-3.919l.006-3.921l.06-.076a.5.5 0 0 1 .145-.12c.08-.039.112-.043.45-.043c.399 0 .465.016.569.13c.03.03 1.114 1.665 2.412 3.633l3.946 5.976l1.583 2.398l.08-.052c.71-.462 1.46-1.118 2.055-1.803a9.95 9.95 0 0 0 2.354-5.111c.08-.55.09-.712.09-1.457c0-.744-.01-.907-.09-1.456c-.543-3.755-3.216-6.91-6.84-8.079a10.5 10.5 0 0 0-2.083-.436c-.187-.02-1.48-.04-1.642-.025m4.094 6.048c.094.047.17.137.197.23c.016.051.02 1.138.016 3.587l-.006 3.515l-.62-.95l-.621-.95V11.33c0-1.652.008-2.58.02-2.625a.4.4 0 0 1 .193-.246c.08-.041.11-.045.416-.045c.29 0 .34.004.405.039"
                />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto md:max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            Post Writerはログインするとブログ投稿ができるようになります。
          </p>
        </div>
      </section>

      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            もしもWebサービスが気に入った場合は下記XからDMでご連絡ください。
            <br />
            お仕事のご連絡お待ちしております。
          </p>
          <Link
            href={siteConfig.links.x}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            お仕事はXまで
          </Link>
        </div>
      </section>
    </>
  );
}
