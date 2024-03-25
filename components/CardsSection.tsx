import MotionCards from "./clientComponents/MotionCards";


export default function Component() {
  return (
    <section id="vendeTuAuto" className="w-full py-12 md:py-24 lg:py-32 bg-grayBg">
      <div className="px-6 md:px-10">
        
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vendemos tu auto en tiempo récord.</h2>
          <p className="max-w-[500px] md:max-w-[600px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          En Z&Z, simplificamos la venta de tu auto para que sea una experiencia ágil, sin complicaciones y totalmente segura.
          </p>
        </div>

        <MotionCards />

      </div>
    </section>
  )
}
