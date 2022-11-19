import React from 'react'
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom'

import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers';
import useForm from '../hooks/useForm'


export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	
	const { q = '' } = queryString.parse(location.search);
	const heroes = getHeroesByName(q);
	
	const showSearch = q.length === 0;
	const showError = q.length > 0 && heroes.length == 0;

	const { searchText, onInputChange } = useForm({
		searchText: q
	})

	const onSubmit = (e) => {
		e.preventDefault();
		navigate(`?q=${searchText.trim().toLowerCase()}`)
	}
	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className="row">
			<div className="col-5">
				<h4>Searching</h4>
				<hr />
				<form >
					<input value={searchText} onChange={onInputChange} type="text" name="searchText" className='form-control' placeholder='Search Hero' />
					<button className='btn btn-outline-primary mt-1' onClick={onSubmit}>Search</button>
				</form>
			</div>
			<div className="col-7">
					<h4>Results</h4> 
					<hr />
					{showSearch && <div className="alert alert-primary">Search a hero.</div>}
					{showError && <div className="alert alert-danger">No hero with <strong>{q}</strong></div>}
					{heroes.map(hero => (<HeroCard key={hero.id} {...hero}></HeroCard>))}
			</div>
		

			</div>
		</>
	)
}
