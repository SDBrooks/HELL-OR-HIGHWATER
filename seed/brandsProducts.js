const db = require('../db')
const { Brand, Product } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const brand1 = await new Brand({
    name: 'Nike',
    // url: ' '
  })
  brand1.save()

  const brand2 = await new Brand({
    name: 'YEEZY',
    // url: ' '
  })
  brand2.save()

  const brand3 = await new Brand({
    name: 'Supreme',
    // url: ' '
  })
  brand3.save()

  const brand4 = await new Brand({
    name: 'MCQ',
    // url: ' '
  })
  brand4.save()

  const brand5 = await new Brand({
    name: 'Givenchy',
    // url: ' '
  })
  brand5.save()

  const brand6 = await new Brand({
    name: 'Moncler',
    // url: ' '
  })
  brand6.save()
  
  const brand7 = await new Brand({
    name: 'Balenciaga',
    // url: ' '
  })
  brand7.save()
  
  const brand8 = await new Brand({
    name: 'Celine Homme',
    // url: ' '
  })
  brand8.save()
  
  const brand9 = await new Brand({
    name: 'Gucci',
    // url: ' '
  })
  brand9.save()
  
  const brand10 = await new Brand({
    name: 'Fendi',
    // url: ' '
  })
  brand10.save()

  const brand11 = await new Brand({
    name: 'SAINT LAURENT',
    // url: ' '
  })
  brand11.save()

  const brand12 = await new Brand({
    name: 'KAPITAL',
    // url: ' '
  })
  brand12.save()

  const brand13 = await new Brand({
    name: 'Alexander McQueen',
    // url: ' '
  })
  brand13.save()

  const products = [
    {
      name: ' Nike Air Max 720 ISPA ',
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
        name: ' Nike Air Max 98 Triple White ',
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
        name: ' Nike Air Fear Of God 1 "Oatmeal" ',
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
        name: ' Adidas Yeezy Knit Runner Boot "Sulfer" ',
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
        name: ' Adidas Yeezy 450 "Cloud White" ',
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
        name: ' Supreme "Reign 23" Backpack ',
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
        name: ' Supreme Ambigram Keychain ',
        description: ' 3" metal keychain with enamel logo and 1" keyring. Original artwork by Mark Palmer. ',
        price: ' $22 ',
        inStock: false,
        colorWay: ' Red ',
        size: ' One Size ',
        itemCode: ' SUPNYC3KEY ',
        image: ' https://assets.supremenewyork.com/231239/ma/th8b3RDECmo.jpg ',
        brand: brand3._id
    },
    {
        name: ' MCQ Grow Up Quilted Patchwork Padded Cotton Hooded Jacket ',
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
        name: ' Givenchy Oversized Distressed Patchwork Bandana-Print Cotton Hooded Down Jacket ',
        description: ' Givenchy`s jacket is assembled in a patchwork of bandana prints and lightly distressed. It`s cut for an oversized fit from cotton and works well layered over chunky sweaters and hoodies. ',
        price: ' $1,200 ',
        inStock: true,
        colorWay: ' Multi-Color ',
        size: ' L ',
        itemCode: ' MCQQHJ-2022 ',
        image: ' https://cache.mrporter.com/variants/images/24665545640569709/in/w1200_q60.jpg ',
        brand: brand5._id
    },
    {
      title: 'Stumptown Hair Bender Coffee',
      description: 'https://www.stumptowncoffee.com/products/hair-bender',
      price: '17',
      brand: brand5._id
    }
  ]

  await Product.insertMany(products)
  console.log('Created products!')
}

const run = async () => {
  await main()
  db.close()
}

run()