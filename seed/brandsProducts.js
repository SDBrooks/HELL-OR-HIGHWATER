const db = require('../db')
const { Brand, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const brand1 = await new Brand({
    name: 'Nike',
  })
  brand1.save()

  const brand2 = await new Brand({
    name: 'YEEZY',
  })
  brand2.save()

  const brand3 = await new Brand({
    name: 'Supreme',
  })
  brand3.save()

  const brand4 = await new Brand({
    name: 'MCQ',
  })
  brand4.save()

  const brand5 = await new Brand({
    name: 'Givenchy',
  })
  brand5.save()

  const brand6 = await new Brand({
    name: 'Moncler',
  })
  brand6.save()
  
  const brand7 = await new Brand({
    name: 'Balenciaga',
  })
  brand7.save()
  
  const brand8 = await new Brand({
    name: 'CELINE HOMME',
  })
  brand8.save()

  const brand9 = await new Brand({
    name: 'KAPITAL',
  })
  brand9.save()

  const brand10 = await new Brand({
    name: 'Alexander McQueen',
  })
  brand10.save()

  const products = [
    {
      name: ' Nike - Air Max 720 ISPA ',
      description: ' The Nike Air Max 720 ISPA, short for “Improvise, Scavenge, Protect, Adapt,” is made for the colder weather as it comes equipped with a bit more of a rugged motif to help you battle whatever nature has to offer. The model borrows the Air unit from the 720 model and also utilizes the rivets from the React Elemen line. The upper is constructed out of a upgraded synthetic-and-mesh material placed alongside the asymmetrical tongue. Other details include the “Contains High Pressure Nitrogen” heel graphic and the removable heel clips. ',
      price: ' $210 ',
      inStock: true,
      colorWay: ' Summit White ',
      size: ' 12 ',
      itemCode: ' CD2182-100 ',
      image: ' https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_nike-air-max-720-ispa-summit-white-0.jpg ',
      brand: brand1._id
    },
    {
        name: ' Nike - Air Max 98 Triple White ',
        description: ' This version of the Air Max 98 is done in all-White across its mesh and leather upper. Pure Platinum accents are seen on Swoosh logos and branding areas, while the signature Air Max cushioning and matching White rubber outsole completes the design altogether. ',
        price: ' $160 ',
        inStock: true,
        colorWay: ' White/Pure Platinum-Black-Reflect Silver ',
        size: ' 12 ',
        itemCode: ' 640744-106 ',
        image: ' https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_nike-air-max-98-triple-white-0.jpg ',
        brand: brand1._id
    },
    {
        name: ' Nike - Air Fear Of God 1 "Oatmeal" ',
        description: ' The Nike Air Fear of God 1 “Oatmeal” comes dressed in a Tan/Beige upper that takes care of the knitted bootie upper, exterior cage, and laces. Below you will find a translucent sole with the 180-inspired Air unit to round out the subtle aesthetics of the shoe. ',
        price: ' $350 ',
        inStock: false,
        colorWay: ' Multi-Color/String-Oatmeal ',
        size: ' Unavailable ',
        itemCode: ' AR4237-900 ',
        image: ' https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_nike-air-fear-of-god-1-oatmeal-0.jpg ',
        brand: brand1._id
    },
    {
        name: ' Adidas - Yeezy Knit Runner Boot "Sulfer" ',
        description: ' The adidas Yeezy Knit Runner Boot was unveiled by Kanye West himself during last year`s Yeezy Season 8 showing. Unique in design, the lower half of the boost is covered in a Yellow overlay that looks very similar to the design of the adidas Yeezy Knit Runner that dropped back in September. The other notable feature is the extended collar and a velcro fastening system that take care of the rest of the exposed upper. Below you will find a thick tread underfoot ideal for the harsh weather conditions that winter brings. ',
        price: ' $400 ',
        inStock: true,
        colorWay: ' Sulfer/Sulfer/Sulfer ',
        size: ' 9 ',
        itemCode: ' GY1824 ',
        image: ' https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_adidas-yeezy-knit-runner-boot-sulfur-0.jpeg ',
        brand: brand2._id
    },
    { 
        name: ' Adidas - Yeezy 450 "Cloud White" ',
        description: ' The adidas Yeezy 450 was designed by Steven Smith, who also designed the Reebok Insta Pump Fury and Nike Zoom Streak Spectrum Plus. This colorway of the adidas Yeezy 450 is constructed with a Cloud White mesh upper, unique lacing system and sits atop a very aggressive White sole that grips the shoe. There are no signs of either Boost or adiPRENE cushioning, thus making it a first for a non-boot Yeezy. ',
        price: ' $200 ',
        inStock: true,
        colorWay: ' Cloud White ',
        size: ' 11 ',
        itemCode: ' H68038 ',
        image: ' https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_adidas-yeezy-450-cloud-white.jpg ',
        brand: brand2._id
    },
    {
        name: ' Supreme - "Reign 23" Backpack ',
        description: ' Water resistant Cordura® recycled nylon ripstop with embossed logo lining. Main zip compartment with single layer laptop sleeve. Front zip compartment with interior zip pocket and organizer pockets. Elastic mesh side pockets with interior elastic shockcords. Padded mesh back panel and adjustable shoulder straps. Elastic utility shockcord with printed logo pattern at front. Woven logo label at front. Embroidered graphic at lower front and embroidered logo on side. 23L. ',
        price: ' $158 ',
        inStock: true,
        colorWay: ' Brown ',
        size: ' One Size ',
        itemCode: ' SUPNYC23L ',
        image: ' https://assets.supremenewyork.com/231239/ma/th8b3RDECmo.jpg ',
        brand: brand3._id
    },
    {
        name: ' Supreme - GORE-TEX PACLITE® Suit ',
        description: ' Waterproof, breathable GORE-TEX PACLITE® poly shell with taped seams. Full zip closure with zip hand pockets and zip stash pocket at sleeve. Fixed hood with interior elastic shockcord. Two-way pit zips and velcro tab adjusters at cuffs. Interior elastic shockcord and full-leg zip openings at cuffs. Embroidered logos on hood and sleeve with printed logo at right side. ',
        price: ' $398 ',
        inStock: false,
        colorWay: ' White ',
        size: ' Sold out ',
        itemCode: ' SUPNYCGTP ',
        image: ' https://assets.supremenewyork.com/231955/ma/3M_APawJFpQ.jpg ',
        brand: brand3._id
    },
    {
        name: ' MCQ - Grow Up Quilted Patchwork Padded Cotton Hooded Jacket ',
        description: ' Give the impression of being a committed make and mender with MCQ`s patchwork jacket. Part of the label`s "Grow Up" collection, which makes use of overstock textiles from past seasons, it`s cut from cotton patterned with an array of prints and quilted with insulating padding. ',
        price: ' $1,200 ',
        inStock: true,
        colorWay: ' Multi-Color ',
        size: ' L ',
        itemCode: ' MCQQHJ-2022 ',
        image: ' https://cache.mrporter.com/variants/images/24665545640569709/in/w1200_q60.jpg ',
        brand: brand4._id
    },
    {
        name: ' Givenchy - Oversized Distressed Patchwork Bandana-Print Cotton Hooded Down Jacket ',
        description: ' Givenchy`s jacket is assembled in a patchwork of bandana prints and lightly distressed. It`s cut for an oversized fit from cotton and works well layered over chunky sweaters and hoodies. ',
        price: ' $5,595 ',
        inStock: true,
        colorWay: ' Brown ',
        size: ' M ',
        itemCode: ' GPBCHJ-2022 ',
        image: ' https://cache.mrporter.com/variants/images/15546005221988662/in/w560_q60.jpg ',
        brand: brand5._id
    },
    {
        name: ' Givenchy - Oversized Logo-Appliquéd Cotton-Jersey T-Shirt ',
        description: ' Riffing on retro styles, Givenchy`s T-shirt is appliquéd with a varsity-inspired iteration of the house moniker. It`s cut for an oversized fit from soft cotton-jersey and lightly distressed. ',
        price: ' $850 ',
        inStock: true,
        colorWay: ' Black ',
        size: ' S ',
        itemCode: ' OLACJT-2022 ',
        image: ' https://cache.mrporter.com/variants/images/30629810020329736/in/w560_q60.jpg ',
        brand: brand5._id
    },
    {
        name: ' Moncler - Coutard Quilted Glossed-Shell Hooded Down Jacket ',
        description: ' Moncler takes its name from the Alpine town of Monestier-de-Clermont and its collections are always built with those snowy conditions in mind. This "Coutard" jacket is cut from glossy midnight-blue shell that`s quilted and packed with insulating down. The sleeve is appliquéd with the house logo. ',
        price: ' $1,680 ',
        inStock: true,
        colorWay: ' Yellow ',
        size: ' XL ',
        itemCode: ' MCQGHJ-2022 ',
        image: ' https://cache.mrporter.com/variants/images/13452677151086347/in/w1200_q60.jpg ',
        brand: brand6._id
    },
    {
        name: ' Moncler - Etievant Slim-Fit Reversible Quilted Shell Hooded Down Jacket ',
        description: ' Moncler`s "Etievant" jacket is reversible - one side is made from water-repellent matte shell, while the other is done in the signature Longue Saison glossed fabric. Padded with down, it has a drawstring hood and waist to trap heat and features the label`s felted logo on the sleeve. ',
        price: ' $2,180 ',
        inStock: true,
        colorWay: ' Grey ',
        size: ' L ',
        itemCode: ' MESRQJ-2022 ',
        image: ' https://cache.mrporter.com/variants/images/13452677151085694/in/w560_q60.jpg ',
        brand: brand6._id
    },
    {
        name: ' Balenciaga - Triple S Mesh and Faux Leather Sneakers ',
        description: ' Balenciaga`s first release of "Triple S" sneakers sold out within minutes, and each new colourway since has been met with the same reaction from fans. Set on triple-stacked soles moulded from running, basketball and track styles, this midnight-blue pair is made from a combination of mesh and faux leather. They have comfortably padded collars and are embroidered with the size on the toe. ',
        price: ' $1,150 ',
        inStock: true,
        colorWay: ' Midnight blue ',
        size: ' 10 ',
        itemCode: ' BTSMLS-2022 ',
        image: ' https://cache.mrporter.com/variants/images/18706561955792280/in/w1200_q60.jpg ',
        brand: brand7._id
    },
    {
        name: ' Balenciaga - Oversized Logo-Embroidered Quilted Padded Checked Shell Jacket ',
        description: ' Balenciaga`s signature oversized silhouette lends itself well to outerwear - this coat will layer easily over just about anything. Padded and quilted for warmth, it`s been made in Italy from checked shell and embroidered with a red logo at the chest. ',
        price: ' $3,350 ',
        inStock: true,
        colorWay: ' Black ',
        size: ' XS ',
        itemCode: ' BOLQCJ-2022 ',
        image: ' https://cache.mrporter.com/variants/images/33258524072377082/in/w1200_q60.jpg ',
        brand: brand7._id
    },
    {
        name: ' CELINE HOMME - Brushed Cotton-Jacquard Cardigan ',
        description: ' Hedi Slimane is back with CELINE HOMME`s SS22 collection and this time he`s bringing puppies along for the ride, along with 14 freshly commissioned artists. Dotted with furry dalmatians, this softly brushed cardigan is knitted from pink, white and black cotton-jacquard. Take a size up to make the loose fit oversized and the sleeves even longer. ',
        price: ' $1,800 ',
        inStock: true,
        colorWay: ' Pink ',
        size: ' M ',
        itemCode: ' CHBCJC-2022 ',
        image: ' https://cache.mrporter.com/variants/images/32027475399126536/in/w1200_q60.jpg ',
        brand: brand8._id
    },
    {
        name: ' CELINE HOMME - Cotton-Blend Jacquard Beanie ',
        description: ' For SS22, CELINE HOMME commissioned some of its favourite artists to create prints for the collection. The dalmatian puppies on this beanie were taken from illustrator Amy Dorian`s work "BRAIN ON 2020". It`s been knitted in Italy from cotton-blend jacquard and brushed for an almost vintage look. ',
        price: ' $350 ',
        inStock: true,
        colorWay: ' Pink ',
        size: ' One Size ',
        itemCode: ' CHBCJC-2022 ',
        image: ' https://cache.mrporter.com/variants/images/32027475399555306/in/w560_q60.jpg ',
        brand: brand8._id
    },
    {
        name: ' KAPITAL - Quilted Patchwork Bandana-Print Padded Cotton Jacket ',
        description: ' KAPITAL uses the traditional Japanese boro patchworking technique in so many of its designs that it`s become something of a brand signature. Cut for a boxy fit, this quilted jacket is panelled from bandana-print cotton swatches in a varied pattern that makes each piece unique. ',
        price: ' $985 ',
        inStock: true,
        colorWay: ' Blue ',
        size: ' M ',
        itemCode: ' KQPBPJ-2022 ',
        image: ' https://cache.mrporter.com/variants/images/20346390236285308/in/w560_q60.jpg ',
        brand: brand9._id
    },
    {
        name: ' KAPITAL - Bandana-Print Woven Padded Shell Gilet ',
        description: ' KAPITAL`s cult-famous bandana motif almost naturally emerged from Mr Kiro Hirata`s years as a vintage collector. Printed across strips of shell, this gilet mimics quilted down with a basket-weaving technique, making it slightly more flexible and breathable, while still insulating. ',
        price: ' $2,355  ',
        inStock: true,
        colorWay: ' Red ',
        size: ' L ',
        itemCode: ' KBPWPG-2022 ',
        image: ' https://cache.mrporter.com/variants/images/34480784411735173/in/w1200_q60.jpg ',
        brand: brand9._id
    },
    {
        name: ' Alexander McQueen - Exaggerated-Sole Suede-Trimmed Leather Sneakers ',
        description: ' Alexander McQueen`s exaggerated-sole sneakers need no introduction - they`ve been popular since 2016. This pair has been made in Italy from white leather and trimmed with black suede heel tabs. ',
        price: ' $540  ',
        inStock: true,
        colorWay: ' White ',
        size: ' 12 ',
        itemCode: ' AMEPLS-2022 ',
        image: ' https://cache.mrporter.com/variants/images/25185454457128280/fr/w560_q60.jpg ',
        brand: brand10._id
    },
    {
        name: ' Alexander McQueen - Logo-Jacquard Canvas Messenger bag ',
        description: ' Alexander McQueen`s messenger bag is an apt option for days when you need to carry more than just your pockets can hold. It`s made from durable canvas that`s jacquard-woven with the label`s signature skulls and has a number of compartments for storing the essentials. The webbing strap adjusts to your desired length. ',
        price: ' $680  ',
        inStock: true,
        colorWay: ' Black ',
        size: ' One Size ',
        itemCode: ' AMLCMB-2022 ',
        image: ' https://cache.mrporter.com/variants/images/27086482324554361/in/w1200_q60.jpg ',
        brand: brand10._id
    },
  ]

  await Product.insertMany(products)
  console.log('Created products!')
}

const run = async () => {
  await main()
  db.close()
}

run()