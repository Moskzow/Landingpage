import React from "react";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
import Footer from "./footer";

export function Home() {
	return (
        <Navbar />
		<div className="container-fluid">
			<Jumbotron />
			<div className="row">
				<Card
					title="Pizza Margarita"
					src="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-margarita-1080x671.jpg"
					ingredients="Típica pizza napolitana elaborada con tomate, mozzarella, albahaca fresca, sal y aceite."
				/>
				<Card
					title="Pizza Hawaiana"
					src="https://los40mx00.epimg.net/los40/imagenes/2017/02/24/yaparate/1487951977_108801_1487952114_noticia_normal.jpg"
					ingredients="Deliciosa pizza hawaiana con jamón cocido, piña y champiñones."
				/>
				<Card
					title="Pizza Cinque Formaggi"
					src="https://www.recetin.com/wp-content/uploads/2012/01/pizza_cuatro_quesos.jpg"
					ingredients="Excelente para los amantes de los quesos mozzarella, gorgonzola, roquefort, fontina y parmesano."
				/>
				<Card
					title="Pizza Vegetariana"
					src="https://lavidaalvapor.com/wp-content/uploads/2019/10/pizza-vegetariana.png"
					ingredients="Excelente degustación para los amantes de las verduras, puede inluir hasta cinco ingredientes vegetales de su elección."
				/>
			</div>

			<Footer />
		</div>
	);
}
