import ButtonLink from "../components/ui/ButtonLink";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-4 py-24 md:px-8 lg:px-24">
      <title>Page not found | GDGoC UGM</title>
      <p className="text-muted text-xs font-medium uppercase">404</p>
      <h1 className="text-5xl font-bold">This page isn't here yet.</h1>
      <p className="text-muted text-lg">
        It may still be in progress. Head back home to keep exploring.
      </p>
      <ButtonLink to="/">Back to home</ButtonLink>
    </section>
  );
}
