import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())


interface IProducts {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
    image: string;
}
let products: IProducts[] = [
    {
        id: 1,
        name: "M·A·C Mineralize Gentle Blush Luminoso 3,5g",
        price: 130.00,
        stock: 20,
        category: "Maquiagem",
        image: "/imagens/blush.jpeg"
    },
    {
        id: 2,
        name: "M·A·C Studio Fix Fluid Foundation FPS 15 Base Líquida 30ml",
        price: 220.00,
        stock: 15,
        category: "Maquiagem",
        image: "/imagens/basemac.webp"
    },

    {
        id: 3,
        name: "M·A·C FY25 Intimate Neutrals Nude Board - Paleta de Sombras 6,25g",
        price: 280.00,
        stock: 25,
        category: "Maquiagem",
        image: "/imagens/sombra.jpeg"
    },

    {
        id: 4,
        name: "M·A·C Locked Kiss Sophistry - Batom Matte 1,8g",
        price: 80.00,
        stock: 30,
        category: "Maquiagem",
        image: "/imagens/batombloom.jpeg"

        
    },
    {
        id: 5,
        name: "M·A·C Locked Kiss Pink- Batom Matte 1,8g",
        price: 60.00,
        stock: 30,
        category: "Maquiagem",
        image: "/imagens/batompink.jpeg"
    },
    {
        id: 6,
        name:"M·A·C Prep + Prime Natural Radiance Radiant Pink - Primer 50ml",
        price: 80.00,
        stock: 30,
        category: "Maquiagem",
        image: "/imagens/primer.webp"
    },
    {
        id: 7,
        name: "M·A·C Retro Matte Liquid Lipcolour Topped with Brandy Batom Líquido 5ml",
        price: 95.00,
        stock: 30,
        category: "Maquiagem",
        image: "/imagens/batomliquido.webp"
    },
    {
        id: 8,
        name: "M·A·C In Extreme Dimension 3D Máscara para Cílios 13ml",
        price: 95.00,
        stock: 30,
        category: "Maquiagem",
        image: "/imagens/masccilios.jpeg"
    },
     {
        id: 9,
        name: "M·A·C Corretivo Liquido ",
        price: 65.00,
        stock: 30,
        category: "Maquiagem",
        image: "/imagens/corretivo.jpeg"
    },
     {
        id: 10,
        name: "M·A·C 168S Large Angled Pincel para Contorno",
        price: 254.00,
        stock: 30,
        category: "Pincel",
        image: "/imagens/pincelcont.webp"
    },
     {
        id: 11,
        name: "M·A·C Studio Fix Fluid Foundation FPS 15 NC20 Base Líquida 30ml",
        price: 220.00,
        stock: 30,
        category: "Maquiagem",
        image: "/imagens/basemac1.jpeg"
    },
    {
        id: 12,
        name: "M·A·C Pro Locked Gel de Sobrancelha 7,8ml",
        price: 95.00,
        stock: 30,
        category: "Maquiagem",
        image: "/imagens/gelsomb.jpeg"
    }


]

app.get('/produtos', (req: Request, res: Response) => { 
    return res.json(products)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})