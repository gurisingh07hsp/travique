import React from 'react'
const brands = [
  { name: "Ultra Prestigious", text: "ULTRA\nPRESTIGIOUS\nAWARD\nWINNER" },
  { name: "QC Power XR2", text: "QC POWER\nXR2\nMODULE" },
  { name: "Award Winner", text: "AWARD\nWINNER" },
  { name: "International Standard", text: "INTERNATIONAL\nSTANDARD" },
  { name: "Logoipsum", text: "logoipsum" },
];
const BrandSection = () => {
  return (
     <section className="w-full py-10 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between gap-8 flex-wrap">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="text-muted-foreground/40 text-xs font-bold tracking-widest uppercase whitespace-pre-line text-center"
          >
            {brand.text}
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandSection
