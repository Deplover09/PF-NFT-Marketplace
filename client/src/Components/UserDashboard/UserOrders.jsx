import React from "react";
import UserOrderCard from "./UserOrderCard";
import { useSelector } from "react-redux";


const UserOrder = () => {

    const user = (useSelector((state) => state.currentUser));

    const dataFalse = [
        {
            id: "222-34-ffefef-re32323",
            image: "https://cdn-icons-png.flaticon.com/512/1160/1160040.png?w=740&t=st=1662562187~exp=1662562787~hmac=4e81ab45c142d4e1ba117cc74f05df4bfa43bd3ec69b23769d5443b1cb0f0529",
            nombre: "Fernado Camilo",
            email: "FernadoPrueba@gmail.com",
            direccion: "CalleFalsa 123",
            fecha_Compra: "11-nov-2022",
            estado: "Despachado",
            precioTotal: 32000,
            Compra: [{
                age_group: "Adultos",
                available_quantity: 11,
                brand: "BASTO",
                cantidad: 1,
                category: "Deportivo",
                colors: ['Gris/Negro'],
                condition: "new",
                createdAt: "2022-11-21T00:54:32.614Z",
                externalMaterial: "P U",
                gender: "Hombre",
                id: "1e41a2ac-3665-468e-9667-f430c0ee585d",
                pictures: ['http://http2.mlstatic.com/D_691560-MLA50739161018_072022-O.jpg', 'http://http2.mlstatic.com/D_895662-MLA50739100505_072022-O.jpg', 'http://http2.mlstatic.com/D_798391-MLA50739042964_072022-O.jpg', 'http://http2.mlstatic.com/D_791707-MLA50739115287_072022-O.jpg', 'http://http2.mlstatic.com/D_798817-MLA50739084645_072022-O.jpg', 'http://http2.mlstatic.com/D_788750-MLA44340446576_122020-O.jpg', 'http://http2.mlstatic.com/D_647539-MLA44340446654_122020-O.jpg', 'http://http2.mlstatic.com/D_616216-MLA44340444826_122020-O.jpg'],
                price: 4990,
                sizes: ['44', '36', '38', '39', '40', '41', '42', '43', '35', '37', '34'],
                thumbnail: "http://http2.mlstatic.com/D_691560-MLA50739161018_072022-I.jpg",
                title: "Zapatilla Hombre Urbana Cómoda Liviana Económica",
                updatedAt: "2022-11-21T00:54:32.614Z"
            }, {
                age_group: "Adultos",
                available_quantity: 6,
                brand: "van",
                cantidad: 1,
                category: "Urbano",
                colors: ['Negro'],
                condition: "new",
                createdAt: "2022-11-21T00:54:32.614Z",
                externalMaterial: "P U",
                gender: "Hombre",
                id: "40a9c782-3e3d-4e3d-a122-4a8ff01e3843",
                pictures: ['http://http2.mlstatic.com/D_777834-MLA48541930548_122021-O.jpg', 'http://http2.mlstatic.com/D_887966-MLA48541972435_122021-O.jpg', 'http://http2.mlstatic.com/D_980026-MLA48541913577_122021-O.jpg', 'http://http2.mlstatic.com/D_811388-MLA48541978394_122021-O.jpg', 'http://http2.mlstatic.com/D_681976-MLA48541983405_122021-O.jpg', 'http://http2.mlstatic.com/D_622616-MLA48542124126_122021-O.jpg', 'http://http2.mlstatic.com/D_884060-MLA48542103182_122021-O.jpg'],
                price: 7490,
                sizes: ['38', '37', '39', '40', '35', '36'],
                thumbnail: "http://http2.mlstatic.com/D_777834-MLA48541930548_122021-I.jpg",
                title: "Calzado Urbano Van Con Plataforma",
                updatedAt: "2022-11-21T00:54:32.614Z"
            }],
        }
    ]


    return (
        <div>
            <p className="mt-0 font-bold tracking-tight text-[#f15a24] sm:text-4xl ">
                Estado De Tus Ordenes
            </p>
            {console.log(user.isAdmin)}
            <div className="flex flex-col flex-wrap content-center">
                {dataFalse &&
                    dataFalse.map((el) => (
                        <UserOrderCard
                            key={el.id}
                            id={el.id}
                            image={el.image}
                            nombre={el.nombre}
                            email={el.email}
                            fecha={el.fecha_Compra}
                            direccion={el.direccion}
                            estado={el.estado}
                            products={el.Compra}
                            precioTotal={el.precioTotal}

                        />
                    ))}
            </div>
        </div>
    )
}

export default UserOrder;
