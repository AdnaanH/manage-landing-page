import Button from "./Button"

const Cta = () => {
  return (
    <section className="min-h-72 flex sm:flex-row flex-col sm:gap-0 gap-4 sm:justify-between justify-center items-center sm:px-24 px-6 bg-FstrawberryRed">
        <h1 className="sm:w-6/12 w-full sm:text-start text-center sm:text-5xl text-4xl font-bold font-BeVietnam text-white">Simplify how your team works today.</h1>
        <Button width="2/12" bg="bg-white" text="text-FstrawberryRed">Get Started</Button>
    </section>
  )
}

export default Cta
