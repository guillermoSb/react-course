import React from 'react'
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {
	const { id } = useParams();
	const hero = useMemo(() => getHeroById(id), [id])
	const navigate = useNavigate();
	
	const onReturn = () => {
		navigate(-1)
	}



	if (!hero) {
		return <Navigate to={"marvel"} />
	}

	return (
		<div className="row mt-5">
			<div className="col-4 animate__animated animate__fadeInLeft">
				<img src={`/assets/heroes/${id}.jpg`} alt={hero.alter_ego} className="img-thumbnail" />
			</div>
			<div className="col-8">
					<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>Alter Ego: {hero.alter_ego}</b>
					</li>
					<li className='list-group-item'>
						<b>Publisher: {hero.publisher}</b>
					</li>
					<li className='list-group-item'>
						<b>First Appearance: {hero.first_appearance}</b>
					</li>
				</ul>
				<h5 className='mt-3'>Characters</h5>
				<p>{hero.characters}</p>
				<button className="btn btn-outline-primary" onClick={onReturn}>Regresar</button>
			</div>
		</div>
	)
}
