const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.598577163185!2d168.65470507625062!3d-45.033073771070136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad21936eeb55253d%3A0x4c35db4cdbed8dc!2sMilkyways%20Tours%20%26%20Transfers!5e0!3m2!1sen!2sin!4v1790252492300!5m2!1sen!2sin'

const GoogleMapEmbed = () => {
  return (
    <section className="w-full bg-white">
      <iframe
        src={MAP_SRC}
        title="MilkyWays Tours & Transfers on Google Maps"
        className="w-full h-[280px] sm:h-[360px] md:h-[450px] border-0 block"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </section>
  )
}

export default GoogleMapEmbed
