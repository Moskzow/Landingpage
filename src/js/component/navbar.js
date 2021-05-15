import React from "react";

export function Navbar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
				<div className="container-fluid">
					<a
						className="navbar-brand"
						href="https://www.rtve.es/alacarta/videos/documentales-culturales/documentales-culturales-historia-pizza-arte-ciencia-pizza/3520771/">
						🍕PizzaDream🍕
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="#">
									🍕Menú
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									🥤Bebidas
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									🏡Para Llevar
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									☎️Contacto
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
