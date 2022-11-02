import { useState } from 'react';

const TeslaConfig = () => {
	const [model, setModel] = useState(1);
	const [color, setColor] = useState(1);

	const prices = { model: { 1: 90700, 2: 106700 }, color: { 1: 0, 2: 1000 } };

	const grandeAutonomie = 90700;
	const performance = 106700;
	const multicouches = 0;
	const noirUni = 1000;

	return (
		<>
			<header>
				<h1>Tesla Config</h1>
			</header>
			<div>
				<div className="model-selection container">
					<h2>Slectionner un véhicule</h2>
					<div className="select-mode">
						<button
							style={model === 1 ? { borderColor: '#00f' } : { borderColor: '' }}
							onClick={() => {
								setModel(1);
							}}
						>
							Grande Autonomie - {grandeAutonomie.toLocaleString()} €
						</button>
						<button
							style={model === 2 ? { borderColor: '#00f' } : { borderColor: '' }}
							onClick={() => {
								setModel(2);
							}}
						>
							Performance - {performance.toLocaleString()} €
						</button>
					</div>
				</div>
				<div className="color-selection container">
					<h2>Slectionner la couleur</h2>
					<div className="select-mode">
						<button
							style={color === 1 ? { borderColor: '#00f' } : { borderColor: '' }}
							onClick={() => {
								setColor(1);
							}}
						>
							Blanc Nacré Multicouches - {multicouches.toLocaleString()} €
						</button>
						<button
							style={color === 2 ? { borderColor: '#00f' } : { borderColor: '' }}
							onClick={() => {
								setColor(2);
							}}
						>
							Noir Uni - {noirUni.toLocaleString()} €
						</button>
					</div>
				</div>
			</div>
			<div className="final-price">
				<div>{(prices.model[model] + prices.color[color]).toLocaleString()} €</div>
				<button
					onClick={() => {
						alert('Thanks for clicking !');
					}}
				>
					Buy!
				</button>
			</div>
		</>
	);
};

export default TeslaConfig;
