import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Inicio from '../pages/Inicio'
import Personajes from '../pages/Personajes';
import About from '../pages/About';
import Detalle from '../pages/Detalle';

class App extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            personajes: [
                {
                    id: 0,
                    nombre: "Boruto",
                    bio: "Boruto Uzumaki (うずまきボルト, Uzumaki Boruto) es el protagonista del manga y anime Boruto: Naruto Next Generations. Es un habitante de Konohagakure miembro del Clan Uzumaki y descendiente directo del Clan Hyūga por parte materna, hijo del Séptimo Hokage, Naruto Uzumaki y Hinata Hyūga, así como el hermano mayor de Himawari Uzumaki. Actualmente es un Genin que forma parte del Equipo Konohamaru junto a Sarada Uchiha y Mitsuki. Aunque inicialmente tenía un resentimiento contra su padre por no pasar tiempo con su familia debido a su puesto como Hokage, Boruto eventualmente se reconcilió con él y lo empezó a respetar, tomando también la meta de volverse como su maestro, Sasuke Uchiha, un soporte para el Hokage y la aldea.",
                    img: "/img/boruto.png",
                    aparicion: "Capítulo #700",
                    casa: "/img/konoha.png"
                },
                {
                    id: 1,
                    nombre: "Itachi",
                    bio: "tachi Uchiha (うちはイタチ, Uchiha Itachi) era el hermano mayor de Sasuke Uchiha. Fue un prodigioso shinobi de Konohagakure infiltrado en la organización ANBU como un doble espía. Después de masacrar al Clan Uchiha, se unió a Akatsuki donde su compañero asignado fue Kisame Hoshigaki, en el anime su primer compañero fue Jūzō Biwa. Llevaba el anillo Escarlata (朱, Shu) en el dedo anular derecho.",
                    img: "/img/itachi.png",
                    aparicion: "Capítulo #139",
                    casa: "/img/akatsuki.png"
                },
                {
                    id: 2,
                    nombre: "Sakura",
                    bio: "Sakura Haruno (春野サクラ, Haruno Sakura) cuyo nombre actual es Sakura Uchiha (うちはサクラ, Uchiha Sakura) es uno de los personajes principales de la serie. Es una kunoichi de nivel Jōnin, miembro del Equipo Kakashi y una gran amiga de Naruto Uzumaki. Después de su entrenamiento con Tsunade, se convierte en una Ninja Médico. Finalmente se convirtió en la esposa de Sasuke Uchiha y en madre de Sarada Uchiha.",
                    img: "/img/sakura.png",
                    aparicion: "Capítulo #1",
                    casa: "/img/konoha.png"
                },
                {
                    id: 3,
                    nombre: "Kakashi",
                    bio: "Kakashi Hatake (はたけカカシ, Hatake Kakashi) es un shinobi de Konohagakure. Fue un Jōnin, ex-ANBU y el líder del Equipo 7. Fue conocido mundialmente por su uso del Sharingan, lo que le valió el apodo de Kakashi el Ninja que Copia (コピー忍者のカカシ, Kopi Ninja no Kakashi) y Kakashi del Sharingan (写輪眼のカカシ, Sharingan no Kakashi). En su adolescencia fue alumno de Minato Namikaze y compañero de equipo de Obito Uchiha y Rin Nohara. También fue el capitán de la Tercera División de la Gran Alianza Shinobi. Después de los acontecimientos de la Cuarta Guerra Mundial Shinobi, Kakashi se convirtió en el Sexto Hokage (六代目火影, Rokudaime Hokage; que significa Sexta Sombra del Fuego) de Konoha.",
                    img: "/img/kakashi.png",
                    aparicion: "Capítulo #3",
                    casa: "/img/konoha.png"
                },
                {
                    id: 4,
                    nombre: "Naruto",
                    bio: "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) es el protagonista de la serie del manga y anime Naruto y Naruto Shippūden. Asimismo es partícipe del manga y anime Boruto: Naruto Next Generations, secuela canónica de la obra original de Masashi Kishimoto.",
                    img: "/img/naruto-pelicula.png",
                    aparicion: "Capítulo #1",
                    casa: "/img/konoha.png"
                },
                {
                    id: 5,
                    nombre: "Pain",
                    bio: "Nagato (長門, Nagato), mejor conocido como Pain (ペイン, Pein), era uno de los más poderosos shinobi, y el líder reconocido de Akatsuki y de Amegakure. Todos los miembros de Akatsuki se referían a él como “Líder”, excepto Konan quien lo llamaba por su nombre, Pain",
                    img: "/img/pain.png",
                    aparicion: "Capítulo #372",
                    casa: "/img/akatsuki.png"
                },
                {
                    id: 6,
                    nombre: "Sasuke",
                    bio: "Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) es el deuteragonista de la serie y uno de los supervivientes del Clan Uchiha. Es hijo de Fugaku Uchiha y Mikoto Uchiha, hermano de Itachi Uchiha, así como la Reencarnación actual de Indra Ōtsutsuki.",
                    img: "/img/sasuke.png",
                    aparicion: "Capítulo #1",
                    casa: "/img/konoha.png"
                }
            ]
        }
    }
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/personajes">
								<Personajes personajes={this.state.personajes} />
							</Route>
							<Route exact path="/personajes/:id">
								<Detalle personajes={this.state.personajes} />
							</Route>
							<Route path="/contacto">
								<About />
							</Route>
							<Route path="/index">
								<Inicio />
							</Route>
							<Route path="/">
								<Inicio />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;