import { useMemo } from "react";
import StaticImages from "./static_images";

export const homeCardData = [
  {
    key: "k1",
    navigateTo: "../../basket",
    title: "Neumaticos",
    imageSource: StaticImages.detailedIcons.tyre,
  },
  {
    key: "k2",
    navigateTo: "../../basket",
    title: "Frenos",
    imageSource: StaticImages.detailedIcons.brake,
  },
  {
    key: "k3",
    navigateTo: "../../basket",
    title: "Aceite",
    imageSource: StaticImages.detailedIcons.oil,
  },
  {
    key: "k4",
    navigateTo: "../../basket",
    title: "Embrague",
    imageSource: StaticImages.detailedIcons.engine,
  },
  {
    key: "k5",
    navigateTo: "../../basket",
    title: "Amortiguador",
    imageSource: StaticImages.detailedIcons.shockAbsorber,
  },
  {
    key: "k6",
    navigateTo: "../../basket/ProductList",
    title: "Correas",
    imageSource: StaticImages.detailedIcons.timingBelt,
  },
];
  // Data for BigCard components
  export const bigCardMantenimiento = [
    {
      key: "bc1c",
      navigateTo: "../../basket",
      title: "PreITV + ITV",
      imageSource: StaticImages.kitImages.ITVIm,
      subtitle:
        "Este pack incluye una revisión previa y la gestión completa de tu ITV.",
    },
    {
      key: "bc2c",
      navigateTo: "../../basket",
      title: "Diagnosis",
      imageSource: StaticImages.kitImages.diagnosis,
      subtitle:
        "Realizamos un diagnóstico de las averías y un presupuesto de reparación.",
    },
    {
      key: "bc3c",
      navigateTo: "../../basket",
      title: "Pintura del coche",
      imageSource: StaticImages.kitImages.pintura,
      subtitle: "Pintamos los rayones o partes completas de tu coche.",
    },
  ];

export const cars = [
  { name: "Mercedes-Benz GLC Coupe", descr: "253 2.220 d 4-matic 4x4", specs:{ matricula: "2434 LKM",caja: "Automática", combustible: "Diésel", potencia: "194 CV", cilindrada: "2L" }},
  { name: "BMW X5 G05", descr: "3.0 30d MHEV xDrive", specs:{ matricula: "5261 MNB", caja: "Automática", combustible: "Diésel MHEV", potencia: "286 CV", cilindrada: "3L" }},
  { name: "Audi Q7 4M 50 TDI Quattro", descr: "Tiptronic", specs:{ matricula: "9123 KJF", caja: "Automática", combustible: "Diésel", potencia: "286 CV", cilindrada: "3L" }},
  { name: "Porsche Cayenne E-Hybrid Coupe", descr: "3.0 V6", specs:{ matricula: "3452 ZXY", caja: "Automática", combustible: "Híbrido", potencia: "462 CV", cilindrada: "3L" }},
  { name: "Range Rover Sport L494", descr: "2.0 PHEV 400e 4WD", specs:{ matricula: "7890 CDE", caja: "Automática", combustible: "Híbrido Enchufable", potencia: "404 CV", cilindrada: "2L" }},
];

export const bigCardAyuda = [
  {
    key: "bc2cdfexsw",
    navigateTo: "../../help",
    title: "Nuestras Políticas",
    imageSource: StaticImages.kitImages.devolucion1,
    subtitle:
      "Realizamos un diagnóstico de las averías y un presupuesto de reparación.",
  },
  {
    key: "bcfasdfa3c",
    navigateTo: "../../help",
    title: "Consejos y directrices de seguridad",
    imageSource: StaticImages.kitImages.devolucion2,
    subtitle: "Pintamos los rayones o partes completas de tu coche.",
  },
]